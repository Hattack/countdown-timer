# countdown-timer
    in footer connect file "overTime.js"
        <script type='text/javascript' src="overTime.js"></script>
    call
        html
            <section id="overTime"></section> //id element optional
        script
            overTime('overTime',option ={
                "date_start": Date.now()/1000,
                "date_end"  : Date.now()/1000+20,
                "type": "" //clock || clockLine
            });
