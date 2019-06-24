import {
    SubjectsModel,
    LMSModel,
    // TeachersModel,
    // PupilsModel,
    // GroupsModel,
    // GradebooksModel
} from './school/index';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

console.log(history);

let lms = new LMSModel();
lms.add(history);