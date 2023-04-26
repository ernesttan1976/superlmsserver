const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');

const discussionSchema = new Schema(
  {
    text: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const lessonSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      validate: {
        validator: function (value) {
          // Regular expression to match URLs with common image file extensions
          var regex = /.*\.(jpg|jpeg|gif|png|bmp).*/i;
          return regex.test(value);
        },
        message: "Please provide a valid image URL",
      },
    },
    video: {
      type: String,
    },
    duration: {
      type: Number,
      integer: true,
      min: 1,
    }
  },
  { timestamps: true }
);

const coursesSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
    },

    image: {
      type: String,
      validate: {
        validator: function (value) {
          // Regular expression to match URLs with common image file extensions
          var regex = /.*\.(jpg|jpeg|gif|png|bmp).*/i;
          return regex.test(value);
        },
        message: "Please provide a valid image URL",
      },
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after start date",
      },
    },

    price: {
      type: Number,
      get: (v) => parseFloat(v).toFixed(2),
      set: (v) => parseFloat(v).toFixed(2)
    },

    instructor_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    students_id: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    lessons_id: [lessonSchema],
    discussions_id: [discussionSchema],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Course", coursesSchema);
