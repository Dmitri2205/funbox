Квалификационные задания для разработчиков 
HTML/CSS/JS 


<h2>Level 1:</h2>

<h4>Q1:</h4>
Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
<ul>
  <li> пользователя</li> 
  <li>менеджера проекта</li>
  <li>дизайнера</li>
  <li>верстальщика</li>
  <li>клиентского программиста</li>
  <li>серверного программиста</li>
</ul>


<h4>A1:</h4>
1.С точки зрения пользователя считаю качественной ту вёрстку,которая удовлетворяет стандартам UserXperience и Usability.
Интерфейс должен быть по возможности максимально интуитивно понятен,всё должно быть в одном стиле,общая цветовая палитра и шрифты должны не быть слишком яркими,быть приятными глазу и легкочитаемыми.Так же основополагающим фактом можно выделить скорость загрузки страницы и стилей.Идеальное время открытия сайта/приложения должно составлять 1-2 секунды,для того,чтобы пользователи не покидали сайт из-за долгой загрузки контента.
<br/>
2.Для менеджера проекта,предполагаю,хорошая вёрстка - это готовый продукт без ошибок и багов в продакшн сборке,в котором всё соответствует требованиям к данному проекту.
<br/>
3.С точки зрения дизайнера считаю хорошей близкой к Pixel Perfect или же Pixel Perfect вёрстку,внимание к деталям в самой вёрстке и гибкость кода для возможности последующих изменений в проекте.Корректное отображение на разных устройствах и экранах.
<br/>
4.С точки зрения верстальщика хорошей вёрсткой,по моему мнению,можно назвать красиво оформленный код и логически связанное с контентом именование классов секций/блоков/элементов,например по БЭМ-методологии,что упрощает понимание и восприятие кода,адаптивность и кросбраузерность.
<br/>
5.С точки зрения клиентского программиста,к хорошей вёрстке можно отнести те же требования что и для верстальщика,но так же добавить такие моменты как:комментарии в коде к особо тонким моментам(если требуется),семантически корректную разметку,а так же корректный и валидированный по W3C стандарту код разметки и стилей.
<br/>
6.С точки зрения серверного программиста хорошей является вёрстка содержащая разделение логики работы и представления(например HTML отдельно\PHP отдельно),оформление кода и осмысленное использование CSS.


<h4>Q2:</h4>
Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.  
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.  


<h4>A2:</h4>
Основным аспектом можно назвать саму архитектуру проекта,командное следование определёныым принципам разработки и единую систему сборки.
Так же важным считаю использовать модульный или компонентный подход.Это повышает гибкость проекта в случае внесения изменений.
Так же использование командой одного и того же препроцессора/конфигурации сборщика и т.д.


Многостраничных проектов пока выполнять не доводилось.Для вёрстки использую:Sublime Text3 + Emmet + BrowserSync + KOALA + SCSS + БЭМ + JS + github.
<br/>
Для SPA и PWA использую:Vue/React + webpack + babel + webpack-devserver + webpack-CLI + NPM + github.


<h4>Q3:</h4>
Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 


<h4>A3:</h4>
1.Адаптивность/отзывчивость:
<br/>
Использование использование метатега vieport,использование медиазапросов или bootstrap,применение flexbox.
<br/>
2.Использование вендорных префиксов для браузеров,или же автопрефиксов в сборщиках и компиляторах препроцессоров.
<br/>
3.Проверка тегов и CSS свойств через ресурсы CanIUse или подобные.По возможности использовать только те,которые поддерживаются большинством браузеров.
<br/>
4.Дополнительные скрипты для опрееления типа устройства и/или браузера.
<br/>

В больших проектах использую ST3 + BrowserSync + Emmet + KOALA + CSS/JS библиотеки + Git + Git Kraken.

Проверял и тестировал через Chrome Devtools + отладка по USB через A
<br/>DB(Android Debug Bridge).
Требовалась поддержка основных базовых устройств(Desktop/Tablet/Mobile/Mobile S).


<h4>Q4:</h4>
Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

<h4>A4:</h4>
Относительно простой вёрстки:
<ul>
  <li>1.Emmet + emmet snippets</li>
  <li>2.Browser sync(Аналог Gulp Watch или других)</li>
  <li>3.KOALA compiller + KOALA debug</li>
  <li>4.БЭМ</li>
  <li>5.Тестировка кода проходит вручную по мере расширения кода</li>
</ul>


Относительно SPA/PWA:
<ul>
<li>1.Babel/ESLint
<li>2.Webpack(devserver,CLI)
<li>3.React PropTypes(редко)
<li>4.LESS/SCSS
<li>5.Sublime Syntax+Syntax HighLight
<li>6.Vue/VueX devtools/React devtools
<li>7.Lighthouse
<li>8.Преимущественно Axios для запросов и API/REST API




<h4>Q5:</h4>
Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 


<h4>A5:</h4>
Просмотрю код через панель разработчика(F12 для Chrome),Сохраню страницу полностью из браузера.Этот способ сохраняет все изображения,html и css/js файлы.
Либо спрошу у коллег у кого можно получить доступ к исходникам.
На данный момент мне не приходилось сталкиваться с такой ситуацией.Как правило,человек у которого есть все исходники - это я.


<h4>Q6:</h4>
Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

<h4>A6:</h4>
Уточню у дизайнера,как должны выглядеть эти элементы и как они должны работать.
Предложу дизайнеру своё решение.
В противном случае,воспользуюсь примерами из других макетов или работ.


<h4>Q7:</h4>
Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? 
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?



A7:
Сайты:Habr,StackOwerflow,learn.javascript.ru,htmlbook.ru,developer.mozilla.org,ru.reactjs.org,vuejs.org,документация.
Каналы и паблики:TechRocks,Типичный Верстальщик,Love Frontend,Senior Frontend,For Web,Code Blog(+ общий чат по JS),Web /> HTML CSS JavaScript.
YouTube каналы:Владилен Минин,LoftBlog,WebDev.

Оба направления считаю интересными,но больше нравится программировть на JS.Так же может заинтересовать стилизация элементов и написание анимаций к ним на CSS/JS.

Электроника,электрика,установка кастомного ПО и прошивок на различные устройства,техническая механика,музыка,экстремальные виды спорта.


<h4>Q8:</h4>
Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

<h4>A8:</h4>
С информацией обо мне и моими работами вы можете ознакомиться в <a href ="https://dmitri2205.github.io/Portfolio/">моём портфолио</a>
