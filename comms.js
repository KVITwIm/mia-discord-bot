const config = require('./config'); // Подключаем файл с параметрами и информацией
const { Client, Intents } = require('discord.js');
const prefix = config.prefix; // «Вытаскиваем» префик
const request = require('request');
const base_news = [];
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');

const question = ["Он лидер?"]
var random_question
var question1_1 = "У него есть корона?"
var question1_1_value
var question1_2 = ""
var question1_2
var question1_3
var question1_4

var question2_1 = "This is GospodGospodny"





function vopros_otvet(robot, mess, args){

  random_question = question[Math.floor(Math.random() * (question.length))];

  const embed = new MessageEmbed()
    .setTitle('Акинатор')
    .setDescription(`Отвечайте на каждый вопрос командой +answer1 ответ(или +answer2 в зависимости от номера вопроса)`)
    .addField('Первый вопрос', `${random_question}`, true)
    mess.channel.send({ embeds: [embed] });

}

function answer1(robot, mess, args){
  const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  random_question = question[Math.floor(Math.random() * (question.length))];  

  if(random_question == question[0]){
    if(arggs == "Да"){
    question1_1_value = true
    mess.channel.send(question1_1)
    }
    if(arggs == "Нет"){
    question1_1_value = false
    mess.channel.send(random_question)
    }
  }
  if(random_question == question[1]){
    mess.channel.send("Согласен2")
  }
  if(random_question == question[2]){
    mess.channel.send("Согласен3")
  }
  if(random_question == question[3]){
    mess.channel.send("Согласен4")
  }
}

function answer2(robot, mess, args){
  const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  if(question1_1_value == true){
    if(arggs == "Да")
    mess.channel.send(question2_1)
  }
  if(random_question == question[1]){
    mess.channel.send("Согласен2")
  }
  if(random_question == question[2]){
    mess.channel.send("Согласен3")
  }
  if(random_question == question[3]){
    mess.channel.send("Согласен4")
  }
}


