import Input from "../components/Input";


function DMGpage() {
    function calcDmg() {
        const armor = document.getElementById('armor').value;
        if (armor === '') {
            return
        }
        const dmgTaken = document.getElementById('dmg').value;
        if (dmgTaken === '') {
            return
        }



    }

    return (
        <div className="DMGpage">
            <h2>DMGpage WIP</h2>
            <Input id="armor"
                placeholder="Armor"
            />
            <Input
                id="dmg"
                placeholder="Damage Taken"
            />
        </div>
    );
}

export default DMGpage;