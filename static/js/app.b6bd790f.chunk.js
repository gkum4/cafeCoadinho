(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{170:function(e,n,t){e.exports=t.p+"static/media/coffeeCup.7f537a5f.png"},217:function(e,n,t){e.exports=t.p+"static/media/grao.1b3dae4b.png"},259:function(e,n,t){"use strict";var a=t(8),r=t.n(a),o=t(0),c=t.n(o),i=t(3),u=t(77),l=t(4),s=t(178),f=t(223),m=t(14),d=t.n(m),p=t(70),g=Object(o.createContext)({}),x=function(e){var n=e.children,t=Object(o.useState)(""),a=r()(t,2),i=a[0],u=a[1],l=Object(o.useState)(""),s=r()(l,2),f=s[0],m=s[1],x=Object(o.useState)(""),h=r()(x,2),b=h[0],E=h[1],y=Object(o.useState)(0),w=r()(y,2),v=w[0],C=w[1];Object(o.useEffect)((function(){p.a.getItem("@PreferenciasUsuario").then((function(e){if(e){var n=JSON.parse(e);u(n.typeOfCoffee),m(n.roastOfCoffee),E(n.intensityOfCoffee)}}))}),[]);var k=Object(o.useMemo)((function(){var e=60;return"dark"===f&&(e-=10),"light"===f&&(e+=10),"intense"===b&&(e+=7),"weak"===b&&(e-=7),e}),[f,b]),O=Object(o.useMemo)((function(){return Number((130*v+10*v).toFixed(2))}),[v,k]),M=Object(o.useMemo)((function(){return Number((O*k/1e3).toFixed(2))}),[O,k]),j=Object(o.useMemo)((function(){return Number((3*M).toFixed(2))}),[M]),z=Object(o.useCallback)((function(e){u(e)}),[]),F=Object(o.useCallback)((function(e){m(e)}),[]),R=Object(o.useCallback)((function(e){E(e)}),[]),T=Object(o.useCallback)((function(e){C(e)}),[]),P=Object(o.useCallback)((function(){var e;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e={typeOfCoffee:i,roastOfCoffee:f,intensityOfCoffee:b},n.next=3,d.a.awrap(p.a.setItem("@PreferenciasUsuario",JSON.stringify(e)));case 3:case"end":return n.stop()}}),null,null,null,Promise)}),[i,f,b]);return c.a.createElement(g.Provider,{value:{typeOfCoffee:i,gramsOfCoffee:M,gramsOfWater:O,gramsOfWaterForBloom:j,gramsPerLiter:k,intensityOfCoffee:b,numberOfCups:v,roastOfCoffee:f,setNewIntensityOfCoffee:R,setNewNumberOfCups:T,setNewRoastOfCoffee:F,setNewTypeOfCoffee:z,savePreferences:P}},n)};function h(){return Object(o.useContext)(g)}var b=t(461),E=t(20),y=t(5),w=t.n(y),v=t(6),C=t(15);function k(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return k=function(){return e},e}function O(){var e=w()(["\n  height: 44px;\n  width: 84px;\n  justify-content: center;\n  align-items: center;\n  background-color: #1da1f2;\n  border-radius: 22px;\n"]);return O=function(){return e},e}function M(){var e=w()(["\n  font-size: 36px;\n  text-align: center;\n  color: #0e0e0e;\n  margin-bottom: 15px;\n"]);return M=function(){return e},e}function j(){var e=w()(["\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]);return j=function(){return e},e}C.a.get("window").width,C.a.get("window").height;var z=v.a.View(j()),F=v.a.Text(M()),R=v.a.TouchableOpacity(O()),T=v.a.Text(k()),P=function(){var e=Object(E.useNavigation)().navigate;return c.a.createElement(z,null,c.a.createElement(F,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Antes de tudo, preciso saber de algumas coisas."),c.a.createElement(R,{onPress:function(){e("Informations2")}},c.a.createElement(T,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Ok")))},_=t(459);function V(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return V=function(){return e},e}function S(){var e=w()(["\n  height: 44px;\n  width: 70%;\n  justify-content: center;\n  align-items: center;\n  background-color: #1da1f2;\n  border-radius: 22px;\n  align-self: center;\n"]);return S=function(){return e},e}function I(){var e=w()(["\n  height: 55px;\n"]);return I=function(){return e},e}function N(){var e=w()(["\n  font-size: 18;\n  color: #0e0e0e;\n  text-align: center;\n"]);return N=function(){return e},e}function J(){var e=w()(["\n  border-width: 3px;\n  border-color: #0e0e0e;\n  border-radius: 8px;\n  height: 104px;\n  width: 104px;\n  justify-content: center;\n  margin-bottom: 5px;\n"]);return J=function(){return e},e}function G(){var e=w()(["\n"]);return G=function(){return e},e}function B(){var e=w()(["\n  width: 100%;\n  max-width: 500px;\n  height: 110px;\n  flex-direction: row;\n  padding: 0px 30px;\n  justify-content: space-between;\n  align-self: center;\n"]);return B=function(){return e},e}function W(){var e=w()(["\n  flex: 1;\n  justify-content: space-between;\n"]);return W=function(){return e},e}function q(){var e=w()(["\n  font-size: 36px;\n  color: #0e0e0e;\n  margin-bottom: 40px;\n"]);return q=function(){return e},e}function A(){var e=w()(["\n  width: 45px;\n"]);return A=function(){return e},e}function D(){var e=w()(["\n  flex: 1;\n  padding: 30px;\n"]);return D=function(){return e},e}C.a.get("window").width,C.a.get("window").height;var H=v.a.View(D()),L=v.a.TouchableOpacity(A()),Q=v.a.Text(q()),U=v.a.View(W()),X=v.a.View(B()),K=v.a.TouchableOpacity(G()),Y=v.a.View(J()),Z=v.a.Text(N()),$=v.a.Image(I()),ee=v.a.TouchableOpacity(S()),ne=v.a.Text(V()),te=function(){var e=Object(o.useState)(""),n=r()(e,2),a=n[0],i=n[1],u=Object(E.useNavigation)(),l=u.navigate,s=u.goBack,f=h().setNewTypeOfCoffee,m=Object(o.useCallback)((function(){f(a),l("Informations3")}),[l,a]);return c.a.createElement(H,null,c.a.createElement(L,{onPress:function(){return s()}},c.a.createElement(_.a,{name:"arrowleft",size:40,color:"#0e0e0e"})),c.a.createElement(Q,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Voc\xea compra seu caf\xe9 mo\xeddo ou em gr\xe3o?"),c.a.createElement(U,null,c.a.createElement(X,null,c.a.createElement(K,{onPress:function(){return i("po")}},c.a.createElement(Y,{style:"po"===a&&{borderColor:"#1da1f2"}},c.a.createElement($,{source:t(413),resizeMode:"contain",style:{height:70}})),c.a.createElement(Z,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Mo\xeddo")),c.a.createElement(K,{onPress:function(){return i("grao")}},c.a.createElement(Y,{style:"grao"===a&&{borderColor:"#1da1f2"}},c.a.createElement($,{source:t(217),resizeMode:"contain"})),c.a.createElement(Z,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Gr\xe3o"))),c.a.createElement(ee,{style:""===a&&{backgroundColor:"#C8C8C8"},onPress:m,disabled:""===a},c.a.createElement(ne,null,"Pronto"))))};function ae(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return ae=function(){return e},e}function re(){var e=w()(["\n  height: 44px;\n  width: 70%;\n  justify-content: center;\n  align-items: center;\n  background-color: #1da1f2;\n  border-radius: 22px;\n  align-self: center;\n"]);return re=function(){return e},e}function oe(){var e=w()(["\n  font-size: 12px;\n  text-align: center;\n  color: #7e7e7e;\n"]);return oe=function(){return e},e}function ce(){var e=w()(["\n  height: 257px;\n  width: 80px;\n  border-width: 3px;\n  border-radius: 8px;\n  border-color: transparent;\n"]);return ce=function(){return e},e}function ie(){var e=w()(["\n  font-size: 18;\n  color: #0e0e0e;\n  text-align: center;\n"]);return ie=function(){return e},e}function ue(){var e=w()(["\n"]);return ue=function(){return e},e}function le(){var e=w()(["\n  max-width: 500px;\n  align-self: center;\n  width: 100%;\n  height: 260px;\n  flex-direction: row;\n  padding: 0px 15px;\n  justify-content: space-between;\n"]);return le=function(){return e},e}function se(){var e=w()(["\n  flex: 1;\n  justify-content: space-between;\n"]);return se=function(){return e},e}function fe(){var e=w()(["\n  font-size: 36px;\n  color: #0e0e0e;\n  margin-bottom: 40px;\n"]);return fe=function(){return e},e}function me(){var e=w()(["\n  width: 45px;\n"]);return me=function(){return e},e}function de(){var e=w()(["\n  flex: 1;\n  padding: 30px;\n"]);return de=function(){return e},e}C.a.get("window").width,C.a.get("window").height;var pe=v.a.View(de()),ge=v.a.TouchableOpacity(me()),xe=v.a.Text(fe()),he=v.a.View(se()),be=v.a.View(le()),Ee=v.a.TouchableOpacity(ue()),ye=v.a.Text(ie()),we=v.a.Image(ce()),ve=v.a.Text(oe()),Ce=v.a.TouchableOpacity(re()),ke=v.a.Text(ae()),Oe=function(){var e=Object(o.useState)(""),n=r()(e,2),a=n[0],i=n[1],u=Object(E.useNavigation)(),l=u.navigate,s=u.goBack,f=h(),m=f.setNewRoastOfCoffee,d=(f.typeOfCoffee,Object(o.useCallback)((function(){m(a),l("Informations4")}),[l,a]));return c.a.createElement(pe,null,c.a.createElement(ge,{onPress:function(){return s()}},c.a.createElement(_.a,{name:"arrowleft",size:40,color:"#0e0e0e"})),c.a.createElement(xe,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Qual a torra do seu caf\xe9?"),c.a.createElement(he,null,c.a.createElement(be,null,c.a.createElement(Ee,{onPress:function(){return i("light")}},c.a.createElement(we,{source:t(414),resizeMode:"contain",style:"light"===a&&{borderColor:"#1da1f2"}}),c.a.createElement(ye,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Clara")),c.a.createElement(Ee,{onPress:function(){return i("medium")}},c.a.createElement(we,{source:t(415),resizeMode:"contain",style:"medium"===a&&{borderColor:"#1da1f2"}}),c.a.createElement(ye,{style:{fontFamily:"ChelseaMarket_400Regular"}},"M\xe9dia")),c.a.createElement(Ee,{onPress:function(){return i("dark")}},c.a.createElement(we,{source:t(416),resizeMode:"contain",style:"dark"===a&&{borderColor:"#1da1f2"}}),c.a.createElement(ye,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Escura"))),c.a.createElement(ve,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Caf\xe9 vendido mo\xeddo normalmente tem a torra escura."),c.a.createElement(Ce,{style:""===a&&{backgroundColor:"#C8C8C8"},onPress:d,disabled:""===a},c.a.createElement(ke,null,"Pronto"))))};function Me(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return Me=function(){return e},e}function je(){var e=w()(["\n  height: 44px;\n  width: 70%;\n  justify-content: center;\n  align-items: center;\n  background-color: #1da1f2;\n  border-radius: 22px;\n  align-self: center;\n"]);return je=function(){return e},e}function ze(){var e=w()(["\n  height: 80px;\n  width: 80px;\n"]);return ze=function(){return e},e}function Fe(){var e=w()(["\n  font-size: 18;\n  color: #0e0e0e;\n  text-align: center;\n"]);return Fe=function(){return e},e}function Re(){var e=w()(["\n  border-width: 3px;\n  border-color: transparent;\n  border-radius: 8px;\n  height: 80px;\n  width: 80px;\n  justify-content: center;\n  margin-bottom: 5px;\n  align-self: center;\n"]);return Re=function(){return e},e}function Te(){var e=w()(["\n"]);return Te=function(){return e},e}function Pe(){var e=w()(["\n  width: 100%;\n  height: 110px;\n  align-self: center;\n  max-width: 500px;\n  flex-direction: row;\n  padding: 0px 5px;\n  justify-content: space-between;\n"]);return Pe=function(){return e},e}function _e(){var e=w()(["\n  flex: 1;\n  justify-content: space-between;\n"]);return _e=function(){return e},e}function Ve(){var e=w()(["\n  font-size: 36px;\n  color: #0e0e0e;\n  margin-bottom: 40px;\n"]);return Ve=function(){return e},e}function Se(){var e=w()(["\n  width: 45px;\n"]);return Se=function(){return e},e}function Ie(){var e=w()(["\n  flex: 1;\n  padding: 30px;\n"]);return Ie=function(){return e},e}C.a.get("window").width,C.a.get("window").height;var Ne=v.a.View(Ie()),Je=v.a.TouchableOpacity(Se()),Ge=v.a.Text(Ve()),Be=v.a.View(_e()),We=v.a.View(Pe()),qe=v.a.TouchableOpacity(Te()),Ae=v.a.View(Re()),De=v.a.Text(Fe()),He=v.a.Image(ze()),Le=v.a.TouchableOpacity(je()),Qe=v.a.Text(Me()),Ue=function(){var e=Object(o.useState)(""),n=r()(e,2),a=n[0],i=n[1],u=Object(E.useNavigation)(),l=u.goBack,s=u.reset,f=h(),m=f.setNewIntensityOfCoffee,p=f.savePreferences,g=Object(o.useCallback)((function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(p());case 2:s({routes:[{name:"Home"}],index:0});case 3:case"end":return e.stop()}}),null,null,null,Promise)}),[s,a]);return c.a.createElement(Ne,null,c.a.createElement(Je,{onPress:function(){return l()}},c.a.createElement(_.a,{name:"arrowleft",size:40,color:"#0e0e0e"})),c.a.createElement(Ge,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Qual \xe9 a intensidade que voc\xea gosta?"),c.a.createElement(Be,null,c.a.createElement(We,null,c.a.createElement(qe,{onPress:function(){i("weak"),m("weak")}},c.a.createElement(Ae,{style:["weak"===a&&{borderColor:"#1da1f2"},{backgroundColor:"#8B6047"}]},c.a.createElement(He,{source:t(170),resizeMode:"contain"})),c.a.createElement(De,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Fraco")),c.a.createElement(qe,{onPress:function(){i("balanced"),m("balanced")}},c.a.createElement(Ae,{style:["balanced"===a&&{borderColor:"#1da1f2"},{backgroundColor:"#522F1B"}]},c.a.createElement(He,{source:t(170),resizeMode:"contain"})),c.a.createElement(De,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Equilibrado")),c.a.createElement(qe,{onPress:function(){i("intense"),m("intense")}},c.a.createElement(Ae,{style:["intense"===a&&{borderColor:"#1da1f2"},{backgroundColor:"#270E00"}]},c.a.createElement(He,{source:t(170),resizeMode:"contain"})),c.a.createElement(De,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Intenso"))),c.a.createElement(Le,{style:""===a&&{backgroundColor:"#C8C8C8"},onPress:g,disabled:""===a},c.a.createElement(Qe,null,"Pronto"))))},Xe=t(460);function Ke(){var e=w()(["\n  width: 46px;\n  height: 75px;\n"]);return Ke=function(){return e},e}function Ye(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n  text-align: center;\n"]);return Ye=function(){return e},e}function Ze(){var e=w()(["\n  height: 150px;\n  width: 150px;\n  margin-bottom: 10px;\n"]);return Ze=function(){return e},e}function $e(){var e=w()(["\n  background-color: #1DA1F2;\n  border-radius: 135px;\n  height: 270px;\n  width: 270px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 10px 5px 5px #00000070;\n"]);return $e=function(){return e},e}function en(){var e=w()(["\n  color: #5A2100;\n  text-align: center;\n  font-size: 24px;\n"]);return en=function(){return e},e}function nn(){var e=w()(["\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]);return nn=function(){return e},e}function tn(){var e=w()(["\n  height: 71px;\n  width: 71px;\n"]);return tn=function(){return e},e}function an(){var e=w()(["\n  height: 75px;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n"]);return an=function(){return e},e}function rn(){var e=w()(["\n  flex: 1;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n"]);return rn=function(){return e},e}var on=v.a.View(rn()),cn=v.a.View(an()),un=v.a.Image(tn()),ln=v.a.View(nn()),sn=v.a.Text(en()),fn=v.a.TouchableOpacity($e()),mn=v.a.Image(Ze()),dn=v.a.Text(Ye()),pn=v.a.TouchableOpacity(Ke()),gn=function(){var e=Object(E.useNavigation)().navigate;return c.a.createElement(on,null,c.a.createElement(cn,null,c.a.createElement(un,{source:t(417)}),c.a.createElement(ln,null,c.a.createElement(sn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Caf\xe9 Coadinho"))),c.a.createElement(fn,{onPress:function(){return e("Setup1")}},c.a.createElement(mn,{source:t(418),resizeMode:"contain"}),c.a.createElement(dn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Fazer Caf\xe9")),c.a.createElement(pn,{onPress:function(){return e("Informations2")}},c.a.createElement(Xe.a,{name:"gear",size:45,color:"#0e0e0e"})))};function xn(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return xn=function(){return e},e}function hn(){var e=w()(["\n  width: 70%;\n  height: 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 22px;\n  background-color: #1da1f2;\n  align-self: center;\n"]);return hn=function(){return e},e}function bn(){var e=w()(["\n  color: #7e7e7e;\n  text-align: center;\n  font-size: 12px;\n"]);return bn=function(){return e},e}function En(){var e=w()(["\n  width: 120px;\n  height: 120px;\n"]);return En=function(){return e},e}function yn(){var e=w()(["\n  background-color: transparent;\n  font-size: 36px;\n  width: 149px;\n  color: #0e0e0e;\n  text-align: center;\n  border-bottom-width: 1px;\n  border-bottom-color: #0e0e0e;\n"]);return yn=function(){return e},e}function wn(){var e=w()(["\n  width: 100%;\n  height: 125px;\n  max-width: 500px;\n  align-self: center;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return wn=function(){return e},e}function vn(){var e=w()(["\n  color: #0e0e0e;\n  font-size: 36px;\n"]);return vn=function(){return e},e}function Cn(){var e=w()(["\n  font-size: 24px;\n  color: #0e0e0e;\n"]);return Cn=function(){return e},e}function kn(){var e=w()(["\n  width: 40px;\n"]);return kn=function(){return e},e}function On(){var e=w()(["\n\n"]);return On=function(){return e},e}function Mn(){var e=w()(["\n  flex: 1;\n  padding: 30px;\n  justify-content: space-between;\n"]);return Mn=function(){return e},e}var jn=v.a.View(Mn()),zn=v.a.View(On()),Fn=v.a.TouchableOpacity(kn()),Rn=v.a.Text(Cn()),Tn=v.a.Text(vn()),Pn=v.a.View(wn()),_n=v.a.TextInput(yn()),Vn=v.a.Image(En()),Sn=v.a.Text(bn()),In=v.a.TouchableOpacity(hn()),Nn=v.a.Text(xn()),Jn=function(){var e=Object(o.useState)(""),n=r()(e,2),a=n[0],i=n[1],u=h().setNewNumberOfCups,l=Object(E.useNavigation)(),s=l.reset,f=l.navigate,m=Object(o.useCallback)((function(){s({routes:[{name:"Home"}],index:0})}),[s]),d=Object(o.useCallback)((function(e){Number(e)>300||(isNaN(Number(e))&&(e=e.slice(0,-1)),i(e),u(Number(e)))}),[]);return c.a.createElement(jn,null,c.a.createElement(zn,null,c.a.createElement(Fn,{onPress:m},c.a.createElement(Rn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"X")),c.a.createElement(Tn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Quanto de caf\xe9 voc\xea quer fazer?")),c.a.createElement(Pn,null,c.a.createElement(_n,{style:{fontFamily:"ChelseaMarket_400Regular"},keyboardType:"number-pad",value:a,onChangeText:d}),c.a.createElement(Vn,{source:t(419),resizeMode:"contain"})),c.a.createElement(Sn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Cada x\xedcara equivale a aproximadamente 130ml de caf\xe9 coado."),c.a.createElement(In,{disabled:!a,onPress:function(){return f("Setup2")},style:!a&&{backgroundColor:"#C8C8C8"}},c.a.createElement(Nn,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Pr\xf3ximo")))};function Gn(){var e=w()(["\n  color: #eaeaea;\n  font-size: 18px;\n"]);return Gn=function(){return e},e}function Bn(){var e=w()(["\n  width: 70%;\n  height: 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 22px;\n  background-color: #1da1f2;\n  align-self: center;\n"]);return Bn=function(){return e},e}function Wn(){var e=w()(["\n  color: #7e7e7e;\n  text-align: center;\n  font-size: 12px;\n"]);return Wn=function(){return e},e}function qn(){var e=w()(["\n  height: 75px;\n  width: 60px;\n"]);return qn=function(){return e},e}function An(){var e=w()(["\n  height: 75px;\n  width: 60px;\n"]);return An=function(){return e},e}function Dn(){var e=w()(["\n  font-size: 36px;\n  color: #0e0e0e;\n  text-align: center;\n"]);return Dn=function(){return e},e}function Hn(){var e=w()(["\n  height: 115px;\n  width: 95.5px;\n"]);return Hn=function(){return e},e}function Ln(){var e=w()(["\n  font-size: 36px;\n  color: #5A2100;\n  text-align: center;\n  margin-bottom: 10px;\n"]);return Ln=function(){return e},e}function Qn(){var e=w()(["\n"]);return Qn=function(){return e},e}function Un(){var e=w()(["\n  width: 100%;\n  height: 125px;\n  max-width: 600px;\n  align-self: center;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return Un=function(){return e},e}function Xn(){var e=w()(["\n  color: #0e0e0e;\n  font-size: 36px;\n"]);return Xn=function(){return e},e}function Kn(){var e=w()(["\n  font-size: 24px;\n  color: #0e0e0e;\n"]);return Kn=function(){return e},e}function Yn(){var e=w()(["\n  width: 40px;\n"]);return Yn=function(){return e},e}function Zn(){var e=w()(["\n\n"]);return Zn=function(){return e},e}function $n(){var e=w()(["\n  flex: 1;\n  padding: 30px;\n  justify-content: space-between;\n"]);return $n=function(){return e},e}C.a.get("window").width,C.a.get("window").height;var et=v.a.View($n()),nt=v.a.View(Zn()),tt=v.a.TouchableOpacity(Yn()),at=(v.a.Text(Kn()),v.a.Text(Xn())),rt=v.a.View(Un()),ot=v.a.View(Qn()),ct=v.a.Text(Ln()),it=v.a.Image(Hn()),ut=v.a.Text(Dn()),lt=v.a.View(An()),st=v.a.Image(qn()),ft=v.a.Text(Wn()),mt=v.a.TouchableOpacity(Bn()),dt=v.a.Text(Gn()),pt=function(){var e=Object(E.useNavigation)(),n=e.goBack,a=e.navigate,r=h().gramsOfCoffee,i=Object(o.useCallback)((function(){n()}),[n]);return c.a.createElement(et,null,c.a.createElement(nt,null,c.a.createElement(tt,{onPress:i},c.a.createElement(_.a,{name:"arrowleft",size:36,color:"#0e0e0e"})),c.a.createElement(at,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Voc\xea ir\xe1 precisar de:")),c.a.createElement(rt,null,c.a.createElement(ot,null,c.a.createElement(ct,{style:{fontFamily:"ChelseaMarket_400Regular"}},r,"g"),c.a.createElement(it,{source:t(420),resizeMode:"contain"})),c.a.createElement(ut,{style:{fontFamily:"ChelseaMarket_400Regular"}},"de"),c.a.createElement(lt,null,c.a.createElement(st,{source:t(217),resizeMode:"contain"}))),c.a.createElement(ft,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Quantidade calculada com base em seu tipo de caf\xe9 e suas prefer\xeancias definidas anteriormente."),c.a.createElement(mt,{onPress:function(){return a("Instructions")}},c.a.createElement(dt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Pr\xf3ximo")))};function gt(){var e=w()(["\n  font-size: 24px;\n"]);return gt=function(){return e},e}function xt(){var e=w()(["\n  position: absolute;\n  top: 15px;\n  left: 15px;\n"]);return xt=function(){return e},e}function ht(){var e=w()(["\n  font-size: 28px;\n  text-align: center;\n  color: #eaeaea;\n"]);return ht=function(){return e},e}function bt(){var e=w()(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"]);return bt=function(){return e},e}function Et(){var e=w()(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n"]);return Et=function(){return e},e}function yt(){var e=w()(["\n  width: 100%;\n  height: 60px;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  flex-direction: row;\n"]);return yt=function(){return e},e}function wt(){var e=w()(["\n  font-size: 18px;\n"]);return wt=function(){return e},e}function vt(){var e=w()(["\n  font-size: 24px;\n  color: #1596F3;\n"]);return vt=function(){return e},e}function Ct(){var e=w()(["\n  margin-top: 15px;\n  font-size: 24px;\n  text-align: center;\n"]);return Ct=function(){return e},e}function kt(){var e=w()(["\n  height: ","px;\n  width: ","px;\n  border-radius: 8px;\n"]);return kt=function(){return e},e}function Ot(){var e=w()(["\n  height: ","px;\n  width: ","px;\n  padding: 0px 15px;\n  align-items: center;\n  justify-content: center;\n"]);return Ot=function(){return e},e}function Mt(){var e=w()(["\n  flex: 1;\n"]);return Mt=function(){return e},e}var jt=C.a.get("window").width,zt=C.a.get("window").height,Ft=v.a.ScrollView(Mt()),Rt=v.a.View(Ot(),zt,jt),Tt=v.a.Image(kt(),zt<jt?.8*zt:.8*jt,zt<jt?.8*zt:.8*jt),Pt=v.a.Text(Ct()),_t=v.a.Text(vt()),Vt=v.a.Text(wt()),St=v.a.View(yt()),It=v.a.View(Et()),Nt=v.a.TouchableOpacity(bt()),Jt=v.a.Text(ht()),Gt=v.a.TouchableOpacity(xt()),Bt=v.a.Text(gt()),Wt=C.a.get("window").width,qt=(C.a.get("window").height,function(){var e=Object(o.useState)(0),n=r()(e,2),a=n[0],i=n[1],u=Object(o.useState)(!1),l=r()(u,2),s=l[0],f=l[1],m=h(),d=m.gramsOfWater,p=m.gramsOfWaterForBloom,g=Object(E.useNavigation)().reset,x=Object(o.createRef)(),b=function(){f(!0)},y=Object(o.useMemo)((function(){return 11!==a}),[a]),w=Object(o.useMemo)((function(){return 0!==a}),[a]),v=Object(o.useCallback)((function(){g({routes:[{name:"Home"}],index:0})}),[g]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ft,{scrollEventThrottle:200,horizontal:!0,pagingEnabled:!0,showsHorizontalScrollIndicator:!1,decelerationRate:"normal",scrollEnabled:!1,ref:x},c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(421),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Ferver a \xe1gua (preferencialmente \xe1gua mineral ou filtrada).")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(422),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Escaldar o filtro de papel no coador.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(423),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Colocar o p\xf3 no filtro e dar umas batidas leves para nivelar.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(424),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Colocar o conjunto em cima de uma balan\xe7a e tarar.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(425),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Colocar",c.a.createElement(_t,{style:{fontFamily:"ChelseaMarket_400Regular"}}," "+p,"g")," ","de \xe1gua para molhar o caf\xe9 uniformemente.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(426),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Segurar o coador com as duas m\xe3os e gentilmente balan\xe7ar de forma a rotacionar o p\xf3 pelo filtro.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(427),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Esperar at\xe9 o p\xf3 parar de soltar bolhas (40 segundos aproximadamente).")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(428),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Colocar o resto da \xe1gua em formato circular pela superf\xedcie do p\xf3 (evitar que a \xe1gua caia direto no filtro de papel).")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(429),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Chegando aos",c.a.createElement(_t,{style:{fontFamily:"ChelseaMarket_400Regular"}}," "+d,"g")," ","na balan\xe7a, pare de colocar \xe1gua.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(430),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Espere a \xe1gua abaixar um pouco e repita o processo de rota\xe7\xe3o do p\xf3 pelo filtro.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(431),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Aguarde at\xe9 que boa parte da \xe1gua seja filtrada e retire o coador de cima da caneca/chaleira.")),c.a.createElement(Rt,null,c.a.createElement(Tt,{source:t(432),resizeMode:"contain"}),c.a.createElement(Pt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Aprecie seu delicioso caf\xe9!"))),c.a.createElement(St,null,c.a.createElement(_.a,{name:"arrowleft",size:40,color:w?"#0e0e0e":"#FFE6D3"}),c.a.createElement(Vt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"P\xe1gina ",a+1),c.a.createElement(_.a,{name:"arrowright",size:40,color:y?"#0e0e0e":"#FFE6D3"})),c.a.createElement(It,null,c.a.createElement(Nt,{onPress:function(){var e;if(w){var n=a-1;null==(e=x.current)||e.scrollTo({x:Wt*n,y:0,animated:!0}),i(n)}}}),c.a.createElement(Nt,{onPress:function(){var e;if(y){var n=a+1;null==(e=x.current)||e.scrollTo({x:Wt*n,y:0,animated:!0}),i(n)}}})),!s&&c.a.createElement(It,{style:{backgroundColor:"rgba(0,0,0,0.9)"}},c.a.createElement(Nt,{activeOpacity:1,onPress:b,style:{borderRightColor:"#eaeaea",borderRightWidth:1.5,borderStyle:"dotted"}},c.a.createElement(_.a,{name:"arrowleft",size:60,color:"#eaeaea"}),c.a.createElement(Jt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Voltar")),c.a.createElement(Nt,{activeOpacity:1,onPress:b,style:{borderLeftColor:"#eaeaea",borderLeftWidth:1.5,borderStyle:"dotted"}},c.a.createElement(_.a,{name:"arrowright",size:60,color:"#eaeaea"}),c.a.createElement(Jt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"Pr\xf3ximo"))),c.a.createElement(Gt,{onPress:v},c.a.createElement(Bt,{style:{fontFamily:"ChelseaMarket_400Regular"}},"X")))}),At=Object(b.a)(),Dt=l.a.create({loadingView:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#FFE6D3"}}),Ht=function(){var e=Object(o.useState)(""),n=r()(e,2),t=n[0],a=n[1];return Object(o.useEffect)((function(){p.a.getItem("@PreferenciasUsuario").then((function(e){a(e?"Home":"Informations")}))}),[]),""===t?c.a.createElement(i.a,{style:Dt.loadingView},c.a.createElement(u.a,{color:"#0e0e0e"})):c.a.createElement(At.Navigator,{screenOptions:{headerShown:!1,cardStyle:{backgroundColor:"#FFE6D3"}},initialRouteName:t},c.a.createElement(At.Screen,{name:"Informations1",component:P}),c.a.createElement(At.Screen,{name:"Informations2",component:te}),c.a.createElement(At.Screen,{name:"Informations3",component:Oe}),c.a.createElement(At.Screen,{name:"Informations4",component:Ue}),c.a.createElement(At.Screen,{name:"Home",component:gn}),c.a.createElement(At.Screen,{name:"Setup1",component:Jn}),c.a.createElement(At.Screen,{name:"Setup2",component:pt}),c.a.createElement(At.Screen,{name:"Instructions",component:qt}))};function Lt(){var e=Object(s.b)({ChelseaMarket_400Regular:s.a});return r()(e,1)[0]?c.a.createElement(f.a,null,c.a.createElement(x,null,c.a.createElement(Ht,null))):c.a.createElement(i.a,{style:Qt.loadingView},c.a.createElement(u.a,{color:"#000"}))}t.d(n,"a",(function(){return Lt}));var Qt=l.a.create({loadingView:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#FFE6D3"}})},272:function(e,n,t){t(273),e.exports=t(449)},273:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},413:function(e,n,t){e.exports=t.p+"static/media/po.81671ae2.png"},414:function(e,n,t){e.exports=t.p+"static/media/lightRoast.07294618.png"},415:function(e,n,t){e.exports=t.p+"static/media/mediumRoast.ac6e8b38.png"},416:function(e,n,t){e.exports=t.p+"static/media/darkRoast.ae6a9d9b.png"},417:function(e,n,t){e.exports=t.p+"static/media/logo.c4a24e69.png"},418:function(e,n,t){e.exports=t.p+"static/media/coffeeMaker.0004e597.png"},419:function(e,n,t){e.exports=t.p+"static/media/coffeeCupBlack.d479ff06.png"},420:function(e,n,t){e.exports=t.p+"static/media/balance.0eec4c81.png"},421:function(e,n,t){e.exports=t.p+"static/media/page1.0ec6bc8b.JPG"},422:function(e,n,t){e.exports=t.p+"static/media/page2.f5f5ad12.JPG"},423:function(e,n,t){e.exports=t.p+"static/media/page3.4c93681f.JPG"},424:function(e,n,t){e.exports=t.p+"static/media/page4.d7195788.JPG"},425:function(e,n,t){e.exports=t.p+"static/media/page5.a20598fc.JPG"},426:function(e,n,t){e.exports=t.p+"static/media/page6.af5d7e4c.JPG"},427:function(e,n,t){e.exports=t.p+"static/media/page7.8739a1cb.JPG"},428:function(e,n,t){e.exports=t.p+"static/media/page8.6aa801ea.JPG"},429:function(e,n,t){e.exports=t.p+"static/media/page9.aa7d3723.jpg"},430:function(e,n,t){e.exports=t.p+"static/media/page10.90b760be.JPG"},431:function(e,n,t){e.exports=t.p+"static/media/page11.780cb4c0.JPG"},432:function(e,n,t){e.exports=t.p+"static/media/page12.8a8d08d8.JPG"}},[[272,1,2]]]);
//# sourceMappingURL=app.b6bd790f.chunk.js.map