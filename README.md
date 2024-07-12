# University-Residence-Management-System
### Requirements Gathering Dialogue

* Developer: Hi there, thanks for meeting with me today to discuss the university residence
management system. Can you tell me a little bit about the current challenges you're facing?
* University Representative: Absolutely! Right now, managing our residences is quite a manual
process. We have spreadsheets to track student assignments, room availability, and rent
payments. It's time-consuming and prone to errors.
* Developer: I understand. An automated system could definitely streamline things for you. Let's
break down the functionalities you need. First, what types of residences do you have?
* University Representative: We have dorm rooms for single students and apartments with
varying numbers of bedrooms for students who share.
* Developer: Great. So, we'll need classes to represent these residences. Each residence should
have basic details like a name and address. Is there anything else we should track for each
residence type?
 * University Representative: For dorm rooms, knowing the size in square footage would be
helpful for rent calculations. For apartments, the number of bedrooms is important. We also
need to track whether a residence is currently occupied.
* Developer: Perfect, that makes sense. Now, let's talk about the students living in these
residences. What information do you need to keep track of for them?
* University Representative: Each student's name, student ID, gender and of course, which
residence they're assigned to.
* Developer: Understood. So, we'll have to cater for those details, and each student will have a
reference to their assigned residence.
* Developer: Moving on, how do you handle rent payments currently?
* University Representative: We have a fixed monthly rate for dorm rooms based on size and a
tiered rate for apartments based on the number of bedrooms. I almost forgot to mention that
sometimes tenants might submit maintenance requests..
* Developer: Okay, it would be good to automate rent calculations.
* Developer: Sometimes, you mentioned that students might need to submit maintenance
requests. What kind of information do you need to capture for those?
* University Representative: We need to track the request description, its current status
(submitted, in progress, completed), and who submitted it (the student). It would also be helpful
to know which employee, if any, is assigned to the request.
* Developer: Excellent. We can ensure that Maintenance Requests details are also captured in a
way that The student who submits the request and the assigned employee can be referenced.
* University Representative: Sounds good! This system would be a huge improvement for us. Is
there anything else we should consider?
* Developer: Actually, yes. Since both dorm rooms and apartments share some functionalities,
we can try to group common functionalities and details then ensure that both dorm rooms and
apartments access the shared details. This promotes code reuse and makes the system more
maintainable.
* University Representative: That makes a lot of sense. This approach sounds very efficient.
* Developer: Absolutely! Based on our discussion, these are the draft classes we'll be building for
the initial system:

    - DormRoom
    - Apartment
    - Student
    - MaintenanceRequest
  
    But after a further review of our conversation we might do some minor modifications.
* University Representative: This looks exactly like what we need. I'm excited to see this
system come to life!
