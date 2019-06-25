import {
  GradebooksModel,
  GroupsModel,
  LMSModel,
  PupilsModel,
  SubjectsModel,
  TeachersModel,
} from "./school";

const history = new SubjectsModel({
  lessons: 24,
  title: "History",
});

const maths = new SubjectsModel({
  lessons: 20,
  title: "Maths",
});

const teacherData = {
  dateOfBirth: "17.06.1991",
  description: "string",
  emails: [
    {
      email: "john.doe@gmail.com",
      primary: false,
    },
  ],
  image: "string",
  name: {
    first: "John",
    last: "Doe",
  },
  phones: [
    {
      phone: "string",
      primary: true,
    },
  ],
  sex: "male",
  subjects: [
    {
      subject: "History",
    },
  ],
};

const teacherUpdatedProfile = {
  name: {
    first: "Pitter",
  },
};

const pupilData = {
  dateOfBirth: "11.08.1999",
  description: "string",
  image: "string",
  name: {
    first: "Jane",
    last: "Doe",
  },
  phones: [
    {
      phone: "string",
      primary: true,
    },
  ],
  sex: "female",
};

const pupilUpdatedProfile = {
  name: {
    first: "Kate",
  },
};

(async () => {

  // console.log(history.id);
  // console.log(maths.id);

  const lms = new LMSModel();
  console.log(await lms.add(history));
  console.log(await lms.add(maths));
  // console.log(await lms.verify(history));
  // console.log(await lms.read(maths.id));
  // console.log(await lms.readAll());
  // console.log(await lms.remove(maths));
  // console.log(await lms.readAll());

  const teachers = new TeachersModel();
  let teacherId = await teachers.add(teacherData);
  // console.log(await teachers.read(teacherId));
  teacherId = await teachers.update(teacherId, teacherUpdatedProfile);
  console.log(teacherId);
  // console.log(await teachers.remove(teacherId));

  // const pupils = new PupilsModel();
  // const pupil = await pupils.add(pupilData);

  // const pupil2 = await pupils.add({
  //   name: {
  //     first: "TEST",
  //     last: "TEST"
  //   },
  //   image: "string",
  //   dateOfBirth: "11.08.1999",
  //   phones: [
  //     {
  //       phone: "string",
  //       primary: true
  //     }
  //   ],
  //   sex: "female",
  //   description: "string"
  // });

  // console.log(await pupils.read(pupil.id));
  // console.log(await pupils.update(pupil.id, pupilUpdatedProfile));
  // pupils.remove(pupil.id);

  // const room = 236;
  // const groups = new GroupsModel();
  // const groupId = await groups.add(room);
  // await groups.addPupil(groupId, pupil);
  // await groups.addPupil(groupId, pupil2);
  // console.log(await groups.removePupil(groupId, pupil2.id));
  // console.log(await groups.update(groupId, groupUpdated));
  // console.log(await groups.read(groupId));
  // console.log(await groups.readAll());

  // const pupilId = pupil.id;

  // const record = {
  //   pupilId: pupilId,
  //   teacherId: teacherId,
  //   subjectId: history.id,
  //   lesson: 1,
  //   mark: 9
  // };

  // const gradebooks = new GradebooksModel(groups, teachers, lms);
  // const level = 1;
  // const gradebookId = await gradebooks.add(level, groupId);
  // console.log(gradebookId)
  // console.log(await gradebooks.clear());
  // await gradebooks.addRecord(gradebookId, record);
  // const oliver = await gradebooks.read(gradebookId, pupilId);
  // console.log(oliver);
  // const students = await gradebooks.readAll(gradebookId);
  // console.log(students);
})();
