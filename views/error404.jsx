const React = require('react')
const Def = require('./default')

function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND! SADGE</h1>
                <div className='errorDiv'>
                <p>Woopsie, sorry we can not find this page!</p>
                </div>
                <div>
                        <img src="/images/404page.jpg" alt="puppet"/>
                        <div>
                        <div> <a href="AUTHOR_LINK">George Bush</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a> </div>
                      </div>
                      </div>


            </main>
        </Def>
    )

}

module.exports = error404