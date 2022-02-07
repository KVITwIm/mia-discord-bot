const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');

const config = require('./config');
const prefix = config.prefix;
const request = require('request');

function help(robot, mess, args){
  const embed = new MessageEmbed()
     .setDescription("Команды: +cat +dog +help +clear +say +newpost +test +random_name +орел_решка")
    mess.channel.send({ embeds: [embed] });
}

function random_cat(robot, mess, args){

request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

}, function(error, response, body) {
	if(!error && response.statusCode == 200) {
		mess.channel.send(response.request.uri.href);
	} else {
		console.log(error);
	}
})
}

function test(robot, mess, args) {
    mess.channel.send("Загрузка выполнена успешно.")
    mess.channel.send("Или нет...")
}

function random_dog(robot, mess, args){

request.get('https://thedogapi.com/api/images/get?format=src&type=png', {

}, function(error, response, body) {
	if(!error && response.statusCode == 200) {
		mess.channel.send(response.request.uri.href);
	} else {
		console.log(error);
	}
})
}

function clear(robot, mess, args){
  if(mess.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
  const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
  if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
  if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 

  if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
  if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1

async function delete_messages() { // Объявление асинхронной функции

    await mess.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        mess.channel.bulkDelete(messages)
        mess.channel.send(`Удалено ${amount} сообщений!`)
    })
};
delete_messages(); // Вызов асинхронной функции
} else {
  mess.channel.send("Недостаточно прав!")
}
} 

function say(robot, mess, args){
    const text = mess.content.split(' ').slice(1).join(' ');
    if(text == ""){
      mess.reply("Ты не написал, что нужно отправить!")
    } else 
    mess.channel.send(text);
    mess.delete();
}

function heads_or_tails(robot,mess,args){
  mess.channel.send('Монета подбрасывается...')

  var random = Math.floor(Math.random() * 4) + 1;

  if (random === 1) { 
    mess.channel.send(':full_moon: Орёл!')
  } else if (random === 2) {
    mess.channel.send(':new_moon: Решка!')
  } else if (random === 3) {
    mess.channel.send(':last_quarter_moon: Монета упала ребром!')
}
}

function random_name(robot, mess, args){
    var name = [
        'Квит', ' Аваз', ' Дестрикс', ' Август', ' Августин',
        ' Авдей', ' Авраам', ' Дестрикс', ' Дестрикс', ' Квит',
        ' Аггей', ' Квит', ' Адис', ' Адольф', ' Адриан',
        ' Азамат', ' Айдар', ' Найскек', ' Айрат', ' Аким',
        ' Алан', ' Алей', ' Александр', ' Алексей', ' Квит',
        ' Альберт', ' Найскек', ' Амадей', ' Амадеус',
        ' Дестрикс', ' Амвросий', ' Найскек', ' Анастасий',
        ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей',
        ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх',
        ' Аркадий', ' Арман', ' Господь', ' Арнольд', ' Арон', ' Арсен',
        ' Арсений', ' Арслан', ' Артем', ' Квит', ' Квит', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард',
        ' Дестрикс', ' Богдан', ' Дестрикс', ' Борис', ' Бронислав',
        ' Найскек', ' Вадим', ' Валентин', ' Валерий', ' Дестрикс',
        ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон', ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл', ' Геральд', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон', ' Горислав', ' Градимир', ' Григорий', ' Гурий', ' Густав', ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр', ' Дарий', ' Дементий', ' Демид', ' Демосфен', ' Демьян', ' Денис', ' Джамал', ' Джордан', ' Дмитрий', ' Добрыня', ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат', ' Муслим', ' Назар', 'Абрам', ' Аваз', ' Аввакум', ' Август', ' Августин', ' Авдей', ' Авраам', ' Автандил', ' Агап', ' Агафон', ' Аггей', ' Адам', ' Адис', ' Адольф', ' Адриан', ' Азамат', ' Айдар', ' Айнур', ' Айрат', ' Аким', ' Алан', ' Алей', ' Александр',
        ' Алексей', ' Али', ' Альберт', ' Альфред', ' Квит', ' Амадеус', ' Амаяк', ' Амвросий', ' Ананий', ' Анастасий', ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей', ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх', ' Аркадий', ' Арман', ' Арно', ' Арнольд', ' Арон', ' Арсен', ' Арсений', ' Арслан', ' Артем', ' Артемий', ' Артур', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард', ' Бертран', ' Богдан', ' Болеслав', ' Борис', ' Бронислав', ' Булат', ' Вадим', ' Валентин', ' Валерий', ' Вальтер', ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон',
        ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл',
        ' Дестрикс', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон',
        ' Найскек', ' Градимир', ' Григорий', ' Гурий', ' Густав',
        ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр',
        ' Дарий', ' Vo1', ' Демид', ' Найскек',
        ' Демьян', ' Денис', ' Риас', ' Квит', ' Дмитрий', ' Добрыня',
        ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат',
        ' Муслим', ' Квит'
      ];
      
      var RandElement = name[Math.floor(Math.random() * (name.length))];
      name
        namer = RandElement;
        mess.channel.send(RandElement)
}

