/*===========================================

    in footer connect file "overTime.js"
        <script type='text/javascript' src="overTime.js"></script>
    call
        html
            <section id="overTime"></section>
        script
            overTime(option ={
                "date_start": Date.now()/1000,
                "date_end"  : Date.now()/1000+20,
                "type": "" //clock || clockLine
            });
    extended version
        https://codepen.io/Hattack/pen/LOyvbd
===========================================*/
function overTime(option) {
    var
        overTime                = document.getElementById('overTime'),

        wrap3501                = document.createElement('div'),
        wrap3501__gradient      = document.createElement('div'),

        wrap3502                = document.createElement('div'),
        wrap3502Timer           = document.createElement('div'),
        wrap3502TimerHours      = document.createElement('span'),
        wrap3502TimerMin        = document.createElement('span'),
        wrap3502TimerSec        = document.createElement('span');

    wrap3501.className  = 'wrap3501';
    wrap3501.id         = 'wrap3501';
    overTime.appendChild(wrap3501);
    wrap3501__gradient.id   = 'wrap3501__gradient';
    wrap3501Elem            = document.getElementById('wrap3501');
    wrap3501Elem.appendChild(wrap3501__gradient);

    wrap3502.className  = 'wrap3502';
    wrap3502.id         = 'wrap3502';
    overTime.appendChild(wrap3502);
    wrap3502Timer.className = 'timer';
    wrap3502Timer.id        = 'timerText';
    wrap3502Elem            = document.getElementById('wrap3502');
    wrap3502Elem.appendChild(wrap3502Timer);

    wrap3502TimerElem   = document.getElementById('timerText');
    wrap3502TimerHours.className  = 'hours';
    wrap3502TimerMin.className    = 'min';
    wrap3502TimerSec.className    = 'sec';
    separator                     = ':';
    wrap3502TimerHours.innerHTML  = '00';
    wrap3502TimerMin.innerHTML    = '00';
    wrap3502TimerSec.innerHTML    = '00';
    wrap3502TimerElem.appendChild(wrap3502TimerHours);
    wrap3502TimerElem.appendChild(wrap3502TimerMin);
    wrap3502TimerElem.appendChild(wrap3502TimerSec);
    wrap3502TimerMinElem          = wrap3502TimerElem.querySelectorAll('span');


    var date_start  = option.date_start,
        date_end    = option.date_end,// if "0 || undefined", then block gradient none
        dateCount,
        count       = option.date_end,
        grad3501    = 'yes',// if "no", then block gradient none, else yes
        fps         = 100,
        gradient    = document.getElementById('wrap3501__gradient'),
        wrap3501    = document.getElementById('wrap3501'),
        wrap3502    = document.getElementById('wrap3502'),
        container   = document.querySelectorAll('.wrap3501__container');

    var htmlSec     = document.querySelector('.sec'),
        htmlMin     = document.querySelector('.min'),
        htmlHours   = document.querySelector('.hours'),
        seconds,minits,allHour;

    (option.type == 'clock')?wrap3501Elem.style.display = 'none':'';
    (option.type == 'clockLine')?wrap3502Elem.style.display = 'none':'';

    if(date_end == 0 || String(date_end) == 'undefined' || grad3501 == 'no'){
        wrap3501.style.display = 'none';
    }else{
        var scoreTime = date_end - date_start,// время всего
            timerGradient = setInterval(function(){
                var currentTime = Date.now()/1000;
                var hbf = scoreTime-(date_end - currentTime);
                percent = hbf * 100 / scoreTime;
                gradient.style.width = percent + "%";
                if(percent > 100){
                    clearTimeout(timerGradient);
                }
            }, fps);

        count *=1000;
        setInterval(function(){
            timeCount();
        },10);

        function timeCount(){
            var dataOb    = new Date();
            var dateCount = new Date();
            dateCount.setTime(count);
            allSecond = Math.floor((+dateCount - +dataOb)/1000).toFixed(5);

            allHour = (allSecond / 3600);
            allHour = Math.floor(allHour);

            minits = (allSecond / 3600).toFixed(6);
            minits = Math.floor((minits%1)*60);
            minits = minits.toFixed(0);


            minitsForSeconds = (allSecond / 3600)*60;

            seconds = ((minitsForSeconds%1) * 60);
            // console.log(seconds.toFixed(0))
            seconds = seconds.toFixed(0);

            // console.log(allHour+':'+minits+':'+seconds);

            if(allSecond <= 0){
                seconds = 0;
                minits  = 0;
                allHour = 0;
            }

            (+String(seconds).length == 1)?seconds  = '0'+seconds: seconds  = seconds;
            (+String(minits).length == 1)?minits    = '0'+minits: minits  = minits;
            (+String(allHour).length == 1)?allHour  = '0'+allHour: allHour  = allHour;



            htmlSec.innerText   = seconds;
            htmlMin.innerText   = minits;
            htmlHours.innerText = allHour;
        }

        var style = document.createElement('style');

        style.innerHTML = '' +
            '    :root{\n' +
            '        --main-size-width: 250px;/*основные размеры елемента*/\n' +
            '        --main-size-height: 50px;/*основные размеры елемента*/\n' +
            '        --main-gradient: repeating-linear-gradient(45deg, #d34e0e 0px, #d34e0e 15px, #0c0104 16px, #0c0104 35px) repeat; /*цвет градиента, ширина, угол наклона*/\n' +
            '        --main-position-gradient: 0 -200px;/*позиция градиента*/\n' +
            '        --main-size-text: 30px; /*размер текста*/\n' +
            '    }\n' +
            '\n' +
            '\n' +
            '    #overTime {\n' +
            '        width: var(--main-size-width);\n' +
            '        height: var(--main-size-height);\n' +
            '        margin: auto;\n' +
            '        position: relative;\n' +
            '    }\n' +
            '\n' +
            '    #wrap3501 {\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        border: 1px solid;\n' +
            '        position: relative;\n' +
            '        margin: auto;\n' +
            '        display: -webkit-box;\n' +
            '        display: -ms-flexbox;\n' +
            '        display: flex;\n' +
            '        -webkit-box-orient: horizontal;\n' +
            '        -webkit-box-direction: normal;\n' +
            '        -ms-flex-direction: row;\n' +
            '        flex-direction: row;\n' +
            '        -webkit-box-pack: justify;\n' +
            '        -ms-flex-pack: justify;\n' +
            '        justify-content: space-between;\n' +
            '        -webkit-box-align: end;\n' +
            '        -ms-flex-align: end;\n' +
            '        align-items: flex-end;\n' +
            '        overflow: hidden;\n' +
            '    }\n' +
            '    #wrap3501__gradient {\n' +
            '        position: absolute;\n' +
            '        height: 100%;\n' +
            '        background: var(--main-gradient);\n' +
            '        -webkit-animation: bgGradient 5s linear infinite;\n' +
            '        animation: bgGradient 5s linear infinite;\n' +
            '    }\n' +
            '\n' +
            '    @-webkit-keyframes bgGradient {\n' +
            '        0% {\n' +
            '            background-position: 0 0;\n' +
            '        }\n' +
            '        100% {\n' +
            '            background-position: var(--main-position-gradient); /*позиция градиента*/\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    @keyframes bgGradient {\n' +
            '        0% {\n' +
            '            background-position: 0 0;\n' +
            '        }\n' +
            '        100% {\n' +
            '            background-position: var(--main-position-gradient); /*позиция градиента*/\n' +
            '        }\n' +
            '    }\n' +
            '    .wrap3502 {\n' +
            '        text-align: center;\n' +
            '        height: 100%;\n' +
            '        position: relative;\n' +
            '        /*margin-top: 20px;*/\n' +
            '    }\n' +
            '    .wrap3502 .timer {\n' +
            '        display: inline-block;\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        /*line-height: 50px;*/\n' +
            '        /*font-size: 30px;*/\n' +
            '    }\n' +
            '    .wrap3502 .timer span {\n' +
            '        font-size: var(--main-size-text); /*размер текста*/\n' +
            '        font-family: inherit;\n' +
            '    }\n' +
            '    .wrap3502 .timer span.min::before,\n' +
            '    .wrap3502 .timer span.sec::before{\n' +
            '        content: \' : \'\n' +
            '    }';

        document.head.appendChild(style);
    }};

