/**
 * File Name: ElaborateComplexCode.js
 * 
 * Description: This code demonstrates a complex example of a task scheduler using a priority queue.
 * It allows adding tasks with priorities and executing them in a priority-based order.
 */

// Priority Queue implementation
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.queue.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (element.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(element);
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
    return "Queue is empty!";
  }

  front() {
    if (!this.isEmpty()) {
      return this.queue[0];
    }
    return "Queue is empty!";
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

// Task class
class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }

  execute() {
    console.log(`Executing task: ${this.name}`);
  }
}

// Task Scheduler class
class TaskScheduler {
  constructor() {
    this.taskQueue = new PriorityQueue();
  }

  addTask(task) {
    this.taskQueue.enqueue(task);
  }

  executeTasks() {
    console.log("Executing tasks:");
    while (!this.taskQueue.isEmpty()) {
      const task = this.taskQueue.dequeue();
      task.execute();
    }
  }
}

// Usage example
const taskScheduler = new TaskScheduler();

const task1 = new Task("Task 1", 2);
const task2 = new Task("Task 2", 1);
const task3 = new Task("Task 3", 3);
const task4 = new Task("Task 4", 1);
const task5 = new Task("Task 5", 2);

taskScheduler.addTask(task1);
taskScheduler.addTask(task2);
taskScheduler.addTask(task3);
taskScheduler.addTask(task4);
taskScheduler.addTask(task5);

taskScheduler.executeTasks();