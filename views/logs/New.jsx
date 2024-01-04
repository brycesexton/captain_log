const React = require('react')

function New(props) {
    return(
        <div>
            <h1>Captains Log</h1>
            <a href="/logs">Go to index page.</a>
            <form action='/logs' method='POST'>
                Title: <input type='text' name='title' /><br/>
                Entry: <textarea name='entry'></textarea><br/>
                Ship Broken?: <input type='checkbox' name='shipIsBroken' /> <br/>
                <input type='submit' value='Create Log' />
            </form>
        </div>
    )
}

module.exports = New
