const $inputs = $('input[type="range"]');

const parameters = {
    lightsAmount: 0,
    cornersAmount: 0,
    pipesAmounts: 0,
    apartmentsArea: 0,
};

const summ = $('.calc__summ-block-total');

function calculate() {
    const price = 
        parameters.lightsAmount +
        parameters.cornersAmount +
        parameters.pipesAmounts +
        parameters.apartmentsArea;

    summ.text(price);
}

for (const input of $inputs) {
    const $input = $(input);
    const $output = $(input.nextElementSibling);
    const type = $input.data('calc-parameter-type');

    $input.rangeslider({
        polyfill: false,
        onInit: function () {
            const value = Number($input.attr('value'));

            parameters[type] = value;
            calculate();
            $output.text(value);
        },
        onSlide: function (position, value) {

            $output.css('left', position);

            value = Number(value);

            parameters[type] = value;
            calculate();
            $output.text(value);
        },
    });
}
