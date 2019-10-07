import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})

export class PhonePipe implements PipeTransform
{
    transform(tel, args)
    {
        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        return ("(+33)" + " " +  value.slice(1,10));
    }
}

