import Input from "../components/Input";


function Mockpage() {

    function convertString() {
        const input = document.getElementById('inputMock').value;
        if (input === '') {
            return
        }

        let out = "";
        let c = "";
        let s = "";
        for (let i = 0; i < input.length; i++) {
            if (i % 2 != 0) {
                c = input.charAt(i);
                s = c + "";
                s = s.toUpperCase();
                out += s;
            } else {
                c = input.charAt(i);
                s = c + "";
                s = s.toLowerCase();
                out += s;
            }
        }

        const msglist = document.querySelector('#msglist')
        const li = document.createElement('li')
        li.textContent = out;

        msglist.appendChild(li);

        document.getElementById('inputMock').value = ''
    }

    return (
        <div>
            <h2>Mockpage</h2>
            <Input doStuff={convertString}
                id="inputMock"
                placeholder="Lägg in sträng"
            />
            <ul id="msglist">
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    );
}

export default Mockpage;