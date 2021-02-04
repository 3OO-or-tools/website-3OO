import React, { Component } from 'react'
import { ArrowLeftRight } from 'react-bootstrap-icons'

class ORNumber extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const n = this.props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        const arr = n.split('.')
        const v = arr.length > 3
            ? `${arr.slice(0, 2).join('.')}(${arr.length - 2})`
            : n
        return (<span style={{color : this.props.fontColor }}>{v}</span>)
    }
}

class FleetRaw extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form-group">
                <textarea className="form-control" onChange={this.props.onChange} value={this.props.value} ></textarea>
            </div>
        )
    }
}

class ShipObj extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <th><ORNumber value={this.props.ship.name}   /></th>
                <td><ORNumber value={this.props.ship.weapon} fontColor="red"    /></td>
                <td><ORNumber value={this.props.ship.shield} fontColor="green"  /></td>
                <td><ORNumber value={this.props.ship.shell}  fontColor="blue"   /></td>
                <td><ORNumber value={this.props.ship.number} fontColor="violet" /></td>
            </tr>
        )
    }
}

class FleetObj extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const fleet = this.props.fleet.map((ship, i) => <ShipObj key={i} ship={ship} /> )
        const total = this.props.fleet.reduce((acc, ship) => ({
            weapon : acc.weapon + ship.weapon * ship.number,
            shield : acc.shield + ship.shield * ship.number,
            shell  : acc.shell  + ship.shell * ship.number,
            number : acc.number + ship.number
        }), {weapon : 0, shield : 0, shell : 0, number : 0})
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="col-lg-3" >Nom</th>
                        <th className="col-lg-2" >Arme</th>
                        <th className="col-lg-2" >Bouclier</th>
                        <th className="col-lg-2" >Coque</th>
                        <th className="col-lg-3" >Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {fleet}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th><ORNumber value={total.weapon} fontColor="red" /></th>
                        <th><ORNumber value={total.shield} fontColor="green" /></th>
                        <th><ORNumber value={total.shell}  fontColor="blue" /></th>
                        <th><ORNumber value={total.number} fontColor="violet" /></th>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

class FleetFightWave extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let defLoose = []
        for (const n in this.props.attack.loose)
            if (this.props.attack.loose.hasOwnProperty(n))
                defLoose.push(<li key={n}>Detruits : <ORNumber value={this.props.attack.loose[n]} fontColor="violet" /> x {n}</li>)
        let atkLoose = []
        for (const n in this.props.defense.loose)
            if (this.props.defense.loose.hasOwnProperty(n))
                atkLoose.push(<li key={n}>Detruits : <ORNumber value={this.props.defense.loose[n]} fontColor="violet" /> x {n}</li>)
        return (
            <li>
                <p>Attaquant inflige <ORNumber value={this.props.attack.force} fontColor="red" /> degats</p>
                <ul>
                    {defLoose}
                </ul>
                <p>Défenseur inflige <ORNumber value={this.props.defense.force} fontColor="red" /> degats</p>
                <ul>
                    {atkLoose}
                </ul>
            </li>
        )
    }
}

class FleetFight extends Component {
    constructor(props) {
        super(props)
    }

    attackShips(attack, defender, loose) {
        if (defender.length == 0)
            return []
        let ship = defender.shift()
        let def = ship.shield + ship.shell
        let nbrDef = Math.floor(attack / def)
        nbrDef = nbrDef > ship.number ? ship.number : nbrDef
        attack -= nbrDef * def
        ship.number -= nbrDef
        if (nbrDef > 0) {
            if (loose[ship.name] == undefined)
                loose[ship.name] = 0
            loose[ship.name] += nbrDef
        }
        if (ship.number == 0)
            return this.attackShips(attack, defender, loose)
        defender.unshift(ship)
        return defender
    }

    calculateWaves(attacker, defender, acc, n) {
        if (n >= 12 || attacker.length == 0 || defender.length == 0)
            return acc
        let atkForce = attacker.reduce((acc, ship) => acc + ship.weapon * ship.number, 0)
        let atkLoose = {}
        defender = this.attackShips(atkForce, defender, atkLoose)
        let defForce = defender.reduce((acc, ship) => acc + ship.weapon * ship.number, 0)
        let defLoose = {}
        attacker = this.attackShips(defForce, attacker, defLoose)
        acc.push({attack : {force : atkForce, loose : atkLoose}, defense : {force : defForce, loose : defLoose}})
        return this.calculateWaves(attacker, defender, acc, ++n)
    }

