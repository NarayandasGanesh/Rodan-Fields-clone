import React, { useState } from 'react';

// import Logo from '../../olx-logo.png';
import {Link} from "react-router-dom"

import './Singup.css';

export default function Signup() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username)
    console.log(email)
    const data={email,password}
    localStorage.setItem("data",JSON.stringify(data));
    setEmail("")
    setPassword("")
    setPhone("")
    setUsername("")
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAiCAYAAAAULugVAAAABmJLR0QA/wD/AP+gvaeTAAAMtklEQVR42u2cCXAb1RnH5YQ0EEkOCeE+SkggIZKcuPJJQ0khzaXdNaaYJqklOY4jyYnlA3Jz6bBsx3JOH2laoNB22imUlmkZyjVQprTMkJZJgdJOgwdoAhToxHF8JT60/b/VrrxarVYriIld9pv5Ro72vbdv3/u9/37ve5rodJqlbfNrG3dYPYGBXI9/CP5Grtu34vO2ZXUdmpLn8RfnVPoP4LMjz+W3aSOs2Zdj4Y6l2RuDbK7bH/M8t78Hn6/kbWq4KJ2mcip9DOodx4LoFrd15fZd92oDrdnYGstm6MLth+fXNkRyRDATz3H7zuS4/J/mbgiYUjVjKvF9DXUeyfFwi4CV+rTQ/g90e9tv1AZcs7GzPR1O3e72vqmNB9hFmwIsYIwH0eWP5Lh8XUpAmzb6DLmewOso3ycD8tD8moYBXUvHMPyIzvfj87VB1+zs2+OPT9a1tHfBWeJTdrWy121uYhE7x0MNoPF5It/tW5AE5CMIJQakIH+jMtBz2X3hd3Qtbb3CPXQtrcu1gdfs7NuhQ1MA2OAoaFEnKn3VjjC7CHG01UOgDI7kugME6K7sct8V4o0ewpA/5kpAzt4U6Ll6e/PQ5ObWXmnbeAvcpA28ZmNju9ufQ8w8kgAd7+c1t7GZwb0s4DyTXRk4c+33644bKee6abZS5vI7K9+fvaZ2ZJ5jy7DJG+r5+rbwoDG47xMo8VCS9l7j3gaaaSa26Sudcww2RyiTKXt7VvGGT83rdh7LdweP57oCr+OV35RXGbhZVUPNB+YAaBJqJAVa8Ixw+7CBdkYA8xkDZR8yUA7WQDlZA1MW0d+xns1o3J+8/u6OV3X79l2asPlsOTQrMbsS1msz/NWwDD1VtgUQ9RkpRySTLmMt63Yi/RUQ+zD8FLwzZ0NgdWqgf3A9gDuKDdopJZgn+cOsvqhskECcSTkjxKNAR11fXB6Byp+Mq4dMiS7ctjqpIre0Vej2tD8Jb9TtbmtCnRewuE7p9jw0U5vq/3OQAc0TUMUeDiDa0Z+17t6+PHcwIoE55vnuQA+U+nDhRt9cxZZ9vklQz1KA1CneFIp98o6GYT3jHOBgpsuwkOJhJn6+o6oPi+JZQNqs29V6hcpQ5yk4G+d72veRSzd5fJfkVvqus7p8862u4JzC9T5ADkXXbGIb4A3pKUcvD06f3uZYmuMJZAPa/8BPJwMamzeygevN21i/JuVN8Oqf7Gssn+QLnwaMrK65dRTmnaEh9GEIII/MXlvLGiUgR93eo6cdTWk92N69FwLgf0iBvv7uxmGS7uMPcLrg5CCmP88T6Mfna1iom62upukaGRPMjLbSm40CyLSjh8TLwjWiVoD1+agKywPNQe0K9sLvV7qPnnLehvt04R4j+u9WsFPdW6DIIXZSoIWdcs+DiI+dnyFG/wgHKt2ZjHPYIAM0t+BsDq/aZyPx/UJv/ZHzwm0RMcyTwu0sDnNYuUMY3kle+4Tq/YFm48CWLDnPaHO8JwLmM91K79QEKFyBtYD2JMKO/qRQu6DQ7sBBLqwQ2aXL7HpAuJsovkFWcTnVHdItKYsdeuDf9+H7fvmyzj4Dba9WeiyEEOZCHJkXYBHCI5bqBi57IgY6o6WNvXbrLjbX41eCuju/InSpBspEUOUiR4WRqHEUqH7ErfckK0teu3gNh/JIWAElTgJ1L9TsIFehpOQCI11aQRaI3uZUANkR0dOl8WEKwDbY7B8lq6MnoRAJOSQLh+Sn813BQAGUFW+TEYDMCm6uIUC3stKQI7N+X8TirSfgnsEhTi+O3kdGYQ70m72hLRop491KSiYDjI/FMWkmVXZ9qmqLKxtn5LnrPVDpwwBmACk7hBj+6Cfia2vFg8dmFq9/GsD1I7Q4rQCx4D7ZsARxu3E0jk9wI01iaPvhC2jHNVxIhBgf0P6rAP2As2KQBV/oDbFTmw4kAI0NamRaw/6/Xb19V0Oux7cfz9NFTh7nbm4cMIYObNNgGe+qTDsoQNEdUzubY3C6be2MdNrI9/oy566tW3/1XVW/vuxOT+cMpnxEUNtUEON+Eb3NXqu4MUV8rFcAmoQnM4vK+yzO7W8A1n4SUiRAjE0dvBt/D+a7/Z05VYGn9Q0HjiQCHXP83qPt2KRw20A0+9Ghxc3jP4PhfJ5sxgDFKR7qt2csdX2hHfwsptyoX1W2Qk/ZdxlszjcRCgxG72FnAaYAOdz+1nTaPlvVolvlKCL9Qw68bzqzjr242MXihJCdvbqGXViOPLjLhzShXwSwn83f4D+Dv09CoZ8pcAe9CH8WlpRI8tF7OtYC1g8VoCY+Inv4otk4MmzyoIzI6zqfm2ZzWsdug4nYd5XzW1zqz+Z4FCq7RWe3p30KN8e++ZIbHVufyal4gEBKctxsvkuiwq5gBPAi3PH9NXf9A7epapj80m5PexWg/bc8zG1NGizj3PS0cxlizt9LN1Dj3tDfQk+QKiDpQlegq9AdPF2IOB3qewpH7r/Jr6wv+Fztkh9GhQ/eCngbAPFjyH0fBOQrNFImQrwMhTTSayb865PE7Nrhxlfcpi0vvVwbBc0000wzzTQbd1ZrojbVWOhtim6iNnizVl4lV7+usOSCahOzutZC3a3URrWZ9not9C2ybSygTcp9YKpqFhTlo6jqX4FVW6hVpG6tia716VJvDKuzqNtIea+paIFiORPzba5dM6PmvwXIQN9Lts5jjIpzsOj2C1POAe91liJL/PzRtVx/LFRhQrsW+nZV7ZrouoS6ZmpJdN4oTzo8VWfZzEr3IrzVmai8VHOJMbm22szUJG3LTG3xmullce3gwoc1ZppV4V01ZibhXB/fv6SyPudyg4N2S1XW/zsm79ZUA0r6ibLdQj1MalnKRW2m9vHlT6L8SoW2m/k2H02ZrMAiImXvXrjqBqVydRbbdWrHT/ospL/8tZ0yc/Mrle2eSqhropu4ayb6vXRghvA51M4lEQa5NjbNL76I9ElVO+KFOAoz9QuiIolObxdVpsQ39c5dOTU2yCb6ULWFcSVztPMGX+4pRZihwnF1oeg8aP/lywylAhp1fhRtK7ZQP9poKjGohJn4MFG8cwRzSH4eok4UK22YLfTbSm1CYIrHCOZq6VyiL3vx/af89UE5oImY8Nf/mXQcwBtf5neJMJuo+5QmhJtAM3OH+FqlxTZjVHHpu5TVkn6SL/u8EswuKz1NYbV+wJd7K3nYtGoRro8QZa7Komfj8xMBEpUwd48uLOqHLqtrypcJs9JbIcm4qlHml9INP88GzBC7TLkyHDdoN9lcEs54gf2T0jwjXKHrTMtnqoaZwJUMZtLQlwUzP8B1QjkCQJL7vBztK31vVKURd0XrDEhVTQ5mKMVuKNXDInV5mSykCQ2zjDKTfcq5gpl/e3pjc2li5kpgtvHX3lV625O4PlnM/C4m8QWpc1IvTGx0EyZVS37Sqe+NNcyih2S9WXRB8hVNHxfaIaEQwH6fB/yXKpS5nR+XbbzCc2NTa7bdmApmEs/i+l/iPaow8eNKexXCjB74CcFJyHQWlDkx9jYzvnMJc43Jtnw0RGW+GTceC6kr8f1plbF3SA7mfn4Au0UFB/nvjmJQ66UduucGelZMmZHRGGuYyT1iA2W+fY5M/N4ZU1eLzSo4IA7z9SKYnMVqYI6qB1WMf/cKG0P08ztQtWBSmPHqk+wT3Fx/LMz9cYoinTylDaCF/vlZgPmtRGWzWc8lzMhq3Bl7xixmnsz9F+PafhIbyzmuPZ0QpsiEGRn4u1V4NRPQknXIm73yYtEGcM1YwlyC3ysDyj8Iykv+LQF9q8qVfFguVScHM/eMC5hs9O8Yf+20kL2ZUGGGiX5mPMXMZO7Q7ot8uY+l+xJi26wl08XhXeKYFS3l63emjJm5XfVo+qNJDgCxMgPmChLYJ3Oy64yWZZ5VgrlqHnOFuF50ornrr4jeAluTpeLwBvktPh9PcEyoqL5TLczESJ/IIpCkyDSYU2UzTPQ14rkkexbwtlaczkW4s0Om3z/l3qJmer0KmI+q2gDyahcRUiDSlUZWFB/jpZNnfvgL5JlRn/mZdGGRrAM/eC8qHmCY6T8LKTtpqk4JZmEjjNfzExMSZhWekLURYE6V95bsQ9LIM5O6P5F9S2Js02DqZfEDv0NWHzmZkd91Uh4+Fu0kqheXCometK3jU2aDKW7ay8EkEx+RTIh40xPn0RTOm/CHpHluTjUt9Hx8/xkpy58sKanN4tjGSqruJrqRfE/ia6UFQfYOfBsdKmE+IY3v5U67hH4RxUnrBDe6uT0hd4oHkXgs6bjG+7AUZsz7gyrrPiKpVyzwIuNH4a9BFNow/kl/kkoYQblXJfs3qfeQswvh5PN/g1GEREeyNbgAAAAASUVORK5CYII="></img>

        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            required

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
           
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
         
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
       
        <Link  style={{textDecoration:"none"}} to="/login">< button >Login</button></Link>
      </div>
    </div>
  );
}
