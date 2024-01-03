const React = require('react')

function New(props) {
    return(
        <div>
            <h1>Captains Log</h1>
            <a href="/logs"></a>
            <form action='/fruits' method='POST'>
                Title: <input type='text' name='name' /> <br/>
                Entry:  <input type='text' name='name' /> <br/>
                Ship Broken?: <input type='checkbox' name='shipIsBroken' /> <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

module.exports = New