import React, { useEffect, useState } from 'react';
import { allChords } from '../Datas';

function HarmonicFieldGenerator() {

    const harmonicField = (n) => {
        let a = allChords.slice(n).concat(allChords.slice(0, n))
        return [a[0], a[2], a[4], a[5], a[7], a[9], a[11]]
    }

    return (
        // let newtest = test.slice(n).concat(test.slice(0, n))
        <div>

            <h1>harmonic</h1>
            <p>{harmonicField(4)}</p>
        </div>
    )
}

export default HarmonicFieldGenerator;