function help(robot, mess, args){
  const embed = new Discord.MessageEmbed()
     fields: [
		{
			name: 'Команды бота:',
			value: '+newpost - рандомная новость (каждая новая генерация записывается и ее можно воспроизвести с помощью +newpost номер комбинации, например: newpost 12)',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: false,
			value: '+random_name - рандомное имя/ник',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
    mess.channel.send(embed)
}

function converter(robot, mess, args){
  let sk = [];
  sk = mess.content.split(' ').slice(1);
  sk = sk.join(" ");
  if(sk == ""){
    mess.channel.send("Вы не указали сколько СК нужно конвертировать! Например: +convert число")
  } else if(sk.match(/^-?[\d.]+(?:e-?\d+)?$/)){
    let sk_stap1 = sk * 10 / 64
    let sk_sk = Math.floor(sk_stap1)
    let sk_stap3 = sk_stap1 - sk_sk;
    let sk_sc = sk_stap3 * 64;
    mess.channel.send(sk_sk + " ст " + sk_sc + " сц");
  } else {
    mess.channel.send("Укажите число!")
  }
}
function vip_convert(robot, mess, args){
  if(mess.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
  let sk = [];
  sk = mess.content.split(' ').slice(1);
  sk = sk.join(" ");

    let sk_stap1 = sk * 10 / 64
    let sk_sk = Math.floor(sk_stap1)
    let sk_stap3 = sk_stap1 - sk_sk;
    let sk_sc = sk_stap3 * 64;
    mess.channel.send(sk_sk + " ст " + sk_sc + " сц");
  }
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

function sj(robot, mess, args){
  mess.delete()
  mess.channel.send("Бро, это код от старого выпуска.")
}

function heads_or_tails(robot,mess,args){
  mess.channel.send('Монета подбрасывается...')

  var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

  if (random === 1) { // Если вычислено число 1, то выпадает орёл.
    mess.channel.send(':full_moon: Орёл!')
  } else if (random === 2) { // Если вычислено число 2, то выпадает решка.
    mess.channel.send(':new_moon: Решка!')
  } else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
    mess.channel.send(':last_quarter_moon: Монета упала ребром!')
}
}

function sj2(robot, mess, args){
  mess.delete()
  mess.author.send('Второй выпуск. Спасибо, что выбираете нас!', {
            files: [
                "./1.png"
            ]
  });
  mess.author.send({
            files: [
                "./2.png"
            ]
  });
  mess.author.send({
            files: [
                "./3.png"
            ]
  });
  mess.author.send({
            files: [
                "./4.png"
            ]
  });
  mess.author.send({
            files: [
                "./5.png"
            ]
  });
  mess.author.send({
            files: [
                "./6.png"
            ]
  });
  mess.author.send({
            files: [
                "./7.png"
            ]
  });
  mess.author.send({
            files: [
                "./8.png"
            ]
  });
  mess.author.send('Выпуск станет общедоступным как обычно через пару дней.')
  mess.channel.send("Спасибо, за покупку второго выпуска! Нарядный выпуск отправлен вам в лс")
}



function random_name(robot, mess, args){
    var name = [ // Объявление массива name и занесение в него большого количества имён
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
      
      var RandElement = name[Math.floor(Math.random() * (name.length))]; // Выбор 
      name
        namer = RandElement;
        mess.channel.send(RandElement) // Отправка 
}



function admin(robot, mess, args){
  const fetched = mess.channel.fetchMessages({limit: 99});
  mess.channel.bulkDelete(fetched);
}

function newpost(robot, mess, args){

  let argg = [];
  argg = mess.content.split(' ').slice(1);
  arggs = argg.join(" ");

if(arggs == ""){
  let name_male = [ 
    "Русенон",
    "Дуралей",
    "Квит",
    "Чича",
    "Найскек",
    "Кекамур",
    "Господь",
    "Дестрикс",
    'Ластдаст',
    'Родик',
    'Кекамур',
    'Штанга',
    'Сосок Иван',
    'Бенни',
    'Поггерс',
    'Амозгунов',
    "Vo1",
    "Вижан",
    "Леон Пирс",
    'Висмут',
    'Франкенштейн',
    "Мухочек",
    "Линкер",
    "Пармезан",
    'Рейтлайм'
];
  let name_female = [
  "Ритсу",
  "Лапотчка",
  "Риас",
  "Jur_of_cookies",
  'Просто Катя',
  'Джейн',
  'Сашкадор',
  "Изанами",
  "Каралиняша"
]
let name = [name_male,name_female];
  let RandGender = name[Math.floor(Math.random() * (name.length))];
  let RandGender2 = name[Math.floor(Math.random() * (name.length))];
  let RandElementName = RandGender[Math.floor(Math.random() * (RandGender.length))];
  let work_male = ["купил","забанил","получил","сотворил","создал"]
  let work_female = ["купила","забанила","получила","сотворила","создала"]
  let object = ["остров","модера","район","элитры","ашан","SHONEN JUMP","New Order","еду","Средневековье","Ивановку","Магию"];
  
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

}
} else{

arggs = Number(arggs);
--arggs;

mess.channel.send(base_news[arggs]);
}

}






  


// Список команд //

var comms_list = [{
  name: "test",
  out: test,
  about: "Тестовая команда"
},
{
    name: "random_name",
    out: random_name,
    about: "Случайное имя"
},
{
  name: "admin",
  out: admin,
  about: "role"
},
{
  name: "newpost",
  out: newpost,
  about: "Рандом пост"
},
{
  name: "shonenjump#0777",
  out: sj,
  about: "Рандом пост"
},
{
  name: "shonenjump#0002",
  out: sj2,
  about: "Рандом пост"
},
{
  name: "say",
  out: say,
  about: "say"
},
{
  name: "орел_решка",
  out: heads_or_tails,
  about: "орел или решка"
},
{
  name: "clear",
  out: clear,
  about: "clear"
},
{
  name: "cat",
  out: random_cat,
  about: "cat"
},
{
  name: "convert",
  out: converter,
  about: "wasted"
},
{
  name: "dog",
  out: random_dog,
  about: "wasted"
},
{
  name: "help",
  out: help,
  about: "wasted"
},
{
  name: "vip_convert",
  out: vip_convert,
  about: "wasted"
},
{
  name: "vopros_otvet",
  out: vopros_otvet
},
{
  name: "answer1",
  out: answer1
},
{
  name: "answer2",
  out: answer2
}];



// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;