function newpost(robot, mess){
  let argg = [];
  argg = mess.content.split(' ').slice(1);
  arggs = argg.join(" ");

  if(arggs == ""){
    let name_male = [ 
      "Русенон","Дуралей","Квит","Чича","Найскек","Кекамур","Господь","Дестрикс",
      'Ластдаст','Родик','Штанга','Сосок Иван','Бенни','Поггерс','Амозгунов','Рейтлайм',
      "Vo1","Вижан","Леон Пирс",'Висмут','Франкенштейн',"Мухочек","Линкер","Пармезан"
    ];
    let name_female = [
    "Ритсу","Лапотчка","Риас","Jur_of_cookies",'Просто Катя',
    'Джейн','Сашкадор',"Изанами","Каралиняша"
    ];

    let work_male = ["купил","забанил","получил","сотворил","создал"];
    let work_female = ["купила","забанила","получила","сотворила","создала"];

    let object = ["остров","модера","район","элитры","ашан","SHONEN JUMP","New Order","еду","Средневековье","Ивановку","Магию"];

    let name = [name_male,name_female];

    let RandGender = name[Math.floor(Math.random() * (name.length))];
    let RandGender2 = name[Math.floor(Math.random() * (name.length))];
    let RandElementName = RandGender[Math.floor(Math.random() * (RandGender.length))];
  
    if(RandGender == name_male){
      let RandElementWork = work_male[Math.floor(Math.random() * (work_male.length))];
      let RandElementWork2 = work_male[Math.floor(Math.random() * (work_male.length))];
      let RandElementObject = object[Math.floor(Math.random() * (object.length))];
      let RandElementObject2 = object[Math.floor(Math.random() * (object.length))];
  
    for(RandElementWork == RandElementWork2; RandElementWork2 == RandElementWork;){
      RandElementWork2 = work_male[Math.floor(Math.random() * (work_male.length))];
    }

    for(RandElementObject == RandElementObject2;RandElementObject2 == RandElementObject;){
      RandElementObject2 = object[Math.floor(Math.random() * (object.length))];
    }

    var num_gen = base_news.length + 1;

    mess.channel.send(RandElementName + " " + RandElementWork + " " + RandElementObject + " и " + RandElementWork2 + " " + RandElementObject2 + " номер генерации: " + num_gen);

    base_news[base_news.length] = RandElementName + " " + RandElementWork + " " + RandElementObject + " и " + RandElementWork2 + " " + RandElementObject2 + " номер генерации: " + num_gen;
} 

  if(RandGender == name_female){
    let RandElementWork = work_female[Math.floor(Math.random() * (work_female.length))];
    let RandElementWork2 = work_female[Math.floor(Math.random() * (work_female.length))];
    let RandElementObject = object[Math.floor(Math.random() * (object.length))];
    let RandElementObject2 = object[Math.floor(Math.random() * (object.length))];

      for(RandElementWork == RandElementWork2; RandElementWork2 == RandElementWork;){
        RandElementWork2 = work_female[Math.floor(Math.random() * (work_female.length))];
      }
      for(RandElementObject == RandElementObject2;RandElementObject2 == RandElementObject;){
        RandElementObject2 = object[Math.floor(Math.random() * (object.length))];
      }

        var num_gen = base_news.length + 1;

    mess.channel.send(RandElementName + " " + RandElementWork + " " + RandElementObject + " и " + RandElementWork2 + " " + RandElementObject2 + " номер генерации: " + num_gen);

    base_news[base_news.length] = RandElementName + " " + RandElementWork + " " + RandElementObject + " и " + RandElementWork2 + " " + RandElementObject2 + " номер генерации: " + num_gen;
  }} else{
    arggs = Number(arggs);
      --arggs;
    mess.channel.send(base_news[arggs]);
}}






  


// Список команд //

var comms_list = [
{
  name: "test",
  out: test,
},
{
    name: "random_name",
    out: random_name,
},
{
  name: "newpost",
  out: newpost,
},
{
  name: "say",
  out: say,
},
{
  name: "орел_решка",
  out: heads_or_tails,
},
{
  name: "clear",
  out: clear,
},
{
  name: "cat",
  out: random_cat,
},
{
  name: "dog",
  out: random_dog,
},
{
  name: "help",
  out: help,
}];

module.exports.comms = comms_list;