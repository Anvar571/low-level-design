# Designing a Pub-Sub System in Java

## Requirements
1. The Pub-Sub system should allow publishers to publish messages to specific topics.
2. Subscribers should be able to subscribe to topics of interest and receive messages published to those topics.
3. The system should support multiple publishers and subscribers.
4. Messages should be delivered to all subscribers of a topic in real-time.
5. The system should handle concurrent access and ensure thread safety.
6. The Pub-Sub system should be scalable and efficient in terms of message delivery.

## Classes, Interfaces and Enumerations
1. The **Message** class represents a message that can be published and received by subscribers. It contains the message content.
2. The **Topic** class represents a topic to which messages can be published. It maintains a set of subscribers and provides methods to add and remove subscribers, as well as publish messages to all subscribers.
3. The **Subscriber** interface defines the contract for subscribers. It declares the onMessage method that is invoked when a subscriber receives a message.
4. The **ConcreteSubscriber** class is a concrete implementation of the Subscriber interface. It receives messages and prints them to the console.
5. The **Publisher** class represents a publisher that publishes messages to a specific topic.
6. The **PubSubSystem** class is the main class that manages topics, subscribers, and message publishing. It uses a ConcurrentHashMap to store topics and an ExecutorService to handle concurrent message publishing.
7. The **PubSubDemo** class demonstrates the usage of the Pub-Sub system by creating topics, subscribers, and publishers, and publishing messages.


Talablar
Pub-Sub tizimi nashriyotchilarga ma'lum mavzular bo'yicha xabarlarni nashr qilish imkonini berishi kerak.
Obunachilar qiziqarli mavzularga obuna bo'lishlari va ushbu mavzularga e'lon qilingan xabarlarni olishlari kerak.
Tizim bir nechta nashriyot va obunachilarni qo'llab-quvvatlashi kerak.
Xabarlar real vaqt rejimida mavzuning barcha obunachilariga yetkazilishi kerak.
Tizim bir vaqtning o'zida kirishni boshqarishi va ip xavfsizligini ta'minlashi kerak.
Pub-Sub tizimi xabarlarni yetkazib berish nuqtai nazaridan kengaytiriladigan va samarali bo'lishi kerak.


Sinflar, interfeyslar va ro'yxatlar
Xabar sinfi obunachilar tomonidan e'lon qilinishi va qabul qilinishi mumkin bo'lgan xabarni ifodalaydi. Unda xabar mazmuni mavjud.
Mavzu klassi xabarlar chop etilishi mumkin bo'lgan mavzuni ifodalaydi. U obunachilar to'plamini qo'llab-quvvatlaydi va obunachilarni qo'shish va olib tashlash usullarini taqdim etadi, shuningdek, barcha obunachilarga xabarlarni nashr etadi.
Abonent interfeysi abonentlar uchun shartnomani belgilaydi. U abonent xabar olganida chaqiriladigan onMessage usulini e'lon qiladi.
ConcreteSubscriber klassi obunachi interfeysining aniq amalga oshirilishidir. U xabarlarni qabul qiladi va ularni konsolga chop etadi.
Publisher klassi ma'lum bir mavzu bo'yicha xabarlarni nashr etadigan nashriyotni ifodalaydi.
PubSubSystem klassi mavzularni, obunachilarni va xabarlarni nashr qilishni boshqaradigan asosiy sinfdir. Mavzularni saqlash uchun ConcurrentHashMap va bir vaqtning o'zida xabarlarni nashr qilish uchun ExecutorService-dan foydalanadi.
PubSubDemo klassi mavzular, obunachilar va noshirlarni yaratish va xabarlarni nashr qilish orqali Pub-Sub tizimidan foydalanishni namoyish etadi.