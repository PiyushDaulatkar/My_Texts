# Single responsibility
* A class (or object or module… you get the point) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.
<br><br>

# Loosely coupled objects
* Our individual objects can stand alone as much as possible.
 
* Tightly coupled objects are objects that rely so heavily on each other that removing or changing one will mean that you have to completely change another one - a real bummer.
<br><br>

# SOLID principles
* The SOLID principles are a set of design principles that help developers create software that is easy to maintain, extend, and understand.
* These principles are commonly used in object-oriented programming (OOP) to promote clean code and reduce the risk of bugs and technical debt.
### S - Single Responsibility Principle (SRP)
### O - Open/Closed Principle (OCP)
### L - Liskov Substitution Principle (LSP)
### I - Interface Segregation Principle (ISP)
### D - Dependency Inversion Principle (DIP)
<br><br>

### S - Single Responsibility Principle (SRP)
*  Each class should focus on a single task or functionality to avoid becoming too complex or tightly coupled.
<br><br>

### O - Open/Closed Principle (OCP)
* Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

* ***Explanation***: You should be able to add new functionality without altering existing code, which helps maintain stability.
* Example: ***Use interfaces or abstract classes to define behavior, and create new classes to implement additional functionality***.s
<br><br>

### L - Liskov Substitution Principle (LSP)
*  Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
* ***Explanation***: Subclasses must honor the behavior of their parent class and should not break functionality when used in place of the parent.
<br><br>

### I - Interface Segregation Principle (ISP)
* A class should not be forced to implement interfaces it does not use.
* ***Explanation***: Split large interfaces into smaller, specific ones so that classes only implement what they need.
* ***Example***: Instead of having a single Animal interface with methods like fly(), swim(), and walk(), split it into smaller interfaces such as Flyable, Swimmable, and Walkable.
<br><br>

### D - Dependency Inversion Principle (DIP)
* High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details, but details should depend on abstractions.
* ***Explanation***: Rely on interfaces or abstract classes instead of concrete implementations to make the system more flexible and testable.
* ***Example***: A NotificationService class should depend on an INotificationSender interface, and concrete implementations like EmailSender or SMSNotifier can implement that interface.
<br><br>

#  Favoring composition(has-a) over inheritance(is-a).