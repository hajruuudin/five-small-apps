const mongoose = require('mongoose')
const {fitness_tasks, university_tasks, personal_tasks} = require('./seedData')
const Task = require('../models/task')
const List = require('../models/list')

const seedDbConnection = mongoose.connect('mongodb://localhost:27017/task-manager')
 .then(() => {
    console.log("Db Connection made to task-manager")
 })
 .catch((err) => {
    console.log(err)
    console.log("Error while connecting to mongo-db")
 })

const seedDb = async () => {
    // Delete all of the lists from the existing database data
    await List.deleteMany({});

    // Generate three task groups:
    let fitness = [];
    for(let i = 0; i < 4; i++){
        const random_index = Math.floor(Math.random() * 11)
        fitness.push(fitness_tasks[random_index]);
    }

    let university = [];
    for(let i = 0; i < 4; i++){
        const random_index = Math.floor(Math.random() * 11)
        university.push(university_tasks[random_index]);
    }

    let personal = [];
    for(let i = 0; i < 4; i++){
        const random_index = Math.floor(Math.random() * 11)
        personal.push(personal_tasks[random_index]);
    }

    // Insert all the tasks into the database (reagardless of their list)
    const addedFitness = await Task.insertMany(fitness)
    const addedUniversity = await Task.insertMany(university)
    const addedPersonal = await Task.insertMany(personal)

    // Get the task IDs for inserting into the list:
    const fitnessIDs = addedFitness.map(task => task._id)
    const universityIDs = addedUniversity.map(task => task._id)
    const personalIDs = addedPersonal.map(task => task._id)

    // Create three new lists and add the tasks to them:
    const fitnessList = new List({
        listName: "Fitness",
        tasks: fitnessIDs
    })

    const univeristyList = new List({
        listName: "University",
        tasks: universityIDs
    })
    
    const personalList = new List({
        listName: "Personal",
        tasks: personalIDs
    })

    // Save individual lists to the database
    await fitnessList.save()
    await univeristyList.save()
    await personalList.save()
}

seedDb()
    .then(() => {
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log(err)
    })