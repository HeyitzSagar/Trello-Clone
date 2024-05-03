import {v4 as uuidv4}  from "uuid"
const initialBoard = [
    {
      name: "Shortlisted",
      // boardId: uuidv4()
      boardId: "Shortlisted"
    },
    {
      name: "Interviewed",
      // boardId: uuidv4(),
      boardId: "Interviewed",
    },
  ];
  
  const initialCards = [
    {
      title: "Sagar Gupta",
      description: "Frontend Engineer",
      labels: [{id: uuidv4(), labelText: "High Priority", labelColor: "bg-gray-500"}],
      boardId: "Shortlisted",
      cardId: uuidv4()
    },
    {
      title: "Jhon Doe",
      boardId: "Shortlisted",
      cardId: uuidv4(),
      labels: []
    },
    {
      title: "Sagar Gupta",
      boardId: "Interviewed",
      cardId: uuidv4(),
      description: "Frontend Engineer",
      labels: [{id: uuidv4(), labelText: "Mid Priority", labelColor: "bg-gray-500"}],
    },
    {
      title: "Jhon Doe",
      boardId: "Interviewed",
      cardId: uuidv4(),
      labels: [{id: uuidv4(), labelText: "Mid Priority", labelColor: "bg-gray-500"}],
    },
    {
      title: "Jhon Doe",
      boardId: "Interviewed",
      cardId: uuidv4(),
      labels: [{id: uuidv4(), labelText: "Mid Priority", labelColor: "bg-gray-500"}],
    },
  ];
export {initialBoard, initialCards}  