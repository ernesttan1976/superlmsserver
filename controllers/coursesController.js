const Course = require("../models/Course");
const coursesSeed = require("../database-seed/courses-seed");
const User = require("../models/User");

const index = async (req, res) => {
    try {
      //http://127.0.0.1/courses?_end=10&_start=0
      const {_start, _end} = req.query;
      // if (id) {
      //   return res.status(400).json({ error: "Cannot call id as query" });
      // }

      function convert(_start, _end){
        const start = parseInt(_start,10);
        const end = parseInt(_end,10);
  
        const page = start+1; // the page number you want to fetch
        const limit = end-start; // the number of documents per page
        const skip = start;
  
        return {skip, limit}
      }

      if (_start || _end){
        const {skip, limit}=convert(_start,_end);
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

    const courses = await Course.create(coursesSeed);

    //for the courses assign assign instructors
    const courseData = await Course.find({});
    const instructorsData = await User.find({userRole: 'Instructor'});
    const studentsData = await User.find({userRole: 'Student'});
    let instructorIndex =  0;
    let studentsIndex = 0;
    for (let i=0; i<courseData.length; i++){
      //add instructor to course
      await Course.updateOne({_id: courseData[i]._id},{$set:{instructor_id: instructorsData[instructorIndex]._id}});
      await User.updateOne({_id: instructorsData[instructorIndex]._id},{$push:{courses_id: courseData[i]._id}});
      instructorIndex++;
      if (instructorIndex===instructorsData.length) instructorIndex=0; 

      //add students to course
      let studentIdArray = [];
      for (let j=studentsIndex;j<25;j++){
        studentIdArray.push(studentsData[j]._id);  
      }
      await Course.updateOne({_id: courseData[i]._id},{$push:{students_id: {$each: studentIdArray}}});
      //add course to each student
      for (let j=studentsIndex;j<25;j++){
        await User.updateOne({_id: studentsData[j]._id},{$push:{courses_id: courseData[i]._id }})
      } 

      studentsIndex+=10;    
    }

    const finalCourses = await Course.find({});
    const finalUsers = await User.find({});
    console.log({finalCourses,finalUsers});
    res.status(200).json({finalCourses,finalUsers});
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