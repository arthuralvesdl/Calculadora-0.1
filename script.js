var display = document.getElementById( 'display' );
var numero = document.querySelectorAll( '.numero' );
var calc = [0];
var str = '';
var opr = ["+", "-", "*", "/", "%"];


function clean () {
    calc = [];
    str = '';
    display.innerHTML = '0';
}

function sign () {

    if ( str == '' && calc[0] == 0 ) {
        
    } else {

        if ( str == '' ) {

            str = str.toString();
        }

        if ( calc.length == 2 ) {

            display.innerHTML = '-' + str;
            str = str;

        } else {
            str = str * -1;
            str = str.toString();
            display.innerHTML = str;
        }
    }

}

function num ( v ) {
    // if ( str == '0' ) {

    //     str = '-';
    //     console.log( 'way' );
    // }


    if ( v == '.' && str == '' ) {
        str = 0;
    }
    if ( v == '.' && str == '0.' && str.length > 1 ) {
        str = 0;
    }
    if ( v == '.' && str.length > 1 ) {
        console.log( 'str' );
        str.value.substring( 0, 2 ); // limitar pontos
    }

    str += v;
    console.log( str );
    display.innerHTML = str;

}

function sum () {



    if ( str != '' && calc.length == 1 ) {
        console.log( 'alternate' );
        calc = [];
        calc.push( str );
        str = '';
        console.log( calc );
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[0] );
            console.log( calc );
            console.log( 'third' );
        } else {

            calc.push( str );
            calc.push( opr[0] );
            str = '';
            console.log( calc );
            console.log( 'first' );
        }
        if ( calc.length >= 1 ) {
            console.log( 'second' );
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            console.log( op );
            calc = [];
            calc.push( op );
            calc.push( opr[0] );
            console.log( calc );
            display.innerHTML = op.toFixed(2);
        } else {

        }
    }

}

function sub () {
    if ( str != '' && calc.length == 1 ) {
        console.log( 'alternate' );
        calc = [];
        calc.push( str );
        str = '';
        console.log( calc );
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[1] );
            console.log( calc );
            console.log( 'third' );
        } else {

            calc.push( str );
            calc.push( opr[1] );
            str = '';
            console.log( calc );
            console.log( 'first' );
        }
        if ( calc.length >= 1 ) {
            console.log( 'second' );
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            console.log( op );
            calc = [];
            calc.push( op );
            calc.push( opr[1] );
            console.log( calc );
            display.innerHTML = op.toFixed(2);
        } else {


        }
    }

}

function mul () {
    if ( str != '' && calc.length == 1 ) {
        console.log( 'alternate' );
        calc = [];
        calc.push( str );
        str = '';
        console.log( calc );
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[2] );
            console.log( calc );
            console.log( 'third' );
        } else {

            calc.push( str );
            calc.push( opr[2] );
            str = '';
            console.log( calc );
            console.log( 'first' );
        }
        if ( calc.length >= 1 ) {
            console.log( 'second' );
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            console.log( op );
            calc = [];
            calc.push( op );
            calc.push( opr[2] );
            console.log( calc );
            display.innerHTML = op.toFixed(2);
        } else {


        }
    }


}
function div () {
    if ( str != '' && calc.length == 1 ) {
        console.log( 'alternate' );
        calc = [];
        calc.push( str );
        str = '';
        console.log( calc );
    }

    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[3] );
            console.log( calc );
            console.log( 'third' );
        } else {

            calc.push( str );
            calc.push( opr[3] );
            str = '';
            console.log( calc );
            console.log( 'first' );
        }
        if ( calc.length >= 1 ) {
            console.log( 'second' );
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            console.log( op );
            calc = [];
            calc.push( op );
            calc.push( opr[3] );
            console.log( calc );
            display.innerHTML = op.toFixed(2);
        }
    }
    if ( calc[0] === 0 ) {
        calc.push( 0 );
        calc.push( opr[3] );
    }

}

function per () {
    if(calc[0] == 0 ) {
        calc.pop()
    }

    if ( str != '' && calc.length == 1 ) {
        console.log( 'alternate' );
        calc = [];
        calc.push( str );
        str = '';
        console.log( calc );
    }

    if ( str == '' && calc.length == 0 ) {
        console.log( 'ext' );
    } else if ( calc.length == 0 ) {
        calc.push( str );
        op = eval( calc[0] / 100 );
        display.innerHTML = op.toFixed(2);
        calc.pop();
        calc.push( op );
        console.log( calc );
        str = '';
        op = '';

    } else if ( calc.length == 2 && str > 0 ) {
        console.log( 'calcperc' );
        calc.push( str );
        str = '';

        if ( calc[1] == opr[0] ) {
            console.log( 'plusperc' );
            op = calc[0] + ( calc[0] * ( calc[2] / 100 ) );
            console.log( op );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed(2);
        }
        if ( calc[1] == opr[1] ) {
            console.log( 'subperc' );
            op = calc[0] - ( calc[0] * ( calc[2] / 100 ) );
            console.log( op );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed(2);
        }
        if ( calc[1] == opr[2] ) {
            console.log( 'multperc' );
            op = calc[0] * ( calc[2] / 100 );
            console.log( op );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed(2);
        }
        if ( calc[1] == opr[3] ) {
            console.log( 'divperc' );
            op = calc[0] / ( calc[2] / 100 );
            console.log( op );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed(2);
        }

    }

}

function result () {

    if ( calc.length >= 2 && str == '' ) {
        console.log( 'sdfjhaskldjfh' );
        calc.pop();
    } else {
        console.log( 'oksdaos' );
        console.log( 'result' );
        calc.push( str );
        op = eval( calc.toString().replace( /,/g, '' ) );
        calc = [];
        calc.push( op );
        console.log( calc );
        str = '';
        console.log( op );
        console.log( calc );
        console.log( str );
        display.innerHTML = op.toFixed(2);
        op = '';

    }

    if ( calc[0] == undefined ) {
        display.innerHTML = '0';
    } else {

    }
}