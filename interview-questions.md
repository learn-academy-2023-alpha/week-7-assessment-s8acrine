# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
If you have forgotten to add the foreign_key, there are few steps to quickly solve this problem:
First, make sure you have the other side of your association set up, with the students.rb file having the belongs_to :Cohort
Secondly, generate a migration from your terminal with rails db:migrate add_foreign_key_column. This will generate a migration file that you can use the add_column line to generate your foreign key column. You will want to add this column to your :students table, and should name it :cohort_id to properly set up your rails configuration. 
After this, you need to run a rails db:migrate command to complete your migration, then you can add in the appropriate keys and you are good to go!

Researched answer:
When using the has_many/belongs_to assosciation, the model that belongs_to needs to have a column to contain the foreign key. The foreign key needs to be in the format of model_id with model being the singular of the model. 

Each class needs to have the association added into their class definitions (inside app/models) added into them. The correct format for the class that has_many is has_many :models where models is the model that it has many of (reminder that this needs to be the plural of the word). The class that belongs_to needs to have the line belongs_to :model where model is the singular of the model it belongs_to

If creating an assosciation after the initial model generation, a migration can be generated, then the add_column method can be used to add this column


2. Which RESTful routes must always be passed params? Why?

Your answer:
Show, edit, update, and destroy all need to have params passed to them. Specifically they need to have the :id parameter in order to access the proper item. Technically speaking, it is possible to have your database set up to not need parameters in order to create a new instance. 

Researched answer:
The Show, edit, update, and destroy RESTful routes need to have params passed to them as the route points to a specfic instance. Without passing the parameter, there is no way to confirm which instance is having the route called on it. 

3. Name three rails generator commands. What is created by each?

Your answer:
generate model, which creates a table
generate migration, which creates a migration file you can use to update your database
generate resource, which creates a model and RESTful routes for basic CRUD actions

Researched answer:
Rails generators are used for streamlining workflow by generating multiple files structures for commonly used routing, views, and controllers. While generators are incredibly helpful, it is also important to understand what they are generating, as well as knowing when to use and not use them. 
The generate controller command is a great example, it generates a controller with every method that you add to the command. The issue is that it ALSO generates a view for each method. This is often unneeded, so if you are going to use this generator, be sure to only use it to generate methods that require a view, or be sure to go in and remove the unneeded views. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
students#index
This would produce a list of all students

action: "POST" location: /students
students#create
This would create a new instance of student

action: "GET" location: /students/new
students#new
This would get the page which holds the form for creating a new student

action: "GET" location: /students/2
students#show
This would show the instance of student with a primary id of 2

action: "GET" location: /students/2/edit
students#edit
This would show the edit page for the student with a primary id of 2 and prefill the form with the parameters

action: "PATCH" location: /students/2
students#update
This would update the instance of student with primary key 2 with the values entered into the params (likely through the form)

action: "DELETE" location: /students/2
students#destroy
This would remove the instance of student with a primary key of 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a developer, I have a Ruby on Rail application created with a database, needed dependencies, and a testing environment installed

2. As a developer, I have a database model with tasks, including a title and description for each task

3. As a user, I can display a list of my tasks

3. As a user, I can add a new task to my list

4. As a user, I can access the detailed information of a single task

5. As a user, I can mark a task as complete

6. As a user, I can assign a due date to a task

7. As a user, I can get a list of all tasks that are due before a specific date

8. As a user, I can get a list of all tasks that are past due

9. As a user, I can create a category that contains multiple tasks

10. As a user, I can edit or delete a task