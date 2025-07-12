import React, { useState } from "react";
import "../Styles/Faq.css";

const FAQData = [
  {
    question: "How do I create a new task?",
    answer: [
      "To create a new task, click on the 'Add Task' button located in the task management interface.",
      "Fill in the required details such as task name, due date, and any additional information.",
      "Click 'Save' to create the task.",
    ],
  },
  {
    question: "Can I assign a task to someone else?",
    answer: [
      "Yes, you can assign a task to someone else.",
      "While creating or editing a task, you will find an 'Assignee' field.",
      "Start typing the name or email of the person you want to assign the task to, and select their name from the suggestions.",
      "The assigned person will receive a notification about the task.",
    ],
  },
  {
    question: "How can I track the progress of a task?",
    answer: [
      "To track the progress of a task, open the task details page.",
      "You will find a status section that indicates the current status of the task, such as 'Not Started', 'In Progress', or 'Completed'.",
      "You can update the status by clicking on the corresponding option.",
      "Additionally, you can add comments and attachments to provide more details and updates on the task's progress.",
    ],
  },
  {
    question: "Can I set reminders for tasks?",
    answer: [
      "Yes, you can set reminders for tasks to ensure you stay on top of your deadlines.",
      "When creating or editing a task, you will find an option to set a reminder or due date notification.",
      "Choose the desired time or date for the reminder, and you will receive a notification or email at the specified time to remind you about the task.",
    ],
  },
  {
    question: "Is there a mobile app for task management?",
    answer: [
      "Yes, we offer a mobile app for both iOS and Android platforms.",
      "You can download it from the App Store or Google Play to manage your tasks on the go.",
      "The app includes most of the desktop features, including notifications and offline access.",
    ],
  },
  {
    question: "Can I collaborate with my team on tasks?",
    answer: [
      "Absolutely. Our platform supports team collaboration.",
      "You can invite team members, assign tasks, share files, and leave comments to streamline your workflow.",
    ],
  },
  {
    question: "How do I delete a task?",
    answer: [
      "To delete a task, open the task details and click the 'Delete' button.",
      "Please note that deleted tasks cannot be recovered unless your admin has enabled the recycle bin feature.",
    ],
  },
  {
    question: "Is my data secure on this platform?",
    answer: [
      "Yes, we use industry-standard encryption and security protocols to protect your data.",
      "All data is stored in secure, GDPR-compliant servers, and we regularly perform security audits.",
    ],
  },
];


function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`question-container ${
              expandedIndex === index ? "expanded" : ""
            }`}
          >
            <div className="question" onClick={() => toggleExpand(index)}>
              {item.question}
              <span className="question-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              className="answer-container"
              style={{
                maxHeight:
                  expandedIndex === index ? `${item.answer.length * 50}px` : "0",
              }}
            >
              {item.answer.map((a, i) => (
                <div className="answer" key={i}>
                  <span className="answer-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
