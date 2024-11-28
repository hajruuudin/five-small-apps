// Import the uuid library if you're in a Node.js environment or ensure it's available in your project
// If in the browser, you can use "crypto.randomUUID()" instead of "uuid.v4()" for generating IDs

// Example function to generate UUID in the browser (alternative to uuid library)
function generateUUID() {
    return crypto.randomUUID();
  }
  
  // Create sample data
  const taskManagerData = [
    {
      id: generateUUID(),
      listName: "Inbox",
      tasks: [
        {
          id: generateUUID(),
          title: "Reply to emails",
          description: "Respond to all pending emails.",
          priority: "High",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Grocery shopping",
          description: "Buy milk, bread, and eggs.",
          priority: "Medium",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Plan weekend trip",
          description: "Choose a destination and make reservations.",
          priority: "Low",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Pay bills",
          description: "Pay electricity and water bills.",
          priority: "High",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Call plumber",
          description: "Schedule a visit for pipe repair.",
          priority: "Medium",
          status: false,
        },
      ],
    },
    {
      id: generateUUID(),
      listName: "University",
      tasks: [
        {
          id: generateUUID(),
          title: "Submit assignment",
          description: "Upload the completed project report.",
          priority: "High",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Attend seminar",
          description: "Join the online webinar at 3 PM.",
          priority: "Medium",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Study for exams",
          description: "Review lecture notes and past papers.",
          priority: "High",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Group meeting",
          description: "Discuss the progress of the group project.",
          priority: "Medium",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Library visit",
          description: "Borrow reference books for the thesis.",
          priority: "Low",
          status: false,
        },
      ],
    },
    {
      id: generateUUID(),
      listName: "Personal",
      tasks: [
        {
          id: generateUUID(),
          title: "Workout",
          description: "Complete a 30-minute cardio session.",
          priority: "High",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Read a book",
          description: "Finish reading the current chapter.",
          priority: "Low",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Meditation",
          description: "Practice mindfulness for 10 minutes.",
          priority: "Medium",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Cook dinner",
          description: "Try a new recipe for dinner.",
          priority: "Medium",
          status: false,
        },
        {
          id: generateUUID(),
          title: "Clean room",
          description: "Organize the closet and tidy the desk.",
          priority: "Low",
          status: false,
        },
      ],
    },
  ];
  
  // Save to localStorage
  localStorage.setItem("taskManager", JSON.stringify(taskManagerData));
  
  // Verify if data is saved correctly
  console.log(JSON.parse(localStorage.getItem("taskManager")));
  