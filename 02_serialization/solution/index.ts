const body = `
  {
    "tasks": [
        {
            "id": 1,
            "title": "Buy groceries",
            "completed": false
        },
        {
            "id": 2,
            "title": "Finish project report",
            "completed": true
        },
        {
            "id": 3,
            "title": "Call the dentist",
            "completed": false
        },
        {
            "id": 4,
            "title": "Schedule team meeting",
            "completed": false
        },
        {
            "id": 5,
            "title": "Read 20 pages of a book",
            "completed": false
        }
    ]
}
`;

const data = JSON.parse(body);
for (const task of data.tasks) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = task.completed;
    const label = document.createElement("label");
    label.append(task.title, input);
    document.body.append(label);
}
