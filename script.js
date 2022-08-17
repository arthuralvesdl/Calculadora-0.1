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
    display.innerHTML = str;

}

function sum () {
    if ( str != '' && calc.length == 1 ) {
        calc = [];
        calc.push( str );
        str = '';
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[0] );
        } else {

            calc.push( str );
            calc.push( opr[0] );
            str = '';
        }
        if ( calc.length >= 1 ) {
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            calc = [];
            calc.push( op );
            calc.push( opr[0] );
            display.innerHTML = op.toFixed( 2 );
        } else {

        }
    }

}

function sub () {
    if ( str != '' && calc.length == 1 ) {
        calc = [];
        calc.push( str );
        str = '';
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[1] );
        } else {

            calc.push( str );
            calc.push( opr[1] );
            str = '';
        }
        if ( calc.length >= 1 ) {
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            calc = [];
            calc.push( op );
            calc.push( opr[1] );
            display.innerHTML = op.toFixed( 2 );
        } else {


        }
    }

}

function mul () {
    if ( str != '' && calc.length == 1 ) {
        calc = [];
        calc.push( str );
        str = '';
    }
    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[2] );
        } else {

            calc.push( str );
            calc.push( opr[2] );
            str = '';
        }
        if ( calc.length >= 1 ) {
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            calc = [];
            calc.push( op );
            calc.push( opr[2] );
            display.innerHTML = op.toFixed( 2 );
        } else {


        }
    }


}
function div () {
    if ( str != '' && calc.length == 1 ) {
        calc = [];
        calc.push( str );
        str = '';
    }

    if ( str == '' && calc.length == 0 ) {

    } else {

        if ( str == '' && calc.length >= 2 ) {
            calc.pop();
            calc.push( opr[3] );
        } else {

            calc.push( str );
            calc.push( opr[3] );
            str = '';
        }
        if ( calc.length >= 1 ) {
            calc.pop();
            op = eval( calc.toString().replace( /,/g, '' ) );
            calc = [];
            calc.push( op );
            calc.push( opr[3] );
            display.innerHTML = op.toFixed( 2 );
        }
    }
    if ( calc[0] === 0 ) {
        calc.push( 0 );
        calc.push( opr[3] );
    }

}

function per () {
    if ( calc[0] == 0 ) {
        calc.pop();
    }

    if ( str != '' && calc.length == 1 ) {
        calc = [];
        calc.push( str );
        str = '';
    }

    if ( str == '' && calc.length == 0 ) {
    } else if ( calc.length == 0 ) {
        calc.push( str );
        op = eval( calc[0] / 100 );
        display.innerHTML = op.toFixed( 2 );
        calc.pop();
        calc.push( op );
        str = '';
        op = '';

    } else if ( calc.length == 2 && str > 0 ) {
        calc.push( str );
        str = '';

        if ( calc[1] == opr[0] ) {
            op = calc[0] + ( calc[0] * ( calc[2] / 100 ) );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed( 2 );
        }
        if ( calc[1] == opr[1] ) {
            op = calc[0] - ( calc[0] * ( calc[2] / 100 ) );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed( 2 );
        }
        if ( calc[1] == opr[2] ) {
            op = calc[0] * ( calc[2] / 100 );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed( 2 );
        }
        if ( calc[1] == opr[3] ) {
            op = calc[0] / ( calc[2] / 100 );
            calc = [];
            str = '';
            calc.push( op );
            display.innerHTML = op.toFixed( 2 );
        }

    }

}

function result () {

    if ( calc.length >= 2 && str == '' ) {
        calc.pop();
    } else {
        calc.push( str );
        op = eval( calc.toString().replace( /,/g, '' ) );
        calc = [];
        calc.push( op );
        str = '';
        display.innerHTML = op.toFixed( 2 );
        op = '';

    }

    if ( calc[0] == undefined ) {
        display.innerHTML = '0';
    } else {

    }
}