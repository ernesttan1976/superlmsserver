const Course = require("../models/Course");
const coursesSeed = require("../database-seed/courses-seed");

const index = async (req, res) => {
    try {
      //http://127.0.0.1/courses?_end=10&_start=0
      const {_start, _end}=req.query;

      if (_start || _end){
        const page = _start+1; // the page number you want to fetch
        const limit = _end-_start; // the number of documents per page
        const skip = (page-1) * limit;
        Course.find({}).skip(skip).limit(limit)
          .populate('instructor_id')
          .populate('students_id')
          .populate('lessons_id')
          .populate('discussions_id')
          .then(foundCourses=>{
            res.status(200).json(foundCourses);
           })
           .catch(error=>{
            res.status(400).json({ error: error.message });
           })
      } else {
        const foundCourses = await Course.find({})          
                          .populate('instructor_id')
                          .populate('students_id')
                          .populate('lessons_id')
                          .populate('discussions_id')
        res.status(200).json(foundCourses);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const create = async (req, res) => {
  try {
    const createdCourse = await Course.create(req.body);
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const seed = async (req, res) => {
  try {
    await Course.deleteMany({});

console.log(coursesSeed);

    const courses = await Course.create(coursesSeed);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const course= await Course.findById(req.params.id)
    //.populate("artworks");
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  seed,
  index,
  delete: deleteCourse,
  show,
  update,
};