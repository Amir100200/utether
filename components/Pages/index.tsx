import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  111212345
  


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>
      
      
      <Window title={"قیمت لحظه ای تتر -(دلار)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        <center style = {{fontSize: 15}} >
          خوش آمدید
        </center>
        
        
      <div style= {{width:"1000", height:100 , backgroundColor: "#00FFFF" , borderRadius:10,
      
      textAlign: "center"
      }}>
      
      <br-x>
      
      </br-x>
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>

       قیمت لحظه ای : {
      
      (props.p.price as number).toLocaleString("fa-IR")
      
      }


      </div>

      <br-x/>
      <br-x/>
    
      
        
      <div style= {{width:"1000", height:100 , backgroundColor: "#0000006C" , borderRadius:10,
      
      textAlign: "center"
      }}>
      
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>

       تغیزات ۲۴ ساعته اخیر : {
      
         "٪" + (Number(props.p.diff24d) as number).toLocaleString("fa-IR")
      
      }

      </div>


    
      
        
      <div style= {{width:"1000", height:100 , backgroundColor: "#FFEB0EB8" , borderRadius:10,
      
      textAlign: "center"
      }}>
      
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>
      

       تغیرات هفتگی : {
      
         "٪" + (Number(props.p.diff7d) as number).toLocaleString("fa-IR")
      
      }


      </div>


      <br-x/>
      <br-x/>
    
      
        
      <div style= {{width:"1000", height:100 , backgroundColor: "#01201F52" , borderRadius:10,
      
      textAlign: "center"
      }}>
      
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>
      <br-x/>

     تغیرات ماهانه  : {
      
         "٪" + (Number(props.p.diff30d) as number).toLocaleString("fa-IR")
      
      }

      </div>

      <center style = {{fontSize: 10}} >
          تهیه شده توسظ تیم پژوهشی نمیدونم
        </center>

      </Window>
     </div>
     
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT
    console.log("priceee" , p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}