    render() {
        let cpyAttacker = JSON.parse(JSON.stringify(this.props.attacker))
        let cpyDefender = JSON.parse(JSON.stringify(this.props.defender))
        const waves = this.calculateWaves(cpyAttacker, cpyDefender, [], 0)
        const compWaves = waves.map((w, key) => (<FleetFightWave key={key} attack={w.attack} defense={w.defense} />))
        return (
            <div>
                <ul>
                    {compWaves}
                </ul>
                <FleetObj fleet={cpyAttacker} />
                <FleetObj fleet={cpyDefender} />
            </div>
        )
    }
}

class FleetManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attacker : { raw : '', obj : []},
            defender : { raw : '', obj : []}
        }
        this.onChangeRawAttacker = this.onChangeRaw.bind(this, 'attacker')
        this.onChangeRawDefender = this.onChangeRaw.bind(this, 'defender')
        this.onExchange = this.onExchange.bind(this)
    }

    onExchange() {
        const cpy = JSON.parse(JSON.stringify(this.state))
        this.setState({attacker : cpy.defender, defender : cpy.attacker})
    }

    onChangeRaw(type, e) {
        try {
            let regexSpy = /([\d\.]+)\ x\ ([\w\ \d\-]+)\(A : ([\d\.]+), B : ([\d\.]+), C : ([\d\.]+), F : ([\d\.]+), P : ([\d,]+)\)/i
            let fleet = e.target.value.replace(/[\t\ ]+/g, ' ').trim().split('\n')
            fleet = fleet.map((ship) => {
                let res = ship.match(regexSpy)
                if (res && res.length == 8) {
                    return {
                        name    : res[2].trim(),
                        weapon  : parseInt(res[3].replace(/\./g, '')),
                        shield  : parseInt(res[4].replace(/\./g, '')),
                        shell   : parseInt(res[5].replace(/\./g, '')),
                        number  : parseInt(res[1].replace(/\./g, '')),
                    }
                }
                let tmp = ship.split(' ').slice(-4)
                if (tmp && tmp.filter((v) => /[\d\.]+/.test(v)).length == 4)
                    return {
                        name    : ship.split(' ').slice(0, -4).join(' '),
                        weapon  : parseInt(tmp[0].replace(/\./g, '')),
                        shield  : parseInt(tmp[1].replace(/\./g, '')),
                        shell   : parseInt(tmp[2].replace(/\./g, '')),
                        number  : parseInt(tmp[3].replace(/\./g, ''))
                    }
                return null
            }).filter((s) => s != null)
            fleet.sort((a, b) => a.weapon == b.weapon 
                ? a.shield == b.shield 
                    ? a.shell == b.shell 
                        ? b.number - a.number
                        : b.shell - a.shell
                    : b.shield - a.shield
                : b.weapon - a.weapon)
            this.setState({[type] : { raw : e.target.value.trim(), obj : fleet}})
        } catch (e) {
            console.error(e)
            this.setState({[type] : { raw : '', obj : []}})
        }
    }

    render() {
        let fleetFight = this.state.attacker.obj.length > 0 && this.state.defender.obj.length
            ? <FleetFight attacker={this.state.attacker.obj} defender={this.state.defender.obj} />
            : <div>Aucune données</div>
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button onClick={this.onExchange} className="col-1 btn btn-secondary align-self-center"><ArrowLeftRight size={24} /></button>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Attaquant</h3>
                        <FleetRaw value={this.state.attacker.raw} onChange={this.onChangeRawAttacker} />
                    </div>
                    <div className="col-6">
                        <h3>Défenseur</h3>
                        <FleetRaw value={this.state.defender.raw} onChange={this.onChangeRawDefender} />
                    </div>
                </div>
                <div className="row">
                    <FleetObj fleet={this.state.attacker.obj} />
                </div>
                <div className="row">
                    <h2>Versus</h2>
                </div>
                <div className="row">
                    <FleetObj fleet={this.state.defender.obj} />
                </div>
                <div className="row">
                    {fleetFight}
                </div>
            </div>
        )
    }
}

export default class FleetSimulator extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<FleetManager />)
    }
}