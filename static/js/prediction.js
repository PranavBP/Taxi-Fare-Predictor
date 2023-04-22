window.onload = function () {
    const hourDropDown = document.getElementById("hour");
    const dayDropDown = document.getElementById("day");
    const dateDropDown =  document.getElementById("date");
    const monthDropDown = document.getElementById("month")
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 0; i < 24; i++) {
        const el = document.createElement("option");
        let txt = ""
        if (i === 0) {
            txt = "12 Am to 12:59 Am";
        } else if (i < 12) {
            txt = String(i) + " Am to " + String(i) + ":59 Am";
        } else if (i === 12) {
            txt = "12 Pm to 12:59 Pm";
        } else {
            txt = String(i - 12) + " Pm to " + String(i - 12) + ":59 Pm";
        }
        el.textContent = txt;
        el.value = String(i);
        hourDropDown.appendChild(el);
    }

    for (let i = 0; i < weekdays.length; i++) {
        const opt = weekdays[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = String(i);
        dayDropDown.appendChild(el);
    }

    for (let i = 1; i < 32; i++) {
        const element = document.createElement("option");
        element.textContent = i;
        element.value = String(i);
        dateDropDown.appendChild(element);
    }

    for (let i = 1; i < 13; i++) {
        const element = document.createElement("option");
        element.textContent = i;
        element.value = String(i);
        monthDropDown.appendChild(element);
    }

};