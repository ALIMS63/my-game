import mongoose from 'mongoose';
import './db.js';
import Card from '../model/card.js';

const entries = [
  {
    theme: "Столицы",
    questions: [
      {
        question: "Стола Канады?",
        price: 100,
        variants: ["Торонто", "Мельбурн", "Оттава"],
        correct: "Оттава",
      },
      {
        question: "Столица Великобритании?",
        price: 200,
        variants: ["Прага", "Воронеж", "Лондон"],
        correct: "Лондон",
      },
      {
        question: "Столица США?",
        price: 300,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 400,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 500,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
    ],
  },
  {
    theme: "Столицы",
    questions: [
      {
        question: "Столица Мексики?",
        price: 100,
        variants: ["Пекин", "Мехико", "Краснодар"],
        correct: "Мехико",
      },
      {
        question: "Столица Великобритании?",
        price: 200,
        variants: ["Лондон", "Берлин", "Стамбул"],
        correct: "Лондон",
      },
      {
        question: "Столица США?",
        price: 300,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 400,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 500,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
    ],
  },
];

(async () => {
  await mongoose.connection.dropDatabase();
  await Card.insertMany(entries);
  await mongoose.connection.close(); // or await mongoose.disconnect();
})()
