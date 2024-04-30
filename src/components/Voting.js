import React, { useState } from 'react'
import audio from './Audio/beep-01a.wav'




function Voting() {

    const [bjp ,setvotebjp] = useState(0)
    const [congras ,setvotecongras] = useState(0)
    const [aap ,setvoteapp] = useState(0)
    const [bsp ,setvotebsp] = useState(0)
    const [cpi ,setvotecpi] = useState(0)
    const [nota ,setvotenota] = useState(0)
    const [color ,chengecolor] = useState('#c31e1e')
    const [shadow ,changeshadow] = useState('none')
    const [color2 ,chengecolor2] = useState('#c31e1e')
    const [shadow2 ,changeshadow2] = useState('none')
    const [color3 ,chengecolor3] = useState('#c31e1e')
    const [shadow3 ,changeshadow3] = useState('none')
    const [color4 ,chengecolor4] = useState('#c31e1e')
    const [shadow4 ,changeshadow4] = useState('none')
    const [color5 ,chengecolor5] = useState('#c31e1e')
    const [shadow5 ,changeshadow5] = useState('none')
    const [color6 ,chengecolor6] = useState('#c31e1e')
    const [shadow6 ,changeshadow6] = useState('none')
    const [bottonclick ,setclick] = useState(false) 
    // let audio = new Audio("./Audio/beep-01a.wav")
    const bjpvot = () => {
        setvotebjp(bjp + 1)
        chengecolor('#ff0d0d')
        changeshadow('0px 0px 13px red')
        setTimeout(() => {
            chengecolor('#c31e1e'); 
            changeshadow('none'); 
          }, 2000);

       
          setclick(true)
          setTimeout(() => {
            setclick(false); 
           
            }, 6000);

            new Audio(audio).play();
        

    }

    const congrasvot = () => {
        setvotecongras(congras + 1)
        chengecolor2('#ff0d0d')
        changeshadow2('0px 0px 13px red')
        setTimeout(() => {
            chengecolor2('#c31e1e'); 
            changeshadow2('none'); 

          }, 2000);

          setclick(true)
          setTimeout(() => {
            setclick(false); 
            }, 6000);

            new Audio(audio).play();
    }
    
    const cpivote = () => {
        setvotecpi(cpi + 1)
        chengecolor3('#ff0d0d')
        changeshadow3('0px 0px 13px red')

        setTimeout(() => {
            chengecolor3('#c31e1e'); 
            changeshadow3('none'); 

          }, 2000);

      
          setclick(true)
          setTimeout(() => {
            setclick(false); 
            }, 6000);

            new Audio(audio).play();

    }
    const aapvot = () => {
        setvoteapp(aap + 1)
        chengecolor5('#ff0d0d')
        changeshadow5('0px 0px 13px red')

        setTimeout(() => {
            chengecolor5('#c31e1e'); 
            changeshadow5('none'); 

          }, 2000);

   

          setclick(true)
          setTimeout(() => {
            setclick(false); 
            }, 6000);

            new Audio(audio).play();


    }
    const bspvot = () => {
        setvotebsp(bsp + 1)
        chengecolor4('#ff0d0d')
        changeshadow4('0px 0px 13px red')

        setTimeout(() => {
            chengecolor4('#c31e1e'); 
            changeshadow4('none'); 

          }, 2000);


          setclick(true)
          setTimeout(() => {
            setclick(false); 
            }, 6000);

            new Audio(audio).play();


    }
    const notavot = () => {
        setvotenota(nota + 1)
        chengecolor6('#ff0d0d')
        changeshadow6('0px 0px 13px red')

        setTimeout(() => {
            chengecolor6('#c31e1e'); 
            changeshadow6('none'); 

          }, 2000);

      

          setclick(true)
          setTimeout(() => {
            setclick(false); 
            }, 6000);

            new Audio(audio).play();

    }

  return (

       

      <div>
        <div className='evm'>
        <div className='partys'>

                <div className='party'>
                    <div className='name'>
                        <h3>1  Bharatiya Janata Party</h3>
                    </div>
                    <div className='logo'>
                        <img className='imgparty' src={require('../components/image/pngegg (1).png')} />
                    </div>
                    </div>
            <div className='votingbutton'>
                <div className='voteconfarm' style={{ backgroundColor: color, boxShadow:shadow }}></div>
                <button onClick={bjpvot} disabled={bottonclick}></button>
                {/* <audio src={audio} controls={sound} /> */}

            </div>
            </div>
            
           
            
            <div className='partys'>

<div className='party'>
    <div className='name'>
        <h3>2  Indian National Congress</h3>
    </div>
    <div className='logo'>
        <img className='imgparty' src={require('../components/image/pngegg.png')} />
    </div>
    </div>
<div className='votingbutton'>
<div className='voteconfarm' style={{ backgroundColor: color2, boxShadow:shadow2 }}></div>
<button onClick={congrasvot} disabled={bottonclick}></button>
</div>
            </div>

            <div className='partys'>

            <div className='party'>
                <div className='name'>
                    <h3>3	Communist Party of India</h3>
                </div>
                <div className='logo'>
                    <img className='imgparty' src={require('../components/image/CPIM_election_symbol.png')} />
                </div>
                </div>
            <div className='votingbutton'>
                <div className='voteconfarm' style={{ backgroundColor: color3, boxShadow:shadow3 }}></div>
            <button onClick={cpivote} disabled={bottonclick}></button>
            </div>
            </div>

            <div className='partys'>

            <div className='party'>
                <div className='name'>
                    <h3>4	Bahujan Samaj Party</h3>
                </div>
                <div className='logo'>
                    <img className='imgparty' src={require('../components/image/unnamed.png')} />
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm' style={{ backgroundColor: color4, boxShadow:shadow4 }}></div>
            <button onClick={bspvot} disabled={bottonclick}></button>
            </div>
            </div>

            <div className='partys'>

            <div className='party'>
                <div className='name'>
                    <h3>5  Aam Aadmi Party</h3>
                </div>
                <div className='logo'>
                    <img className='imgparty' src={require('../components/image/AAP_Symbol.png')} />
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm' style={{ backgroundColor: color5, boxShadow:shadow5 }}></div>
            <button onClick={aapvot} disabled={bottonclick}></button>
            </div>
            </div>

            <div className='partys'>

            <div className='party'>
                <div className='name'>
                    <h3>None Of The Above</h3>
                </div>
                <div className='logo'>
                <img className='imgparty' src={require('../components/image/1200px-NOTA_Option_Logo.svg.png')} />

                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm' style={{ backgroundColor: color6, boxShadow:shadow6 }}></div>
            <button onClick={notavot} disabled={bottonclick}></button>
            </div>
            </div>

            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button></button>
            </div>
            </div>

            
            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button ></button>
            </div>
            </div>

            
            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button ></button>
            </div>
            </div>

            
            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button ></button>
            </div>
            </div>

            
            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button ></button>
            </div>
            </div>

            
            <div className='partys'>

            <div className='party'>
                <div className='name'>
                </div>
                <div className='logo'>
                </div>
                </div>
            <div className='votingbutton'>
            <div className='voteconfarm'></div>
            <button></button>
            </div>
            </div>

            
            

        </div>

        <div className='result'>
            <div className='resultelection'><h2 style={{textAlign:'center'}}>RESULT</h2></div>
            <div className='allresult'>
                <h1>BJP : {bjp}</h1>
                <h1>congras : {congras}</h1>
                <h1>BSP : {bsp}</h1>
                <h1>AAP : {aap}</h1>
                <h1>CPI : {cpi}</h1>
                <h1>NOTA : {nota}</h1>
            </div>
        </div>

      </div>



  )
}

export default Voting