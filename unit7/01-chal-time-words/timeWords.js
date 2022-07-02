const timeWords = time => {
    if (time === '00:00') {
        return 'midnight';
    } else if (time == '12:00') {
        return 'noon';
    };

    const wordelize = {
        0: 'twelve',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const wordelizeDozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty'
    };

    const wordelizePmHour = {
        12: 'twelve',
        13: 'one',
        14: 'two',
        15: 'three',
        16: 'four',
        17: 'five',
        18: 'six',
        19: 'seven',
        20: 'eight',
        21: 'nine',
        22: 'ten',
        23: 'eleven'
    }

    let timeArray = time.split(':');
    let hour = +timeArray[0];
    let minutes = +timeArray[1];
    let postFix = '';

    if (hour >= 12) {
        hour = wordelizePmHour[hour];
        postFix = 'pm';
    } else {
        hour = wordelize[hour];
        postFix = 'am';
    };

    if (minutes === 0) {
        minutes = `o'clock`;
    } else if (minutes === 1) {
        minutes = `oh ${wordelize[minutes]}`;
    } else if (minutes > 19) {
        let tw = wordelizeDozens[String(minutes)[0]];
        let dg = String(minutes)[1] > 0 ? wordelize[String(minutes)[1]] : '';
        minutes = `${tw} ${dg}`;
    } else {
        minutes = wordelize[minutes];
    };

    return `${hour} ${minutes} ${postFix}`;
};

console.log(timeWords('00:00'), timeWords('01:40'), timeWords('12:46'), timeWords('18:21'), timeWords('14:01'), timeWords('08:00'));