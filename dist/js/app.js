(function (e) {
  function t(t) {
    for (var i, o, r = t[0], l = t[1], c = t[2], _ = 0, u = []; _ < r.length; _++) (o = r[_]), Object.prototype.hasOwnProperty.call(s, o) && s[o] && u.push(s[o][0]), (s[o] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    d && d(t);
    while (u.length) u.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], i = !0, r = 1; r < a.length; r++) {
        var l = a[r];
        0 !== s[l] && (i = !1);
      }
      i && (n.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var i = {},
    s = { app: 0 },
    n = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = i),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if ((o.r(a), Object.defineProperty(a, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var i in e)
          o.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/');
  var r = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var d = l;
  n.push([0, 'chunk-vendors']), a();
})({
  0: function (e, t, a) {
    e.exports = a('cd49');
  },
  '034f': function (e, t, a) {
    'use strict';
    a('85ec');
  },
  '0e29': function (e, t, a) {},
  '218d': function (e, t, a) {},
  2284: function (e, t, a) {},
  '412d': function (e, t, a) {},
  '49f8': function (e, t, a) {
    var i = { './en.json': 'edd4', './es.json': 'a306', './fr.json': 'f693' };
    function s(e) {
      var t = n(e);
      return a(t);
    }
    function n(e) {
      if (!a.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return i[e];
    }
    (s.keys = function () {
      return Object.keys(i);
    }),
      (s.resolve = n),
      (e.exports = s),
      (s.id = '49f8');
  },
  '52cd': function (e, t, a) {
    'use strict';
    a('412d');
  },
  5340: function (e, t, a) {
    'use strict';
    a('b709');
  },
  '63e1': function (e, t, a) {
    'use strict';
    a('2284');
  },
  '6d4e': function (e, t, a) {
    'use strict';
    a('6e45');
  },
  '6e45': function (e, t, a) {},
  '81f4': function (e, t, a) {},
  '85ec': function (e, t, a) {},
  a306: function (e) {
    e.exports = JSON.parse(
      '{"MODAL_START_MAIL_MERGE":"Empezar la combinación de correspondencia","MODAL_OPEN_TRACKING_REPORT":"Abrir reporte de rastreo","MODAL_ONBOARDING_TEMPLATE_SUBJECT":"Primera campaña de Mailmeteor","MODAL_ONBOARDING_TEMPLATE_HTMLBODY":"Hola {{firstname}},<br/><br/>Me alegra conocerte. Estamos encantados de que desee empezar a utilizar Mailmeteor.<br/><br/>Mailmeteor te permite enviar cientos de correos personalizados sin salir de Gmail. Es una herramienta increíble y estamos seguros de que ayudará a impulsar las comunicaciones de {{company}}.<br/><br/>Atentamente,<br/>Mary","MODAL_ONBOARDING_WELCOME_INTRO":"Mailmeteor te da la bienvenida.<br />Sigue las indicaciones de nuestra guía rápida para enviar tu primera campaña.","MODAL_ONBOARDING_WELCOME_BUTTON_CONTINUE":"Enséñame","MODAL_ONBOARDING_WELCOME_BUTTON_SKIP":"Saltar","MODAL_ONBOARDING_WELCOME_IMAGE":"Mailinator te da la bienvenida.","MODAL_ONBOARDING_VIDEO_INTRO":"En este video de 1 minuto verás como empezar con Mailmeteor.","MODAL_ONBOARDING_VIDEO_BUTTON_CONTINUE":"Enviar mi primera campaña","MODAL_ONBOARDING_VIDEO_BUTTON_SKIP":"Saltar","MODAL_ONBOARDING_FIRST_CAMPAIGN_SETUP":"<strong>¡Casi listo!</strong> Ahora enviaremos tu primera campaña con Mailmeteor. Para ayudarte a empezar, agregamos una hoja de cálculo llamada \\"Mailmeteor Demo\\"  que ya trae algunos receptores de correo y un correo electrónico de ejemplo. Para continuar, seleccional la plantilla (\\"Primera campaña Mailmeteor \\")  y después pincha en \\"Enviar correos\\".","MODAL_FORM_TIP":"Enviando de  <strong>{userEmail}</strong> a receptores de <strong>column {columnHeading}</strong>.","MODAL_FORM_SENDER_LABEL":"Nombre del remitente","MODAL_FORM_SENDER_PLACEHOLDER":"Aquí aparecerá el nombre del remitente","MODAL_FORM_SELECT_TEMPLATES_LABEL":"Plantilla de correo","MODAL_FORM_SELECT_TEMPLATES_OPTION":"Elige una plantilla...","MODAL_FORM_TEMPLATES_SUB_MANAGE":"Gestionar plantillas","MODAL_FORM_TEMPLATES_SUB_CREATE":"Crear plantilla nueva","MODAL_FORM_TEMPLATES_CREATE":"Crear plantilla para iniciar el envío de correos","MODAL_FORM_QUOTA_AVAILABLE":"Tienes disponibles <strong>{available}</strong> / {limit} receptores de Mailmeteor","MODAL_FORM_QUOTA_UPGRADE":"✨ MEJORAR","MODAL_FORM_SUMMARY_LABEL":"Resumen","MODAL_FORM_SUMMARY_FAILURE":"Tu hoja de cálculo está vacía. Para empezar, completa las direcciones de email de tus contactos (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/mailmeteor-tutorial\\">tutorial</a>).","MODAL_FORM_OPTIONS_LABEL":"Opciones","MODAL_FORM_OPTIONS_MANAGE_ALIAS":"Enviar correos desde un alias","MODAL_FORM_OPTIONS_TRACK_EMAILS":"Rastrear los correos abiertos y cliqueados","MODAL_COMPOSE_TIP":"Usa los nombres de las columnas dentro de llaves para personalizar tus correos. Por ejemplo <span style=\\"color: black\\">{{ Nombre }}</span>","MODAL_COMPOSE_PLACEHOLDER":"Escribe aquí tu mensaje...","MODAL_COMPOSE_SUBJECT":"Asunto","MODAL_COMPOSE_HTML_HEADING":"Modo de desarrollador &lt;&#47;&gt;","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_HEADING":"Suelta tu archivo aquí","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_DESCRIPTION":"Cada uno de sus destinatarios recibirá un correo<br />con el archivo seleccionado adjunto.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_HEADING":"Agregue archivos adjuntos a sus correos","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_DESCRIPTION":"Arrastra y suelta un archivo para adjuntarlo a tus correos<br />o aprenda <a target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/attachments#how-to-add-personalized-attachments\\">a enviar archivos adjuntos individuales</a>.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_ACTION":"Seleccionar archivos","MODAL_PREVIEW_ERROR_WITH_PARSING_HEADING":"Problema de combinación | Problema de combinación | Problemas de combinación","MODAL_PREVIEW_ERROR_WITH_PARSING_INTRO":"Notamos que es probable que algo esté mal en el renglón n.° {rowNumber} :","MODAL_PREVIEW_ERROR_WITH_PARSING_OUTRO":"Si esto le parece normal, puede enviar sus correos electrónicos sin preocupaciones. Se enviarán exactamente como se ven en la vista previa. De lo contrario, lo invitamos a revisar el renglón n.°{rowNumber} en su hoja de cálculo.","MODAL_PREVIEW_ERROR_WITH_PARSING_EMPTY_VARIABLE":"variable vacía:","MODAL_PREVIEW_ERROR_WITH_PARSING_INVALID_EMAIL":"email inválido: {email}","MODAL_PREVIEW_ERROR_WITH_PARSING_MISSING_TO_RECIPIENT":"falta el destinatario principal","MODAL_PREVIEW_METADATA_ENABLED":"habilitado","MODAL_PREVIEW_METADATA_DISABLED":"deshabilitado","MODAL_PREVIEW_METADATA_SUBJECT":"asunto:","MODAL_PREVIEW_METADATA_FROM":"de:","MODAL_PREVIEW_METADATA_TO":"para:","MODAL_PREVIEW_METADATA_CC":"cc:","MODAL_PREVIEW_METADATA_BCC":"cco:","MODAL_PREVIEW_METADATA_TRACKING":"rastreo:","MODAL_PREVIEW_METADATA_UNSUBSCRIBE":"cancelar suscripción:","MODAL_PREVIEW_METADATA_ROW":"número de renglón:","MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS":"Adjuntos personalizados 🧷","MODAL_TEMPLATES_MANAGE_SUBJECT":"Asunto del correo","MODAL_TEMPLATES_MANAGE_LAST_EDITED":"Última edición","MODAL_TEMPLATES_MANAGE_EDIT":"Editar la plantilla","MODAL_TEMPLATES_MANAGE_DELETE":"Borrar la plantilla","MODAL_TEMPLATES_MANAGE_CREATE":"Crear una plantilla nueva","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_TITLE":"No hay plantillas aquí","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_SUBTITLE":"Crear una plantilla para empezar a enviar correos.","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_IMAGE":"No hay plantillas","MODAL_ALIAS_EMAIL_HEADING":"Dirección de email","MODAL_ALIAS_NAME_HEADING":"Nombre del remitiente","MODAL_ALIAS_CREATE_NEW":"Agregar nuevo alias","MODAL_ALIAS_SAVE_NEW":"Guardar nuevo alias","MODAL_ALIAS_TOOLTIP_PRIMARY":"Esta es tu dirección principal de correo","MODAL_ALIAS_TOOLTIP_ALIAS":"Este es un alias","MODAL_ALIAS_TIP":"Enviar combinaciones de correspondencia desde tus otras direcciones de email.","MODAL_ALIAS_HELP":"<strong>¿Cómo usar un alias?</strong> Antes de usar un alias, asegúrate de que esté bien configurado en Gmail.  <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/alias\\">Lee esta guía para ver cómo se hace</a>.","MODAL_LAUNCHPAD_READY_FOR_LIFT_OFF":"¿Listo para despegar?","MODAL_LAUNCHPAD_SUMMARY_SEND":"Estás a punto de enviar {totalEmailsToSend} correos.","MODAL_LAUNCHPAD_SUMMARY_SCHEDULE":"Estás a punto de programar {totalEmailsToSend} correos.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED_WITH_AUTOPILOT":"Los correos se enviarán a partir de {scheduledAt} a usar Autopilot.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED":"Los correos se enviarán a partir de {scheduledAt}.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_WITH_AUTOPILOT":"Los correos se enviarán a usar Autopilot.","MODAL_LAUNCHPAD_SUMMARY_FOLLOWUP_ENABLED":"Los destinatarios recibirán seguimientos automatizados.","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SEND":"Enviar ahora","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SCHEDULE":"Programar envío","MODAL_SENDING_COUNTDOWN":"Lluvia de meteoros en {n} segundos.","MODAL_SENDING_PROGRESS":"Correos enviados: {n}/{total}","MODAL_SENDING_ALMOST_COMPLETE":"Casi listo 🚀 Por favor no cierres esta ventana...","MODAL_SENT_SUCCESS":"Ya se mandaron todos los correos.","MODAL_SENT_SCHEDULED":"Se han programado sus correos. Puedes cerrar esta ventana.<br />Tu hoja de cálculo e actualizará a medida que se envíen tus correos.","MODAL_SENT_BACKGROUND":"Tus correos se están enviando en segundo plano. Puedes cerrar esta ventana.<br />Tu hoja de cálculo e actualizará a medida que se envíen tus correos.","MODAL_SENT_VIEW_EMAILS":"Ver los correos enviados","MODAL_SENT_OPEN_DASHBOARD":"Abrir dashboard","MODAL_SENT_SCHEDULING_ELI5":"Cómo funciona la programación","MODAL_BUTTON_SEND_EMAILS":"Enviar correos","MODAL_BUTTON_SEND_EMAILS_TOOLTIP":"¿Todo listo para lanzar?","MODAL_BUTTON_SCHEDULE_SEND":"Programar el envío","MODAL_BUTTON_AUTOPILOT":"Piloto automático","MODAL_BUTTON_FOLLOW_UP":"Hacer un seguimiento","MODAL_BUTTON_TEST_EMAIL":"Recibir email de prueba","MODAL_BUTTON_PREVIEW_EMAILS":"Vista anticipada del email | Vista anticipada del email | Vista anticipada de los emails","MODAL_BUTTON_SAVE_TEMPLATE":"Guardar plantilla","MODAL_BUTTON_GO_BACK":"Regresar","MODAL_BUTTON_MAIN_MENU":"Menú principal","MODAL_BUTTON_CANCEL":"Cancelar","MODAL_BUTTON_CLOSE":"Cerrar","MODAL_BUTTON_RELOAD":"Recargar","MODAL_BUTTON_GET_HELP":"Ayuda","MODAL_BUTTON_TRY_AGAIN":"Volver a intentar","MODAL_ICONS_SAVE":"Guardar","MODAL_ICONS_INFO":"Información","MODAL_ICONS_EDIT":"Editar","MODAL_ICONS_DELETE":"Borrar","MODAL_SCHEDULING_TIP":"Elige fecha y hora para programar el envío.","MODAL_SCHEDULING_PRIMARY_BUTTON":"Programar envío","MODAL_SCHEDULING_SECTION_DATE_LABEL":"Fecha","MODAL_SCHEDULING_SECTION_DATE_INVALID":"Fecha inválida","MODAL_SCHEDULING_SECTION_DATETIME_LABEL":"Hora","MODAL_SCHEDULING_SECTION_DATETIME_INVALID":"Hora inválida","MODAL_SCHEDULING_SECTION_OPTIONS_LABEL":"Opciones","MODAL_SCHEDULING_SECTION_OPTIONS_WORKING_TIME":"Días laborables","MODAL_SCHEDULING_SECTION_OPTIONS_DAILY_CAP":"Emails máximos enviados por día","MODAL_SCHEDULING_SECTION_SUMMARY_LABEL":"Resumen","MODAL_SCHEDULING_SECTION_SUMMARY_TEXT":"Programando {totalEmailsToSend} emails para enviar desde <strong>{senderEmail}</strong> empezando el <strong>{startDate}</strong>.","MODAL_SCHEDULING_SECTION_SUMMARY_TIP":"Los correos se enviarán gradualmente a partir de esa fecha. Puede que tarde varios minutos para enviarse (<a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/scheduling\\" target=\\"_blank\\" rel=\\"noopener\\">leer más</a>).","MODAL_SCHEDULED_SUCCESS":"Tus correos ya se programaron.","MODAL_AUTOPILOT_TIP":"Mejore su capacidad de entrega con estas opciones de envío <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/autopilot\\" target=\\"_blank\\" rel=\\"noopener\\">(por que es importante)</a>.","MODAL_AUTOPILOT_TIMEZONE_TIP":"Según tu zona horaria","MODAL_AUTOPILOT_SECTION_CALENDAR_LABEL":"Enviar solo en","MODAL_AUTOPILOT_SECTION_SENDING_RATE_LABEL":"Tasa de envío","MODAL_AUTOPILOT_SECTION_SENDING_RATE_DAILY_CAP":"Max correos por día:","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE":"Retraso entre correos:","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE_BASELINE":"segundos","MODAL_AUTOPILOT_SECTION_STARTING_DATE_LABEL":"Empezar a enviar desde","MODAL_AUTOPILOT_SECTION_STARTING_DATE_RIGHT_NOW":"Ahora","MODAL_AUTOPILOT_SECTION_STARTING_DATE_TOMORROW":"Mañana","MODAL_AUTOPILOT_SECTION_STARTING_DATE_WEDNESDAY":"Miércoles","MODAL_AUTOPILOT_SECTION_STARTING_DATE_NEXT_WEEK":"La próxima semana","MODAL_AUTOPILOT_SECTION_SUMMARY_LABEL":"Resumen","MODAL_AUTOPILOT_SECTION_SUMMARY_TEXT":"Programación de {totalEmailsToSend} emails para enviar desde <strong>{senderEmail}</strong>. Con la configuración actual, todos los correos electrónicos se enviarán en aproximadamente {timeToSendEmails}.","MODAL_AUTOPILOT_SECTION_SUMMARY_DEADLINE_EXCEEDED":"El piloto automático solo puede funcionar hasta 28 días.","MODAL_AUTOPILOT_PRIMARY_BUTTON":"Enviar con piloto automático","MODAL_FOLLOWUP_TIP":"Obtenga más respuestas enviando un correo electrónico de seguimiento <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/\\" target=\\"_blank\\" rel=\\"noopener\\">(aprende más)</a>.","MODAL_FOLLOWUP_SECTION_SEQUENCE_LABEL":"Secuencia","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_NOW":"Enviar ahora","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_SCHEDULE":"Envío programado","MODAL_FOLLOWUP_SECTION_SEQUENCE_NEW_STEP":"Nuevo paso","MODAL_FOLLOWUP_SECTION_SEQUENCE_REMOVE_STEP":"Retirar paso","MODAL_FOLLOWUP_PRIMARY_BUTTON":"Enviar con un seguimiento","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER":"después","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER_SEND":"envía este correo","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_ENTER":"Introduzca un mensaje o","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_SELECT_TEMPLATE":"seleccione una plantilla","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_DAYS":"día | días","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_HOURS":"hora | horas","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_MINUTES":"minuto | minutos","MODAL_SPLASH_PRIMARY_TEXT":"Mejorar tu plan →","MODAL_SPLASH_SECONDARY_TEXT":"No por el momento","MODAL_SPLASH_ADD_REVIEW_TITLE":"¡Muchas gracias!","MODAL_SPLASH_ADD_REVIEW_DESCRIPTION":"¡Vemos que estás disfrutando Mailmeteor! ¿Quieres mandar más correos? Déjanos una evaluación impresionante para duplicar tu cuota gratuito a 150. ","MODAL_SPLASH_ADD_REVIEW_PRIMARY_TEXT":"Duplicar mi cuota","MODAL_SPLASH_ADD_REVIEW_PRIMARY_LINK":"https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301?utm_source=addon&utm_medium=splash&utm_campaign=add_review","MODAL_SPLASH_ADD_REVIEW_HINT":"Cuando hayas dejado tu evaluación, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"mailto:stars@mailmeteor.com\\">avísanos en stars@mailmeteor.com</a>.","MODAL_SPLASH_ADD_REVIEW_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.1/dist/img/modals/splash-5stars.jpeg","MODAL_SPLASH_EDU_TITLE":"¿Miembro de una universidad o escuela?","MODAL_SPLASH_EDU_DESCRIPTION":"Disfruta de Mailmeteor gratis con nuestro Programa educativo. Actualice a 500 correos electrónicos por día a cada miembro del personal y estudiantes de su escuela, colegio o universidad.","MODAL_SPLASH_EDU_PRIMARY_TEXT":"Más información →","MODAL_SPLASH_ALIAS_TITLE":"Mejorar tu cuenta para enviar desde un alias","MODAL_SPLASH_ALIAS_DESCRIPTION":"Enviar campañas desde otra cuenta de correo. Para habilitar esta función, por favor mejora tu cuenta a una de paga.","MODAL_SPLASH_ALIAS_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=alias","MODAL_SPLASH_ATTACHMENT_TITLE":"Mejora tu cuenta para agregar archivos adjuntos","MODAL_SPLASH_ATTACHMENT_DESCRIPTION":"Agrega documentos y archivos a tus correos (max. 4MB). Habilita esta función mejorando tu cuenta a una de paga.","MODAL_SPLASH_ATTACHMENT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=attachment","MODAL_SPLASH_EDITHTML_TITLE":"Mejora tu cuenta para acceder al \\"Modo de Desarrollador\\"","MODAL_SPLASH_EDITHTML_DESCRIPTION":"Diseña tus correos electrónicos como desees usando código HTML. Habilita esta función mejorando tu plan a uno de paga.","MODAL_SPLASH_EDITHTML_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=edithtml","MODAL_SPLASH_DISCOUNT_TITLE":"Mejora tu plan ahora y obtén un 20% de descuento","MODAL_SPLASH_DISCOUNT_DESCRIPTION":"Obtén más de Mailmeteor con esta oferta exclusiva.  Hasta {n} emails diarios, programar envíos para después, agregar archivos adjuntos, enviar desde uno o varios alias y mucho más. ","MODAL_SPLASH_DISCOUNT_PRIMARY_TEXT":"Ahorra un 20% ahora","MODAL_SPLASH_DISCOUNT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=discount&coupon=OFF20","MODAL_SPLASH_UPGRADE_TITLE":"Mejora tu cuenta a Mailmeteor Premium","MODAL_SPLASH_UPGRADE_DESCRIPTION":"Obtén más de Mailmeteor. Hasta {n} emails diarios, agregar archivos adjuntos, enviar desde uno o varios alias y más.","MODAL_SPLASH_UPGRADE_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=upgrade","MODAL_SPLASH_SCHEDULING_TITLE":"Mejora tu cuenta para programar tus campañas","MODAL_SPLASH_SCHEDULING_DESCRIPTION":"¡Envía correos dentro de una hora, mañana y hasta dentro de una semana! Mejora tu cuenta para poder programar tus campañas.","MODAL_SPLASH_SCHEDULING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=scheduling","MODAL_SPLASH_AUTOPILOT_TITLE":"Mejora tu cuenta para acceder al \\"Autopilot\\"","MODAL_SPLASH_AUTOPILOT_DESCRIPTION":"Ponga su campaña en piloto automático y maximice su capacidad de entrega. Acceda a parámetros avanzados, como límites diarios y aceleración, actualizándose a un plan de pago.","MODAL_SPLASH_TRACKING_TITLE":"Mejora tu cuenta para rastrear tus correos en tiempo real","MODAL_SPLASH_TRACKING_DESCRIPTION":"Rastrea tus correos abiertos y cliqueados en tiempo real. Habilita esta funcionalidad premium mejorando tu cuenta a un plan de paga.","MODAL_SPLASH_TRACKING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=tracking","MODAL_SPLASH_HTMLEDITOR_TITLE":"Confirma, por favor. ¿Salir del modo de desarrollo?","MODAL_SPLASH_HTMLEDITOR_DESCRIPTION":"El contenido HTML de tu plantilla se puede alterar al usar el editor WYSIWYG. Esta operación no se puede deshacer.","MODAL_SPLASH_HTMLEDITOR_PRIMARY_LINK":"Sí, cambiar a WYSIWYG","MODAL_SPLASH_HTMLEDITOR_SECONDARY_TEXT":"Cancelar","MODAL_SPLASH_WARNING_TITLE":"¡Aviso!","MODAL_SPLASH_WARNING_SHEET_EMPTY_DESCRIPTION":"Parece que su hoja está vacía o no tiene contactos de correo electrónico. Para enviar correos electrónicos, complete su hoja de cálculo con direcciones de correo electrónico en una columna llamada <i>\\"email\\"</i>.","MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_TEXT":"Sigue un tutorial","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_TITLE":"¡Aviso! No más cuota de correo","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_DESCRIPTION":"Ha enviado demasiados correos recientemente. Espera hasta el {quotaRenewalDate} para que tu cuota se restablezca por completo (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/email-quota\\">aprende más</a>). O actualice su cuenta para enviar correos electrónicos ahora mismo.","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_TEXT":"Mejorar para enviar más correos →","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_TITLE":"¡Aviso! No hay suficiente cuota de correo","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_DESCRIPTION":"Su hoja de cálculo contiene más filas que su cuota de correo electrónico actual. Puede enviar las primeras {quotaAvailable} filas de su hoja de cálculo o <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=quota_insufficient\\">actualice ahora y envíe todos los correos</a>.","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_PRIMARY_TEXT":"Vista previa de las primeras {quotaAvailable} filas","MODAL_SPLASH_FOLLOWUP_TITLE":"Actualice para enviar con seguimientos","MODAL_SPLASH_FOLLOWUP_DESCRIPTION":"Asegúrese de obtener respuestas enviando correos de seguimiento automatizados. Desbloquee esta función actualizándose a un plan pro o business.","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_TITLE":"Siguiente disponible","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_DESCRIPTION":"Súmate a la lista de espera y sé de los primeros en poder programar secuencias de envío, hasta que tus contactos contesten.","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_TEXT":"Únete a la lista de espera","MODAL_SPLASH_FOLLOWUP_EARLY_TITLE":"Temprano a la fiesta!","MODAL_SPLASH_FOLLOWUP_EARLY_DESCRIPTION":"Nuestra nueva función de seguimiento todavía está en BETA. Algunas funciones aún no están listas, pero lo estarán muy pronto. Únase a la lista de espera para asegurarse de recibir una notificación una vez que todo esté activo.","MODAL_SPLASH_OAUTH_HEADING":"Permitir que Mailmeteor envíe correos","MODAL_SPLASH_OAUTH_DESCRIPTION":"Mailmeteor necesita permiso para enviar correos y acceder a sus hojas de cálculo mientras no esté usando la aplicación.","MODAL_SPLASH_OAUTH_PRIMARY_BUTTON":"Permitir","MODAL_SPLASH_OAUTH_FAILURE":"Vaya, no funcionó. Inténtalo de nuevo","MODAL_DIALOG_TEMPLATES_HEADING":"Seleccionar plantilla","MODAL_NOTIFICATIONS_HEADING":"Últimas noticias de Mailmeteor","MODAL_NOTIFICATIONS_DOUBLEQUOTA_HEADING":"💯 Duplica tu cuota","MODAL_NOTIFICATIONS_DOUBLEQUOTA_CONTENT":"¿Te gusta Mailmeteor? <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Déjanos una evaluación</a> y aumentaremos tu cuota diaria gratuita de emails a 150. Avísanos cuando hayas escrito tu evaluación a <a class=\\"addon-link\\" href=\\"mailto:stars@mailmeteor.com\\" target=\\"_blank\\">stars@mailmeteor.com</a> para que aumentemos tu cuota.","MODAL_NOTIFICATIONS_UPGRADE_HEADING":"✨ Desbloquea todas las funciones","MODAL_NOTIFICATIONS_UPGRADE_CONTENT":"¿Disfrutas de Mailmeteor? ¿Qué hay de enviar aún más correos electrónicos cada día y tener acceso a funciones avanzadas como programación de correo electrónico, piloto automático, alias y más? <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Descubre todas las funciones premium &rarr;</a>","MODAL_NOTIFICATIONS_BLOGPOST_HEADING":"🎉 Anuncio: Asociaciones Exclusivas","MODAL_NOTIFICATIONS_BLOGPOST_CONTENT":"Nos complace anunciar una docena de nuevas asociaciones con las principales empresas de software del mundo. Desde limpiar su lista de contactos hasta calentar su cuenta, hay una oferta para usted. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"{link}\\">Sigue leyendo &rarr;</a>","MODAL_NOTIFICATIONS_EDU_HEADING":"🎓 Licencia Académica","MODAL_NOTIFICATIONS_EDU_CONTENT":"¿Perteneces a una universidad, escuela, colegio o instituto? ¿Sabías que puedes disfrutar Mailmeteor Premium gratis? <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Lee más sobre nuestras Licencias Educativas</a>.","MODAL_NOTIFICATIONS_BLACKFRIDAY_HEADING":"🔥 Oferta limitada de Black Friday","MODAL_NOTIFICATIONS_BLACKFRIDAY_CONTENT":"<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Ahorre hasta un 50% en los planes de Mailmeteor con nuestra oferta Black Friday</a>. La oferta finaliza el 26 de noviembre (disponible una vez al año).","MODAL_ACCOUNT_TIP":"Gestionar tu cuenta de Mailmeteor.","MODAL_ACCOUNT_SECTION_PRIMARY_EMAIL":"Email","MODAL_ACCOUNT_SECTION_QUOTA":"Cuota disponible","MODAL_ACCOUNT_SECTION_QUOTA_LEARN_MORE":"Leer más acerca de tu cuota de emails","MODAL_ACCOUNT_SECTION_BILLING_PLAN":"Plan","MODAL_ACCOUNT_SECTION_BILLING_MANAGE":"Gestionar tu plan","MODAL_ACCOUNT_SECTION_BILLING_RENEWAL":"Cancelar","MODAL_ACCOUNT_SECTION_BILLING_CANCEL_BUTTON":"Cancelar","MODAL_ACCOUNT_SECTION_LANGUAGE":"Idioma","MODAL_FOOTER_MENUITEMS_RELAUNCH_ONBOARDING":"Reiniciar la inducción","MODAL_FOOTER_MENUITEMS_SHAREFEEDBACK":"Comparte una idea","MODAL_FOOTER_MENUITEMS_HELP":"Ayuda","MODAL_FOOTER_SEND_WITH_AUTOPILOT_TIP":"Los correos se enviarán con Autopilot.","MODAL_FOOTER_SEND_WITH_SCHEDULING_TIP":"El envío comenzará el {scheduledAt}.","MODAL_FOOTER_SEND_WITH_FOLLOWUP_TIP":"Las destinatarias recibirán correos de seguimiento.","SIDEBAR_SCHEDULING_TITLE_IDLE":"Campaña programada","SIDEBAR_SCHEDULING_SUBTITLE_BUSY":"empezado el {date}","SIDEBAR_SCHEDULING_TOOLTIP_BUSY":"Todavía no se han terminado de enviar","SIDEBAR_CAMPAIGN_SENT":"{n} emails enviados","SIDEBAR_CAMPAIGN_SUBTITLE":"{date}","SIDEBAR_CAMPAIGN_CANCEL":"Dejar de enviar","SIDEBAR_CAMPAIGN_COLUMN":"Columna {columnHeading}","SIDEBAR_CAMPAIGN_TRACKING_OFF":"El rastreo está deshabilitado en esta campaña. Para rastrear los emails, inicia una nueva combinación de correspondencia. Es imposible rastrear los correos cuando ya se enviaron.","SIDEBAR_CAMPAIGN_TRACKING_OFF_UPGRADE":"Esta campaña no cuenta con rastreo. Para rastrear los correos abiertos y cliqueados, habilita esta función al <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">mejorar tu cuenta a un plan de paga</a>.","SIDEBAR_CAMPAIGN_TRACKING_ON_UPGRADE":"Las estadísticas de rastreo están disponibles sólo en los planes premium. Para poder verlas,  <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">mejora tu cuenta ahora</a>.","SIDEBAR_CAMPAIGN_HAS_FOLLOWUPS":"Las estadísticas incluyen todos los correos electrónicos enviados (incluidos los seguimientos). Para obtener más métricas, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://dashboard.mailmeteor.com/campaigns/{campaignId}?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">abra el dashboard</a>.","SIDEBAR_NAVIGATION_OVERVIEW":"Sin campañas | {n} campaña | {n} campañas","SIDEBAR_NAVIGATION_CAMPAIGN":"Todas las campañas","SIDEBAR_NAVIGATION_Settings":"Configuración","SIDEBAR_OVERVIEW_HEADING":"Vista general","SIDEBAR_OVERVIEW_TAB_OPENS":"Aperturas","SIDEBAR_OVERVIEW_TAB_CLICKS":"Clics","SIDEBAR_OVERVIEW_METRICS_TIP":"Pincha una columna para ver los detalles","SIDEBAR_OVERVIEW_METRICS_TOTAL":"Total: {percent}","SIDEBAR_TIPS_1_HEADING":"Guía para los reportes de rastreo","SIDEBAR_TIPS_1_SUBHEADING":"Aprender cómo funciona el correo electrónico","SIDEBAR_TIPS_2_HEADING":"Enviar tips","SIDEBAR_TIPS_2_SUBHEADING":"Guía para aumentar tu procentaje de aperturas","SIDEBAR_MORE_START_MERGE":"Empezar una campaña","SIDEBAR_MORE_OPEN_DASHBOARD":"Ver todas las campañas","SIDEBAR_MORE_UPGRADE":"Mejora tu cuenta","SIDEBAR_MORE_ACCOUNT":"Mi cuenta","SIDEBAR_MORE_HELP":"Ayuda","MAIL_EMPTY_SUBJECT":"(sin asunto)","MAIL_EVENTS_OPENS":"Aperturas","MAIL_EVENTS_OPENS_TOOLTIP":"Total de emails abiertos","MAIL_EVENTS_CLICKS":"Clics","MAIL_EVENTS_CLICKS_TOOLTIP":"Total de emails cliqueados","MAIL_EVENTS_UNSUBSCRIBES":"Renuncias","MAIL_EVENTS_UNSUBSCRIBES_TOOLTIP":"Total de renuncias","MAIL_EVENTS_COUNTER":"No evento | {active} / {total} email | {active} / {total} emails","EDITOR_TOOLBAR_INSERT_VARIABLE":"Insertar variable","PERCENT":"{x}%","FRACTION":"{a}/{b}","LOADING":"Cargando...","LEARN_MORE":"Más información","HELP":"Ayuda","COMMON_EMAILS":"0 email | 1 email | {n} emails","COMMON_TIME_DAYS":"0 días | 1 día | {n} días","COMMON_TIME_HOURS":"0 horas | 1 hora | {n} horas","COMMON_TIME_MINUTES":"0 minutos | 1 minuto | {n} minutos","COMMON_TIME_SECONDS":"0 segundos | 1 segundo | {n} segundos","INFO_USER_IS_BLOCKED":"<strong>Lo sentimos. Estás inhabilitado temporalmente.</strong> Nos reportaron tus actividades en Mailmeteor como spam o uso inapropiado. Si piensas que se cometió un error,  <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/help/contact-support\\">por favor contáctanos</a>.","ERROR_PREVIEW_UNKNOWN_TEMPLATE":"No se puede tener una vista previa. No se seleccionó una plantilla.","ERROR_PREVIEW_UNKNOWN_ROW":"No se puede tener una vista previa. Ese renglón está vacío o inaccesible.","ERROR_SHEET_HAS_NO_CAMPAIGN":"Esta hoja de cálculo no parece estar ligada a una campaña de combinación de correspondencia.","ERROR_TEMPLATE_HAS_NO_SUBJECT":"No se puede guardar. El asunto está vacío.","ERROR_TEMPLATE_IS_TOO_BIG":"Tu plantilla es demasiado grande. Trata de hacerla más pequeña","ERROR_FOLLOWUP_HAS_NO_BODY":"El seguimiento no tiene contenido.","ERROR_FOLLOWUP_IS_TOO_BIG":"Tu seguimiento es demasiado grande. Intenta reducir su tamaño.","ERROR_LACKING_AUTHORIZATION":"No pudimos darte acceso. ¿Estás usando una cuenta de Google diferente?","ERROR_LACKING_AUTHORIZATION_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_FAILED":"Tenemos problemas para darte acceso.","ERROR_AUTHENTICATION_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_LOGGED_OUT":"Te desconectaste. Por favor cierra y vuelve a abrir Mailmeteor.","ERROR_AUTHENTICATION_LOGGED_OUT_LINK":"https://support.mailmeteor.com/help/troubleshooting/disconnected","ERROR_FIREBASE_FAILED":"Lo sentimos. Nuestros servidores tuvieron un problema. Por favor intenta otra vez.","ERROR_FIREBASE_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting","ERROR_UNHANDLED":"Lo sentimos. Hubo un error. Por favor intenta otra vez."}'
    );
  },
  a50a: function (e, t, a) {
    'use strict';
    a('d89f');
  },
  a953: function (e, t, a) {},
  b709: function (e, t, a) {},
  cd49: function (e, t, a) {
    'use strict';
    a.r(t);
    a('c975'), a('e623'), a('e379'), a('5dc8'), a('37e1');
    var i,
      s,
      n = a('2b0e'),
      o = a('59ca'),
      r = a.n(o),
      l = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          [
            e.error
              ? a('div', [a('AppRouter')], 1)
              : e.ready && e.unloaded
              ? a('div', [a('AppRouter'), 'sidebar' !== e.mode ? a('div', [a('ModalSplashScreen')], 1) : e._e()], 1)
              : e._e(),
            a('ModalButterBar'),
          ],
          1
        );
      },
      c = [],
      d = (a('caad'), a('6eba'), a('0d03'), a('a9e3'), a('ac1f'), a('2532'), a('1276'), a('4795'), a('9ab4')),
      _ = a('2f62'),
      u = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(e.routedComponent, { tag: 'component' });
      },
      m = [],
      A = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIForm' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', [
              a('div', { staticClass: 'addon-infobar', staticStyle: { padding: '16px', background: '#FCFCFC' } }, [
                a('img', {
                  staticStyle: { 'margin-right': '1rem', 'vertical-align': 'middle' },
                  attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/mailmeteor.svg', alt: 'Mailmeteor-logo', width: '24' },
                }),
                a('span', { domProps: { innerHTML: e._s(e.$t('MODAL_FORM_QUOTA_AVAILABLE', { limit: e.user.quota.limit, available: e.user.quota.available })) } }),
                e.user.quota.limit <= 200
                  ? a('span', { staticStyle: { 'margin-left': '16px' } }, [
                      a(
                        'a',
                        {
                          staticClass: 'addon-button addon-button-marketing',
                          attrs: { target: '_blank', rel: 'noopener', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=form&utm_campaign=quota_available' },
                        },
                        [e._v(e._s(e.$t('MODAL_FORM_QUOTA_UPGRADE')) + ' →')]
                      ),
                    ])
                  : e._e(),
              ]),
              e.isOnboarding
                ? a('div', { staticClass: 'addon-infobar addon-infobar-info addon-infobar-top', domProps: { innerHTML: e._s(e.$t('MODAL_ONBOARDING_FIRST_CAMPAIGN_SETUP')) } })
                : e._e(),
              a('table', { staticClass: 'addon-table' }, [
                a('tbody', [
                  a('tr', [
                    a(
                      'td',
                      { staticStyle: { width: '58%' } },
                      [
                        a('label', { staticClass: 'addon-form-label', attrs: { for: 'addon-selector-alias' } }, [e._v(e._s(e.$t('MODAL_FORM_SENDER_LABEL')))]),
                        a('ModalSelectorAlias'),
                      ],
                      1
                    ),
                    a('td', [
                      a('label', { staticClass: 'addon-form-label' }, [e._v(e._s(e.$t('MODAL_FORM_OPTIONS_LABEL')))]),
                      a('div', { staticStyle: { display: 'flex' } }, [
                        a('input', {
                          directives: [{ name: 'model', rawName: 'v-model', value: e.merge.hasTracking, expression: 'merge.hasTracking' }],
                          staticClass: 'addon-form-checkbox',
                          attrs: { type: 'checkbox', id: 'emailTrackerBoolean' },
                          domProps: { checked: Array.isArray(e.merge.hasTracking) ? e._i(e.merge.hasTracking, null) > -1 : e.merge.hasTracking },
                          on: {
                            click: e.setMergeTracking,
                            change: function (t) {
                              var a = e.merge.hasTracking,
                                i = t.target,
                                s = !!i.checked;
                              if (Array.isArray(a)) {
                                var n = null,
                                  o = e._i(a, n);
                                i.checked ? o < 0 && e.$set(e.merge, 'hasTracking', a.concat([n])) : o > -1 && e.$set(e.merge, 'hasTracking', a.slice(0, o).concat(a.slice(o + 1)));
                              } else e.$set(e.merge, 'hasTracking', s);
                            },
                          },
                        }),
                        a('label', { attrs: { for: 'emailTrackerBoolean' } }, [e._v(e._s(e.$t('MODAL_FORM_OPTIONS_TRACK_EMAILS')))]),
                      ]),
                      a('div', { staticStyle: { 'margin-top': '4px' } }, [
                        a('img', {
                          staticStyle: { margin: '2px 4px 2px 4px', 'vertical-align': 'text-top', opacity: '0.5' },
                          attrs: { width: '13', height: '13', src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/alias.svg' },
                        }),
                        a(
                          'a',
                          {
                            staticClass: 'addon-link',
                            on: {
                              click: function (t) {
                                return t.preventDefault(), e.showUIAlias();
                              },
                            },
                          },
                          [e._v(e._s(e.$t('MODAL_FORM_OPTIONS_MANAGE_ALIAS')))]
                        ),
                      ]),
                    ]),
                  ]),
                  a('tr', [
                    a('td', [
                      a('label', { staticClass: 'addon-form-label', attrs: { for: 'sheetUIFormTemplatesList' } }, [e._v(e._s(e.$t('MODAL_FORM_SELECT_TEMPLATES_LABEL')))]),
                      a('div', { attrs: { id: 'sheetUIFormTemplatesList' } }, [a('ModalSelectorTemplates')], 1),
                    ]),
                    a('td', [
                      a('label', { staticClass: 'addon-form-label' }, [e._v(e._s(e.$t('MODAL_FORM_SUMMARY_LABEL')))]),
                      e.isSheetFetched
                        ? e.isSheetEmpty || e.isSheetNoEmails
                          ? a('div', { domProps: { innerHTML: e._s(e.$t('MODAL_FORM_SUMMARY_FAILURE')) } })
                          : a('div', {
                              domProps: {
                                innerHTML: e._s(
                                  e.$t('MODAL_FORM_TIP', { column: e.sheet.emailing.column, columnHeading: e.sheet.emailing.columnHeading, userEmail: e.merge.senderEmail })
                                ),
                              },
                            })
                        : a('div', { staticClass: 'addon-skeleton-text' }),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        attrs: { disabled: e.isActionsDisabled },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.showUIPreview();
                          },
                        },
                      },
                      [e._v(e._s(e.$tc('MODAL_BUTTON_PREVIEW_EMAILS', e.sheet.emailing.recipients)))]
                    ),
                    a('ModalFooterSendWith', {
                      attrs: {
                        beforeClick: e.validateSheet,
                        disabled: e.isActionsDisabled,
                        label: e.$t('MODAL_BUTTON_SEND_EMAILS'),
                        tooltip: e.$t('MODAL_BUTTON_SEND_EMAILS_TOOLTIP'),
                      },
                      on: { 'click-primary': e.showUILaunchpad },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          e.sendWithLoader
            ? a('div', { staticClass: 'addon-splash' }, [a('div', { staticClass: 'addon-splash-background' }), a('div', { staticClass: 'addon-splash-loading' })])
            : e._e(),
        ]);
      },
      p = [],
      h = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          {
            staticClass: 'sheetUIFooterIcons',
            staticStyle: { outline: 'none' },
            attrs: { tabindex: '0' },
            on: {
              keydown: function (t) {
                return !t.type.indexOf('key') && e._k(t.keyCode, 'esc', 27, t.key, ['Esc', 'Escape']) ? null : e.hideOverlay(t);
              },
            },
          },
          [
            a(
              'span',
              {
                staticClass: 'addon-footer-icon',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.openProfile();
                  },
                },
              },
              [
                a('svg', { attrs: { version: '1.1', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', 'xmlns:xlink': 'http://www.w3.org/1999/xlink' } }, [
                  a('g', [
                    a('path', {
                      attrs: {
                        d: 'M25.9,31.2c0,13.3,10.8,24.1,24.1,24.1s24.1-10.8,24.1-24.1S63.3,7.1,50,7.1S25.9,17.9,25.9,31.2z M66.1,31.2   c0,8.9-7.2,16.1-16.1,16.1s-16.1-7.2-16.1-16.1S41.1,15.1,50,15.1S66.1,22.3,66.1,31.2z',
                      },
                    }),
                    a('path', {
                      attrs: {
                        d: 'M12,93.9c2.2,0,4-1.8,4-4c0-6.4,3.1-12.3,8.2-15.9C31.8,68.8,40.7,66,50,66s18.2,2.8,25.8,8.1c5.1,3.6,8.2,9.5,8.2,15.9   c0,2.2,1.8,4,4,4s4-1.8,4-4c0-9-4.4-17.3-11.6-22.4C71.4,61.3,60.9,58,50,58s-21.4,3.3-30.4,9.5C12.4,72.6,8,81,8,89.9   C8,92.2,9.8,93.9,12,93.9z',
                      },
                    }),
                  ]),
                ]),
              ]
            ),
            a(
              'span',
              {
                staticClass: 'addon-footer-icon addon-dropdown-overlay-icon',
                class: { 'addon-footer-icon-notifications-unread': e.notificationsUnread },
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.toggleNotificationMenu();
                  },
                },
              },
              [
                a(
                  'svg',
                  {
                    staticStyle: { 'margin-left': '8px' },
                    attrs: { version: '1.1', viewBox: '0 0 88 88', xmlns: 'http://www.w3.org/2000/svg', 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
                  },
                  [
                    a('g', { attrs: { stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' } }, [
                      a('g', { attrs: { fill: '#000000' } }, [
                        a('g', { attrs: { 'fill-rule': 'nonzero' } }, [
                          a('path', {
                            attrs: {
                              d: 'M9.1,78.1 L25,78.1 C26.6,83.9 31.9,88 38,88 C44.1,88 49.4,83.8 51,78.1 L66.9,78.1 C71.6,78.1 75.4,74.3 75.4,69.6 C75.4,66.8 74,64.1 71.6,62.5 C69.3,60.9 65.5,55.7 65.5,38.2 C65.5,21.4 55.6,14.3 47.9,11.3 C48,10.8 48,10.4 48,10 C48,4.5 43.5,0 38,0 C32.5,0 28,4.5 28,10 C28,10.4 28,10.9 28.1,11.3 C20.4,14.3 10.5,21.4 10.5,38.2 C10.5,55.7 6.7,60.9 4.4,62.5 C2,64.1 0.6,66.8 0.6,69.6 C0.6,74.3 4.4,78.1 9.1,78.1 Z M38,82 C35.2,82 32.7,80.4 31.4,78.1 L44.5,78.1 C43.3,80.4 40.8,82 38,82 Z M38,6 C40.1,6 41.7,7.6 42,9.6 C38.9,9.1 36.1,9.3 34.1,9.6 C34.3,7.6 35.9,6 38,6 Z M16.5,38.2 C16.5,23.7 25.5,18.1 33,16 L33.2,15.9 C33.2,15.9 35.3,15.2 38.2,15.2 C39.7,15.2 41.4,15.4 43.1,15.9 L43.2,15.9 C50.7,18 59.7,23.6 59.7,38.1 C59.7,48.7 61.1,56.7 63.8,61.9 L12.3,61.9 C15.1,56.8 16.5,48.8 16.5,38.2 Z M7.1,68 L68.8,68 C69.2,68.5 69.4,69 69.4,69.6 C69.4,71 68.3,72.1 66.9,72.1 L9.1,72.1 C7.7,72.1 6.6,71 6.6,69.6 C6.6,69 6.8,68.5 7.1,68 Z',
                            },
                          }),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            a(
              'span',
              {
                staticClass: 'addon-footer-icon addon-dropdown-overlay-icon',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.toggleMoreMenu();
                  },
                },
              },
              [
                a('svg', { staticStyle: { 'margin-left': '2px' }, attrs: { xmlns: 'http://www.w3.org/2000/svg', height: '24', viewBox: '0 0 24 24', width: '24' } }, [
                  a('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }),
                  a('path', {
                    attrs: {
                      d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
                    },
                  }),
                ]),
                a(
                  'div',
                  {
                    staticClass: 'addon-dropdown-overlay addon-modal-footer-more-menu',
                    class: { active: e.showMore },
                    on: {
                      click: function (e) {
                        e.stopPropagation();
                      },
                    },
                  },
                  [
                    a('ul', [
                      a('li', [
                        a('a', { attrs: { target: '_blank', rel: 'noopener noreferrer', href: 'https://forms.gle/peMwkfE6rPo5xfTd9' } }, [
                          e._v(' ' + e._s(e.$t('MODAL_FOOTER_MENUITEMS_SHAREFEEDBACK')) + ' '),
                        ]),
                      ]),
                      a('li', { attrs: { role: 'separator' } }),
                      a('li', [
                        a('a', { attrs: { target: '_blank', rel: 'noopener noreferrer', href: 'https://dashboard.mailmeteor.com/campaigns?utm_source=addon&utm_medium=footer' } }, [
                          e._v(' ' + e._s(e.$t('MODAL_FOOTER_MENUITEMS_DASHBOARD')) + ' '),
                        ]),
                      ]),
                      a('li', [
                        a('a', { attrs: { target: '_blank', rel: 'noopener', href: 'https://www.youtube.com/channel/UCdaxx2ivkw6gJySZyorDswA' } }, [
                          e._v(e._s(e.$t('MODAL_FOOTER_MENUITEMS_YOUTUBE'))),
                        ]),
                      ]),
                      a('li', [
                        a('a', { attrs: { target: '_blank', rel: 'noopener', href: 'https://mailmeteor.com/blog?utm_source=addon&utm_medium=footer' } }, [
                          e._v(e._s(e.$t('MODAL_FOOTER_MENUITEMS_BLOG'))),
                        ]),
                      ]),
                      a('li', { attrs: { role: 'separator' } }),
                      a('li', [
                        a(
                          'span',
                          {
                            on: {
                              click: function (t) {
                                return t.preventDefault(), e.goto('/onboarding');
                              },
                            },
                          },
                          [e._v(' ' + e._s(e.$t('MODAL_FOOTER_MENUITEMS_RELAUNCH_ONBOARDING')) + ' ')]
                        ),
                      ]),
                      a('li', [
                        a('a', { attrs: { target: '_blank', rel: 'noopener', href: 'https://mailmeteor.com/support?utm_source=addon&utm_medium=footer' } }, [
                          e._v(e._s(e.$t('MODAL_FOOTER_MENUITEMS_HELP'))),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            e.showNotifications
              ? a(
                  'div',
                  {
                    staticClass: 'sheetUINotificationsDropdown',
                    on: {
                      click: function (e) {
                        e.stopPropagation();
                      },
                    },
                  },
                  [a('ModalNotifications')],
                  1
                )
              : e._e(),
          ]
        );
      },
      E = [],
      O = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUINotifications' }, [
          a('h1', { staticClass: 'addon-notification-heading' }, [e._v(e._s(e.$t('MODAL_NOTIFICATIONS_HEADING')))]),
          e.hasNotReviewed
            ? a('div', { staticClass: 'addon-notification-section' }, [
                a('h2', { domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_DOUBLEQUOTA_HEADING')) } }),
                a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_DOUBLEQUOTA_CONTENT')) } }),
              ])
            : e.isPremium
            ? e._e()
            : a('div', { staticClass: 'addon-notification-section' }, [
                a('h2', [
                  a('a', {
                    staticClass: 'addon-link',
                    attrs: { target: '_blank', href: e.$t('MODAL_NOTIFICATIONS_UPGRADE_LINK') },
                    domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_UPGRADE_HEADING')) },
                  }),
                ]),
                a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_UPGRADE_CONTENT', { link: e.$t('MODAL_NOTIFICATIONS_UPGRADE_LINK') })) } }),
              ]),
          a('div', { staticClass: 'addon-notification-section' }, [
            a('h2', [
              a('a', {
                staticClass: 'addon-link',
                attrs: { target: '_blank', href: e.$t('MODAL_NOTIFICATIONS_BLOGPOST_LINK') },
                domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_BLOGPOST_HEADING')) },
              }),
            ]),
            a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_BLOGPOST_CONTENT', { link: e.$t('MODAL_NOTIFICATIONS_BLOGPOST_LINK') })) } }),
          ]),
          a('div', { staticClass: 'addon-notification-section' }, [
            a('h2', [
              a('a', {
                staticClass: 'addon-link',
                attrs: { target: '_blank', href: e.$t('MODAL_NOTIFICATIONS_EDU_LINK') },
                domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_EDU_HEADING')) },
              }),
            ]),
            a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_NOTIFICATIONS_EDU_CONTENT', { link: e.$t('MODAL_NOTIFICATIONS_EDU_LINK') })) } }),
          ]),
        ]);
      },
      T = [],
      L = n['a'].extend({
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user'])), {
          isPremium: function () {
            return this.user && this.user.premium;
          },
          hasNotReviewed: function () {
            var e = (this.user && this.user.quota && this.user.quota.limit) || 75;
            return !this.isPremium && e <= 75;
          },
        }),
        methods: {
          goto: function (e) {
            this.$store.dispatch('setLocation', e);
          },
        },
      }),
      I = L,
      S = a('2877'),
      g = Object(S['a'])(I, O, T, !1, null, null, null),
      D = g.exports,
      M = n['a'].extend({
        name: 'FooterIcons',
        components: { ModalNotifications: D },
        data: function () {
          return { showMore: !1, showNotifications: !1 };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user'])), {
          notificationsUnread: {
            get: function () {
              return this.$store.state.user.notificationsUnread;
            },
            set: function (e) {
              this.$store.dispatch('setUserNotificationStatus', e);
            },
          },
        }),
        methods: {
          goto: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          openProfile: function () {
            var e = this.$store.state.location;
            '/account' !== e ? this.goto('/account') : this.goto('/');
          },
          gotoSchedules: function () {
            if ((this.hideOverlay(), this.user.premium)) {
              var e = this.$store.state.location;
              '/schedules' !== e ? this.goto('/schedules') : this.goto('/');
            } else this.$store.dispatch('showSplashScreen', 'scheduling');
          },
          openTrackingReport: function () {
            window._backend.sheetUIShowSidebar(), window._frontend.close();
          },
          toggleNotificationMenu: function () {
            (this.notificationsUnread = !1),
              (this.showNotifications = !this.showNotifications),
              (this.showMore = !1),
              !1 === this.showNotifications ? document.removeEventListener('click', this.hideOverlay, !0) : document.addEventListener('click', this.hideOverlay, !0);
          },
          toggleMoreMenu: function () {
            (this.showMore = !this.showMore),
              (this.showNotifications = !1),
              !1 === this.showMore ? document.removeEventListener('click', this.hideOverlay, !0) : document.addEventListener('click', this.hideOverlay, !0);
          },
          hideOverlay: function (e) {
            if (e) {
              var t = e && e.target;
              if (t && t.closest && t.closest('.addon-dropdown-overlay-icon')) return;
            }
            document.removeEventListener('click', this.hideOverlay, !0), (this.showNotifications = !1), (this.showMore = !1);
          },
        },
      }),
      v = M,
      f = Object(S['a'])(v, h, E, !1, null, null, null),
      N = f.exports,
      C = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-button-group' }, [
          a(
            'button',
            {
              staticClass: 'addon-button addon-button-action',
              class: { 'addon-tooltip--top': e.tooltip },
              attrs: { disabled: e.loading || e.disabled, 'data-tooltip': e.tooltip },
              on: {
                click: function (t) {
                  return t.preventDefault(), e.onClickPrimary(t);
                },
              },
            },
            [e.loading ? a('span', { staticClass: 'addon-button-loading' }) : e._e(), e._v(' ' + e._s(e.label) + ' ')]
          ),
          a(
            'button',
            {
              staticClass: 'addon-button addon-button-action addon-button-dropdown',
              attrs: { disabled: e.loading || e.disabled },
              on: {
                click: function (t) {
                  return t.preventDefault(), e.toggleOptions();
                },
              },
            },
            [
              a('span', { staticClass: 'addon-button-dropdown-caret', class: { upsidedown: e.showOptions } }),
              a('div', { staticClass: 'addon-dropdown-overlay addon-modal-home-menu-sending', class: { active: e.showOptions } }, [
                a('ul', [
                  a(
                    'li',
                    {
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.onClickSecondary('autopilot');
                        },
                      },
                    },
                    [
                      a('div', [
                        a('label', [
                          e.hasAutopilot
                            ? a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.6.6/dist/img/icons/done.svg' } })
                            : a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.4.1/dist/img/icons/autopilot-blue.svg' } }),
                          a('span', [e._v(e._s(e.$t('MODAL_BUTTON_AUTOPILOT')))]),
                        ]),
                        e.hasAutopilot ? a('p', { staticClass: 'addon-text-gray' }, [e._v(e._s(e.$t('MODAL_FOOTER_SEND_WITH_AUTOPILOT_TIP')))]) : e._e(),
                      ]),
                    ]
                  ),
                  a(
                    'li',
                    {
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.onClickSecondary('scheduling');
                        },
                      },
                    },
                    [
                      a('div', [
                        a('label', [
                          e.hasScheduling
                            ? a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.6.6/dist/img/icons/done.svg' } })
                            : a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.4.1/dist/img/icons/schedule-send-blue.svg' } }),
                          a('span', [e._v(e._s(e.$t('MODAL_BUTTON_SCHEDULE_SEND')))]),
                        ]),
                        e.hasScheduling
                          ? a('p', { staticClass: 'addon-text-gray' }, [e._v(e._s(e.$t('MODAL_FOOTER_SEND_WITH_SCHEDULING_TIP', { scheduledAt: e.formatDate(e.scheduledAt) })))])
                          : e._e(),
                      ]),
                    ]
                  ),
                  a(
                    'li',
                    {
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.onClickSecondary('followup');
                        },
                      },
                    },
                    [
                      a('div', [
                        a('label', [
                          e.hasFollowup
                            ? a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.6.6/dist/img/icons/done.svg' } })
                            : a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.4.1/dist/img/icons/follow-up-blue.svg' } }),
                          a('span', [e._v(e._s(e.$t('MODAL_BUTTON_FOLLOW_UP')))]),
                        ]),
                        e.hasFollowup ? a('p', { staticClass: 'addon-text-gray' }, [e._v(e._s(e.$t('MODAL_FOOTER_SEND_WITH_FOLLOWUP_TIP')))]) : e._e(),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]);
      },
      R = [],
      P =
        (a('d3b7'),
        a('25f0'),
        a('2ca0'),
        n['a'].extend({
          props: {
            beforeClick: {
              type: Function,
              default: function () {
                return !0;
              },
              required: !1,
            },
            disabled: { type: Boolean, default: !1 },
            loading: { type: Boolean, default: !1 },
            label: { type: String, default: 'Send emails' },
            tooltip: { type: String, default: null },
          },
          data: function () {
            return { showOptions: !1 };
          },
          computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user', 'merge'])), {
            currentUI: function () {
              var e = this.$store.state.location || '';
              return e.substring(1);
            },
            hasScheduling: function () {
              return this.scheduledAt instanceof Date;
            },
            scheduledAt: function () {
              return (this.merge && this.merge.options && this.merge.options.at) || void 0;
            },
            hasAutopilot: function () {
              var e = (this.merge && this.merge.options && this.merge.options) || {};
              return e.dailycap || e.throttle || e.weekdays;
            },
            hasFollowup: function () {
              return ((this.merge && this.merge.followups) || []).length;
            },
          }),
          methods: {
            toggleOptions: function () {
              this.showOptions = !this.showOptions;
            },
            onClickPrimary: function () {
              ('function' !== typeof this.beforeClick || this.beforeClick()) && this.$emit('click-primary');
            },
            onClickSecondary: function (e) {
              if ('function' !== typeof this.beforeClick || this.beforeClick()) {
                if ('followup' === e) {
                  var t = this.user.plan.startsWith('pro') || this.user.plan.startsWith('business');
                  if (!t) return void this.$store.dispatch('showSplashScreen', 'followup-waitinglist');
                }
                this.currentUI !== e && this.$store.dispatch('setLocation', '/' + e);
              }
            },
            formatDate: function (e) {
              try {
                return e.toLocaleString(this.$i18n.locale, { dateStyle: 'long', timeStyle: 'short' });
              } catch (t) {
                return e.toString();
              }
            },
          },
        })),
      b = P,
      w = Object(S['a'])(b, C, R, !1, null, null, null),
      U = w.exports,
      y = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', [
          e.isAliasFeatureEnabled
            ? a(
                'select',
                {
                  directives: [{ name: 'model', rawName: 'v-model', value: e.activeAlias, expression: 'activeAlias' }],
                  staticClass: 'addon-form-select',
                  attrs: { id: 'addon-selector-alias' },
                  on: {
                    change: function (t) {
                      var a = Array.prototype.filter
                        .call(t.target.options, function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          var t = '_value' in e ? e._value : e.value;
                          return t;
                        });
                      e.activeAlias = t.target.multiple ? a : a[0];
                    },
                  },
                },
                e._l(e.aliasesWithPrimary, function (t, i) {
                  return a('option', { key: i, domProps: { value: t } }, [e._v(' ' + e._s(e.formatAlias(t)) + ' ')]);
                }),
                0
              )
            : a('input', {
                directives: [{ name: 'model', rawName: 'v-model.lazy', value: e.senderName, expression: 'senderName', modifiers: { lazy: !0 } }],
                staticClass: 'addon-form-input',
                attrs: { type: 'text', id: 'addon-selector-alias', placeholder: e.$t('MODAL_FORM_SENDER_PLACEHOLDER') },
                domProps: { value: e.senderName },
                on: {
                  change: function (t) {
                    e.senderName = t.target.value;
                  },
                },
              }),
        ]);
      },
      H = [],
      k =
        (a('99af'),
        a('a15b'),
        a('b0c0'),
        n['a'].extend({
          computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user', 'aliases', 'merge'])), {
            isAliasFeatureEnabled: function () {
              return this.user && this.user.premium && this.aliases && this.aliases.length;
            },
            aliasesWithPrimary: function () {
              return [{ name: this.user.name, email: this.user.email }].concat(this.aliases);
            },
            activeAlias: {
              get: function () {
                return this.merge.alias || this.aliasesWithPrimary[0];
              },
              set: function (e) {
                this.$store.dispatch('merge/setAlias', e);
              },
            },
            senderName: {
              get: function () {
                return this.merge.senderName;
              },
              set: function (e) {
                'MAILMETEOR_RESET' !== e
                  ? 'MAILMETEOR_SIGNOUT' !== e
                    ? 'MAILMETEOR_GOTO' !== e.substr(0, 15)
                      ? this.$store.dispatch('merge/setSenderName', e)
                      : this.setLocation(e.split(' ').pop() || '/')
                    : this.$store.dispatch('user/signout')
                  : window._backend
                      .withSuccessHandler(function () {
                        window._frontend.close();
                      })
                      .sheetUIResetAddon();
              },
            },
          }),
          methods: {
            setLocation: function (e) {
              this.$store.dispatch('setLocation', e);
            },
            formatAlias: function (e) {
              return e.name ? [e.name, ' <', e.email, '>'].join('') : e.email;
            },
          },
        })),
      B = k,
      G = Object(S['a'])(B, y, H, !1, null, null, null),
      F = G.exports,
      $ = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', [
          e.hasTemplates
            ? a('div', [
                a(
                  'select',
                  {
                    directives: [{ name: 'model', rawName: 'v-model', value: e.activeTemplate, expression: 'activeTemplate' }],
                    staticClass: 'addon-form-select',
                    attrs: { disabled: !e.hasTemplates },
                    on: {
                      change: function (t) {
                        var a = Array.prototype.filter
                          .call(t.target.options, function (e) {
                            return e.selected;
                          })
                          .map(function (e) {
                            var t = '_value' in e ? e._value : e.value;
                            return t;
                          });
                        e.activeTemplate = t.target.multiple ? a : a[0];
                      },
                    },
                  },
                  [
                    a('option', { attrs: { value: '', disabled: '' } }, [e._v(e._s(e.$t('MODAL_FORM_SELECT_TEMPLATES_OPTION')))]),
                    e._l(e.templates, function (t, i) {
                      return a('option', { key: i, domProps: { value: t } }, [e._v(' ' + e._s(t.name || t.subject || e.$t('MAIL_EMPTY_SUBJECT')) + ' ')]);
                    }),
                  ],
                  2
                ),
                a('div', { staticStyle: { 'margin-top': '5px' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'addon-link',
                      attrs: { target: '_blank', rel: 'noopener' },
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.createTemplate();
                        },
                      },
                    },
                    [e._v(' ' + e._s(e.$t('MODAL_FORM_TEMPLATES_SUB_CREATE')) + ' ')]
                  ),
                  e._v(' - '),
                  a(
                    'a',
                    {
                      staticClass: 'addon-link',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.manageTemplates();
                        },
                      },
                    },
                    [e._v(' ' + e._s(e.$t('MODAL_FORM_TEMPLATES_SUB_MANAGE')) + ' ')]
                  ),
                ]),
              ])
            : a('div', [
                a(
                  'button',
                  {
                    staticClass: 'addon-button addon-button-fullwidth',
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.createTemplate();
                      },
                    },
                  },
                  [e._v(' ' + e._s(e.$t('MODAL_FORM_TEMPLATES_CREATE')) + ' ')]
                ),
              ]),
        ]);
      },
      W = [],
      x = n['a'].extend({
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['templates', 'merge'])), {
          hasTemplates: function () {
            return this.templates.length > 0;
          },
          activeTemplate: {
            get: function () {
              return this.$store.getters.getActiveTemplate || '';
            },
            set: function (e) {
              this.$store.dispatch('templates/select', e);
            },
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          createTemplate: function () {
            this.setLocation('/templates/new');
          },
          manageTemplates: function () {
            this.setLocation('/templates');
          },
        },
      }),
      V = x,
      j = Object(S['a'])(V, $, W, !1, null, null, null),
      Y = j.exports,
      z = n['a'].extend({
        name: 'ModalHome',
        components: { ModalFooterIcons: N, ModalFooterSendWith: U, ModalSelectorAlias: F, ModalSelectorTemplates: Y },
        data: function () {
          return { sendWithLoader: !1, sendWithTimer: 0 };
        },
        beforeDestroy: function () {
          this.sendWithTimer && window.clearTimeout(this.sendWithTimer);
        },
        computed: Object(d['__assign'])(
          Object(d['__assign'])(
            Object(d['__assign'])({}, Object(_['c'])(['location', 'sheet', 'user', 'templates', 'merge'])),
            Object(_['b'])({ isTemplateFetched: 'merge/isTemplateFetched' })
          ),
          {
            isOnboarding: function () {
              var e = this.location;
              return e.indexOf('onboarding') > 0;
            },
            isActionsDisabled: function () {
              return !!this.user.blocked || !this.$store.getters.getActiveTemplate || !this.isSheetFetched;
            },
            isSheetFetched: function () {
              return !isNaN(this.sheet.stats.lastRow);
            },
            isSheetEmpty: function () {
              return this.isSheetFetched && this.sheet.isEmpty;
            },
            isSheetNoEmails: function () {
              return '' === this.sheet.emailing.columnHeading;
            },
            isQuotaInsufficient: function () {
              return !(!this.user.quota || !this.user.quota.limit || this.isQuotaExhausted) && this.sheet.emailing.recipients > this.user.quota.available;
            },
            isQuotaExhausted: function () {
              return this.user.quota.available <= 0;
            },
            maxUserQuota: function () {
              var e = this.user.domain,
                t = ['gmail.com', 'googlemail.com'];
              return t.indexOf(e) >= 0 ? 500 : 2e3;
            },
          }
        ),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          showUIAlias: function () {
            this.user && this.user.premium ? this.setLocation('/alias') : this.$store.dispatch('showSplashScreen', 'alias');
          },
          showUIPreview: function () {
            this.validateSheet() && (this.isTemplateFetched ? this.setLocation('/preview') : this.delay(this.showUIPreview));
          },
          showUILaunchpad: function () {
            this.validateSheet() && (this.isTemplateFetched ? this.setLocation('/launchpad') : this.delay(this.showUILaunchpad));
          },
          validateSheet: function () {
            return this.isSheetEmpty || this.isSheetNoEmails
              ? (this.$store.dispatch('showSplashScreen', 'warning-sheet-empty'), !1)
              : !this.user.premium && this.isQuotaExhausted
              ? (this.$store.dispatch('showSplashScreen', 'warning-quota-exhausted'), !1)
              : !(!this.user.premium && this.isQuotaInsufficient) || (this.$store.dispatch('showSplashScreen', 'warning-quota-insufficient'), !1);
          },
          delay: function (e) {
            (this.sendWithLoader = !0),
              (this.sendWithTimer = window.setTimeout(function () {
                e();
              }, 200));
          },
          setMergeTracking: function (e) {
            if (!this.user.premium) return e.preventDefault(), this.$store.dispatch('merge/setTracking', !1), void this.$store.dispatch('showSplashScreen', 'tracking');
            var t = (e.target || e.srcElement).checked;
            this.$store.dispatch('merge/setTracking', t);
          },
        },
      }),
      q = z,
      K = Object(S['a'])(q, A, p, !1, null, null, null),
      X = K.exports,
      Q = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIAccount' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-main-subtitle' }, [e._v(' ' + e._s(e.$t('MODAL_ACCOUNT_TIP')) + ' ')]),
            a('div', { staticClass: 'addon-table-border' }, [
              a('table', { staticClass: 'addon-table' }, [
                a('tbody', [
                  a('tr', [e._m(0), a('td', [e._v(e._s(e.$t('MODAL_ACCOUNT_SECTION_PRIMARY_EMAIL')))]), a('td', [a('strong', [e._v(e._s(e.user.email))])])]),
                  a('tr', [
                    e._m(1),
                    a('td', [e._v(e._s(e.$t('MODAL_ACCOUNT_SECTION_QUOTA')))]),
                    a('td', [
                      a('strong', [e._v(e._s(e.user.quota.available) + ' / ' + e._s(e.user.quota.limit) + ' emails')]),
                      e.user.quota.available < e.user.quota.limit
                        ? a('span', [
                            a('span', [e._v(' (resets ' + e._s(e.quotaRenewalDate) + ')')]),
                            a(
                              'a',
                              {
                                staticStyle: { display: 'inline-block', 'margin-left': '0.5rem' },
                                attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/introduction/quick-start/email-quota' },
                              },
                              [
                                a('img', {
                                  staticStyle: { 'vertical-align': 'text-bottom' },
                                  attrs: {
                                    src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/info-outline.svg',
                                    alt: e.$t('MODAL_ACCOUNT_SECTION_QUOTA'),
                                    title: e.$t('MODAL_ACCOUNT_SECTION_QUOTA'),
                                    width: '16',
                                  },
                                }),
                              ]
                            ),
                          ])
                        : e._e(),
                    ]),
                  ]),
                  a('tr', [
                    e._m(2),
                    a('td', [e._v(e._s(e.$t('MODAL_ACCOUNT_SECTION_BILLING_PLAN')))]),
                    a('td', [
                      a('strong', [e._v(e._s(e.subscriptionName))]),
                      e.user.premium
                        ? a(
                            'a',
                            {
                              staticStyle: { 'margin-left': '8px' },
                              attrs: { href: 'https://dashboard.mailmeteor.com/account?utm_source=addon&utm_medium=footer', target: '_blank' },
                            },
                            [e._v(e._s(e.$t('MODAL_ACCOUNT_SECTION_BILLING_MANAGE')))]
                          )
                        : a(
                            'a',
                            {
                              staticClass: 'addon-button addon-button-marketing',
                              staticStyle: { 'margin-left': '1rem' },
                              attrs: { target: '_blank', rel: 'noopener', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=account&utm_campaign=account_upgrade' },
                            },
                            [e._v(e._s(e.$t('MODAL_FORM_QUOTA_UPGRADE')) + ' →')]
                          ),
                    ]),
                  ]),
                  a('tr', [
                    e._m(3),
                    a('td', [e._v(e._s(e.$t('MODAL_ACCOUNT_SECTION_LANGUAGE')))]),
                    a('td', [
                      a(
                        'select',
                        {
                          directives: [{ name: 'model', rawName: 'v-model', value: e.language, expression: 'language' }],
                          staticClass: 'addon-form-select',
                          staticStyle: { 'min-width': '180px' },
                          on: {
                            change: function (t) {
                              var a = Array.prototype.filter
                                .call(t.target.options, function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  var t = '_value' in e ? e._value : e.value;
                                  return t;
                                });
                              e.language = t.target.multiple ? a : a[0];
                            },
                          },
                        },
                        [
                          a('option', { attrs: { value: 'en' } }, [e._v('🇺🇸 English')]),
                          a('option', { attrs: { value: 'es' } }, [e._v('🇪🇸 Español')]),
                          a('option', { attrs: { value: 'fr' } }, [e._v('🇫🇷 Français')]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a('td', { staticClass: 'addon-footer-actions' }, [
                  a(
                    'a',
                    {
                      staticClass: 'addon-button',
                      attrs: { href: 'https://mailmeteor.com/support?utm_source=addon&utm_medium=account&utm_campaign=get_help', target: '_blank', rel: 'noopener' },
                    },
                    [e._v(e._s(e.$t('MODAL_BUTTON_GET_HELP')))]
                  ),
                  a(
                    'button',
                    {
                      staticClass: 'addon-button addon-button-action',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.goto('/');
                        },
                      },
                    },
                    [e._v(e._s(e.$t('MODAL_BUTTON_MAIN_MENU')))]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      J = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('td', [a('img', { staticClass: 'icon', attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.5/dist/img/icons/account-badge-blue.svg' } })]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('td', [
            a('img', { staticClass: 'icon', attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.5/dist/img/icons/account-quota-available-blue.svg' } }),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('td', [
            a('img', { staticClass: 'icon', attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.5/dist/img/icons/account-credit-card-blue.svg' } }),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('td', [a('img', { staticClass: 'icon', attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.5/dist/img/icons/translate-blue.svg' } })]);
        },
      ],
      Z = function (e) {
        var t = new Date(e.quota.refreshDate);
        if ('function' !== typeof t.toLocaleString) return t.toString();
        var a = new Date(),
          i = t.toLocaleString(void 0, { hour: '2-digit', minute: '2-digit' }),
          s = a.getDay() === t.getDay();
        return (s ? 'Today' : 'Tomorrow') + ' at ' + i;
      },
      ee = n['a'].extend({
        components: { ModalFooterIcons: N },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user'])), {
          quotaRenewalDate: function () {
            var e = this.user;
            return Z(e);
          },
          subscriptionName: function () {
            var e = {
                free: 'Free plan',
                premium: 'Mailmeteor Premium',
                pro: 'Mailmeteor Pro',
                business: 'Mailmeteor Business',
                'premium:appsumo': 'Mailmeteor AppSumo Deal',
                'premium:lifetime': 'Mailmeteor Lifetime',
                'premium:enterprise': 'Mailmeteor Enterprise License',
                'premium:edu': 'Mailmeteor Education Program',
              },
              t = this.user;
            return t.premium ? (t.plan && e[t.plan]) || e['premium'] : e['free'];
          },
          language: {
            set: function (e) {
              (this.$i18n.locale = e), window._backend.sheetUISetLanguage(e);
            },
            get: function () {
              return this.$i18n.locale;
            },
          },
        }),
        methods: {
          goto: function (e) {
            this.$store.dispatch('setLocation', e);
          },
        },
      }),
      te = ee,
      ae = Object(S['a'])(te, Q, J, !1, null, null, null),
      ie = ae.exports,
      se = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIOnboarding' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('img', {
              attrs: {
                src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/animations/onboarding.gif',
                width: '200',
                height: '200',
                alt: e.$t('MODAL_ONBOARDING_WELCOME_IMAGE'),
                title: e.$t('MODAL_ONBOARDING_WELCOME_IMAGE'),
              },
            }),
            a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_ONBOARDING_WELCOME_INTRO')) } }),
            a('div', [
              a(
                'button',
                {
                  staticClass: 'addon-button addon-button-action',
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.startOnboarding(t);
                    },
                  },
                },
                [e._v(' ' + e._s(e.$t('MODAL_ONBOARDING_WELCOME_BUTTON_CONTINUE')) + ' ')]
              ),
              a(
                'button',
                {
                  staticClass: 'addon-button',
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.skipOnboarding(t);
                    },
                  },
                },
                [e._v(' ' + e._s(e.$t('MODAL_ONBOARDING_WELCOME_BUTTON_SKIP')) + ' ')]
              ),
            ]),
          ]),
        ]);
      },
      ne = [],
      oe = n['a'].extend({
        mounted: function () {
          var e = { subject: this.$t('MODAL_ONBOARDING_TEMPLATE_SUBJECT'), htmlBody: this.$t('MODAL_ONBOARDING_TEMPLATE_HTMLBODY') };
          this.$store.dispatch('templates/create', e);
        },
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e), window._backend.sheetUISetInstallationDate();
          },
          startOnboarding: function () {
            this.setLocation('/onboarding/video'), window.telemetry.track('Start onboarding');
          },
          skipOnboarding: function () {
            this.setLocation('/'), window.telemetry.track('Skipped onboarding');
          },
        },
      }),
      re = oe,
      le = Object(S['a'])(re, se, ne, !1, null, null, null),
      ce = le.exports,
      de = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIOnboarding' }, [
          a('iframe', {
            staticStyle: { 'margin-top': '16px' },
            attrs: {
              width: '498',
              height: '280',
              src: 'https://www.youtube-nocookie.com/embed/-YX65-kywOE?vq=hd720?rel=0&autoplay=1&mute=1&start=44',
              'show-info': 'O',
              frameborder: '0',
              allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen: '',
            },
          }),
          a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_ONBOARDING_VIDEO_INTRO')) } }),
          a('div', [
            a(
              'button',
              {
                staticClass: 'addon-button addon-button-action',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.startOnboarding(t);
                  },
                },
              },
              [e._v(' ' + e._s(e.$t('MODAL_ONBOARDING_VIDEO_BUTTON_CONTINUE')) + ' ')]
            ),
            a(
              'button',
              {
                staticClass: 'addon-button',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.skipOnboarding(t);
                  },
                },
              },
              [e._v(' ' + e._s(e.$t('MODAL_ONBOARDING_VIDEO_BUTTON_SKIP')) + ' ')]
            ),
          ]),
        ]);
      },
      _e = [],
      ue = n['a'].extend({
        data: function () {
          return { loading: !1 };
        },
        methods: {
          startOnboarding: function () {
            this.loading || ((this.loading = !0), window._backend.sheetUIStartOnboarding());
          },
          skipOnboarding: function () {
            this.$store.dispatch('setLocation', '/'), window.telemetry.track('Skipped onboarding video');
          },
        },
      }),
      me = ue,
      Ae = Object(S['a'])(me, de, _e, !1, null, null, null),
      pe = Ae.exports,
      he = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUICompose' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-editor-header addon-editor-subject' }, [
              a('input', {
                directives: [{ name: 'model', rawName: 'v-model', value: e.subject, expression: 'subject' }],
                staticClass: 'addon-form-input',
                attrs: { type: 'text', placeholder: e.$t('MODAL_COMPOSE_SUBJECT') },
                domProps: { value: e.subject },
                on: {
                  input: function (t) {
                    t.target.composing || (e.subject = t.target.value);
                  },
                },
              }),
            ]),
            a(
              'div',
              { staticClass: 'addon-editor-main addon-editor-fullscreen' },
              [
                e.developerMode
                  ? a('ModalComposeHTMLEditor', {
                      key: e.initialHtmlBody.length,
                      attrs: { 'template-html-body': e.initialHtmlBody },
                      on: { 'editor-toggle': e.onToggleEditor, 'content-update': e.onContentUpdated },
                    })
                  : a('ModalComposeGoogEditor', {
                      key: e.initialHtmlBody.length,
                      attrs: { 'template-html-body': e.initialHtmlBody, 'template-attachments': e.attachments },
                      on: {
                        'editor-toggle': e.onToggleEditor,
                        'content-update': e.onContentUpdated,
                        'attachment-create': e.onAttachmentCreated,
                        'attachment-update': e.onAttachmentUpdated,
                        'attachment-remove': e.onAttachmentRemoval,
                      },
                    }),
              ],
              1
            ),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a('td', { staticClass: 'addon-footer-actions' }, [
                  a(
                    'button',
                    {
                      staticClass: 'addon-button',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.cancel();
                        },
                      },
                    },
                    [e._v(' ' + e._s(e.$t('MODAL_BUTTON_CANCEL')) + ' ')]
                  ),
                  a(
                    'button',
                    {
                      staticClass: 'addon-button addon-button-action',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.saveTemplate();
                        },
                      },
                    },
                    [e._v(' ' + e._s(e.$t('MODAL_BUTTON_SAVE_TEMPLATE')) + ' ')]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      Ee = [],
      Oe =
        (a('66ce'),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'div',
            { staticClass: 'addon-editor-wysiwyg' },
            [
              a('div', { staticClass: 'addon-editor-toolbar', attrs: { id: 'addon-editor-toolbar' } }),
              a('div', { staticClass: 'addon-editor-contenteditable', attrs: { id: 'addon-editor-contenteditable' } }),
              a(
                'div',
                {
                  directives: [{ name: 'show', rawName: 'v-show', value: e.showPlaceholder, expression: 'showPlaceholder' }],
                  staticClass: 'addon-editor-wysiwyg-placeholder',
                  on: { click: e.focusEditor },
                },
                [e._t('placeholder')],
                2
              ),
              a(
                'div',
                { staticClass: 'addon-editor-attachments' },
                [
                  e._l(e.templateAttachments, function (t, i) {
                    return [a('ModalMessageAttachment', { key: i, attrs: { file: t, 'allow-removal': !0 }, on: { 'attachment-remove': e.onAttachmentRemoval } })];
                  }),
                ],
                2
              ),
              e.configAllowAttachments
                ? [
                    e.showAttachmentsDropHandler
                      ? a('div', { staticClass: 'addon-editor-attachments-filedrop addon-text-center' }, [
                          a('div', [
                            a(
                              'svg',
                              {
                                attrs: {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  'enable-background': 'new 0 0 24 24',
                                  height: '60px',
                                  viewBox: '0 0 24 24',
                                  width: '60px',
                                  fill: '#2C7BFF',
                                },
                              },
                              [
                                a('g', [a('rect', { attrs: { fill: 'none', height: '24', width: '24' } })]),
                                a('g', [
                                  a('g', [
                                    a('path', {
                                      attrs: {
                                        d: 'M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8,15.01 l1.41,1.41L11,14.84V19h2v-4.16l1.59,1.59L16,15.01L12.01,11L8,15.01z',
                                      },
                                    }),
                                  ]),
                                ]),
                              ]
                            ),
                            a('h4', { staticStyle: { margin: '0 0 0.5rem 0' } }, [e._v(e._s(e.$t('MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_HEADING')))]),
                            a('p', { staticStyle: { margin: '0.5rem 0 1rem 0' }, domProps: { innerHTML: e._s(e.$t('MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_DESCRIPTION')) } }),
                          ]),
                        ])
                      : e.showAttachmentsPicker
                      ? a('div', { staticClass: 'addon-editor-attachments-filedrop addon-text-center' }, [
                          a('div', [
                            a(
                              'svg',
                              {
                                attrs: {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  'enable-background': 'new 0 0 24 24',
                                  height: '60px',
                                  viewBox: '0 0 24 24',
                                  width: '60px',
                                  fill: '#2C7BFF',
                                },
                              },
                              [
                                a('g', [a('rect', { attrs: { fill: 'none', height: '24', width: '24' } })]),
                                a('g', [
                                  a('g', [
                                    a('path', {
                                      attrs: {
                                        d: 'M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8,15.01 l1.41,1.41L11,14.84V19h2v-4.16l1.59,1.59L16,15.01L12.01,11L8,15.01z',
                                      },
                                    }),
                                  ]),
                                ]),
                              ]
                            ),
                            a('h4', { staticStyle: { margin: '0 0 0.5rem 0' } }, [e._v(e._s(e.$t('MODAL_COMPOSE_ATTACHMENTS_OVERLAY_HEADING')))]),
                            a('p', { staticStyle: { margin: '0.5rem 0 1rem 0' }, domProps: { innerHTML: e._s(e.$t('MODAL_COMPOSE_ATTACHMENTS_OVERLAY_DESCRIPTION')) } }),
                            a('button', { staticClass: 'addon-button addon-button-action', on: { click: e.showFilePicker } }, [
                              e._v(e._s(e.$t('MODAL_COMPOSE_ATTACHMENTS_OVERLAY_ACTION'))),
                            ]),
                          ]),
                        ])
                      : e._e(),
                    a('input', {
                      staticClass: 'addon-input',
                      staticStyle: { position: 'absolute', overflow: 'hidden', height: '0px', width: '0px', opacity: '0', left: '0px', top: '0px', display: 'none' },
                      attrs: { id: 'addon-editor-attachments-input', type: 'file', name: 'Filedata', multiple: '' },
                    }),
                  ]
                : e._e(),
            ],
            2
          );
        }),
      Te = [],
      Le =
        (a('4de4'),
        a('498a'),
        a('588e'),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('div', { staticClass: 'addon-email-attachment' }, [
            a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.19/dist/img/icons/attachment-blue.svg' } }),
            e.isUploading
              ? a('span', { staticClass: 'addon-email-attachment-filename' }, [e._v(e._s(e.file.name))])
              : a('a', { staticClass: 'addon-link addon-email-attachment-filename', attrs: { target: '_blank', rel: 'noopener', href: e.fileDirectlink } }, [
                  e._v(e._s(e.file.name)),
                ]),
            e.file.size
              ? a('span', { staticClass: 'addon-email-attachment-filesize' }, [
                  a('span', { staticStyle: { margin: '0 0.5rem', opacity: '0.5' } }, [e._v('•')]),
                  e._v(e._s(e.fileSize)),
                ])
              : e._e(),
            !e.file.error && e.isUploading
              ? a('span', { staticClass: 'addon-email-attachment-progressbar' }, [a('span', { style: { width: e.file.progress + '%', display: 'inline-block' } })])
              : e._e(),
            e.file.error ? a('div', { staticClass: 'addon-email-attachment-error' }, [e._v(' ' + e._s(e.fileError) + ' '), e._m(0)]) : e._e(),
            e.allowRemoval
              ? a('span', {
                  staticClass: 'addon-email-attachment-remove',
                  attrs: { role: 'button', 'aria-label': 'Remove attachment' },
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.remove(t);
                    },
                  },
                })
              : e._e(),
          ]);
        }),
      Ie = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            'a',
            { staticClass: 'addon-link', attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/help/troubleshooting/attachments-issues' } },
            [
              a('img', {
                staticStyle: { 'margin-right': '8px', 'vertical-align': 'middle', 'margin-top': '-2px', 'line-height': '100%', opacity: '0.85' },
                attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/help.svg', width: '13px', height: '13px' },
              }),
            ]
          );
        },
      ],
      Se =
        (a('8ba4'),
        a('9911'),
        n['a'].extend({
          props: ['file', 'allowRemoval'],
          computed: {
            fileSize: function () {
              return Math.ceil((this.file.size || 0) / 1e3) + 'K';
            },
            fileDirectlink: function () {
              return this.file.link ? this.file.link : (window._app && window._app.attachments.BASE_URL + [this.$store.state.user.uid, this.file.id].join('/')) || '';
            },
            fileError: function () {
              var e = this.file.error;
              return 'string' === typeof e ? e : 'Upload blocked!';
            },
            isUploading: function () {
              return Number.isInteger(this.file.progress);
            },
          },
          methods: {
            remove: function () {
              this.$emit('attachment-remove', this.file);
            },
          },
        })),
      ge = Se,
      De = Object(S['a'])(ge, Le, Ie, !1, null, null, null),
      Me = De.exports,
      ve = n['a'].extend({
        components: { ModalMessageAttachment: Me },
        props: ['templateHtmlBody', 'templateAttachments', 'toolbarMinimal', 'allowAttachments'],
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['sheet'])), {
          getSheetHeaders: function () {
            for (var e = [], t = (this.sheet && this.sheet.headers) || [], a = 0, i = t.length; a < i; a++) {
              var s = t[a],
                n = s.value.trim();
              'Merge status' !== n && n && e.push(n);
            }
            return e;
          },
          configAllowAttachments: function () {
            return 'boolean' !== typeof this.allowAttachments || this.allowAttachments;
          },
        }),
        data: function () {
          return {
            googUIEditor: null,
            editorInitializationCounter: 0,
            populateEditorContentCounter: 0,
            showAttachmentsPicker: !1,
            showAttachmentsDropHandler: !1,
            showPlaceholder: !1,
          };
        },
        watch: {
          templateHtmlBody: function () {
            this.populateEditorContent();
          },
        },
        mounted: function () {
          if ((this.makeEditor(), this.populateEditorContent(), this.$store.state.user.premium)) {
            var e = document.getElementById('addon-editor-attachments-input');
            e && e.addEventListener('change', this.onUploadingFiles, !1);
            try {
              document.addEventListener('dragenter', this.onDragEnter, !1),
                document.addEventListener('dragleave', this.onDragLeave, !1),
                document.addEventListener('dragover', this.onDragOver, !1),
                document.addEventListener('drop', this.onDrop, !1);
            } catch (t) {
              window._logger(t);
            }
          }
          this.showPlaceholder = !this.templateHtmlBody;
        },
        beforeDestroy: function () {
          try {
            document.removeEventListener('dragenter', this.onDragEnter, !1),
              document.removeEventListener('dragleave', this.onDragLeave, !1),
              document.removeEventListener('dragover', this.onDragOver, !1),
              document.removeEventListener('drop', this.onDrop, !1);
          } catch (e) {
            window._logger(e);
          }
        },
        methods: {
          makeEditor: function () {
            var e = window.goog,
              t = window.mailmeteor;
            if (e && e.editor && t && t.editor) {
              (this.googUIEditor = new e.editor.Field('addon-editor-contenteditable')),
                this.googUIEditor.registerPlugin(new e.editor.plugins.BasicTextFormatter()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.RemoveFormatting()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.ListTabHandler()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.SpacesTabHandler()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.EnterHandler()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.HeaderFormatter()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.LinkDialogPlugin()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.LinkBubble()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.ImageBubble()),
                this.googUIEditor.registerPlugin(new e.editor.plugins.UndoRedo()),
                this.googUIEditor.registerPlugin(new t.editor.VariablesPicker()),
                this.googUIEditor.registerPlugin(new t.editor.AttachImage());
              var a = e.ui.editor.ToolbarFactory.makeButton('goog-attach-file', 'Attach file', '', 'tr-icon tr-attach-file'),
                i = e.ui.editor.ToolbarFactory.makeButton('goog-edit-html', 'Developer mode', '', 'tr-icon tr-edit-html'),
                s = this.$i18n.t('EDITOR_TOOLBAR_INSERT_VARIABLE'),
                n = t.editor.VariablesPicker.makeMenuButton('goog-variables-picker', s, s),
                o = t.editor.AttachImage.makeButton('goog-attach-image', 'Attach image', '', 'tr-icon tr-image'),
                r = this.getSheetHeaders;
              n.setVariables(r);
              var l = (
                  this.toolbarMinimal
                    ? [
                        e.editor.Command.BOLD,
                        e.editor.Command.ITALIC,
                        e.editor.Command.UNDERLINE,
                        new e.ui.ToolbarSeparator(),
                        e.editor.Command.ORDERED_LIST,
                        e.editor.Command.UNORDERED_LIST,
                        new e.ui.ToolbarSeparator(),
                        o,
                        this.configAllowAttachments && a,
                        e.editor.Command.LINK,
                        n,
                      ]
                    : [
                        e.editor.Command.BOLD,
                        e.editor.Command.ITALIC,
                        e.editor.Command.UNDERLINE,
                        e.editor.Command.FONT_COLOR,
                        e.editor.Command.REMOVE_FORMAT,
                        new e.ui.ToolbarSeparator(),
                        e.editor.Command.JUSTIFY_LEFT,
                        e.editor.Command.JUSTIFY_CENTER,
                        e.editor.Command.JUSTIFY_RIGHT,
                        new e.ui.ToolbarSeparator(),
                        e.editor.Command.ORDERED_LIST,
                        e.editor.Command.UNORDERED_LIST,
                        new e.ui.ToolbarSeparator(),
                        o,
                        this.configAllowAttachments && a,
                        e.editor.Command.LINK,
                        n,
                        new e.ui.ToolbarSeparator(),
                        i,
                      ]
                ).filter(function (e) {
                  return e;
                }),
                c = e.ui.editor.DefaultToolbar.makeToolbar(l, e.dom.getElement('addon-editor-toolbar'));
              new e.ui.editor.ToolbarController(this.googUIEditor, c),
                this.googUIEditor.usesIframe(!0),
                this.googUIEditor.makeEditable(),
                e.events.listen(this.googUIEditor, e.editor.Field.EventType.DELAYEDCHANGE, this.onUpdateEditorContent),
                e.events.listen(a, e.ui.Component.EventType.ACTION, this.onAttachFile),
                e.events.listen(i, e.ui.Component.EventType.ACTION, this.toggleEditor),
                this.googUIEditor.addEventListener(e.events.EventType.FOCUS, this.onFocusEditor),
                this.googUIEditor.addEventListener(e.events.EventType.BLUR, this.onBlurEditor);
            } else this.retryMakeEditor();
          },
          retryMakeEditor: function () {
            var e = this,
              t = 100,
              a = 50;
            if (this.editorInitializationCounter > a) throw new Error('Unable to initialize Google API / Google Editor.');
            window.setTimeout(function () {
              e.editorInitializationCounter++, e.makeEditor();
            }, t);
          },
          toggleEditor: function () {
            this.$store.state.user.premium ? (this.onUpdateEditorContent(), this.$emit('editor-toggle', 'html')) : this.$store.dispatch('showSplashScreen', 'edithtml');
          },
          populateEditorContent: function () {
            var e = window.goog,
              t = this.templateHtmlBody;
            if (t)
              if (this.googUIEditor) {
                var a = new e.html.sanitizer.HtmlSanitizer.Builder()
                    .allowCssStyles()
                    .inlineStyleRules()
                    .withCustomNetworkRequestUrlPolicy(e.html.SafeUrl.sanitize)
                    .allowFormTag()
                    .build(),
                  i = a.sanitize(t);
                this.googUIEditor.setSafeHtml(!1, i);
              } else this.retryPopulateEditorContent();
          },
          retryPopulateEditorContent: function () {
            var e = this,
              t = 100,
              a = 50;
            if (this.populateEditorContentCounter > a) throw new Error('Unable to populate editor.');
            window.setTimeout(function () {
              e.populateEditorContentCounter++, e.populateEditorContent();
            }, t);
          },
          onUpdateEditorContent: function () {
            this.$emit('content-update', { body: this.googUIEditor.getCleanContents() });
          },
          onFocusEditor: function () {
            this.showPlaceholder = !1;
          },
          onBlurEditor: function () {
            var e = this;
            this.$nextTick(function () {
              if (e.googUIEditor) {
                var t = e.googUIEditor.getCleanContents(),
                  a = '' === t || '<br>' === t;
                e.showPlaceholder = a;
              }
            });
          },
          focusEditor: function () {
            this.googUIEditor.focus();
          },
          onAttachFile: function () {
            this.$store.state.user.premium
              ? ((this.showAttachmentsDropHandler = !1), (this.showAttachmentsPicker = !this.showAttachmentsPicker))
              : this.$store.dispatch('showSplashScreen', 'attachment');
          },
          showFilePicker: function () {
            if (this.$store.state.user.premium) {
              var e = document.getElementById('addon-editor-attachments-input');
              e && e.click();
            }
          },
          onDragEnter: function (e) {
            this.showAttachmentsDropHandler || (this.showAttachmentsDropHandler = !0), e.preventDefault();
          },
          onDragLeave: function (e) {
            e.relatedTarget || (this.showAttachmentsDropHandler = !1), e.preventDefault();
          },
          onDragOver: function (e) {
            e.preventDefault();
          },
          onDrop: function (e) {
            e.preventDefault();
            var t = e.dataTransfer;
            if (((this.showAttachmentsDropHandler = !1), (this.showAttachmentsPicker = !1), t && t.files)) {
              var a = t.files,
                i = this.getTemplateAttachmentsTotalSize(),
                s = this.getTemplateAttachmentsLength();
              if (a)
                for (var n = 0; n < a.length; n++) {
                  var o = a[n];
                  o.size && this.handleFileUpload(o, i, s + n + 1);
                }
            }
          },
          onUploadingFiles: function (e) {
            if ((e.preventDefault(), (this.showAttachmentsPicker = !1), e && e.target)) {
              for (var t = e.target, a = t.files, i = this.getTemplateAttachmentsTotalSize(), s = this.getTemplateAttachmentsLength(), n = 0, o = a.length; n < o; n++) {
                var r = a[n];
                r.size && this.handleFileUpload(r, i, s + n + 1);
              }
              t.value = '';
            }
          },
          handleFileUpload: function (e, t, a) {
            var i = this,
              s = (window._app && window._app.attachments) || {},
              n = s.MAX_FILES,
              o = s.MAX_FILESIZE,
              l = o;
            (e.id = this.generateFileId()), this.$emit('attachment-create', { id: e.id, size: e.size, name: e.name, progress: 0 });
            var c = function (t, a) {
              i.$emit('attachment-update', { id: e.id, key: t, value: a });
            };
            if (e.size > o) c('error', 'File too large (max 5Mo)');
            else if (a > n) c('error', 'Too many attachments (max ' + n + ' files)');
            else if (t + e.size > l) c('error', 'Attachments too large (max 5Mo)');
            else if (this.isFileExtensionBlocked(e)) c('error', 'Blocked for security reasons!');
            else {
              var d = '/attachments/' + this.$store.state.user.uid + '/' + e.id + '/' + e.name,
                _ = r.a.storage().ref(d),
                u = _.put(e);
              u.on(
                'state_changed',
                function (e) {
                  var t = Math.round((e.bytesTransferred / e.totalBytes) * 100);
                  c('progress', t);
                },
                function (e) {
                  window._logger(e), c('error', e.message);
                },
                function () {
                  window.setTimeout(function () {
                    c('progress', null), c('uploaded', !0);
                  }, 800),
                    window._gtag('event', 'upload-attachment', { event_category: 'engagement' }),
                    window.telemetry.track('Attachment uploaded', { size: e.size });
                }
              );
            }
          },
          onAttachmentRemoval: function (e) {
            this.$emit('attachment-remove', e);
          },
          generateFileId: function () {
            var e = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
              t = 0,
              a = [],
              i = new Date().getTime(),
              s = i === t;
            t = i;
            var n = new Array(8),
              o = 0;
            for (o = 7; o >= 0; o--) (n[o] = e.charAt(i % 64)), (i = Math.floor(i / 64));
            if (0 !== i) throw new Error('We should have converted the entire timestamp.');
            var r = n.join('');
            if (s) {
              for (o = 11; o >= 0 && 63 === a[o]; o--) a[o] = 0;
              a[o]++;
            } else for (o = 0; o < 12; o++) a[o] = Math.floor(64 * Math.random());
            for (o = 0; o < 12; o++) r += e.charAt(a[o]);
            if (20 != r.length) throw new Error('Length should be 20.');
            return r;
          },
          getTemplateAttachmentsTotalSize: function () {
            var e = 0;
            for (var t in this.templateAttachments) {
              var a = this.templateAttachments[t];
              e += a.error ? 0 : a.size;
            }
            return e;
          },
          getTemplateAttachmentsLength: function () {
            var e = 0;
            for (var t in this.templateAttachments) {
              var a = this.templateAttachments[t];
              e += a.error ? 0 : 1;
            }
            return e;
          },
          isFileExtensionBlocked: function (e) {
            var t = [
                'ade',
                'adp',
                'apk',
                'appx',
                'appxbundle',
                'bat',
                'cab',
                'chm',
                'cmd',
                'com',
                'cpl',
                'dll',
                'dmg',
                'exe',
                'hta',
                'ins',
                'isp',
                'iso',
                'jar',
                'js',
                'jse',
                'lib',
                'lnk',
                'mde',
                'msc',
                'msi',
                'msix',
                'msixbundle',
                'msp',
                'mst',
                'nsh',
                'pif',
                'ps1',
                'scr',
                'sct',
                'shb',
                'sys',
                'vb',
                'vbe',
                'vbs',
                'vxd',
                'wsc',
                'wsf',
                'wsh',
              ],
              a = (e && e.name) || '',
              i = a.split('.').pop();
            return i && t.indexOf(i) >= 0;
          },
        },
      }),
      fe = ve,
      Ne = (a('f63b'), a('e994'), Object(S['a'])(fe, Oe, Te, !1, null, '719643ba', null)),
      Ce = Ne.exports,
      Re = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-editor-html' }, [
          a('div', { staticStyle: { padding: '8px', position: 'relative', 'user-select': 'none' }, attrs: { id: 'addon-editor-toolbar' } }, [
            a('i', { domProps: { innerHTML: e._s(e.$t('MODAL_COMPOSE_HTML_HEADING')) } }),
            a('div', {
              staticStyle: { position: 'absolute', right: '8px', top: '6px' },
              attrs: { 'data-icon': 'close' },
              on: {
                click: function (t) {
                  return t.preventDefault(), e.toggleSplash(t);
                },
              },
            }),
          ]),
          a('div', { attrs: { id: 'addon-editor-body' } }, [
            a('textarea', {
              directives: [{ name: 'model', rawName: 'v-model', value: e.rawContent, expression: 'rawContent' }],
              domProps: { value: e.rawContent },
              on: {
                change: e.onUpdateEditorContent,
                input: function (t) {
                  t.target.composing || (e.rawContent = t.target.value);
                },
              },
            }),
          ]),
          e.showSplash
            ? a('div', { staticClass: 'addon-splash' }, [
                a('div', {
                  staticClass: 'addon-splash-background',
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.toggleSplash(t);
                    },
                  },
                }),
                a('div', { staticClass: 'addon-splash-content addon-splash-info' }, [
                  a('div', {
                    staticClass: 'addon-splash-close',
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.toggleSplash(t);
                      },
                    },
                  }),
                  a('h2', { staticClass: 'addon-splash-heading' }, [e._v(e._s(e.$t('MODAL_SPLASH_HTMLEDITOR_TITLE')))]),
                  a('p', { staticClass: 'addon-splash-text' }, [e._v(e._s(e.$t('MODAL_SPLASH_HTMLEDITOR_DESCRIPTION')))]),
                  a('div', { staticClass: 'addon-splash-actions' }, [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.toggleSplash(t);
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_SPLASH_HTMLEDITOR_SECONDARY_TEXT')))]
                    ),
                    a(
                      'button',
                      {
                        staticClass: 'addon-button addon-button-action',
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.toggleEditor(t);
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_SPLASH_HTMLEDITOR_PRIMARY_LINK')))]
                    ),
                  ]),
                ]),
              ])
            : e._e(),
        ]);
      },
      Pe = [],
      be = n['a'].extend({
        props: ['templateHtmlBody'],
        data: function () {
          return { rawContent: this.templateHtmlBody, showSplash: !1 };
        },
        methods: {
          onUpdateEditorContent: function () {
            this.$emit('content-update', { body: this.rawContent, developerMode: !0 });
          },
          toggleEditor: function () {
            this.onUpdateEditorContent(), this.$emit('editor-toggle', 'goog');
          },
          toggleSplash: function () {
            this.showSplash = !this.showSplash;
          },
        },
      }),
      we = be,
      Ue = Object(S['a'])(we, Re, Pe, !1, null, null, null),
      ye = Ue.exports,
      He = n['a'].extend({
        components: { ModalFooterIcons: N, ModalComposeGoogEditor: Ce, ModalComposeHTMLEditor: ye },
        data: function () {
          return { subject: '', initialHtmlBody: '', htmlBody: '', attachments: {}, developerMode: void 0, upgradeUI: !1, window: 'base' };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge'])), {
          isNewTemplate: function () {
            return '/templates/new' === this.$store.state.location;
          },
        }),
        mounted: function () {
          var e = this;
          if (this.isNewTemplate) this.$store.dispatch('templates/select', null);
          else {
            var t = this.$store.getters.getActiveTemplate;
            if (t && t.id) {
              if (((this.subject = t.subject), (this.developerMode = t.developerMode || void 0), t.attachments))
                for (var a in t.attachments) this.$set(this.attachments, a, t.attachments[a]);
              r.a
                .database()
                .ref('templates/' + t.id)
                .once('value', function (t) {
                  var a = t.val();
                  (e.initialHtmlBody = a.body), (e.htmlBody = a.body);
                });
            }
          }
        },
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          cancel: function () {
            this.setLocation(':back');
          },
          onToggleEditor: function (e) {
            (this.initialHtmlBody = this.htmlBody), (this.developerMode = 'html' === e);
          },
          onContentUpdated: function (e) {
            (this.htmlBody = e.body), (this.developerMode = e.developerMode);
          },
          onAttachmentCreated: function (e) {
            this.$set(this.attachments, e.id, e);
          },
          onAttachmentUpdated: function (e) {
            var t = this.attachments;
            for (var a in t) {
              var i = t[a];
              if (e.id === i.id) {
                'uploaded' !== e.key && this.$set(t[a], e.key, e.value);
                break;
              }
            }
          },
          onAttachmentRemoval: function (e) {
            this.$delete(this.attachments, e.id);
          },
          saveTemplate: function () {
            if (this.subject && '' != this.subject) {
              var e = this.htmlBody ? this.htmlBody : '',
                t = !this.isNewTemplate && this.$store.getters.getActiveTemplate,
                a = {
                  id: t ? t.id : null,
                  name: t ? t.name : null,
                  subject: this.subject,
                  htmlBody: e,
                  attachments: this.getAttachmentsCleaned(),
                  updatedAt: new Date().getTime(),
                  developerMode: this.developerMode,
                },
                i = JSON.stringify(a).length;
              i > 17e4
                ? this.$store.dispatch('showButterbar', 'ERROR_TEMPLATE_IS_TOO_BIG')
                : (a.id ? this.$store.dispatch('templates/update', a) : this.$store.dispatch('templates/create', a), this.setLocation('/'));
            } else this.$store.dispatch('showButterbar', 'ERROR_TEMPLATE_HAS_NO_SUBJECT');
          },
          getAttachmentsCleaned: function () {
            var e = {};
            for (var t in this.attachments) {
              var a = this.attachments[t];
              a.error || a.progress || (e[t] = { id: a.id, name: a.name, size: a.size });
            }
            return e;
          },
        },
      }),
      ke = He,
      Be = Object(S['a'])(ke, he, Ee, !1, null, null, null),
      Ge = Be.exports,
      Fe = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUITemplates' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-table-list-container' }, [
              a('table', { staticClass: 'addon-table addon-table-list', attrs: { border: '0', cellpadding: '0', cellspacing: '0' } }, [
                a('thead', [a('tr', [a('th', [e._v(e._s(e.$t('MODAL_TEMPLATES_MANAGE_SUBJECT')))]), a('th', [e._v(e._s(e.$t('MODAL_TEMPLATES_MANAGE_LAST_EDITED')))]), a('th')])]),
                a(
                  'tbody',
                  e._l(e.templates, function (t, i) {
                    return a('tr', { key: i }, [
                      a(
                        'td',
                        {
                          on: {
                            click: function (a) {
                              return a.preventDefault(), e.editTemplate(t);
                            },
                          },
                        },
                        [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(t.name || t.subject || e.$t('MAIL_EMPTY_SUBJECT')))])]
                      ),
                      a(
                        'td',
                        {
                          on: {
                            click: function (a) {
                              return a.preventDefault(), e.editTemplate(t);
                            },
                          },
                        },
                        [a('span', [e._v(e._s(e.lastUpdated(t)))])]
                      ),
                      a('td', { staticClass: 'addon-table-list-icons' }, [
                        a('div', {
                          attrs: { 'data-icon': 'edit', title: e.$t('MODAL_TEMPLATES_MANAGE_EDIT'), alt: e.$t('MODAL_TEMPLATES_MANAGE_EDIT') },
                          on: {
                            click: function (a) {
                              return a.preventDefault(), e.editTemplate(t);
                            },
                          },
                        }),
                        a('div', {
                          attrs: { 'data-icon': 'delete', title: e.$t('MODAL_TEMPLATES_MANAGE_DELETE'), alt: e.$t('MODAL_TEMPLATES_MANAGE_DELETE') },
                          on: {
                            click: function (a) {
                              return a.preventDefault(), e.deleteTemplate(t);
                            },
                          },
                        }),
                      ]),
                    ]);
                  }),
                  0
                ),
              ]),
              0 === e.templates.length
                ? a('div', { staticClass: 'addon-table-empty-state' }, [
                    a('div', [
                      a('img', {
                        attrs: {
                          src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/modals/empty-state.svg',
                          alt: e.$t('MODAL_TEMPLATES_MANAGE_EMPTY_STATE_IMAGE'),
                          title: e.$t('MODAL_TEMPLATES_MANAGE_EMPTY_STATE_IMAGE'),
                        },
                      }),
                    ]),
                    a('h2', [e._v(e._s(e.$t('MODAL_TEMPLATES_MANAGE_EMPTY_STATE_TITLE')))]),
                    a('p', [e._v(e._s(e.$t('MODAL_TEMPLATES_MANAGE_EMPTY_STATE_SUBTITLE')))]),
                  ])
                : e._e(),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a('td', { staticClass: 'addon-footer-actions' }, [
                  a(
                    'button',
                    {
                      staticClass: 'addon-button',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.cancel();
                        },
                      },
                    },
                    [e._v(e._s(e.$t('MODAL_BUTTON_GO_BACK')))]
                  ),
                  a(
                    'button',
                    {
                      staticClass: 'addon-button addon-button-action',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.createNew();
                        },
                      },
                    },
                    [e._v(' ' + e._s(e.$t('MODAL_TEMPLATES_MANAGE_CREATE')) + ' ')]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      $e = [],
      We = n['a'].extend({
        components: { ModalFooterIcons: N },
        computed: Object(_['c'])(['templates']),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          cancel: function () {
            this.setLocation('/');
          },
          createNew: function () {
            this.setLocation('/templates/new');
          },
          editTemplate: function (e) {
            this.$store.dispatch('templates/edit', e);
          },
          deleteTemplate: function (e) {
            this.$store.dispatch('templates/remove', e);
          },
          lastUpdated: function (e) {
            return e.updatedAt ? new Date(e.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
          },
        },
      }),
      xe = We,
      Ve = Object(S['a'])(xe, Fe, $e, !1, null, null, null),
      je = Ve.exports,
      Ye = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIAlias' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-main-subtitle', domProps: { innerHTML: e._s(e.$t('MODAL_ALIAS_TIP')) } }),
            a('div', { staticClass: 'addon-table-list-container', staticStyle: { 'min-height': '180px' } }, [
              a('table', { staticClass: 'addon-table addon-table-list', attrs: { cellpadding: '0', cellspacing: '0' } }, [
                a('thead', [a('tr', [a('th', [e._v(e._s(e.$t('MODAL_ALIAS_NAME_HEADING')))]), a('th', [e._v(e._s(e.$t('MODAL_ALIAS_EMAIL_HEADING')))]), a('th')])]),
                a(
                  'tbody',
                  [
                    e._l(e.aliasesWithPrimary, function (e, t) {
                      return a('ModalAliasesItem', { key: t, tag: 'tr', attrs: { alias: e, index: t } });
                    }),
                    e.createNew ? a('ModalAliasesItem', { ref: 'newAlias', tag: 'tr', attrs: { alias: e.emptyAlias }, on: { saveNewAlias: e.onNewAliasSaved } }) : e._e(),
                  ],
                  2
                ),
              ]),
            ]),
            e.createNew ? a('div', { staticClass: 'addon-infobar addon-infobar-info', domProps: { innerHTML: e._s(e.$t('MODAL_ALIAS_HELP')) } }) : e._e(),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a('td', { staticClass: 'addon-footer-actions' }, [
                  a(
                    'button',
                    {
                      staticClass: 'addon-button',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.setLocation(':back');
                        },
                      },
                    },
                    [e._v(e._s(e.$t('MODAL_BUTTON_GO_BACK')))]
                  ),
                  e.createNew
                    ? a(
                        'button',
                        {
                          staticClass: 'addon-button addon-button-action',
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.saveNewAlias();
                            },
                          },
                        },
                        [e._v(' ' + e._s(e.$t('MODAL_ALIAS_SAVE_NEW')) + ' ')]
                      )
                    : a(
                        'button',
                        {
                          staticClass: 'addon-button addon-button-action',
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.createNewAlias();
                            },
                          },
                        },
                        [e._v(' ' + e._s(e.$t('MODAL_ALIAS_CREATE_NEW')) + ' ')]
                      ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      ze = [],
      qe = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('tr', { staticClass: 'sheetUIAliasItem' }, [
          a('td', [
            a(
              'div',
              {
                directives: [{ name: 'show', rawName: 'v-show', value: !e.edit, expression: '!edit' }],
                staticClass: 'addon-text-ellipsis',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.selectAlias();
                  },
                },
              },
              [e._v(' ' + e._s(e.name) + ' ')]
            ),
            a('input', {
              directives: [
                { name: 'show', rawName: 'v-show', value: e.edit, expression: 'edit' },
                { name: 'model', rawName: 'v-model', value: e.name, expression: 'name' },
              ],
              staticClass: 'addon-input',
              attrs: { type: 'text' },
              domProps: { value: e.name },
              on: {
                keyup: function (t) {
                  return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ? null : e.saveAlias(t);
                },
                input: function (t) {
                  t.target.composing || (e.name = t.target.value);
                },
              },
            }),
          ]),
          a('td', [
            a(
              'div',
              {
                directives: [{ name: 'show', rawName: 'v-show', value: !e.edit, expression: '!edit' }],
                staticClass: 'addon-text-ellipsis',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.selectAlias();
                  },
                },
              },
              [e._v(' ' + e._s(e.email) + ' ')]
            ),
            a('input', {
              directives: [
                { name: 'show', rawName: 'v-show', value: e.edit, expression: 'edit' },
                { name: 'model', rawName: 'v-model', value: e.email, expression: 'email' },
              ],
              staticClass: 'addon-input',
              attrs: { type: 'email' },
              domProps: { value: e.email },
              on: {
                keyup: function (t) {
                  return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ? null : e.saveAlias(t);
                },
                input: function (t) {
                  t.target.composing || (e.email = t.target.value);
                },
              },
            }),
          ]),
          a('td', { staticClass: 'addon-table-list-icons' }, [
            e.isPrimary
              ? a('div', [
                  a('a', { staticClass: 'addon-table-list-icon addon-tooltip--bottom--right tooltip-on-icon', attrs: { 'data-tooltip': e.$t('MODAL_ALIAS_TOOLTIP_PRIMARY') } }, [
                    a('img', {
                      staticStyle: { width: '18px', height: '18px' },
                      attrs: {
                        title: e.$t('MODAL_ICONS_INFO'),
                        alt: e.$t('MODAL_ICONS_INFO'),
                        src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/info-blue.svg',
                      },
                    }),
                  ]),
                ])
              : e._e(),
            e.isEditable && !e.edit
              ? a('div', [
                  a(
                    'a',
                    {
                      staticClass: 'addon-table-list-icon',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.editAlias();
                        },
                      },
                    },
                    [
                      a('img', {
                        attrs: {
                          title: e.$t('MODAL_ICONS_EDIT'),
                          alt: e.$t('MODAL_ICONS_EDIT'),
                          src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/edit-blue.svg',
                        },
                      }),
                    ]
                  ),
                  a(
                    'a',
                    {
                      staticClass: 'addon-table-list-icon',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.deleteAlias();
                        },
                      },
                    },
                    [
                      a('img', {
                        attrs: {
                          title: e.$t('MODAL_ICONS_DELETE'),
                          alt: e.$t('MODAL_ICONS_DELETE'),
                          src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/delete-blue.svg',
                        },
                      }),
                    ]
                  ),
                ])
              : e.isEditable && e.edit
              ? a('div', [
                  a(
                    'a',
                    {
                      directives: [{ name: 'show', rawName: 'v-show', value: e.isEditable && e.edit, expression: 'isEditable && edit' }],
                      staticClass: 'addon-table-list-icon',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.updateAlias();
                        },
                      },
                    },
                    [
                      a('img', {
                        attrs: {
                          title: e.$t('MODAL_ICONS_SAVE'),
                          alt: e.$t('MODAL_ICONS_SAVE'),
                          src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/save-blue.svg',
                        },
                      }),
                    ]
                  ),
                  a(
                    'a',
                    {
                      staticClass: 'addon-table-list-icon',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.deleteAlias();
                        },
                      },
                    },
                    [
                      a('img', {
                        attrs: {
                          title: e.$t('MODAL_ICONS_DELETE'),
                          alt: e.$t('MODAL_ICONS_DELETE'),
                          src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/delete-blue.svg',
                        },
                      }),
                    ]
                  ),
                ])
              : e._e(),
          ]),
        ]);
      },
      Ke = [],
      Xe = n['a'].extend({
        props: { alias: Object, index: Number },
        data: function () {
          return { name: this.alias.name, email: this.alias.email, edit: this.alias.edit || !1 };
        },
        computed: {
          isPrimary: function () {
            return 0 === this.index;
          },
          isEditable: function () {
            return !this.isPrimary;
          },
          isNewAlias: function () {
            return !(!this.alias.edit || this.alias.name || this.alias.email);
          },
        },
        methods: {
          editAlias: function () {
            this.edit = !0;
          },
          selectAlias: function () {
            this.edit || (this.$store.dispatch('aliases/select', { name: this.name, email: this.email }), this.$store.dispatch('setLocation', '/'));
          },
          updateAlias: function (e) {
            if (/@/.test(this.email) && this.name) {
              if (((this.edit = !1), this.$store.dispatch('aliases/update', { oldAlias: this.alias, newAlias: { name: this.name, email: this.email } }), e))
                return this.selectAlias();
              this.isNewAlias && this.$emit('saveNewAlias');
            }
          },
          deleteAlias: function () {
            this.$store.dispatch('aliases/remove', this.alias);
          },
        },
      }),
      Qe = Xe,
      Je = Object(S['a'])(Qe, qe, Ke, !1, null, null, null),
      Ze = Je.exports,
      et = n['a'].extend({
        components: { ModalAliasesItem: Ze, ModalFooterIcons: N },
        data: function () {
          return { createNew: !1, emptyAlias: { name: '', email: '', edit: !0 } };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['aliases', 'user'])), {
          aliasesWithPrimary: function () {
            return [{ name: this.user.name, email: this.user.email }].concat(this.aliases);
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          createNewAlias: function () {
            this.createNew = !0;
          },
          saveNewAlias: function () {
            this.$refs.newAlias.updateAlias(!0);
          },
          onNewAliasSaved: function () {
            (this.createNew = !1), (this.emptyAlias = { name: '', email: '', edit: !0 });
          },
        },
      }),
      tt = et,
      at = Object(S['a'])(tt, Ye, ze, !1, null, null, null),
      it = at.exports,
      st = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIPreview' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-email-preview' }, [
              e.isFetching
                ? a('div', { staticClass: 'addon-email-preview-loader' })
                : a('div', [
                    a('div', { staticClass: 'addon-email-preview-header' }, [
                      a('div', { staticClass: 'addon-text-ellipsis' }, [a('strong', { staticStyle: { 'font-size': '1.1rem' } }, [e._v(e._s(e.subject))])]),
                      a('div', { staticStyle: { display: 'flex', 'align-items': 'center' } }, [
                        a('label', { staticClass: 'addon-email-preview-label' }, [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_TO')))]),
                        a('span', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.to))]),
                        a('div', {
                          attrs: { 'data-icon': 'caret' },
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.toggleMetadata(t);
                            },
                          },
                        }),
                      ]),
                      a('div', { staticClass: 'addon-email-preview-actions' }, [
                        e.parsingErrors.length > 0
                          ? a('span', [
                              a('div', {
                                staticClass: 'addon-tooltip--left',
                                attrs: { 'data-icon': 'warning-orange', 'data-tooltip': 'Missing variables', disabled: e.isActionsDisabled },
                                on: {
                                  click: function (t) {
                                    return t.preventDefault(), e.showParsingErrorSplash();
                                  },
                                },
                              }),
                            ])
                          : e._e(),
                        e.sheet.emailing.recipients > 1
                          ? a('span', [
                              a('div', {
                                attrs: { 'data-icon': 'arrow-back', disabled: e.isActionsDisabled },
                                on: {
                                  click: function (t) {
                                    return t.preventDefault(), e.togglePreview(-1);
                                  },
                                },
                              }),
                              a('div', {
                                attrs: { 'data-icon': 'arrow-next', disabled: e.isActionsDisabled },
                                on: {
                                  click: function (t) {
                                    return t.preventDefault(), e.togglePreview(1);
                                  },
                                },
                              }),
                            ])
                          : e._e(),
                        e.isDeveloperMode && 'desktop' === e.isResponsiveView
                          ? a('div', {
                              staticClass: 'addon-tooltip--left',
                              attrs: { 'data-icon': 'mobile-view', 'data-tooltip': 'Switch to mobile view' },
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.toggleResponsiveView(t);
                                },
                              },
                            })
                          : e.isDeveloperMode && 'mobile' === e.isResponsiveView
                          ? a('div', {
                              staticClass: 'addon-tooltip--left',
                              attrs: { 'data-icon': 'desktop-view', 'data-tooltip': 'Switch to desktop view' },
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.toggleResponsiveView(t);
                                },
                              },
                            })
                          : e._e(),
                        a('div', {
                          staticClass: 'addon-tooltip--left',
                          attrs: { 'data-icon': 'edit', 'data-tooltip': e.$t('MODAL_TEMPLATES_MANAGE_EDIT'), disabled: e.isActionsDisabled },
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.editTemplate();
                            },
                          },
                        }),
                      ]),
                    ]),
                    e.showMetadata
                      ? a('div', { staticClass: 'addon-email-preview-metadata' }, [
                          a('table', { staticClass: 'addon-table' }, [
                            a('tbody', [
                              a('tr', [
                                a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_FROM')))])]),
                                a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.sender))])]),
                              ]),
                              a('tr', [
                                a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_TO')))])]),
                                a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.to))])]),
                              ]),
                              e.cc
                                ? a('tr', [
                                    a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_CC')))])]),
                                    a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.cc))])]),
                                  ])
                                : e._e(),
                              e.bcc
                                ? a('tr', [
                                    a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_BCC')))])]),
                                    a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.bcc))])]),
                                  ])
                                : e._e(),
                              a('tr', [
                                a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_SUBJECT')))])]),
                                a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v(e._s(e.subject))])]),
                              ]),
                              a('tr', [
                                a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_TRACKING')))])]),
                                a('td', [
                                  a('div', { staticClass: 'addon-text-ellipsis' }, [
                                    e.merge.hasTracking
                                      ? a('span', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_ENABLED')))])
                                      : a('span', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_DISABLED')))]),
                                    e._v(' '),
                                    a('a', { attrs: { href: 'https://support.mailmeteor.com/introduction/advanced/tracking-report', target: '_blank', rel: 'noopener' } }, [
                                      e._v(e._s(e.$t('LEARN_MORE'))),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              e.merge.hasUnsubscribe
                                ? a('tr', [
                                    a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_UNSUBSCRIBE')))])]),
                                    a('td', [
                                      a('div', { staticClass: 'addon-text-ellipsis' }, [
                                        e.merge.hasUnsubscribe
                                          ? a('span', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_ENABLED')))])
                                          : a('span', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_DISABLED')))]),
                                        e._v(' '),
                                        a('a', { attrs: { href: 'https://support.mailmeteor.com/introduction/advanced/unsubscribe-link', target: '_blank', rel: 'noopener' } }, [
                                          e._v(e._s(e.$t('LEARN_MORE'))),
                                        ]),
                                      ]),
                                    ]),
                                  ])
                                : e._e(),
                              a('tr', [
                                a('td', [a('label', [e._v(e._s(e.$t('MODAL_PREVIEW_METADATA_ROW')))])]),
                                a('td', [a('div', { staticClass: 'addon-text-ellipsis' }, [e._v('#' + e._s(e.sheetCurrRowNumber))])]),
                              ]),
                            ]),
                          ]),
                        ])
                      : e._e(),
                    a(
                      'div',
                      { staticClass: 'addon-email-preview-content', class: { 'mobile-view': 'mobile' === e.isResponsiveView, 'developer-mode': e.isDeveloperMode } },
                      [
                        a('ModalPreviewBody', { key: Date.now(), staticClass: 'addon-email-preview-body', attrs: { 'templated-body': e.body } }),
                        e.hasAttachments
                          ? [
                              e._l(e.activeTemplate.attachments, function (e, t) {
                                return [a('ModalMessageAttachment', { key: t, attrs: { file: e } })];
                              }),
                            ]
                          : e._e(),
                        e.hasPersonalizedAttachments ? [a('ModalMessageAttachment', { attrs: { file: e.personalizedAttachmentsFilePlaceholder } })] : e._e(),
                      ],
                      2
                    ),
                  ]),
            ]),
            e.showParsingErrors
              ? a('div', { staticClass: 'addon-splash' }, [
                  a('div', {
                    staticClass: 'addon-splash-background',
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.hideParsingErrorSplash(t);
                      },
                    },
                  }),
                  a('div', { staticClass: 'addon-splash-content addon-splash-warning' }, [
                    a('div', {
                      staticClass: 'addon-splash-close',
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.hideParsingErrorSplash(t);
                        },
                      },
                    }),
                    a('h2', { staticClass: 'addon-splash-heading' }, [e._v(e._s(e.$tc('MODAL_PREVIEW_ERROR_WITH_PARSING_HEADING', e.parsingErrors.length)))]),
                    a('div', { staticClass: 'addon-splash-main' }, [
                      a('p', { staticClass: 'addon-splash-text' }, [e._v(e._s(e.$t('MODAL_PREVIEW_ERROR_WITH_PARSING_INTRO', { rowNumber: this.sheetCurrRowNumber })))]),
                      a(
                        'ul',
                        e._l(e.parsingErrors, function (t, i) {
                          return a('li', { key: i }, [e._v(e._s(t.message))]);
                        }),
                        0
                      ),
                      a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_PREVIEW_ERROR_WITH_PARSING_OUTRO', { rowNumber: this.sheetCurrRowNumber })) } }),
                    ]),
                    a('div', { staticClass: 'addon-splash-actions' }, [
                      a(
                        'a',
                        {
                          staticClass: 'addon-button addon-button-action',
                          attrs: { href: 'https://support.mailmeteor.com/help/troubleshooting/variable-not-set', target: '_blank', rel: 'noopener' },
                        },
                        [e._v('Learn more')]
                      ),
                      a(
                        'button',
                        {
                          staticClass: 'addon-button',
                          on: {
                            click: function (t) {
                              return t.preventDefault(), e.hideParsingErrorSplash(t);
                            },
                          },
                        },
                        [e._v('Close')]
                      ),
                    ]),
                  ]),
                ])
              : e._e(),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.setLocation(':back');
                          },
                        },
                      },
                      [e._v(' ' + e._s(e.$t('MODAL_BUTTON_GO_BACK')) + ' ')]
                    ),
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        class: e.uiSendingTestMailClassName,
                        attrs: { disabled: e.isActionsDisabled },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.sendTestEmail(t);
                          },
                        },
                      },
                      [a('span', { staticClass: 'addon-button-progress' }), a('span', [e._v(e._s(e.$t('MODAL_BUTTON_TEST_EMAIL')))])]
                    ),
                    a('ModalFooterSendWith', {
                      attrs: { disabled: e.isActionsDisabled, label: e.$t('MODAL_BUTTON_SEND_EMAILS'), tooltip: e.$t('MODAL_BUTTON_SEND_EMAILS_TOOLTIP') },
                      on: {
                        'click-primary': function (t) {
                          return e.setLocation('/launchpad');
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      nt = [],
      ot =
        (a('4160'),
        a('d81d'),
        a('b64b'),
        a('5319'),
        a('159b'),
        n['a'].extend({
          props: ['templatedBody'],
          mounted: function () {
            var e = this.$el;
            if (e && e.contentWindow) {
              var t = '<style>html,body{font-family: Arial, Helvetica, sans-serif;display: block;font-size: 13px;line-height: 19.5px;margin:0;padding:0;}</style>',
                a = "<script>var links = document.getElementsByTagName('a');for (var i = 0; i < links.length; i++) { links[i].setAttribute('target', '_blank'); };</script>",
                i = this.templatedBody + t + a;
              e.contentWindow.document.open(), e.contentWindow.document.write(i), e.contentWindow.document.close();
            }
          },
          render: function (e) {
            return e('iframe');
          },
        })),
      rt = ot,
      lt = Object(S['a'])(rt, i, s, !1, null, null, null),
      ct = lt.exports,
      dt = n['a'].extend({
        components: { ModalFooterIcons: N, ModalFooterSendWith: U, ModalPreviewBody: ct, ModalMessageAttachment: Me },
        data: function () {
          return {
            sheetStartingRow: 2,
            sheetCurrRowNumber: 2,
            sheetCurrRow: null,
            countFetch: 1,
            isFetching: !1,
            isSending: !1,
            isResponsiveView: 'desktop',
            isDeveloperMode: !1,
            uiSendingTestMailClassName: '',
            parsingErrors: [],
            showParsingErrors: !1,
            showMetadata: !1,
            to: '',
            bcc: '',
            cc: '',
            subject: '',
            body: '',
          };
        },
        mounted: function () {
          if (!this.activeTemplate) return window._logger('ERROR_PREVIEW_UNKNOWN_TEMPLATE'), void this.$store.dispatch('showButterbar', 'ERROR_PREVIEW_UNKNOWN_TEMPLATE');
          this.sheet && this.sheet.rows && 0 !== this.sheet.rows.length ? this.togglePreview(0) : this.fetchMoreRows(this.sheetStartingRow);
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'user', 'sheet'])), {
          activeTemplate: function () {
            return this.$store.getters.getActiveTemplate || void 0;
          },
          hasAttachments: function () {
            var e = (this.activeTemplate && this.activeTemplate.attachments) || {};
            return Object.keys(e).length > 0;
          },
          hasPersonalizedAttachments: function () {
            if (!this.sheetCurrRow) return !1;
            for (var e = 0; e < this.sheetCurrRow.length; e++) {
              var t = this.sheetCurrRow[e];
              if (t && t.header && 0 === t.header.trim().toLowerCase().indexOf('attachment')) return !0;
            }
            return !1;
          },
          personalizedAttachmentsFilePlaceholder: function () {
            return { name: String(this.$i18n.t('MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS')), link: String(this.$i18n.t('MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS_URL')) };
          },
          sender: function () {
            return this.merge.senderName ? this.merge.senderName + ' <' + this.merge.senderEmail + '>' : this.merge.senderEmail;
          },
          isActionsDisabled: function () {
            return !!this.isFetching || !!this.isSending;
          },
          isQuotaExceeded: function () {
            return this.user.quota.available <= 0;
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          editTemplate: function () {
            this.setLocation('/templates/edit');
          },
          toggleResponsiveView: function () {
            this.isResponsiveView = 'mobile' === this.isResponsiveView ? 'desktop' : 'mobile';
          },
          toggleMetadata: function () {
            this.showMetadata = !this.showMetadata;
          },
          fetchMoreRows: function (e) {
            (this.isFetching = !0),
              (this.countFetch += 1),
              window._backend
                .withFailureHandler(this.$root.errorBackendHandler)
                .withSuccessHandler(this.fetchMoreRowsSuccess)
                .sheetUIDataRows(this.sheet.activeSheet, e, this.countFetch);
          },
          fetchMoreRowsSuccess: function (e) {
            this.isFetching = !1;
            var t = e.rows;
            this.$store.dispatch('sheet/updateRows', t), this.togglePreview(0);
          },
          renderPreview: function (e) {
            var t = [],
              a = this.$i18n,
              i = function (e, i, s) {
                return e && '' !== e.trim()
                  ? e.replace(/{{[^{}]+}}/g, function (e) {
                      var n = e.replace('{{', '').replace('}}', '').trim();
                      if ('unsubscribe' === n.toLowerCase()) return 'https://mailmeteor.com/unsubscribe';
                      if (!i[n]) return t.push({ variable: n, error: 'EMPTY_VARIABLE', message: a.t('MODAL_PREVIEW_ERROR_WITH_PARSING_EMPTY_VARIABLE') + ' {{' + n + '}}' }), '';
                      var o = i[n];
                      return s && s.linebreak && (o = o.replace(/\r\n|\r|\n/g, '<br/>')), o;
                    })
                  : '';
              },
              s = {};
            e.forEach(function (e) {
              s[e.header] = e.value;
            }),
              (this.body = i(this.activeTemplate && this.activeTemplate.htmlBody, s, { linebreak: !0 })),
              (this.subject = i(this.activeTemplate && this.activeTemplate.subject, s));
            var n = e
                .filter(function (e) {
                  return 'cc' === e.header.toLowerCase();
                })
                .shift(),
              o = e
                .filter(function (e) {
                  return 'bcc' === e.header.toLowerCase();
                })
                .shift(),
              r = function (e) {
                return e
                  .trim()
                  .split(',')
                  .map(function (e) {
                    return e.trim();
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .join(', ');
              },
              l = e[this.sheet.emailing.column - 1];
            (this.to = (l && r(l.value)) || ''),
              (this.cc = (n && r(n.value)) || ''),
              (this.bcc = (o && r(o.value)) || ''),
              this.to.trim()
                ? this.to.indexOf('@') <= 0 &&
                  t.push({ variable: '__email__', error: 'INVALID_EMAIL', message: a.t('MODAL_PREVIEW_ERROR_WITH_PARSING_INVALID_EMAIL', { email: this.to }) })
                : t.unshift({ variable: '__email__', error: 'MISSING_TO_RECIPIENT', message: this.$i18n.t('MODAL_PREVIEW_ERROR_WITH_PARSING_MISSING_TO_RECIPIENT') }),
              (this.parsingErrors = t),
              (this.isDeveloperMode = this.merge.template.developerMode);
          },
          resetPreview: function () {
            (this.body = ''), (this.subject = ''), (this.to = ''), (this.cc = ''), (this.bcc = '');
          },
          showParsingErrorSplash: function () {
            this.showParsingErrors = !0;
          },
          hideParsingErrorSplash: function () {
            this.showParsingErrors = !1;
          },
          sendTestEmail: function () {
            (this.isSending = !0),
              (this.uiSendingTestMailClassName = 'addon-button-progress-wrapper animate'),
              window._backend
                .withRetry()
                .withFailureHandler(this.$root.errorBackendHandler)
                .withSuccessHandler(this.sendTestEmailSuccess)
                .sheetUISendTestMail(this.merge, this.sheet, this.sheetCurrRowNumber);
          },
          sendTestEmailSuccess: function () {
            (this.isSending = !1),
              (this.uiSendingTestMailClassName = ''),
              window._gtag('event', 'sent_test_email', { event_category: 'engagement', value: this.sheet.emailing.recipients }),
              window.telemetry.track('Test email sent', { emails: this.sheet.emailing.recipients });
          },
          togglePreview: function (e, t) {
            if (isNaN(e)) throw new Error('Unable to toggle preview, increment is malformed.');
            var a = this.sheetCurrRowNumber + e;
            if (a > this.sheet.stats.lastRow || a < this.sheetStartingRow) {
              if (0 === e || t) return;
              if (a > this.sheet.stats.lastRow) return (this.sheetCurrRowNumber = this.sheetStartingRow - 1), this.togglePreview(1);
              if (a <= this.sheetStartingRow) return (this.sheetCurrRowNumber = this.sheet.stats.lastRow + 1), this.togglePreview(-1);
            }
            if (((this.sheetCurrRowNumber = a), (this.sheetCurrRow = this.sheet.rows[a - 1]), !this.sheetCurrRow))
              return this.resetPreview(), void (this.isFetching || this.fetchMoreRows(e >= 0 ? a : -1 * a));
            var i = this.sheetCurrRow[0] || {},
              s = i.isRowEmptyOrHidden;
            if (s) {
              var n = 0 === e ? 1 : e,
                o = 0 === e || t;
              return this.togglePreview(n, o);
            }
            return (this.isFetching = !1), this.renderPreview(this.sheetCurrRow);
          },
        },
      }),
      _t = dt,
      ut = Object(S['a'])(_t, st, nt, !1, null, null, null),
      mt = ut.exports,
      At = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-main-subtitle' }, [e._v(e._s(e.$t('MODAL_SCHEDULING_TIP')))]),
            a('table', { staticClass: 'addon-table' }, [
              a('tbody', [
                a('tr', { staticStyle: { 'vertical-align': 'top' } }, [
                  a('td', [
                    a('div', { staticClass: 'addon-scheduling-calendar' }, [a('Calendar', { attrs: { selection: e.selectionDate }, on: { selected: e.setSelectedDate } })], 1),
                  ]),
                  a('td', [
                    a('div', { staticClass: 'addon-scheduling-options' }, [
                      a('section', [
                        a('table', { staticClass: 'addon-table' }, [
                          a('tbody', [
                            a('tr', { staticStyle: { 'vertical-align': 'top' } }, [
                              a('td', [
                                a('section', [
                                  a('label', { staticClass: 'addon-form-label', attrs: { for: 'addon-form-input-startdate' } }, [
                                    e._v(' ' + e._s(e.$t('MODAL_SCHEDULING_SECTION_DATE_LABEL')) + ' '),
                                  ]),
                                  a('div', { staticClass: 'addon-form-validation' }, [
                                    a('input', {
                                      directives: [{ name: 'model', rawName: 'v-model.lazy', value: e.startDayInput, expression: 'startDayInput', modifiers: { lazy: !0 } }],
                                      staticClass: 'addon-form-input',
                                      class: { 'addon-form-input-error': !e.startDayValidInput },
                                      attrs: { id: 'addon-form-input-startdate', type: 'text', title: e.startDayErrorFeedback },
                                      domProps: { value: e.startDayInput },
                                      on: {
                                        change: [
                                          function (t) {
                                            e.startDayInput = t.target.value;
                                          },
                                          e.setSelectedDay,
                                        ],
                                      },
                                    }),
                                    a('div', { staticClass: 'addon-form-validation-text' }, [
                                      a(
                                        'span',
                                        {
                                          directives: [{ name: 'show', rawName: 'v-show', value: !e.startDayValidInput, expression: '!startDayValidInput' }],
                                          staticClass: 'addon-text-error',
                                          attrs: { title: e.startDayErrorFeedback },
                                        },
                                        [e._v(e._s(e.$t('MODAL_SCHEDULING_SECTION_DATE_INVALID')))]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              a('td', [
                                a('section', [
                                  a('label', { staticClass: 'addon-form-label', attrs: { for: 'addon-form-input-starttime' } }, [
                                    e._v(' ' + e._s(e.$t('MODAL_SCHEDULING_SECTION_DATETIME_LABEL')) + ' '),
                                  ]),
                                  a('div', { staticClass: 'addon-form-validation' }, [
                                    a('input', {
                                      directives: [{ name: 'model', rawName: 'v-model.lazy', value: e.startTimeInput, expression: 'startTimeInput', modifiers: { lazy: !0 } }],
                                      staticClass: 'addon-form-input',
                                      class: { 'addon-form-input-error': !e.startTimeValidInput },
                                      attrs: { id: 'addon-form-input-starttime', type: 'text', title: e.startTimeErrorFeedback },
                                      domProps: { value: e.startTimeInput },
                                      on: {
                                        change: [
                                          function (t) {
                                            e.startTimeInput = t.target.value;
                                          },
                                          e.setSelectedTime,
                                        ],
                                      },
                                    }),
                                    a('div', { staticClass: 'addon-form-validation-text' }, [
                                      a(
                                        'span',
                                        {
                                          directives: [{ name: 'show', rawName: 'v-show', value: !e.startTimeValidInput, expression: '!startTimeValidInput' }],
                                          staticClass: 'addon-text-error',
                                          attrs: { title: e.startTimeErrorFeedback },
                                        },
                                        [e._v(e._s(e.$t('MODAL_SCHEDULING_SECTION_DATETIME_INVALID')))]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      a('section', [
                        a('label', { staticClass: 'addon-form-label' }, [e._v(' ' + e._s(e.$t('MODAL_SCHEDULING_SECTION_SUMMARY_LABEL')) + ' ')]),
                        a('div', [
                          a('span', {
                            domProps: {
                              innerHTML: e._s(
                                e.$t('MODAL_SCHEDULING_SECTION_SUMMARY_TEXT', {
                                  totalEmailsToSend: e.totalEmailsToSend,
                                  senderEmail: e.merge.senderEmail,
                                  startDate: e.formatDate(e.selectionDate),
                                })
                              ),
                            },
                          }),
                          a('br'),
                          a('br'),
                          a('span', { domProps: { innerHTML: e._s(e.$t('MODAL_SCHEDULING_SECTION_SUMMARY_TIP')) } }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.onCancel(t);
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_BUTTON_GO_BACK')))]
                    ),
                    a('ModalFooterSendWith', {
                      attrs: { disabled: !e.isSchedulingDoable, label: e.$t('MODAL_SCHEDULING_PRIMARY_BUTTON') },
                      on: {
                        'click-primary': function (t) {
                          return e.scheduleSend();
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      pt = [],
      ht =
        (a('fb6a'),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('div', { staticClass: 'addon-calendar' }, [
            a('div', { staticClass: 'addon-calendar-header' }, [
              a('div', { staticClass: 'addon-calendar-current-month' }, [e._v(e._s(e.month))]),
              a('div', {
                attrs: { 'data-icon': 'chevron-prev' },
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.setActiveMonth(-1);
                  },
                },
              }),
              a('div', {
                attrs: { 'data-icon': 'chevron-next' },
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.setActiveMonth(1);
                  },
                },
              }),
            ]),
            a('div', { staticClass: 'addon-calendar-table' }, [
              a(
                'ol',
                { staticClass: 'addon-calendar-thead' },
                e._l(e.weekdays, function (t, i) {
                  return a('li', { key: i }, [e._v(e._s(t))]);
                }),
                0
              ),
              a(
                'ol',
                { staticClass: 'addon-calendar-tbody' },
                e._l(e.days, function (t, i) {
                  return a(
                    'li',
                    {
                      key: i,
                      class: { active: !t.disabled && t.active, disabled: t.disabled, today: t.today, selected: t.selected },
                      on: {
                        click: function (a) {
                          return a.preventDefault(), e.setSelection(t);
                        },
                      },
                    },
                    [e._v(' ' + e._s(t.n) + ' ')]
                  );
                }),
                0
              ),
            ]),
          ]);
        }),
      Et = [],
      Ot = n['a'].extend({
        props: ['selection'],
        data: function () {
          return {
            day: new Date(),
            weekdays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          };
        },
        computed: {
          selectedDay: function () {
            var e = new Date(this.selection);
            return e && e instanceof Date ? (e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e) : null;
          },
          days: function () {
            var e = new Date();
            e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0);
            var t = e.getTime(),
              a = this.selectedDay ? this.selectedDay.getTime() : -1,
              i = new Date(this.day);
            i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0);
            var s = new Date(i);
            s.setDate(1);
            var n = new Date(s);
            n.setMonth(s.getMonth() - 1);
            var o = new Date(s);
            o.setMonth(s.getMonth() + 1);
            for (
              var r = o.getTime() > t,
                l = [],
                c = function (e, i, s) {
                  var n = new Date(e);
                  n.setDate(i + 1);
                  var o = n.getTime(),
                    l = t > o,
                    c = l || 'boolean' === typeof s ? s : r,
                    d = !l && o === t,
                    _ = !l && o === a;
                  return { n: i + 1, date: n, disabled: l, active: c, today: d, selected: _ };
                },
                d = this.daysInMonth(n),
                _ = 0;
              _ < d;
              _++
            )
              l.push(c(n, _, !1));
            var u = this.daysInMonth(s);
            for (_ = 0; _ < u; _++) l.push(c(s, _));
            var m = this.daysInMonth(o);
            for (_ = 0; _ < m; _++) l.push(c(o, _, !1));
            return (l = l.slice(d - s.getDay())), (l = l.slice(0, 42)), l;
          },
          month: function () {
            var e = this.day,
              t = this.months[e.getMonth()],
              a = e.getUTCFullYear();
            return t + ' ' + a;
          },
        },
        methods: {
          daysInMonth: function (e) {
            var t = new Date(e.getFullYear(), e.getMonth() + 1, 0);
            return t.getDate();
          },
          setActiveMonth: function (e) {
            var t = this.day;
            t.setMonth(t.getMonth() + e), (this.day = new Date(t.getFullYear(), t.getMonth()));
          },
          setSelection: function (e) {
            e.disabled || ((this.day = e.date), this.$emit('selected', e.date));
          },
        },
      }),
      Tt = Ot,
      Lt = (a('a50a'), Object(S['a'])(Tt, ht, Et, !1, null, '5978f04d', null)),
      It = Lt.exports,
      St = n['a'].extend({
        components: { Calendar: It, ModalFooterIcons: N, ModalFooterSendWith: U },
        data: function () {
          return {
            selectionDate: new Date(),
            startDayInput: '',
            startTimeInput: '',
            startDayErrorFeedback: '',
            startTimeErrorFeedback: '',
            startDayValidInput: !0,
            startTimeValidInput: !0,
            options: { workingtime: !1, dailylimit: !1, dailycap: 100 },
          };
        },
        mounted: function () {
          var e = (this.merge && this.merge.options) || {};
          if (e && e.at instanceof Date) this.selectionDate = e.at;
          else {
            var t = 6e4,
              a = 15 * t,
              i = Date.now(),
              s = new Date(Math.ceil((i + t) / a) * a);
            this.selectionDate = s;
          }
          (this.startDayInput = this.formatDay(this.selectionDate)), (this.startTimeInput = this.formatTime(this.selectionDate));
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet', 'user'])), {
          totalEmailsToSend: function () {
            return (this.sheet && this.sheet.emailing && this.sheet.emailing.recipients) || 0;
          },
          isSchedulingDoable: function () {
            return this.startDayValidInput && this.startTimeValidInput;
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          formatDate: function (e) {
            try {
              return e.toLocaleString(this.$i18n.locale, { dateStyle: 'long', timeStyle: 'short' });
            } catch (t) {
              return e.toString();
            }
          },
          formatDay: function (e) {
            var t = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              a = t[e.getMonth()],
              i = e.getDate(),
              s = e.getFullYear();
            return a + ' ' + i + ', ' + s;
          },
          formatTime: function (e) {
            var t = e.getHours(),
              a = e.getMinutes(),
              i = t >= 12 ? 'PM' : 'AM';
            return (t %= 12), (t = t || 12), t + ':' + ('0' + a).slice(-2) + ' ' + i;
          },
          setSelectedDate: function (e) {
            var t = new Date(e);
            t.setHours(this.selectionDate.getHours()),
              t.setMinutes(this.selectionDate.getMinutes()),
              (this.startDayValidInput = !0),
              (this.selectionDate = t),
              (this.startDayInput = this.formatDay(t)),
              this.setSelectedDay();
          },
          setSelectedDay: function () {
            try {
              var e = new Date(this.startDayInput + ' ' + this.startTimeInput),
                t = e instanceof Date && !isNaN(e.getTime()),
                a = Date.now() - 12e4;
              if (!t) throw new Error('Invalid date');
              if ((e.setHours(23), e.setMinutes(59), e.setSeconds(59), e.getTime() < a)) throw new Error("You can't schedule in the past");
              if (e.getTime() > a + 24192e5) throw new Error("You can't schedule more than 28 days in advance");
              (this.startDayValidInput = !0), (this.startDayErrorFeedback = ''), this.setSelectedTime();
            } catch (i) {
              (this.startDayValidInput = !1), (this.startDayErrorFeedback = (i && i.message) || '');
            }
          },
          setSelectedTime: function () {
            try {
              var e = new Date(this.startDayInput + ' ' + this.startTimeInput),
                t = e instanceof Date && !isNaN(e.getTime()),
                a = Date.now() - 12e4;
              if (!t) throw new Error('Invalid date');
              if (e.getTime() < a) throw new Error("Date can't be in the past.");
              (this.startTimeValidInput = !0), (this.startTimeErrorFeedback = ''), (this.selectionDate = e), this.$store.dispatch('merge/setOptions', { at: e });
            } catch (i) {
              (this.startTimeValidInput = !1), (this.startTimeErrorFeedback = (i && i.message) || '');
            }
          },
          scheduleSend: function () {
            this.user.premium
              ? (this.setSelectedDay(), this.setSelectedTime(), this.startDayValidInput && this.startTimeValidInput && this.setLocation('/launchpad?from=scheduling'))
              : this.$store.dispatch('showSplashScreen', 'scheduling');
          },
          onCancel: function () {
            this.user.premium || this.reset(), this.setLocation(':back');
          },
          reset: function () {
            this.$store.dispatch('merge/setOptions', { at: void 0 });
          },
        },
      }),
      gt = St,
      Dt = (a('52cd'), Object(S['a'])(gt, At, pt, !1, null, '9c84b41e', null)),
      Mt = Dt.exports,
      vt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-main-subtitle', domProps: { innerHTML: e._s(e.$t('MODAL_AUTOPILOT_TIP')) } }),
            a('table', { staticClass: 'addon-table' }, [
              a('tbody', [
                a('tr', { staticStyle: { 'vertical-align': 'top' } }, [
                  a('td', { attrs: { width: '45%' } }, [
                    a('label', { staticClass: 'addon-form-label' }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_CALENDAR_LABEL')) + ' ')]),
                    a('table', { staticClass: 'addon-table' }, [
                      a(
                        'tbody',
                        [
                          e._l(e.weekdays, function (t, i) {
                            return a('tr', { key: i, staticClass: 'addon-form-control addon-form-validation', attrs: { 'aria-disabled': !t.active } }, [
                              a('td', [
                                a('input', {
                                  directives: [{ name: 'model', rawName: 'v-model', value: e.weekdays[i].active, expression: 'weekdays[i].active' }],
                                  attrs: { type: 'checkbox', id: 'MMSchedulingOptionsWeekday' + i },
                                  domProps: { checked: Array.isArray(e.weekdays[i].active) ? e._i(e.weekdays[i].active, null) > -1 : e.weekdays[i].active },
                                  on: {
                                    change: [
                                      function (t) {
                                        var a = e.weekdays[i].active,
                                          s = t.target,
                                          n = !!s.checked;
                                        if (Array.isArray(a)) {
                                          var o = null,
                                            r = e._i(a, o);
                                          s.checked
                                            ? r < 0 && e.$set(e.weekdays[i], 'active', a.concat([o]))
                                            : r > -1 && e.$set(e.weekdays[i], 'active', a.slice(0, r).concat(a.slice(r + 1)));
                                        } else e.$set(e.weekdays[i], 'active', n);
                                      },
                                      function (t) {
                                        return e.onUpdateWeekday(i, 'active');
                                      },
                                    ],
                                  },
                                }),
                              ]),
                              a('td', [a('label', { attrs: { for: 'MMSchedulingOptionsWeekday' + i } }, [e._v(e._s(t.name))])]),
                              a('td', [
                                a('input', {
                                  directives: [{ name: 'model', rawName: 'v-model', value: e.weekdays[i].start, expression: 'weekdays[i].start' }],
                                  staticClass: 'addon-form-input-inline',
                                  class: { 'addon-form-input-inline-error': e.weekdays[i].invalidStart },
                                  staticStyle: { width: '4.5rem' },
                                  attrs: { disabled: !t.active },
                                  domProps: { value: e.weekdays[i].start },
                                  on: {
                                    change: function (t) {
                                      return e.onUpdateWeekday(i, 'start');
                                    },
                                    input: function (t) {
                                      t.target.composing || e.$set(e.weekdays[i], 'start', t.target.value);
                                    },
                                  },
                                }),
                                e._v(' to '),
                                a('input', {
                                  directives: [{ name: 'model', rawName: 'v-model', value: e.weekdays[i].end, expression: 'weekdays[i].end' }],
                                  staticClass: 'addon-form-input-inline',
                                  class: { 'addon-form-input-inline-error': e.weekdays[i].invalidEnd },
                                  staticStyle: { width: '4.5rem' },
                                  attrs: { disabled: !t.active },
                                  domProps: { value: e.weekdays[i].end },
                                  on: {
                                    change: function (t) {
                                      return e.onUpdateWeekday(i, 'end');
                                    },
                                    input: function (t) {
                                      t.target.composing || e.$set(e.weekdays[i], 'end', t.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]);
                          }),
                          a('tr', { staticClass: 'addon-text-center', staticStyle: { color: '#7F7F7F' } }, [
                            a('td', { staticStyle: { padding: '1rem' }, attrs: { colspan: '3' } }, [
                              a('div', { staticStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' } }, [
                                a('img', {
                                  staticStyle: { opacity: '0.35', 'margin-right': '0.25rem', width: '16px' },
                                  attrs: { src: 'https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.23/dist/img/icons/timezone.svg' },
                                }),
                                a('span', [e._v(e._s(e.$t('MODAL_AUTOPILOT_TIMEZONE_TIP')))]),
                              ]),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  a('td', [
                    a('div', { staticClass: 'addon-autopilot-options' }, [
                      a('section', [
                        a('label', { staticClass: 'addon-form-label' }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_SENDING_RATE_LABEL')) + ' ')]),
                        a('div', { staticClass: 'addon-form-control addon-form-validation', attrs: { 'aria-disabled': !e.isDailycapEnabled } }, [
                          a('input', {
                            directives: [{ name: 'model', rawName: 'v-model', value: e.isDailycapEnabled, expression: 'isDailycapEnabled' }],
                            staticClass: 'addon-form-checkbox',
                            attrs: { type: 'checkbox', id: 'MMSchedulingOptionsDailyCap' },
                            domProps: { checked: Array.isArray(e.isDailycapEnabled) ? e._i(e.isDailycapEnabled, null) > -1 : e.isDailycapEnabled },
                            on: {
                              change: function (t) {
                                var a = e.isDailycapEnabled,
                                  i = t.target,
                                  s = !!i.checked;
                                if (Array.isArray(a)) {
                                  var n = null,
                                    o = e._i(a, n);
                                  i.checked ? o < 0 && (e.isDailycapEnabled = a.concat([n])) : o > -1 && (e.isDailycapEnabled = a.slice(0, o).concat(a.slice(o + 1)));
                                } else e.isDailycapEnabled = s;
                              },
                            },
                          }),
                          a('label', { attrs: { for: 'MMSchedulingOptionsDailyCap' } }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_SENDING_RATE_DAILY_CAP')) + ' ')]),
                          a('input', {
                            directives: [{ name: 'model', rawName: 'v-model.lazy', value: e.dailycap, expression: 'dailycap', modifiers: { lazy: !0 } }],
                            staticClass: 'addon-form-input-inline',
                            class: { 'addon-form-input-inline-error': !e.isDailyCapValidInput },
                            attrs: { disabled: !e.isDailycapEnabled, type: 'number', min: '10', max: e.user.quota.limit },
                            domProps: { value: e.dailycap },
                            on: {
                              change: function (t) {
                                e.dailycap = t.target.value;
                              },
                            },
                          }),
                        ]),
                        a('div', { staticClass: 'addon-form-control addon-form-validation', attrs: { 'aria-disabled': !e.isThrottleEnabled } }, [
                          a('input', {
                            directives: [{ name: 'model', rawName: 'v-model', value: e.isThrottleEnabled, expression: 'isThrottleEnabled' }],
                            staticClass: 'addon-form-checkbox',
                            attrs: { type: 'checkbox', id: 'MMSchedulingOptionsThrottle' },
                            domProps: { checked: Array.isArray(e.isThrottleEnabled) ? e._i(e.isThrottleEnabled, null) > -1 : e.isThrottleEnabled },
                            on: {
                              change: function (t) {
                                var a = e.isThrottleEnabled,
                                  i = t.target,
                                  s = !!i.checked;
                                if (Array.isArray(a)) {
                                  var n = null,
                                    o = e._i(a, n);
                                  i.checked ? o < 0 && (e.isThrottleEnabled = a.concat([n])) : o > -1 && (e.isThrottleEnabled = a.slice(0, o).concat(a.slice(o + 1)));
                                } else e.isThrottleEnabled = s;
                              },
                            },
                          }),
                          a('label', { attrs: { for: 'MMSchedulingOptionsThrottle' } }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE')) + ' ')]),
                          a('input', {
                            directives: [{ name: 'model', rawName: 'v-model.lazy', value: e.throttle, expression: 'throttle', modifiers: { lazy: !0 } }],
                            staticClass: 'addon-form-input-inline',
                            class: { 'addon-form-input-inline-error': !e.isThrottleValidInput },
                            attrs: { disabled: !e.isThrottleEnabled, type: 'number' },
                            domProps: { value: e.throttle },
                            on: {
                              change: function (t) {
                                e.throttle = t.target.value;
                              },
                            },
                          }),
                          a('span', [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE_BASELINE')))]),
                        ]),
                      ]),
                      e.scheduledAt
                        ? a('section', [
                            a('label', { staticClass: 'addon-form-label' }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_LABEL')) + ' ')]),
                            a('div', { staticClass: 'addon-form-control' }, [
                              a(
                                'button',
                                {
                                  staticClass: 'addon-button',
                                  staticStyle: { width: '100%' },
                                  on: {
                                    click: function (t) {
                                      return e.setLocation('/scheduling');
                                    },
                                  },
                                },
                                [
                                  a('div', { staticStyle: { display: 'flex' } }, [
                                    a('img', {
                                      staticStyle: { 'margin-right': '0.5rem' },
                                      attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.4.1/dist/img/icons/schedule-send-blue.svg' },
                                    }),
                                    a('span', [e._v(e._s(e.formatDate(e.scheduledAt)))]),
                                  ]),
                                ]
                              ),
                            ]),
                          ])
                        : a('section', [
                            a('label', { staticClass: 'addon-form-label' }, [e._v(' ' + e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_LABEL')) + ' ')]),
                            a('div', { staticClass: 'addon-form-control' }, [
                              a(
                                'select',
                                {
                                  directives: [{ name: 'model', rawName: 'v-model', value: e.startAt, expression: 'startAt' }],
                                  staticClass: 'addon-form-select',
                                  staticStyle: { width: '100%' },
                                  on: {
                                    change: function (t) {
                                      var a = Array.prototype.filter
                                        .call(t.target.options, function (e) {
                                          return e.selected;
                                        })
                                        .map(function (e) {
                                          var t = '_value' in e ? e._value : e.value;
                                          return t;
                                        });
                                      e.startAt = t.target.multiple ? a : a[0];
                                    },
                                  },
                                },
                                [
                                  a('option', { attrs: { value: 'now' } }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_RIGHT_NOW')))]),
                                  a('option', { attrs: { value: 'tomorrow' } }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_TOMORROW')))]),
                                  new Date().getDay() < 2
                                    ? a('option', { attrs: { value: 'wednesday' } }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_WEDNESDAY')))])
                                    : e._e(),
                                  a('option', { attrs: { value: 'next_week' } }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_STARTING_DATE_NEXT_WEEK')))]),
                                ]
                              ),
                            ]),
                          ]),
                      a('section', [
                        a('label', { staticClass: 'addon-form-label' }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_SUMMARY_LABEL')))]),
                        a('div', {
                          domProps: {
                            innerHTML: e._s(
                              e.$t('MODAL_AUTOPILOT_SECTION_SUMMARY_TEXT', {
                                totalEmailsToSend: e.totalEmailsToSend,
                                senderEmail: e.merge.senderEmail,
                                timeToSendEmails: e.timeToSendEmails,
                              })
                            ),
                          },
                        }),
                        e.isDeadlineExceeded ? a('div', { staticClass: 'addon-text-error' }, [e._v(e._s(e.$t('MODAL_AUTOPILOT_SECTION_SUMMARY_DEADLINE_EXCEEDED')))]) : e._e(),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        attrs: { disabled: e.isAutopilotInProgress },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.onCancel(t);
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_BUTTON_GO_BACK')))]
                    ),
                    a('ModalFooterSendWith', {
                      attrs: { disabled: !e.isAutopilotDoable, loading: e.isAutopilotInProgress, label: e.$t('MODAL_AUTOPILOT_PRIMARY_BUTTON') },
                      on: {
                        'click-primary': function (t) {
                          !e.isAutopilotInProgress && e.autopilotSend();
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      ft = [],
      Nt =
        (a('466d'),
        n['a'].extend({
          components: { ModalFooterIcons: N, ModalFooterSendWith: U },
          data: function () {
            return {
              isAutopilotInProgress: !1,
              dailycap: 300,
              isDailycapEnabled: !0,
              throttle: 60,
              isThrottleEnabled: !0,
              startAt: 'now',
              maxExecutionDays: 28,
              weekdays: {
                1: { name: 'Monday', active: !0, start: '9AM', end: '5PM' },
                2: { name: 'Tuesday', active: !0, start: '9AM', end: '5PM' },
                3: { name: 'Wednesday', active: !0, start: '9AM', end: '5PM' },
                4: { name: 'Thursday', active: !0, start: '9AM', end: '5PM' },
                5: { name: 'Friday', active: !0, start: '9AM', end: '5PM' },
                6: { name: 'Saturday', active: !1, start: '9AM', end: '5PM' },
                7: { name: 'Sunday', active: !1, start: '9AM', end: '5PM' },
              },
              isWeekdaysValidInput: !0,
            };
          },
          mounted: function () {
            var e = 'undefined' !== typeof this.merge.options.weekdays,
              t = (e && Number(this.merge.options.throttle)) || Number(this.throttle),
              a = (e && Number(this.merge.options.dailycap)) || Number(this.dailycap),
              i = (e && this.merge.options.weekdays) || this.weekdays;
            if (((this.startAt = this.merge.options.startAt || String(this.startAt)), e)) {
              (this.isThrottleEnabled = 'number' === typeof this.merge.options.throttle),
                (this.isDailycapEnabled = 'number' === typeof this.merge.options.dailycap),
                this.isThrottleEnabled && (this.throttle = t),
                this.isDailycapEnabled && (this.dailycap = a),
                (this.weekdays = {});
              for (var s = 1; s <= 7; s++) this.weekdays[s] = Object.assign({}, i[s] || {});
            }
            this.$store.dispatch('merge/setOptions', { throttle: t, dailycap: a, weekdays: i });
          },
          computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet', 'user'])), {
            totalEmailsToSend: function () {
              return (this.sheet && this.sheet.emailing && this.sheet.emailing.recipients) || 0;
            },
            isDeadlineExceeded: function () {
              var e = this.endDate.getTime() - Date.now();
              return e / 864e5 > this.maxExecutionDays;
            },
            isAutopilotDoable: function () {
              return !this.isDeadlineExceeded && this.isWeekdaysValidInput && this.isThrottleValidInput && this.isDailyCapValidInput;
            },
            isThrottleValidInput: function () {
              if (!this.isThrottleEnabled) return !0;
              var e = Number(this.throttle);
              return 'number' === typeof e && this.throttle > 0;
            },
            isDailyCapValidInput: function () {
              if (!this.isDailycapEnabled) return !0;
              var e = Number(this.dailycap);
              return 'number' === typeof e && e > 0;
            },
            getThrottle: function () {
              return this.isThrottleEnabled && this.isThrottleValidInput && this.throttle && Number(this.throttle) > 3 ? this.throttle : 3;
            },
            getDailycap: function () {
              return (this.isDailycapEnabled && this.isDailyCapValidInput && Number(this.dailycap)) || 0;
            },
            scheduledAt: function () {
              return (!this.merge.options.startAt && this.merge.options.at) || void 0;
            },
            startDate: function () {
              var e = new Date(),
                t = new Date(e);
              if ((t.setHours(0, 0, 0, 0), this.scheduledAt)) return this.scheduledAt;
              if ('tomorrow' === this.startAt) {
                var a = new Date(t);
                return a.setDate(t.getDate() + 1), a;
              }
              if ('wednesday' === this.startAt) {
                var i = new Date(t);
                return i.setDate(t.getDate() + 3 - t.getDay()), i;
              }
              if ('next_week' == this.startAt) {
                var s = new Date(t);
                do {
                  s.setDate(s.getDate() + 1);
                } while (1 !== s.getDay());
                return s;
              }
              return e;
            },
            endDate: function () {
              var e = this,
                t = this.getDailycap,
                a = this.getThrottle,
                i = this.totalEmailsToSend,
                s = [],
                n = new Date(this.startDate),
                o = this.weekdays,
                r = 5 * this.maxExecutionDays,
                l = 0,
                c = 0,
                d = {},
                _ = function (t) {
                  return d[t] || (d[t] = e.formatTime(t)), d[t];
                };
              while (l < i && c < r) {
                (s[c] = (s[c] || 0) + 1), t && s[c] > t && (c++, n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0));
                var u = n.getDay(),
                  m = o[u || 7];
                if (m.active) {
                  var A = new Date(n),
                    p = _(m.start);
                  A.setHours(p.hours, p.minutes, 0, 0);
                  var h = new Date(n),
                    E = _(m.end);
                  h.setHours(E.hours, E.minutes, 0, 0),
                    n.getTime() < A.getTime() && n.setHours(A.getHours(), A.getMinutes(), 0, 0),
                    n.getTime() > h.getTime() ? (c++, n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0)) : (n.setTime(n.getTime() + 1e3 * a), l++);
                } else c++, n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0);
              }
              return n;
            },
            timeToSendEmails: function () {
              var e = this.endDate.getTime() - Date.now();
              if (e > 4 * this.maxExecutionDays * 24 * 60 * 60 * 1e3) return '∞';
              var t = e / 1e3,
                a = t / 60,
                i = a / 60,
                s = i / 24;
              return s > 1.5
                ? this.$i18n.tc('COMMON_TIME_DAYS', Math.ceil(s))
                : i > 1
                ? this.$i18n.tc('COMMON_TIME_HOURS', Math.ceil(i))
                : a > 1
                ? this.$i18n.tc('COMMON_TIME_MINUTES', Math.ceil(a))
                : (t < 60 && (t = 60), this.$i18n.tc('COMMON_TIME_SECONDS', Math.ceil(t)));
            },
          }),
          methods: {
            setLocation: function (e) {
              this.$store.dispatch('setLocation', e);
            },
            onUpdateWeekday: function (e, t) {
              if ('active' !== t) {
                var a = this.weekdays[e][t].toUpperCase(),
                  i = this.formatTime(a),
                  s = i.isValid;
                if (s) {
                  var n = 'start' === t ? a : this.weekdays[e]['start'].toUpperCase(),
                    o = 'start' === t ? i : this.formatTime(n),
                    r = 'start' === t ? this.weekdays[e]['end'].toUpperCase() : a,
                    l = 'start' === t ? this.formatTime(r) : i,
                    c = new Date();
                  c.setHours(o.hours, o.minutes);
                  var d = new Date();
                  d.setHours(l.hours, l.minutes), c.getTime() >= d.getTime() && (s = !1);
                }
                var _ = 'start' == t ? 'invalidStart' : 'invalidEnd';
                this.$set(this.weekdays[e], _, !s || void 0), (this.isWeekdaysValidInput = s), s && this.$store.dispatch('merge/setOptions', { weekdays: this.weekdays });
              } else this.$store.dispatch('merge/setOptions', { weekdays: this.weekdays });
            },
            formatDate: function (e) {
              try {
                return e.toLocaleString(this.$i18n.locale, { dateStyle: 'long', timeStyle: 'short' });
              } catch (t) {
                return e.toString();
              }
            },
            formatTime: function (e) {
              var t = e.toUpperCase(),
                a = 0,
                i = 0,
                s = !0,
                n = /^ *([0-9]{1,2})(:([0-9]{2}))? *(AM|PM)? *$/,
                o = t.match(n);
              if (o && o.length) {
                (a = Number(o[1])), (i = Number(o[3]) || 0);
                var r = o[4];
                'PM' === r && (a += 12), ('number' !== typeof a || a > 24 || a < 0 || ('AM' === r && a > 12)) && (s = !1), (i > 60 || a < 0) && (s = !1);
              } else s = !1;
              return { input: e, hours: a, minutes: i, isValid: s };
            },
            autopilotSend: function () {
              this.user.premium ? this.setLocation('/launchpad?from=autopilot') : this.$store.dispatch('showSplashScreen', 'autopilot');
            },
            onCancel: function () {
              this.user.premium || this.reset(), this.setLocation(':back');
            },
            reset: function () {
              this.$store.dispatch('merge/setOptions', { throttle: void 0, dailycap: void 0, weekdays: void 0, startAt: void 0, at: void 0 });
            },
          },
          watch: {
            throttle: function (e) {
              this.$store.dispatch('merge/setOptions', { throttle: Number(e) || void 0 });
            },
            dailycap: function (e) {
              this.$store.dispatch('merge/setOptions', { dailycap: Number(e) || void 0 });
            },
            isDailycapEnabled: function (e) {
              this.$store.dispatch('merge/setOptions', { dailycap: (e && Number(this.dailycap)) || void 0 });
            },
            isThrottleEnabled: function (e) {
              this.$store.dispatch('merge/setOptions', { throttle: (e && Number(this.throttle)) || void 0 });
            },
            startAt: function (e) {
              this.$store.dispatch('merge/setOptions', { startAt: e, at: 'now' === e ? void 0 : this.startDate });
            },
          },
        })),
      Ct = Nt,
      Rt = (a('63e1'), Object(S['a'])(Ct, vt, ft, !1, null, '5f490155', null)),
      Pt = Rt.exports,
      bt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-followup' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('div', { staticClass: 'addon-main-subtitle', domProps: { innerHTML: e._s(e.$t('MODAL_FOLLOWUP_TIP')) } }),
            a('table', { staticClass: 'addon-table' }, [
              a('tbody', [
                a('tr', { staticStyle: { 'vertical-align': 'top' } }, [
                  a('td', { attrs: { width: '70%;' } }, [
                    a(
                      'div',
                      { staticStyle: { 'margin-right': '1rem' } },
                      [a('FollowupEditor', { key: e.activeStage, attrs: { stage: e.currentStage }, on: { updated: e.onStageUpdated } })],
                      1
                    ),
                  ]),
                  a('td', [
                    a('div', { staticStyle: { 'max-height': '310px', 'overflow-y': 'scroll' } }, [
                      a('div', { staticClass: 'addon-followup-stages' }, [
                        a('label', { staticClass: 'addon-form-label' }, [e._v(e._s(e.$t('MODAL_FOLLOWUP_SECTION_SEQUENCE_LABEL')))]),
                        a(
                          'ul',
                          [
                            a('li', [
                              a(
                                'div',
                                {
                                  staticClass: 'addon-button',
                                  class: { active: -1 === e.activeStage },
                                  on: {
                                    click: function (t) {
                                      return e.selectStage(-1);
                                    },
                                  },
                                },
                                [
                                  a('h5', [e._v('1. ' + e._s(e.subject))]),
                                  a('div', { staticClass: 'addon-followup-stages--metadata' }, [
                                    e.hasScheduling
                                      ? a('span', [e._v(e._s(e.$t('MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_SCHEDULE')))])
                                      : a('span', [e._v(e._s(e.$t('MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_NOW')))]),
                                  ]),
                                ]
                              ),
                            ]),
                            e._l(e.stages, function (t, i) {
                              return a('li', { key: i }, [
                                a(
                                  'div',
                                  {
                                    staticClass: 'addon-button',
                                    class: { active: e.activeStage === i, error: e.stagesWithErrors.includes(i) },
                                    on: {
                                      click: function (t) {
                                        return e.selectStage(i);
                                      },
                                    },
                                  },
                                  [
                                    a('h5', [a('span', [e._v(e._s(i + 2) + '.')]), e._v(' ' + e._s(e.snippet(t.template && t.template.plainBody)) + ' ')]),
                                    a('div', { staticClass: 'addon-followup-stages--metadata' }, [
                                      a('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', height: '14px', viewBox: '0 0 24 24', width: '14px', fill: '#777' } }, [
                                        a('g', [a('rect', { attrs: { fill: 'none', height: '24', width: '24' } })]),
                                        a('g', [
                                          a('path', {
                                            attrs: {
                                              d: 'M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z',
                                            },
                                          }),
                                        ]),
                                      ]),
                                      a('span', [e._v(e._s(e.triggerOnAsText(t.trigger_on)))]),
                                      a('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', height: '14px', viewBox: '0 0 24 24', width: '14px', fill: '#777' } }, [
                                        a('path', { attrs: { d: 'M0 0h24v24H0V0z', fill: 'none' } }),
                                        a('path', {
                                          attrs: {
                                            d: 'M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z',
                                          },
                                        }),
                                      ]),
                                      a('span', [e._v(e._s(e.triggerAfterAsText(t.trigger_after, t.trigger_after_period)))]),
                                    ]),
                                  ]
                                ),
                                a('div', {
                                  staticClass: 'addon-followup-stages--remove',
                                  attrs: { 'data-icon': 'close', title: e.$t('MODAL_FOLLOWUP_SECTION_SEQUENCE_REMOVE_STEP') },
                                  on: {
                                    click: function (t) {
                                      return e.removeStage(i);
                                    },
                                  },
                                }),
                              ]);
                            }),
                            a('li', [a('div', { staticClass: 'addon-button', on: { click: e.addStage } }, [e._v(e._s(e.$t('MODAL_FOLLOWUP_SECTION_SEQUENCE_NEW_STEP')))])]),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.onCancel(t);
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_BUTTON_GO_BACK')))]
                    ),
                    a('ModalFooterSendWith', {
                      attrs: { 'before-click': e.followupSave, label: e.$t('MODAL_FOLLOWUP_PRIMARY_BUTTON'), disabled: e.isSendingDisabled },
                      on: { 'click-primary': e.followupSend },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      wt = [],
      Ut =
        (a('277d'),
        a('a434'),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('div', { staticClass: 'addon-followup-editor' }, [
            e.isOriginalEmail
              ? a('div', { staticClass: 'addon-editor-header addon-editor-subject' }, [
                  a('input', {
                    directives: [{ name: 'model', rawName: 'v-model', value: e.subject, expression: 'subject' }],
                    staticClass: 'addon-form-input',
                    attrs: { type: 'text', placeholder: e.$t('MODAL_COMPOSE_SUBJECT') },
                    domProps: { value: e.subject },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.subject = t.target.value);
                      },
                    },
                  }),
                ])
              : a('div', { staticClass: 'addon-editor-header addon-editor-header--followup addon-form-validation' }, [
                  a(
                    'select',
                    {
                      directives: [{ name: 'model', rawName: 'v-model', value: e.triggerOn, expression: 'triggerOn' }],
                      staticClass: 'addon-form-select',
                      on: {
                        change: function (t) {
                          var a = Array.prototype.filter
                            .call(t.target.options, function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              var t = '_value' in e ? e._value : e.value;
                              return t;
                            });
                          e.triggerOn = t.target.multiple ? a : a[0];
                        },
                      },
                    },
                    e._l(e.triggersOptions, function (t, i) {
                      return a('option', { key: i, domProps: { value: t.value } }, [e._v(e._s(t.text))]);
                    }),
                    0
                  ),
                  a('span', [e._v(e._s(e.$t('MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER')))]),
                  a('input', {
                    directives: [{ name: 'model', rawName: 'v-model', value: e.triggerAfter, expression: 'triggerAfter' }],
                    staticClass: 'addon-form-input addon-form-input--small',
                    class: { 'addon-form-input-error': !e.isTriggerAfterValid },
                    staticStyle: { width: '3rem', 'margin-right': '0.25rem' },
                    domProps: { value: e.triggerAfter },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.triggerAfter = t.target.value);
                      },
                    },
                  }),
                  a(
                    'select',
                    {
                      directives: [{ name: 'model', rawName: 'v-model', value: e.triggerAfterPeriod, expression: 'triggerAfterPeriod' }],
                      staticClass: 'addon-form-select',
                      staticStyle: { 'max-width': '6.5rem' },
                      on: {
                        change: function (t) {
                          var a = Array.prototype.filter
                            .call(t.target.options, function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              var t = '_value' in e ? e._value : e.value;
                              return t;
                            });
                          e.triggerAfterPeriod = t.target.multiple ? a : a[0];
                        },
                      },
                    },
                    [
                      a('option', { attrs: { value: 'days' } }, [e._v(e._s(e.$tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_DAYS', 2)))]),
                      a('option', { attrs: { value: 'hours' } }, [e._v(e._s(e.$tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_HOURS', 2)))]),
                      a('option', { attrs: { value: 'minutes' } }, [e._v(e._s(e.$tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_MINUTES', 2)))]),
                    ]
                  ),
                  a('span', [e._v(e._s(e.$t('MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER_SEND')))]),
                ]),
            a(
              'div',
              { staticClass: 'addon-editor-main' },
              [
                a('ModalComposeGoogEditor', {
                  key: e.initialHtmlBody.length,
                  attrs: { toolbarMinimal: !0, 'template-html-body': e.initialHtmlBody, 'allow-attachments': !1 },
                  on: { 'content-update': e.onContentUpdated },
                  scopedSlots: e._u([
                    {
                      key: 'placeholder',
                      fn: function () {
                        return [
                          e._v(' ' + e._s(e.$t('MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_ENTER')) + ' '),
                          a(
                            'a',
                            {
                              staticClass: 'addon-link',
                              on: {
                                click: function (t) {
                                  t.stopPropagation(), t.preventDefault(), (e.showTemplateDialog = !0);
                                },
                              },
                            },
                            [e._v(' ' + e._s(e.$t('MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_SELECT_TEMPLATE')) + ' ')]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
            e.showTemplateDialog
              ? a('div', { staticClass: 'modal-dialog-container' }, [
                  a('div', {
                    staticClass: 'modal-dialog-bg',
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.toggleTemplateDialog(t);
                      },
                    },
                  }),
                  a('div', { staticClass: 'modal-dialog', staticStyle: { width: '320px' } }, [
                    a('div', { staticClass: 'modal-dialog-title' }, [
                      a('span', { staticClass: 'modal-dialog-title-text', attrs: { id: ':2', role: 'heading' } }, [e._v(e._s(e.$t('MODAL_DIALOG_TEMPLATES_HEADING')))]),
                      a('span', {
                        staticClass: 'modal-dialog-title-close',
                        attrs: { role: 'button', tabindex: '0', 'aria-label': 'Close' },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.toggleTemplateDialog(t);
                          },
                        },
                      }),
                    ]),
                    a('main', { staticClass: 'modal-dialog-content' }, [
                      a('table', { staticClass: 'addon-table addon-table-list', attrs: { border: '0', cellpadding: '0', cellspacing: '0' } }, [
                        a(
                          'tbody',
                          e._l(e.templates, function (t, i) {
                            return a('tr', { key: i }, [
                              a(
                                'td',
                                {
                                  staticStyle: { 'padding-left': '0' },
                                  on: {
                                    click: function (a) {
                                      return a.preventDefault(), e.selectTemplate(t);
                                    },
                                  },
                                },
                                [
                                  a('div', { staticClass: 'addon-text-ellipsis', staticStyle: { 'max-width': '250px' } }, [
                                    e._v(e._s(t.name || t.subject || e.$t('MAIL_EMPTY_SUBJECT'))),
                                  ]),
                                ]
                              ),
                            ]);
                          }),
                          0
                        ),
                      ]),
                    ]),
                  ]),
                ])
              : e._e(),
          ]);
        }),
      yt = [];
    function Ht(e) {
      if (!e) return '';
      var t = document.createElement('div');
      document.body.appendChild(t), (t.innerHTML = e);
      var a = t.innerText;
      return document.body.removeChild(t), a;
    }
    var kt = n['a'].extend({
        components: { ModalComposeGoogEditor: Ce },
        props: ['stage'],
        data: function () {
          return {
            subject: '',
            htmlBody: '',
            initialHtmlBody: '',
            triggerOn: 'no-reply',
            triggerAfter: 3,
            triggerAfterPeriod: 'days',
            triggersOptions: $t,
            isFetchingTemplate: !1,
            isTriggerAfterValid: !0,
            showTemplateDialog: !1,
          };
        },
        mounted: function () {
          this.stage &&
            this.stage.template &&
            (this.isOriginalEmail
              ? (this.subject = this.stage.template.subject || '')
              : ((this.triggerOn = this.stage.trigger_on || 'no-reply'),
                (this.triggerAfter = this.stage.trigger_after || 3),
                (this.triggerAfterPeriod = this.stage.trigger_after_period || 'days')),
            (this.htmlBody = this.stage.template.htmlBody || ''),
            (this.initialHtmlBody = this.stage.template.htmlBody || ''));
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['templates'])), {
          isOriginalEmail: function () {
            var e;
            return !(null === (e = this.stage) || void 0 === e ? void 0 : e.trigger_on) || !1;
          },
        }),
        methods: {
          onContentUpdated: function (e) {
            (this.htmlBody = e.body), this.onStageUpdated();
          },
          onStageUpdated: function () {
            if (!this.isOriginalEmail) {
              var e = Number(this.triggerAfter);
              if (isNaN(e)) return void (this.isTriggerAfterValid = !1);
              if (e <= 0 || e > 28) return void (this.isTriggerAfterValid = !1);
            }
            this.isTriggerAfterValid = !0;
            var t = {
              trigger_on: this.isOriginalEmail ? void 0 : this.triggerOn,
              trigger_after: this.isOriginalEmail ? void 0 : Number(this.triggerAfter),
              trigger_after_period: this.isOriginalEmail ? void 0 : this.triggerAfterPeriod,
              template: { subject: this.isOriginalEmail ? this.subject : void 0, htmlBody: this.htmlBody, plainBody: Ht(this.htmlBody) },
            };
            this.$emit('updated', t);
          },
          toggleTemplateDialog: function () {
            this.showTemplateDialog = !this.showTemplateDialog;
          },
          selectTemplate: function (e) {
            var t = this;
            this.isFetchingTemplate ||
              ((this.isFetchingTemplate = !0),
              this.$store
                .dispatch('templates/fetch', e)
                .then(function (e) {
                  t.isOriginalEmail && (t.subject = e.subject), (t.initialHtmlBody = e.htmlBody || ''), (t.showTemplateDialog = !1);
                })
                ['catch'](this.$root.errorBackendHandler)
                ['finally'](function () {
                  t.isFetchingTemplate = !1;
                }));
          },
        },
        watch: {
          triggerOn: function () {
            this.onStageUpdated();
          },
          triggerAfter: function () {
            this.onStageUpdated();
          },
          triggerAfterPeriod: function () {
            this.onStageUpdated();
          },
          subject: function () {
            this.onStageUpdated();
          },
        },
      }),
      Bt = kt,
      Gt = (a('5340'), a('d4f4'), Object(S['a'])(Bt, Ut, yt, !1, null, '47d1905a', null)),
      Ft = Gt.exports,
      $t = [
        { value: 'no-reply', text: 'If no reply' },
        { value: 'no-click', text: 'If no click' },
        { value: 'no-open', text: 'If no open' },
        { value: 'open', text: 'If opened' },
        { value: 'click', text: 'If clicked' },
        { value: 'reply', text: 'If replied' },
        { value: 'interval', text: 'In any case' },
      ],
      Wt = n['a'].extend({
        components: { ModalFooterIcons: N, ModalFooterSendWith: U, FollowupEditor: Ft },
        data: function () {
          return { isSendingDisabled: !1, activeStage: 0, stages: [], stagesWithErrors: [] };
        },
        created: function () {
          var e = this.merge.followups;
          e && Array.isArray(e) && 0 !== e.length ? (this.stages = e) : ((this.stages = []), this.addStage());
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet', 'user', 'templates'])), {
          subject: function () {
            var e;
            return ((null === (e = this.merge.template) || void 0 === e ? void 0 : e.subject) || '(no subject)').slice(0, 40);
          },
          currentStage: function () {
            var e, t, a, i;
            if (this.activeStage < 0)
              return {
                template: {
                  subject: (null === (e = this.merge.template) || void 0 === e ? void 0 : e.subject) || '',
                  htmlBody: (null === (t = this.merge.template) || void 0 === t ? void 0 : t.htmlBody) || '',
                  plainBody: (null === (a = this.merge.template) || void 0 === a ? void 0 : a.plainBody) || '',
                  attachments: (null === (i = this.merge.template) || void 0 === i ? void 0 : i.attachments) || '',
                },
              };
            var s = this.stages[this.activeStage];
            return Object(d['__assign'])({}, s);
          },
          hasScheduling: function () {
            return ((this.merge && this.merge.options && this.merge.options.at) || void 0) instanceof Date;
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          snippet: function (e) {
            var t = (e || '').trim();
            return (t || '(no content)').slice(0, 40);
          },
          triggerOnAsText: function (e) {
            if ('interval' === e) return 'Wait for';
            for (var t = 0; t < $t.length; t++) if ($t[t].value === e) return $t[t].text;
            return '';
          },
          triggerAfterAsText: function (e, t) {
            switch (t) {
              case 'minutes':
                return e + ' ' + this.$i18n.tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_MINUTES', e);
              case 'hours':
                return e + ' ' + this.$i18n.tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_HOURS', e);
              case 'days':
              default:
                return e + ' ' + this.$i18n.tc('MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_DAYS', e);
            }
          },
          addStage: function () {
            var e,
              t,
              a = this.stages[this.stages.length - 1] || void 0;
            this.stages.push({
              trigger_on: (null === (e = a) || void 0 === e ? void 0 : e.trigger_on) || 'no-reply',
              trigger_after: (null === (t = a) || void 0 === t ? void 0 : t.trigger_after) || 3,
              trigger_after_period: 'days',
              template: { htmlBody: '', plainBody: '', attachments: [] },
            }),
              (this.activeStage = this.stages.length - 1);
          },
          removeStage: function (e) {
            this.stages.splice(e, 1), (this.activeStage = this.activeStage - 1);
          },
          selectStage: function (e) {
            this.activeStage = e;
          },
          onStageUpdated: function (e) {
            'undefined' !== typeof e.trigger_on ? this.$set(this.stages, this.activeStage, e) : this.$store.dispatch('merge/setTemplate', e.template);
          },
          followupSend: function () {
            var e = this.user.plan.startsWith('pro') || this.user.plan.startsWith('business');
            e ? this.followupSave() && this.setLocation('/launchpad?from=followup') : this.$store.dispatch('showSplashScreen', 'followup');
          },
          followupSave: function () {
            var e,
              t,
              a,
              i,
              s = [];
            this.stagesWithErrors = [];
            for (var n = 0, o = this.stages.length; n < o; n++) {
              var r = this.stages[n],
                l = (null === (e = r.template) || void 0 === e ? void 0 : e.htmlBody) || '',
                c = (null === (t = r.template) || void 0 === t ? void 0 : t.plainBody) || '';
              o > 1 && '' === c && this.stagesWithErrors.push(n),
                s.push({
                  trigger_on: r.trigger_on,
                  trigger_after: r.trigger_after,
                  trigger_after_period: r.trigger_after_period || 'days',
                  template: {
                    htmlBody: l,
                    plainBody: (null === (a = r.template) || void 0 === a ? void 0 : a.plainBody) || '',
                    attachments: null === (i = r.template) || void 0 === i ? void 0 : i.attachments,
                  },
                });
            }
            return this.stagesWithErrors.length
              ? (this.$store.dispatch('showButterbar', 'ERROR_FOLLOWUP_HAS_NO_BODY'), !1)
              : (1 === s.length && '' === s[0].template.htmlBody && (s = []), this.$store.dispatch('merge/setFollowups', s), !0);
          },
          onCancel: function () {
            this.user.premium || this.reset(), this.setLocation(':back');
          },
          reset: function () {
            this.$store.dispatch('merge/setFollowups', void 0);
          },
        },
      }),
      xt = Wt,
      Vt = (a('6d4e'), Object(S['a'])(xt, bt, wt, !1, null, null, null)),
      jt = Vt.exports,
      Yt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          [
            e.showOfflineAccessPrompt
              ? a('OfflineAccessPrompt', {
                  attrs: { scopes: e.offlineAccessOAuthScopes },
                  on: {
                    'offline-access-close': function (t) {
                      e.showOfflineAccessPrompt = !1;
                    },
                    'offline-access-success': e.backgroundSend,
                  },
                })
              : e._e(),
            a('div', { staticClass: 'sheetUIInfo' }, [
              a('div', { staticClass: 'addon-main' }, [
                a('img', {
                  attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/animations/sending.gif', width: '200', height: '200', loading: 'lazy' },
                }),
                a('h3', { staticStyle: { margin: '0' } }, [e._v(e._s(e.$t('MODAL_LAUNCHPAD_READY_FOR_LIFT_OFF')))]),
                a('div', { staticStyle: { 'max-width': '80%', margin: '0 auto' } }, [
                  a('div', [
                    e.isScheduled
                      ? a('span', {
                          domProps: {
                            innerHTML: e._s(
                              e.$t('MODAL_LAUNCHPAD_SUMMARY_SCHEDULE', { totalEmailsToSend: e.totalEmailsToSend, sender: e.sender, scheduledAt: e.formatDate(e.scheduledAt) })
                            ),
                          },
                        })
                      : a('span', { domProps: { innerHTML: e._s(e.$t('MODAL_LAUNCHPAD_SUMMARY_SEND', { totalEmailsToSend: e.totalEmailsToSend, sender: e.sender })) } }),
                    a('br'),
                    e.isScheduled && e.hasAutopilot
                      ? a('span', [e._v(e._s(e.$t('MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED_WITH_AUTOPILOT', { scheduledAt: e.formatDate(e.scheduledAt, 'short') })))])
                      : e.isScheduled
                      ? a('span', [e._v(e._s(e.$t('MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED', { scheduledAt: e.formatDate(e.scheduledAt) })))])
                      : e.hasAutopilot
                      ? a('span', [e._v(e._s(e.$t('MODAL_LAUNCHPAD_SUMMARY_EMAILS_WITH_AUTOPILOT')))])
                      : e._e(),
                  ]),
                  e.hasFollowup ? a('div', [a('span', [e._v(e._s(e.$t('MODAL_LAUNCHPAD_SUMMARY_FOLLOWUP_ENABLED')))])]) : e._e(),
                ]),
              ]),
            ]),
            a('div', { staticClass: 'addon-footer' }, [
              a('table', { staticClass: 'addon-table' }, [
                a('tr', [
                  a('td', { staticClass: 'addon-footer-icons' }, [!1 === e.isBackgroundSendInProgress ? a('ModalFooterIcons') : e._e()], 1),
                  a('td', { staticClass: 'addon-footer-actions' }, [
                    a(
                      'button',
                      {
                        staticClass: 'addon-button',
                        attrs: { disabled: e.isSendingDisabled },
                        on: {
                          click: function (t) {
                            return e.setLocation(':back');
                          },
                        },
                      },
                      [e._v(e._s(e.$t('MODAL_BUTTON_CANCEL')))]
                    ),
                    a(
                      'button',
                      {
                        staticClass: 'addon-button addon-button-action',
                        attrs: { disabled: e.isSendingDisabled },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.backgroundSend(t);
                          },
                        },
                      },
                      [
                        e.isBackgroundSendInProgress ? a('span', { staticClass: 'addon-button-loading' }) : e._e(),
                        e._v(' ' + e._s(e.isScheduled ? e.$t('MODAL_LAUNCHPAD_PRIMARY_BUTTON_SCHEDULE') : e.$t('MODAL_LAUNCHPAD_PRIMARY_BUTTON_SEND')) + ' '),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      zt = [],
      qt = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-splash' }, [
          a('div', {
            staticClass: 'addon-splash-background',
            on: {
              click: function (t) {
                return t.preventDefault(), e.closeOfflineAccessPrompt(t);
              },
            },
          }),
          a('div', { staticClass: 'addon-splash-content' }, [
            a('div', {
              staticClass: 'addon-splash-hero',
              staticStyle: { 'background-image': 'url(//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.1.4/dist/img/modals/splash-oauth-scheduling.jpeg)' },
            }),
            a('h2', { staticClass: 'addon-splash-heading' }, [e._v(e._s(e.textHeading))]),
            a('p', { staticClass: 'addon-splash-text', domProps: { innerHTML: e._s(e.textDescription) } }),
            'failure' === e.offlineAccessStatus ? a('p', { staticClass: 'addon-text-error' }, [e._v(e._s(e.textFailure))]) : e._e(),
            a('div', { staticClass: 'addon-splash-actions' }, [
              a(
                'a',
                {
                  staticClass: 'addon-link addon-text-gray',
                  staticStyle: { 'margin-right': '1rem' },
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.closeOfflineAccessPrompt(t);
                    },
                  },
                },
                [e._v(e._s(e.textSecondaryButton))]
              ),
              a(
                'button',
                {
                  staticClass: 'addon-button addon-button-action',
                  staticStyle: { 'padding-left': '1.5rem', 'padding-right': '1.5rem' },
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.googleSignIn(t);
                    },
                  },
                },
                [e._v(e._s(e.textPrimaryButton))]
              ),
            ]),
            a('div', { staticClass: 'addon-splash-hint' }),
          ]),
        ]);
      },
      Kt = [],
      Xt = { IDLE: 'idle', BUSY: 'busy', SUCCESS: 'success', FAILED: 'failure' },
      Qt = (function () {
        function e(e) {
          (this.width = 500), (this.height = 600), (this.url = e);
          var t = this.layout(this.width, this.height),
            a = t.left,
            i = t.top,
            s = t.computedWidth,
            n = t.computedHeight;
          this.features = {
            width: s,
            height: n,
            top: i,
            left: a,
            scrollbars: 'yes',
            resizable: 'yes',
            status: 'no',
            toolbar: 'no',
            location: 'no',
            copyhistory: 'no',
            menubar: 'no',
            directories: 'no',
          };
        }
        return (
          (e.prototype.layout = function (e, t) {
            var a = window.screen.width,
              i = window.screen.height,
              s = a / 2 - e / 2,
              n = i / 2 - t / 2,
              o = Math.min(e, a),
              r = Math.min(t, i);
            return { left: Math.max(s, 0), top: Math.max(n, 0), computedWidth: o, computedHeight: r };
          }),
          (e.prototype.open = function () {
            var e = this.url,
              t = '',
              a = this.featuresToString();
            return (this.modal = window.open(e, t, a)), this.modal;
          }),
          (e.prototype.addEventListener = function (e, t) {
            var a = this;
            if ('close' === e)
              if (this.modal)
                var i = window.setInterval(function () {
                  (a.modal && !a.modal.closed) || (t(), window.clearInterval(i));
                }, 100);
              else t();
          }),
          (e.prototype.featuresToString = function () {
            var e = this.features,
              t = [];
            for (var a in e) t.push(a + '=' + e[a]);
            return t.join(',');
          }),
          e
        );
      })(),
      Jt = n['a'].extend({
        props: ['scopes'],
        data: function () {
          return { offlineAccessStatus: Xt.IDLE };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user'])), {
          textHeading: function () {
            return this.$t('MODAL_SPLASH_OAUTH_HEADING');
          },
          textDescription: function () {
            return this.$t('MODAL_SPLASH_OAUTH_DESCRIPTION');
          },
          textFailure: function () {
            return this.$t('MODAL_SPLASH_OAUTH_FAILURE');
          },
          textPrimaryButton: function () {
            return this.$t('MODAL_SPLASH_OAUTH_PRIMARY_BUTTON');
          },
          textSecondaryButton: function () {
            return this.$t('MODAL_SPLASH_SECONDARY_TEXT');
          },
        }),
        methods: {
          googleSignIn: function () {
            var e = this,
              t = this.user.email,
              a = this.user.uid,
              i = (window._app && window._app.oauth_url) || '',
              s = i + '/oauth2/authenticate?state=' + a + '&login_hint=' + t;
            this.scopes && (s += '&scopes=' + this.scopes);
            var n = function (t) {
              if (e.offlineAccessStatus === Xt.BUSY && (!t || t.origin === i)) {
                if (!t) {
                  var a = 'Authorization cancelled. The user has likely interrupted the process by closing the modal.';
                  return e.googleSignInFailure(a);
                }
                if (!t.data || !t.data.eventType) {
                  a = 'Authorization failed. The authorization modal sent an unsupported MessageEvent.';
                  return e.googleSignInFailure(a);
                }
                var s = t.data;
                'AUTHORIZATION_SUCCEEDED' !== s.eventType
                  ? 'AUTHORIZATION_FAILED' !== s.eventType
                    ? e.googleSignInFailure('Authorization failed. That’s all we know.')
                    : e.googleSignInFailure(s.data)
                  : e.googleSignInSuccess();
              }
            };
            window.addEventListener('message', n, !1), (this.offlineAccessStatus = Xt.BUSY);
            var o = new Qt(s);
            o.open(), o.addEventListener('close', n);
          },
          googleSignInSuccess: function () {
            this.$store.dispatch('user/setOfflineAccess', !0), (this.offlineAccessStatus = Xt.SUCCESS), this.closeOfflineAccessPrompt(), this.$emit('offline-access-success');
          },
          googleSignInFailure: function (e) {
            (this.offlineAccessStatus = Xt.FAILED), this.$emit('offline-access-failure'), window._logger(new Error(e));
          },
          closeOfflineAccessPrompt: function () {
            this.$emit('offline-access-close');
          },
        },
      }),
      Zt = Jt,
      ea = Object(S['a'])(Zt, qt, Kt, !1, null, null, null),
      ta = ea.exports,
      aa = n['a'].extend({
        components: { ModalFooterIcons: N, OfflineAccessPrompt: ta },
        data: function () {
          return { isBackgroundSendInProgress: !1, showOfflineAccessPrompt: !1, offlineAccessOAuthScopes: null };
        },
        beforeMount: function () {
          if (!(this.isScheduled || this.hasAutopilot || this.hasFollowup || this.hasAttachments)) return this.totalEmailsToSend < 75 ? this.setLocation('/sending') : void 0;
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet', 'user'])), {
          totalEmailsToSend: function () {
            return this.user.premium || this.user.quota.available > this.sheet.emailing.recipients ? this.sheet.emailing.recipients : this.user.quota.available;
          },
          sender: function () {
            var e = this.merge.senderName,
              t = this.merge.senderEmail;
            return e ? '<dfn title="' + e + ' <' + t + '>" style="font: inherit; text-decoration: underline; text-decoration-style: dotted;">' + e + '</dfn>' : t;
          },
          scheduledAt: function () {
            return (this.merge && this.merge.options.at) || new Date();
          },
          isSendingDisabled: function () {
            return this.isBackgroundSendInProgress;
          },
          isScheduled: function () {
            return this.merge && this.merge.options.at instanceof Date;
          },
          hasAutopilot: function () {
            return this.merge && 'undefined' !== typeof this.merge.options.weekdays;
          },
          hasFollowup: function () {
            return ((this.merge && Array.isArray(this.merge.followups) && this.merge.followups) || []).length > 0;
          },
          hasAttachments: function () {
            var e = this.merge && this.merge.template,
              t = e && e.attachments;
            return 'undefined' !== typeof t && Object.keys(t).length > 0;
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          backgroundSend: function () {
            this.isBackgroundSendInProgress ||
              ((this.isBackgroundSendInProgress = !0),
              window._backend
                .withFailureHandler(this.backgroundSendFailure)
                .withSuccessHandler(this.backgroundSendSuccess)
                .sheetUIAdvancedSend(window._backendSanitizer(this.merge), this.sheet));
          },
          backgroundSendFailure: function (e) {
            if (((this.isBackgroundSendInProgress = !1), e.message.includes('oauth_scopes_required'))) {
              var t = e.message.replace(/^.+({"error":true.+)$/, '$1');
              try {
                var a = JSON.parse(t);
                return (this.showOfflineAccessPrompt = !0), void (this.offlineAccessOAuthScopes = a.details.scopes);
              } catch (e) {
                window._logger(e);
              }
            }
            this.$root.errorBackendHandler(e);
          },
          backgroundSendSuccess: function () {
            this.setLocation('/sent?from=background');
          },
          formatDate: function (e, t) {
            try {
              return e.toLocaleString(this.$i18n.locale, t ? { dateStyle: 'long' } : { dateStyle: 'long', timeStyle: 'short' });
            } catch (a) {
              return e.toString();
            }
          },
        },
      }),
      ia = aa,
      sa = Object(S['a'])(ia, Yt, zt, !1, null, null, null),
      na = sa.exports,
      oa = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIInfo' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/animations/sending.gif', width: '200', height: '200' } }),
            a('div', { directives: [{ name: 'show', rawName: 'v-show', value: e.countdown > 0, expression: 'countdown > 0' }] }, [
              a('p', [
                a('span', [e._v(e._s(e.$t('MODAL_SENDING_COUNTDOWN', { n: e.countdown })))]),
                e._v(' '),
                a(
                  'a',
                  {
                    staticClass: 'addon-link',
                    on: {
                      click: function (t) {
                        t.preventDefault(), e.setLocation(':back(2)');
                      },
                    },
                  },
                  [e._v(e._s(e.$t('MODAL_BUTTON_CANCEL')))]
                ),
              ]),
            ]),
            a('div', { directives: [{ name: 'show', rawName: 'v-show', value: e.countdown <= 0, expression: 'countdown <= 0' }] }, [
              a('div', { staticClass: 'addon-progressbar-wrapper' }, [
                a('div', { staticClass: 'addon-progressbar' }, [a('span', { style: { width: e.sendingProgressBarWidth, transition: 'width 1s ease' } })]),
              ]),
              a('p', [
                e._v(' ' + e._s(e.$t('MODAL_SENDING_PROGRESS', { n: e.totalEmailsSent, total: e.totalEmailsToSend })) + ' '),
                a('br'),
                e._v(' '),
                a('span', [e._v(e._s(e.til))]),
              ]),
            ]),
          ]),
        ]);
      },
      ra = [],
      la = a('53ca'),
      ca = n['a'].extend({
        data: function () {
          return {
            cid: '',
            timerObj: void 0,
            countdown: 5,
            sendingIntervalWithoutAttachments: 3.5,
            sendingIntervalWithAttachments: 5,
            totalEmailsSent: 0,
            hasSendingFailed: !1,
            til: '',
            facts: [
              'On July. 29, 1958, the NASA was created',
              "Halley's Comet was last seen from Earth in 1986",
              "Halley's Comet is expected to re-appear in mid-2061",
              'Geminids are a meteor shower peaking around December 6–14',
              'On Jan. 9, 1992, the first exoplanet was detected',
              'Valentina Tereshkova was the first woman in space',
              'There are 203 known moons in our Solar System',
              'The Sun weights ~99,9% of all mass in our Solar System',
              'The Apollo Program has cost ~163 billion USD',
              'The Moon is on average 384,400 km away from Earth',
              'Earth formed around 4.54 billion years ago',
              'There are 8 "real planets" in our Solar System',
              'First animal in space was a dog named Laïka',
              'The closest star beyond our Sun is 4.22 light-years away',
              'It takes 8 mins 20 secs for sunlight to get to Earth',
              'In one second, the light travels 299,792 kilometers',
              'Only 12 people have walked on the moon',
              'NASA has successfully landed 4 rovers on Mars',
              'The 1st observation of gravitational waves was made on Sep. 14, 2015',
              'Sagittarius B2, a vast cloud in our Galaxy, smells like raspberries',
              "Saturn's rings will eventually fall into Saturn and disappear completely",
              'Astronauts witness 16 sunrises and 16 sunsets every day on the ISS',
              "Jupiter's Moon Ganymede has a salty ocean with more water than Earth",
              'Venus is the hottest planet in our solar system',
              'Venus has an average temperature of around 880°F (471°C)',
              'There are about 100 thousand million stars in the Milky Way alone',
              'A rocky planet called 55 Cancri e may be made out of diamonds',
              'The footprints on the Moon will be there for 100 million years',
              'In 4 billion years the Milky Way and Andromeda galaxies will collide',
              'If two pieces of the same metal touch in space they will permanently bond',
              'There is a volcano on Mars three times the size of Everest.',
              'There are 79 known moons orbiting Jupiter',
              'The Martian day is 24 hours 39 minutes and 35 seconds long',
              'Pluto is half as wide as than the United States',
              'There are more stars in space than there are grains of sand on Earth',
              'Neptune takes nearly 165 Earth years to make one orbit of the Sun',
              "You can see Saturn's rings with a backyard telescope",
              'We know more about Mars and our Moon than we do about our oceans',
              'The International Space Station circles Earth about every 90 minutes',
              'Stars twinkle because their light is distorted through the atmosphere',
              'Using the naked eye, you can see 3 – 7 different galaxies from Earth',
              'On Venus, it snows metal and rains sulfuric acid',
              'Astronauts can grow up to 3% taller during the time spent in space',
              'Sputnik 1 was the first artificial Earth satellite launched on 4 Oct 1957',
              'Pluto is named after the Roman god of the underworld, not the Disney dog!',
              'Spacesuit helmets have a Velcro patch, to help astronauts scratch their noses',
              'On Mars, while the sky is red during the day, the sunset is blue',
              'The word “astronaut” means “star sailor” in its Greek etymology',
              'In East Asia, the Milky Way is known as the “Silver River”',
              'There are 88 recognized star constellations in our night sky',
            ],
          };
        },
        mounted: function () {
          this.timer();
        },
        beforeDestroy: function () {
          this.timerObj && window.clearTimeout(this.timerObj);
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet', 'user'])), {
          totalEmailsToSend: function () {
            return this.user.quota.available > this.sheet.emailing.recipients ? this.sheet.emailing.recipients : this.user.quota.available;
          },
          sendingInterval: function () {
            return this.getAttachmentsLength() > 0 ? this.sendingIntervalWithAttachments : this.sendingIntervalWithoutAttachments;
          },
          sendingProgressBarWidth: function () {
            var e = Math.round((this.totalEmailsSent / this.totalEmailsToSend) * 100);
            return Math.max(e, 5) + '%';
          },
        }),
        methods: {
          setLocation: function (e) {
            this.$store.dispatch('setLocation', e);
          },
          getAttachmentsLength: function () {
            var e = this.$store.getters.getActiveTemplate,
              t = e && e.attachments,
              a = 0;
            if (t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && a++;
            return a;
          },
          timer: function () {
            if (this.countdown <= 0) return this.startMerge();
            this.countdown--, (this.timerObj = window.setTimeout(this.timer, 1e3));
          },
          startMerge: function () {
            this.createMerge();
          },
          createMerge: function () {
            var e = this.merge,
              t = this.sheet;
            window._backend.withFailureHandler(this.$root.errorBackendHandler).withSuccessHandler(this.createMergeSuccess).sheetUICreateMerge(e, t);
          },
          createMergeSuccess: function (e) {
            (this.cid = e.merge.cid), this.sendBatch(), this.emailsSentCounter(), this.renderTil();
          },
          sendBatch: function (e) {
            var t = this,
              a = this.merge,
              i = this.sheet,
              s = this.cid;
            if (!s) throw new Error('Unable to sendBatch(). Campaign ID is undefined');
            window._backend
              .withRetry(5)
              .withFailureHandler(function (e) {
                t.$root.errorBackendHandler(e), (t.hasSendingFailed = !0);
              })
              .withSuccessHandler(this.sendEmailsSuccess)
              .sheetUISendBatch(a, i, s, e);
          },
          sendEmailsSuccess: function (e) {
            var t = this;
            try {
              if (!e || 'object' !== Object(la['a'])(e) || !e.merge) throw new Error('Sending emails failed. Data returned is malformed');
              if (-1 === e.merge.endedRow) throw new Error('Sending emails failed. End row is -1');
              if (e.merge.endedRow < e.merge.totalRows) return void this.sendBatch(e.merge.endedRow + 1);
              if (this.totalEmailsSent < this.totalEmailsToSend)
                return void window.setTimeout(function () {
                  t.sendEmailsSuccess(e);
                }, 800);
              this.setLocation('/sent');
            } catch (a) {
              this.$store.dispatch('showButterbar', 'Sending has failed. Please try again');
            }
          },
          renderTil: function () {
            var e = this;
            if (!(this.sheet.stats.totalRows < 30)) {
              if (this.totalEmailsSent > 3) {
                var t = Math.round((this.totalEmailsSent / this.totalEmailsToSend) * 100);
                if (!(t < 90)) return void (this.til = String(this.$i18n.t('MODAL_SENDING_ALMOST_COMPLETE')));
                var a = Math.floor(Math.random() * this.facts.length);
                this.til = this.facts[a];
              }
              window.setTimeout(function () {
                e.renderTil();
              }, 8e3);
            }
          },
          emailsSentCounter: function () {
            this.hasSendingFailed ||
              (this.totalEmailsSent < this.totalEmailsToSend && this.totalEmailsSent++, window.setTimeout(this.emailsSentCounter, 1e3 * this.sendingInterval));
          },
        },
      }),
      da = ca,
      _a = Object(S['a'])(da, oa, ra, !1, null, null, null),
      ua = _a.exports,
      ma = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUISuccess' }, [
          a('div', { staticClass: 'addon-main' }, [
            a('img', { attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/animations/success.gif', width: '200', height: '200' } }),
            e.isScheduled || e.isAutopilot || e.isFollowup
              ? a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_SENT_SCHEDULED')) } })
              : e.isBackground
              ? a('p', { domProps: { innerHTML: e._s(e.$t('MODAL_SENT_BACKGROUND')) } })
              : a('p', [e._v(e._s(e.$t('MODAL_SENT_SUCCESS')))]),
          ]),
          a('div', { staticClass: 'addon-footer' }, [
            a('table', { staticClass: 'addon-table' }, [
              a('tr', [
                a('td', { staticClass: 'addon-footer-icons' }, [a('ModalFooterIcons')], 1),
                a(
                  'td',
                  { staticClass: 'addon-footer-actions' },
                  [
                    e.isScheduled
                      ? [
                          a(
                            'a',
                            {
                              staticClass: 'addon-button',
                              attrs: { target: '_blank', rel: 'noopener noreferrer', href: 'https://support.mailmeteor.com/introduction/advanced/scheduling' },
                            },
                            [e._v(' ' + e._s(e.$t('MODAL_SENT_SCHEDULING_ELI5')) + ' ')]
                          ),
                          a(
                            'a',
                            {
                              staticClass: 'addon-button addon-button-action',
                              attrs: { target: '_blank', rel: 'noopener noreferrer', href: 'https://dashboard.mailmeteor.com/campaigns?utm_source=addon&utm_medium=footer' },
                            },
                            [e._v(' ' + e._s(e.$t('MODAL_SENT_OPEN_DASHBOARD')) + ' ')]
                          ),
                        ]
                      : [
                          a('a', { staticClass: 'addon-button', attrs: { target: '_blank', rel: 'noopener', href: 'https://mail.google.com/mail/#sent' } }, [
                            e._v(e._s(e.$t('MODAL_SENT_VIEW_EMAILS'))),
                          ]),
                          a(
                            'button',
                            {
                              staticClass: 'addon-button addon-button-action',
                              on: {
                                click: function (t) {
                                  return e.openTrackingReport();
                                },
                              },
                            },
                            [e._v(' ' + e._s(e.$t('MODAL_OPEN_TRACKING_REPORT')) + ' ')]
                          ),
                        ],
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ]);
      },
      Aa = [],
      pa = n['a'].extend({
        components: { ModalFooterIcons: N },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['merge', 'sheet'])), {
          isScheduled: function () {
            return this.merge && this.merge.options.at instanceof Date;
          },
          isAutopilot: function () {
            return this.merge && 'undefined' !== typeof this.merge.options.weekdays;
          },
          isFollowup: function () {
            return this.merge && 'undefined' !== typeof this.merge.followups;
          },
          isBackground: function () {
            return this.$store.state.location.indexOf('from=background') > 0;
          },
        }),
        methods: {
          openTrackingReport: function () {
            window._backend.sheetUIShowSidebar(), window._frontend.close();
          },
          getAttachmentsLength: function () {
            var e = this.$store.getters.getActiveTemplate,
              t = e && e.attachments,
              a = 0;
            if (t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && a++;
            return a;
          },
        },
        mounted: function () {
          window._backend.sheetUIIncreaseMergesCounter();
          var e = [];
          this.isScheduled && e.push('scheduling'),
            this.isAutopilot && e.push('autopilot'),
            this.getAttachmentsLength() && e.push('attachments'),
            this.isFollowup && e.push('followup'),
            window._gtag('event', 'sent_campaign', { event_category: 'engagement', event_label: e.join('_'), value: this.sheet.emailing.recipients }),
            window.telemetry.track('Campaign created', {
              emails: this.sheet.emailing.recipients,
              scheduled: this.isScheduled,
              autopilot: this.isAutopilot,
              followup: this.isFollowup,
              attachments: this.getAttachmentsLength() > 0,
            });
        },
      }),
      ha = pa,
      Ea = Object(S['a'])(ha, ma, Aa, !1, null, null, null),
      Oa = Ea.exports,
      Ta = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          [
            a('SidebarNavigation'),
            a('div', { staticClass: 'addon-sidebar-main' }, [
              e.hasCampaigns
                ? a(
                    'div',
                    [
                      a('div', { staticClass: 'addon-sidebar-home-header' }, [
                        a('span', [e._v(e._s(e.$t('SIDEBAR_OVERVIEW_HEADING')))]),
                        a('nav', { staticClass: 'addon-sidebar-home-tabs' }, [
                          a(
                            'span',
                            {
                              staticClass: 'addon-sidebar-home-tab',
                              class: 'opens' === e.activeMetric ? 'active' : '',
                              attrs: { role: 'button' },
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.setActiveMetric('opens');
                                },
                              },
                            },
                            [e._v(e._s(e.$t('SIDEBAR_OVERVIEW_TAB_OPENS')))]
                          ),
                          a(
                            'span',
                            {
                              staticClass: 'addon-sidebar-home-tab',
                              class: 'clicks' === e.activeMetric ? 'active' : '',
                              attrs: { role: 'button' },
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.setActiveMetric('clicks');
                                },
                              },
                            },
                            [e._v(e._s(e.$t('SIDEBAR_OVERVIEW_TAB_CLICKS')))]
                          ),
                        ]),
                      ]),
                      a('div', { staticClass: 'addon-sidebar-home-tracking' }, [
                        a('table', { staticClass: 'addon-table' }, [
                          a(
                            'tbody',
                            e._l(e.campaigns.all, function (t, i) {
                              return a('SidebarTrackingRow', { key: i, attrs: { campaign: t, eventType: e.activeMetric } });
                            }),
                            1
                          ),
                        ]),
                        a('table', { staticClass: 'addon-table' }, [
                          a('tbody', [
                            a('tr', { staticClass: 'addon-sidebar-home-tracking-tips', staticStyle: { 'vertical-align': 'top' } }, [
                              a('td', [e._v(e._s(e.$t('SIDEBAR_OVERVIEW_METRICS_TIP')))]),
                              a('td', { staticStyle: { 'text-align': 'right', 'min-width': '80px' } }, [
                                e._v(e._s(e.$t('SIDEBAR_OVERVIEW_METRICS_TOTAL', { percent: e.$t('FRACTION', { a: e.totalEvents, b: e.totalEmails }) }))),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      a('SidebarTips'),
                    ],
                    1
                  )
                : a('div', { staticClass: 'addon-sidebar-padding' }, [
                    a('div', { staticClass: 'addon-infobar addon-infobar-warning' }, [e._v(e._s(e.$t('ERROR_SHEET_HAS_NO_CAMPAIGN')))]),
                    a('button', { staticClass: 'addon-button', on: { click: e.openModal } }, [e._v(e._s(e.$t('MODAL_START_MAIL_MERGE')))]),
                  ]),
            ]),
            a('SidebarFooter'),
          ],
          1
        );
      },
      La = [],
      Ia = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          [
            a('div', { staticClass: 'addon-sidebar-navigation' }, [
              e.isHome
                ? e._e()
                : a('div', {
                    attrs: { role: 'button', 'arial-label': 'Go to campaign overview', 'data-icon': 'arrow-back' },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.goToOverview();
                      },
                    },
                  }),
              e.isHome ? a('span', [e._v(e._s(e.$tc('SIDEBAR_NAVIGATION_OVERVIEW', e.campaigns.all.length)))]) : a('span', [e._v(e._s(e.$t('SIDEBAR_NAVIGATION_CAMPAIGN')))]),
              a('div', { staticStyle: { 'margin-left': 'auto' } }, [
                a('div', {
                  attrs: { 'data-icon': 'refresh' },
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.refreshSidebar(t);
                    },
                  },
                }),
                a('div', {
                  staticClass: 'addon-dropdown-overlay-icon',
                  attrs: { 'data-icon': 'settings' },
                  on: {
                    click: function (t) {
                      return t.preventDefault(), e.toggleOverlay(t);
                    },
                  },
                }),
              ]),
            ]),
            a('transition', { attrs: { name: 'addon-transition-dropdown-overlay' } }, [
              a('div', { staticClass: 'addon-dropdown-overlay addon-sidebar-menu-overlay', class: { active: e.isOverlayShown }, staticStyle: { 'max-width': '256px' } }, [
                a('ul', [
                  a('li', [
                    a(
                      'span',
                      {
                        on: {
                          click: function (t) {
                            return e.openModal();
                          },
                        },
                      },
                      [e._v(e._s(e.$t('SIDEBAR_MORE_START_MERGE')))]
                    ),
                  ]),
                  a('li', [
                    a('a', { attrs: { target: '_blank', rel: 'noopener', href: 'https://dashboard.mailmeteor.com/campaigns?utm_source=addon&utm_medium=footer' } }, [
                      e._v(e._s(e.$t('SIDEBAR_MORE_OPEN_DASHBOARD'))),
                    ]),
                  ]),
                  e.isUserUpgradable
                    ? a('li', [
                        a(
                          'a',
                          { attrs: { target: '_blank', rel: 'noopener', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=sidebar-upgrade' } },
                          [e._v(e._s(e.$t('SIDEBAR_MORE_UPGRADE')))]
                        ),
                      ])
                    : e._e(),
                  a('li', { attrs: { role: 'separator' } }),
                  a('li', [
                    a(
                      'span',
                      {
                        on: {
                          click: function (t) {
                            return e.openModalAccount();
                          },
                        },
                      },
                      [e._v(e._s(e.$t('SIDEBAR_MORE_ACCOUNT')))]
                    ),
                  ]),
                  a('li', [a('a', { attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com' } }, [e._v(e._s(e.$t('SIDEBAR_MORE_HELP')))])]),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      Sa = [],
      ga = n['a'].extend({
        data: function () {
          return { isOverlayShown: !1 };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user', 'location', 'campaigns'])), {
          isHome: function () {
            return '/sidebar' === this.location;
          },
          isUserUpgradable: function () {
            return !!this.user && !this.user.premium;
          },
        }),
        methods: {
          refreshSidebar: function () {
            window._backend.sheetUIShowSidebar();
          },
          openModal: function () {
            window._backend
              .withFailureHandler(this.$root.errorBackendHandler)
              .withSuccessHandler(function () {
                window._frontend.close();
              })
              .sheetUIShowModal();
          },
          openModalAccount: function () {
            window._backend
              .withFailureHandler(this.$root.errorBackendHandler)
              .withSuccessHandler(function () {
                window._frontend.close();
              })
              .sheetUIShowModalAccount();
          },
          goToOverview: function () {
            this.$store.dispatch('setLocation', '/sidebar');
          },
          toggleOverlay: function () {
            (this.isOverlayShown = !this.isOverlayShown),
              !1 === this.isOverlayShown ? document.removeEventListener('click', this.hideOverlay, !0) : document.addEventListener('click', this.hideOverlay, !0);
          },
          hideOverlay: function (e) {
            var t = e && e.target;
            (t && t.closest && t.closest('.addon-dropdown-overlay-icon')) || (document.removeEventListener('click', this.hideOverlay, !0), (this.isOverlayShown = !1));
          },
        },
      }),
      Da = ga,
      Ma = Object(S['a'])(Da, Ia, Sa, !1, null, null, null),
      va = Ma.exports,
      fa = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-sidebar-footer' });
      },
      Na = [],
      Ca = n['a'].extend({
        data: function () {
          return { version: (window._app && window._app.app_version) || '' };
        },
      }),
      Ra = Ca,
      Pa = Object(S['a'])(Ra, fa, Na, !1, null, null, null),
      ba = Pa.exports,
      wa = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('tr', { staticClass: 'addon-sidebar-tracking-row' }, [
          a('td', { staticClass: 'addon-sidebar-tracking-row-column' }, [
            a(
              'span',
              {
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.setActiveCampaign();
                  },
                },
              },
              [e._v(' ' + e._s(e.$t('SIDEBAR_CAMPAIGN_COLUMN', { columnHeading: e.campaign.columnHeading })) + ' ')]
            ),
          ]),
          a('td', [a('div', { staticClass: 'addon-sidebar-tracking-row-progress' }, [a('span', { style: e.progressBarWidth })])]),
          a('td', { staticClass: 'addon-sidebar-tracking-row-percent' }, [e._v(e._s(e.$t('PERCENT', { x: e.percent })))]),
          a('td', { staticClass: 'addon-sidebar-tracking-row-fraction' }, [e._v(e._s(e.$t('FRACTION', { a: e.totalEvents, b: e.totalEmails })))]),
        ]);
      },
      Ua = [],
      ya = n['a'].extend({
        props: ['campaign', 'eventType'],
        computed: {
          percent: function () {
            return isNaN(this.totalEmails) || this.totalEmails < 1 || isNaN(this.totalEvents) || this.totalEvents < 1
              ? 0
              : this.totalEvents > this.totalEmails
              ? 100
              : Math.round((this.totalEvents / this.totalEmails) * 100);
          },
          totalEmails: function () {
            return this.campaign.metrics.emails;
          },
          totalEvents: function () {
            return this.campaign.metrics[this.eventType];
          },
          progressBarWidth: function () {
            return 'width:' + this.percent + '%';
          },
        },
        methods: {
          setActiveCampaign: function () {
            this.$store.dispatch('setActiveCampaign', this.campaign), this.$store.dispatch('setLocation', '/sidebar/campaigns');
          },
        },
      }),
      Ha = ya,
      ka = Object(S['a'])(Ha, wa, Ua, !1, null, null, null),
      Ba = ka.exports,
      Ga = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'addon-sidebar-tips' }, [
          a('ul', [
            a('li', [
              a('h3', [
                a('a', { staticClass: 'addon-link', attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/introduction/advanced/tracking-report' } }, [
                  e._v(e._s(e.$t('SIDEBAR_TIPS_1_HEADING'))),
                ]),
              ]),
              a('p', [e._v(e._s(e.$t('SIDEBAR_TIPS_1_SUBHEADING')))]),
            ]),
            a('li', [
              a('h3', [
                a('a', { staticClass: 'addon-link', attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/introduction/quick-start/sending-tips' } }, [
                  e._v(e._s(e.$t('SIDEBAR_TIPS_2_HEADING'))),
                ]),
              ]),
              a('p', [e._v(e._s(e.$t('SIDEBAR_TIPS_2_SUBHEADING')))]),
            ]),
          ]),
        ]);
      },
      Fa = [],
      $a = n['a'].extend({}),
      Wa = $a,
      xa = Object(S['a'])(Wa, Ga, Fa, !1, null, null, null),
      Va = xa.exports,
      ja = n['a'].extend({
        components: { SidebarTrackingRow: Ba, SidebarTips: Va, SidebarNavigation: va, SidebarFooter: ba },
        data: function () {
          return { activeMetric: 'opens' };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['campaigns'])), {
          hasCampaigns: function () {
            return this.campaigns.ids.length > 0;
          },
          totalEmails: function () {
            for (var e = 0, t = 0, a = this.campaigns.all.length; t < a; t++) e += this.campaigns.all[t].metrics.emails;
            return e;
          },
          totalEvents: function () {
            for (var e = 0, t = 0, a = this.campaigns.all.length; t < a; t++) e += this.campaigns.all[t].metrics[this.activeMetric];
            return e;
          },
        }),
        methods: {
          openModal: function () {
            window._backend
              .withFailureHandler(this.$root.errorBackendHandler)
              .withSuccessHandler(function () {
                window._frontend.close();
              })
              .sheetUIShowModal();
          },
          setActiveMetric: function (e) {
            this.activeMetric = e;
          },
        },
      }),
      Ya = ja,
      za = Object(S['a'])(Ya, Ta, La, !1, null, null, null),
      qa = za.exports,
      Ka = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          [
            a('SidebarNavigation'),
            a('div', { staticClass: 'addon-sidebar-main' }, [
              a('div', { staticClass: 'addon-sidebar-campaign' }, [
                e.hasCampaigns
                  ? a('div', [
                      e.activeCampaign
                        ? a('div', [
                            a('div', { staticClass: 'addon-sidebar-campaign-header' }, [
                              a('nav', { staticClass: 'addon-sidebar-campaign-navigation' }, [
                                a('div', {
                                  style: e.isFirstCampaign ? 'visibility: hidden' : '',
                                  attrs: { role: 'button', 'aria-label': 'Previous campaign', 'data-icon': 'chevron-prev' },
                                  on: {
                                    click: function (t) {
                                      return t.preventDefault(), e.goToPrevCampaign();
                                    },
                                  },
                                }),
                                a('span', [e._v(e._s(e.$t('SIDEBAR_CAMPAIGN_COLUMN', { columnHeading: e.activeCampaign.columnHeading })))]),
                                a('div', {
                                  style: e.isLastCampaign ? 'visibility: hidden' : '',
                                  attrs: { role: 'button', 'aria-label': 'Next campaign', 'data-icon': 'chevron-next' },
                                  on: {
                                    click: function (t) {
                                      return t.preventDefault(), e.goToNextCampaign();
                                    },
                                  },
                                }),
                              ]),
                              'idle' === e.campaignStatus
                                ? a('div', [
                                    a('h1', [a('a', { attrs: { href: e.campaignUrl, target: '_blank' } }, [e._v(' ' + e._s(e.$t('SIDEBAR_SCHEDULING_TITLE_IDLE')) + ' ')])]),
                                  ])
                                : 'busy' === e.campaignStatus
                                ? a('div', [
                                    a(
                                      'h1',
                                      [
                                        a('SidebarSchedulingIcon', { attrs: { tooltip: e.$t('SIDEBAR_SCHEDULING_TOOLTIP_BUSY') } }),
                                        a('a', { attrs: { href: e.campaignUrl, target: '_blank' } }, [
                                          e._v(' ' + e._s(e.$t('SIDEBAR_CAMPAIGN_SENT', { n: e.activeCampaign.metrics.emails })) + ' '),
                                        ]),
                                      ],
                                      1
                                    ),
                                    a('h2', [
                                      e._v(e._s(e.$t('SIDEBAR_SCHEDULING_SUBTITLE_BUSY', { date: e.sentDate(e.activeCampaign.scheduledAt || e.activeCampaign.createdAt) }))),
                                    ]),
                                  ])
                                : a('div', [
                                    a('h1', [
                                      a('a', { attrs: { href: e.campaignUrl, target: '_blank' } }, [
                                        e._v(' ' + e._s(e.$t('SIDEBAR_CAMPAIGN_SENT', { n: e.activeCampaign.metrics.emails })) + ' '),
                                      ]),
                                    ]),
                                    a('h2', [e._v(e._s(e.$t('SIDEBAR_CAMPAIGN_SUBTITLE', { date: e.sentDate(e.activeCampaign.scheduledAt || e.activeCampaign.createdAt) })))]),
                                  ]),
                              !e.isCampaignEnded && e.isCampaignOwner
                                ? a('div', { staticClass: 'addon-text-center', staticStyle: { 'margin-top': '14px' } }, [
                                    a(
                                      'button',
                                      {
                                        staticClass: 'addon-button addon-button-outline',
                                        on: {
                                          click: function (t) {
                                            return t.preventDefault(), e.cancelCampaign(t);
                                          },
                                        },
                                      },
                                      [
                                        e.cancelCampaignInProgress ? a('span', { staticClass: 'addon-button-loading' }) : e._e(),
                                        e._v(' ' + e._s(e.$t('SIDEBAR_CAMPAIGN_CANCEL')) + ' '),
                                      ]
                                    ),
                                  ])
                                : e._e(),
                            ]),
                            a('div', { staticClass: 'addon-sidebar-campaign-tracking' }, [
                              e.user.premium
                                ? a(
                                    'div',
                                    [
                                      e.activeCampaign.hasTracking
                                        ? a(
                                            'div',
                                            [
                                              e.activeCampaign.followups
                                                ? a('div', {
                                                    staticClass: 'addon-infobar addon-infobar-info',
                                                    domProps: { innerHTML: e._s(e.$t('SIDEBAR_CAMPAIGN_HAS_FOLLOWUPS', { campaignId: e.activeCampaign.id })) },
                                                  })
                                                : e._e(),
                                              a('SidebarTrackingSection', {
                                                attrs: {
                                                  label: e.$t('MAIL_EVENTS_OPENS'),
                                                  tooltip: e.$t('MAIL_EVENTS_OPENS_TOOLTIP'),
                                                  total: e.activeCampaign.metrics.emails,
                                                  active: e.activeCampaign.metrics.opens,
                                                },
                                              }),
                                              a('SidebarTrackingSection', {
                                                attrs: {
                                                  label: e.$t('MAIL_EVENTS_CLICKS'),
                                                  tooltip: e.$t('MAIL_EVENTS_CLICKS_TOOLTIP'),
                                                  total: e.activeCampaign.metrics.emails,
                                                  active: e.activeCampaign.metrics.clicks,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : a('div', { staticClass: 'addon-infobar addon-infobar-info' }, [e._v(e._s(e.$t('SIDEBAR_CAMPAIGN_TRACKING_OFF')))]),
                                      e.activeCampaign.hasUnsubscribe
                                        ? a('SidebarTrackingSection', {
                                            attrs: {
                                              label: e.$t('MAIL_EVENTS_UNSUBSCRIBES'),
                                              tooltip: e.$t('MAIL_EVENTS_UNSUBSCRIBES_TOOLTIP'),
                                              total: e.activeCampaign.metrics.emails,
                                              active: e.activeCampaign.metrics.unsubscribes,
                                            },
                                          })
                                        : e._e(),
                                      a('CampaignTips'),
                                    ],
                                    1
                                  )
                                : a('div', [
                                    e.activeCampaign.hasTracking
                                      ? a('div', { staticClass: 'addon-infobar addon-infobar-info', domProps: { innerHTML: e._s(e.$t('SIDEBAR_CAMPAIGN_TRACKING_ON_UPGRADE')) } })
                                      : a('div', { staticClass: 'addon-infobar addon-infobar-info', domProps: { innerHTML: e._s(e.$t('SIDEBAR_CAMPAIGN_TRACKING_OFF_UPGRADE')) } }),
                                  ]),
                            ]),
                          ])
                        : a('div', { staticClass: 'addon-sidebar-campaign-loading' }, [e._v(' ' + e._s(e.$t('LOADING')) + ' ')]),
                    ])
                  : a('div', { staticClass: 'addon-sidebar-padding' }, [
                      a('div', { staticClass: 'addon-infobar addon-infobar-warning' }, [e._v(e._s(e.$t('ERROR_SHEET_HAS_NO_CAMPAIGN')))]),
                      a(
                        'button',
                        {
                          staticClass: 'addon-button',
                          on: {
                            click: function (t) {
                              return e.openModal();
                            },
                          },
                        },
                        [e._v(e._s(e.$t('MODAL_START_MAIL_MERGE')))]
                      ),
                    ]),
              ]),
            ]),
            a('SidebarFooter'),
          ],
          1
        );
      },
      Xa = [],
      Qa =
        (a('8934'),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('div', [
            a('table', { staticClass: 'addon-sidebar-tracking-section' }, [
              a('tr', [
                a('td', { staticClass: 'addon-sidebar-tracking-section-label' }, [
                  e._v(' ' + e._s(e.label) + ' '),
                  a(
                    'a',
                    {
                      staticClass: 'addon-tooltip--top',
                      attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/introduction/advanced/tracking-report', 'data-tooltip': e.tooltip },
                    },
                    [
                      a(
                        'svg',
                        {
                          staticStyle: { 'vertical-align': 'text-top', color: 'gray' },
                          attrs: { xmlns: 'http://www.w3.org/2000/svg', width: '16px', height: '16px', viewBox: '0 0 24 24' },
                        },
                        [
                          a('g', { attrs: { fill: 'addon-text-gray' } }, [
                            a('path', { attrs: { fill: 'none', d: 'M0 0h24v24H0z' } }),
                            a('path', {
                              attrs: {
                                d: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]),
                a('td', { staticClass: 'addon-sidebar-tracking-section-percent' }, [e._v(e._s(e.$t('PERCENT', { x: e.percent })))]),
              ]),
              a('tr', [a('td', { attrs: { colspan: '2' } }, [a('div', { staticClass: 'addon-sidebar-tracking-section-progress' }, [a('span', { style: e.progressBarWidth })])])]),
              a('tr', [
                a('td', { staticClass: 'addon-sidebar-tracking-section-total', attrs: { colspan: '2' } }, [
                  e._v(' ' + e._s(e.$tc('MAIL_EVENTS_COUNTER', e.total, { active: e.active, total: e.total })) + ' '),
                ]),
              ]),
            ]),
          ]);
        }),
      Ja = [],
      Za =
        (a('b680'),
        n['a'].extend({
          props: ['label', 'tooltip', 'total', 'active'],
          computed: {
            percent: function () {
              return isNaN(this.total) || this.total < 1 || isNaN(this.active) || this.active < 1
                ? 0
                : this.active > this.total
                ? 100
                : +((this.active / this.total) * 100).toFixed(2);
            },
            progressBarWidth: function () {
              return 'width:' + this.percent + '%';
            },
          },
        })),
      ei = Za,
      ti = Object(S['a'])(ei, Qa, Ja, !1, null, null, null),
      ai = ti.exports,
      ii = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'span',
          {
            staticClass: 'addon-tooltip--top--right',
            staticStyle: { display: 'inline-block', 'vertical-align': 'middle', 'line-height': '1.2rem' },
            attrs: { 'data-tooltip': e.tooltip },
          },
          [a('img', { staticStyle: { height: '1rem' }, attrs: { src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/icons/clock.svg' } })]
        );
      },
      si = [],
      ni = n['a'].extend({ props: ['tooltip'] }),
      oi = ni,
      ri = Object(S['a'])(oi, ii, si, !1, null, null, null),
      li = ri.exports,
      ci = n['a'].extend({
        components: { SidebarNavigation: va, SidebarTrackingSection: ai, SidebarSchedulingIcon: li, CampaignTips: Va, SidebarFooter: ba },
        data: function () {
          return { cancelCampaignInProgress: !1 };
        },
        mounted: function () {
          this.cleanupSheet();
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user', 'campaigns', 'activeCampaign'])), {
          hasCampaigns: function () {
            return this.campaigns.ids.length > 0;
          },
          activeCampaignId: function () {
            return this.activeCampaign && this.activeCampaign.cid;
          },
          isFirstCampaign: function () {
            return this.campaigns.all[0].cid === this.activeCampaignId;
          },
          isLastCampaign: function () {
            var e = this.campaigns.all.length;
            return this.campaigns.all[e - 1].cid === this.activeCampaignId;
          },
          isCampaignOwner: function () {
            var e = this.user && this.user.uid,
              t = this.activeCampaign && this.activeCampaign.owner;
            return e === t;
          },
          isCampaignEnded: function () {
            return 'done' === this.campaignStatus || 'canceled' === this.campaignStatus;
          },
          campaignStatus: function () {
            var e = this.activeCampaign;
            if (!e) return 'idle';
            var t = { IDLE: 1, BUSY: 2, CANCELED: 3, DONE: 4 };
            if (e.status === t.DONE) return 'done';
            if (e.status === t.CANCELED) return 'canceled';
            if (e.scheduledAt) {
              var a = e.scheduledAt;
              return a < Date.now() ? 'busy' : 'idle';
            }
            return e.status === t.BUSY ? 'busy' : 'idle';
          },
          campaignUrl: function () {
            var e = 'https://dashboard.mailmeteor.com/campaigns',
              t = (this.activeCampaign && this.activeCampaign.id) || '';
            return e + (t ? '/' + t : '');
          },
        }),
        methods: {
          openModal: function () {
            window._backend
              .withSuccessHandler(function () {
                window._frontend.close();
              })
              .sheetUIShowModal();
          },
          sentDate: function (e) {
            var t = new Date(e || '');
            if ('function' !== typeof t.toLocaleString) return t.toString();
            var a = t.toLocaleString(void 0, { year: 'numeric', month: 'numeric', day: 'numeric' }),
              i = t.toLocaleString(void 0, { hour: '2-digit', minute: '2-digit' });
            return a + ' at ' + i;
          },
          cleanupSheet: function () {
            this.activeCampaignId || window.setTimeout(this.cleanupSheet, 2500),
              'done' === this.campaignStatus
                ? window._backend.sheetUICleanupSheet(this.activeCampaignId, 'EMAIL_SENT')
                : 'canceled' === this.campaignStatus && window._backend.sheetUICleanupSheet(this.activeCampaignId, 'CANCELED');
          },
          goToPrevCampaign: function () {
            for (var e = this.activeCampaignId, t = this.campaigns.all, a = 1, i = t.length; a < i; a++)
              if (t[a].cid === e) {
                this.$store.dispatch('setActiveCampaign', t[a - 1]);
                break;
              }
          },
          goToNextCampaign: function () {
            for (var e = this.activeCampaignId, t = this.campaigns.all, a = 0, i = t.length; a < i - 1; a++)
              if (t[a].cid === e) {
                this.$store.dispatch('setActiveCampaign', t[a + 1]);
                break;
              }
          },
          cancelCampaign: function () {
            this.cancelCampaignInProgress ||
              ((this.cancelCampaignInProgress = !0),
              r.a.functions().httpsCallable('campaign_cancel_legacy')({ campaign: this.activeCampaignId }).then(this.cancelCampaignSuccess)['catch'](this.cancelCampaignFailure));
          },
          cancelCampaignFailure: function (e) {
            (this.cancelCampaignInProgress = !1), this.$root.errorBackendHandler(e);
          },
          cancelCampaignSuccess: function () {
            window._backend.sheetUIShowSidebar();
          },
        },
      }),
      di = ci,
      _i = Object(S['a'])(di, Ka, Xa, !1, null, null, null),
      ui = _i.exports,
      mi = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      Ai = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('div', { staticClass: 'sheetUIError' }, [
            a('table', [
              a('tbody', [
                a('tr', [
                  a('td', [
                    a('h2', [e._v('Are you using multiple accounts?')]),
                    a('p', [
                      e._v(' Mailmeteor could not detect which account you want to use. If you have multiple accounts, '),
                      a(
                        'a',
                        {
                          staticClass: 'addon-link',
                          attrs: {
                            target: '_blank',
                            rel: 'noopener',
                            href: 'https://mailmeteor.com/blog/how-to-create-google-chrome-profile?utm_source=addon&utm_campaign=switch-account',
                          },
                        },
                        [e._v('use different profiles in Google Chrome')]
                      ),
                      e._v(': '),
                    ]),
                    a('p', [e._v(' At the top right corner of your browser: ')]),
                    a('ol', [
                      a('li', [e._v('Click on your profile icon')]),
                      a('li', [e._v('Then, click on + Add')]),
                      a('li', [e._v("Create a new profile with the account you'd like to use")]),
                    ]),
                    a('p', [e._v('If it still doesn’t work or you are not using Google Chrome, try to sign in using an incognito window.')]),
                    a(
                      'a',
                      {
                        staticClass: 'addon-button addon-button-action',
                        attrs: { target: '_blank', rel: 'noopener', href: 'https://support.mailmeteor.com/help/troubleshooting/launch-error' },
                      },
                      [e._v('More help')]
                    ),
                  ]),
                  a('td', { staticStyle: { padding: '1rem 1rem 0 1rem' } }, [
                    a('img', {
                      attrs: {
                        alt: 'Create new profile in Google Chrome',
                        src: 'https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.7/dist/img/modals/error-switch-account-add.jpg',
                        width: '250px',
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      pi = n['a'].extend({}),
      hi = pi,
      Ei = Object(S['a'])(hi, mi, Ai, !1, null, null, null),
      Oi = Ei.exports,
      Ti = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'sheetUIError' }, [
          a('table', [
            a('tbody', [
              a('tr', [
                a('td', [
                  a('h2', [e._v('Your account is temporarily blocked')]),
                  a('p', [e._v('We have detected an abusive usage. To keep the platform safe and prevent spam, our system has automatically blocked your account.')]),
                  e._m(0),
                  a('a', { staticClass: 'addon-button', attrs: { target: '_blank', rel: 'noopener' }, on: { click: e.close } }, [e._v('Close')]),
                ]),
                e._m(1),
              ]),
            ]),
          ]),
        ]);
      },
      Li = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('p', [
            e._v(' If you think this is a mistake, '),
            a('a', { staticClass: 'addon-link', attrs: { target: '_blank', rel: 'noreferrer noopener', href: 'https://mailmeteor.com/contact' } }, [e._v('please contact us')]),
            e._v('. '),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('td', { staticStyle: { height: '350px' } }, [
            a('img', { attrs: { alt: 'Account suspensed', src: '//cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.3.4/dist/img/modals/cancel.svg', width: '250px' } }),
          ]);
        },
      ],
      Ii = n['a'].extend({
        methods: {
          close: function () {
            window._frontend.close();
          },
        },
      }),
      Si = Ii,
      gi = Object(S['a'])(Si, Ti, Li, !1, null, null, null),
      Di = gi.exports,
      Mi = {
        '/': X,
        '/account': ie,
        '/onboarding': ce,
        '/onboarding/video': pe,
        '/alias': it,
        '/templates': je,
        '/templates/new': Ge,
        '/templates/edit': Ge,
        '/preview': mt,
        '/launchpad': na,
        '/scheduling': Mt,
        '/autopilot': Pt,
        '/followup': jt,
        '/sending': ua,
        '/sent': Oa,
        '/sidebar': qa,
        '/sidebar/campaigns': ui,
        '/error/switch-account': Oi,
        '/error/account-suspended': Di,
      },
      vi = n['a'].extend({
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['location', 'user'])), {
          routedComponent: function () {
            var e = this.location,
              t = e.split('?')[0];
            return (
              window._gtag('config', 'UA-136395985-1', {
                page_path: e,
                user_id: (this.user && this.user.uid) || 'john-doe',
                custom_map: { dimension1: 'cd1' },
                client_storage: 'none',
                client_id: (this.user && this.user.cid) || Date.now(),
              }),
              Mi[t]
            );
          },
        }),
      }),
      fi = vi,
      Ni = fi,
      Ci = Object(S['a'])(Ni, u, m, !1, null, null, null),
      Ri = Ci.exports,
      Pi = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return !0 === e.isActive
          ? a('div', { staticClass: 'addon-splash' }, [
              a('div', {
                staticClass: 'addon-splash-background',
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.close();
                  },
                },
              }),
              'blackfriday' === e.splash.theme
                ? a('div', { staticClass: 'addon-splash-content addon-splash-blackfriday' }, [
                    a('a', {
                      staticClass: 'addon-splash-hero',
                      attrs: { target: '_blank', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=blackfriday' },
                    }),
                    a('div', {
                      staticClass: 'addon-splash-close',
                      staticStyle: { filter: 'brightness(0) invert(1)' },
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.close(t);
                        },
                      },
                    }),
                    a('section', [
                      a('a', { attrs: { target: '_blank', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=blackfriday' } }, [
                        a('div', { staticClass: 'addon-splash-blackfriday-hint' }, [e._v('Monthly plans (30% OFF 🔥)')]),
                        a('div', { staticClass: 'addon-splash-blackfriday-pricing' }, [a('strong', [e._v('$6.99')]), e._v(' '), a('strike', [e._v('$9.99')])], 1),
                      ]),
                    ]),
                    a('section', [
                      a('a', { attrs: { target: '_blank', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=blackfriday' } }, [
                        a('div', { staticClass: 'addon-splash-blackfriday-hint' }, [e._v('Yearly plans (50% OFF 😱)')]),
                        a('div', { staticClass: 'addon-splash-blackfriday-pricing' }, [a('strong', [e._v('$24.99')]), a('strike', [e._v('$49.99')])], 1),
                      ]),
                    ]),
                    a(
                      'a',
                      {
                        staticClass: 'addon-button',
                        attrs: { target: '_blank', href: 'https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=blackfriday' },
                      },
                      [e._v('GO PREMIUM')]
                    ),
                    a('div', { staticClass: 'addon-splash-hint' }, [e._v("Don't miss out! Offer valid until November 26th")]),
                  ])
                : a('div', { staticClass: 'addon-splash-content' }, [
                    a('div', { staticClass: 'addon-splash-hero', style: e.heroBg }),
                    a('h2', { staticClass: 'addon-splash-heading' }, [e._v(e._s(e.fromtheme.title))]),
                    a('p', { staticClass: 'addon-splash-text', domProps: { innerHTML: e._s(e.fromtheme.description) } }),
                    a('div', { staticClass: 'addon-splash-actions' }, [
                      e.fromtheme.secondary && e.fromtheme.secondary.action
                        ? a(
                            'a',
                            {
                              staticClass: 'addon-button',
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.goToAction('secondary');
                                },
                              },
                            },
                            [e._v(e._s(e.fromtheme.secondary.text))]
                          )
                        : a(
                            'a',
                            {
                              staticClass: 'addon-button',
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.close();
                                },
                              },
                            },
                            [e._v(e._s(e.fromtheme.secondary))]
                          ),
                      e.fromtheme.primary && e.fromtheme.primary.action
                        ? a(
                            'a',
                            {
                              staticClass: 'addon-button',
                              class: [e.fromtheme.primary.class ? e.fromtheme.primary.class : 'addon-button-action'],
                              on: {
                                click: function (t) {
                                  return t.preventDefault(), e.goToAction('primary');
                                },
                              },
                            },
                            [e._v(e._s(e.fromtheme.primary.text))]
                          )
                        : a(
                            'a',
                            {
                              staticClass: 'addon-button',
                              class: [e.fromtheme.primary.class ? e.fromtheme.primary.class : 'addon-button-action'],
                              attrs: { target: '_blank', rel: 'noopener', href: e.fromtheme.primary.url },
                            },
                            [e._v(e._s(e.fromtheme.primary.text))]
                          ),
                    ]),
                    e.fromtheme.hint ? a('div', { staticClass: 'addon-splash-hint', domProps: { innerHTML: e._s(e.fromtheme.hint) } }) : e._e(),
                  ]),
            ])
          : e._e();
      },
      bi = [],
      wi = n['a'].extend({
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['splash', 'user'])), {
          isActive: function () {
            return (this.splash && this.splash.active) || !1;
          },
          maxUserQuota: function () {
            var e = this.user.domain,
              t = ['gmail.com', 'googlemail.com'];
            return t.indexOf(e) >= 0 ? 500 : 2e3;
          },
          heroBg: function () {
            return this.fromtheme.hero ? { 'background-image': 'url(' + this.fromtheme.hero + ')' } : '';
          },
          quotaRenewalDate: function () {
            var e = this.user;
            return Z(e);
          },
          fromtheme: function () {
            var e = this.maxUserQuota,
              t = this.splash,
              a = this.quotaRenewalDate,
              i = this.user.quota.available,
              s = this.user.quota.limit;
            switch (t.theme) {
              case 'warning-sheet-empty':
                return {
                  hero: this.$t('MODAL_SPLASH_WARNING_SHEET_EMPTY_HERO'),
                  title: this.$t('MODAL_SPLASH_WARNING_TITLE'),
                  description: this.$t('MODAL_SPLASH_WARNING_SHEET_EMPTY_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_BUTTON_CLOSE'),
                };
              case 'warning-quota-insufficient':
                return {
                  hero: this.$t('MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_HERO'),
                  title: this.$t('MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_TITLE'),
                  description: this.$t('MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_DESCRIPTION', { quotaAvailable: i, quotaLimit: s }),
                  primary: { text: this.$t('MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_PRIMARY_TEXT', { quotaAvailable: i }), action: '/preview' },
                  secondary: this.$t('MODAL_BUTTON_CLOSE'),
                };
              case 'warning-quota-exhausted':
                return {
                  title: this.$t('MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_TITLE'),
                  description: this.$t('MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_DESCRIPTION', { quotaRenewalDate: a }),
                  primary: {
                    class: 'addon-button-marketing',
                    text: this.$t('MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_TEXT'),
                    url: this.$t('MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_LINK'),
                  },
                  secondary: this.$t('MODAL_BUTTON_CLOSE'),
                };
              case 'add-review':
                return {
                  hero: this.$t('MODAL_SPLASH_ADD_REVIEW_HERO'),
                  title: this.$t('MODAL_SPLASH_ADD_REVIEW_TITLE'),
                  description: this.$t('MODAL_SPLASH_ADD_REVIEW_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_ADD_REVIEW_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_ADD_REVIEW_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                  hint: this.$t('MODAL_SPLASH_ADD_REVIEW_HINT'),
                };
              case 'edu':
                return {
                  hero: this.$t('MODAL_SPLASH_EDU_HERO'),
                  title: this.$t('MODAL_SPLASH_EDU_TITLE'),
                  description: this.$t('MODAL_SPLASH_EDU_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_EDU_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_EDU_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'alias':
                return {
                  title: this.$t('MODAL_SPLASH_ALIAS_TITLE'),
                  description: this.$t('MODAL_SPLASH_ALIAS_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_ALIAS_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'attachment':
                return {
                  title: this.$t('MODAL_SPLASH_ATTACHMENT_TITLE'),
                  description: this.$t('MODAL_SPLASH_ATTACHMENT_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_ATTACHMENT_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'edithtml':
                return {
                  title: this.$t('MODAL_SPLASH_EDITHTML_TITLE'),
                  description: this.$t('MODAL_SPLASH_EDITHTML_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_EDITHTML_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'discount':
                return {
                  title: this.$t('MODAL_SPLASH_DISCOUNT_TITLE'),
                  description: this.$t('MODAL_SPLASH_DISCOUNT_DESCRIPTION', { n: e }),
                  primary: { text: this.$t('MODAL_SPLASH_DISCOUNT_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_DISCOUNT_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'scheduling':
                return {
                  title: this.$t('MODAL_SPLASH_SCHEDULING_TITLE'),
                  description: this.$t('MODAL_SPLASH_SCHEDULING_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_SCHEDULING_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'autopilot':
                return {
                  title: this.$t('MODAL_SPLASH_AUTOPILOT_TITLE'),
                  description: this.$t('MODAL_SPLASH_AUTOPILOT_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_AUTOPILOT_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'followup':
                return {
                  title: this.$t('MODAL_SPLASH_FOLLOWUP_TITLE'),
                  description: this.$t('MODAL_SPLASH_FOLLOWUP_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_FOLLOWUP_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'followup-waitinglist':
                return {
                  title: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_TITLE'),
                  description: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'followup-early':
                return {
                  title: this.$t('MODAL_SPLASH_FOLLOWUP_EARLY_TITLE'),
                  description: this.$t('MODAL_SPLASH_FOLLOWUP_EARLY_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'tracking':
                return {
                  title: this.$t('MODAL_SPLASH_TRACKING_TITLE'),
                  description: this.$t('MODAL_SPLASH_TRACKING_DESCRIPTION'),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_TRACKING_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
              case 'upgrade':
              default:
                return {
                  title: this.$t('MODAL_SPLASH_UPGRADE_TITLE'),
                  description: this.$t('MODAL_SPLASH_UPGRADE_DESCRIPTION', { n: e }),
                  primary: { text: this.$t('MODAL_SPLASH_PRIMARY_TEXT'), url: this.$t('MODAL_SPLASH_UPGRADE_PRIMARY_LINK') },
                  secondary: this.$t('MODAL_SPLASH_SECONDARY_TEXT'),
                };
            }
          },
        }),
        methods: {
          close: function () {
            this.$store.dispatch('closeSplashScreen');
          },
          goToAction: function (e) {
            var t = this.fromtheme,
              a = t[e] && t[e],
              i = a && 'string' !== typeof a && a.action;
            this.close(), 'string' === typeof i && ':close' !== i && this.$store.dispatch('setLocation', i);
          },
        },
      }),
      Ui = wi,
      yi = (a('ebf4'), Object(S['a'])(Ui, Pi, bi, !1, null, '477ba405', null)),
      Hi = yi.exports,
      ki = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return !0 === e.active
          ? a('div', { staticClass: 'addon-butterbar-container' }, [
              a('div', { staticClass: 'addon-butterbar-wrap' }, [
                a('div', { staticClass: 'addon-butterbar addon-butterbar-error' }, [
                  a('span', { staticClass: 'addon-butterbar-text' }, [
                    a('span', { domProps: { innerHTML: e._s(e.message) } }),
                    e.link
                      ? a(
                          'a',
                          { staticClass: 'addon-link', staticStyle: { 'margin-left': '4px', display: 'inline-block' }, attrs: { href: e.link, target: '_blank', rel: 'noopener' } },
                          [e._v(e._s(e.$t('LEARN_MORE')))]
                        )
                      : e._e(),
                  ]),
                  a('span', {
                    staticClass: 'addon-butterbar-dismiss',
                    attrs: { role: 'button' },
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.close();
                      },
                    },
                  }),
                ]),
              ]),
            ])
          : e._e();
      },
      Bi = [],
      Gi = n['a'].extend({
        computed: {
          active: function () {
            return this.$store.state.butterbar.active;
          },
          theme: function () {
            return this.$store.state.butterbar.message;
          },
          message: function () {
            var e = this.$store.state.butterbar.message;
            return (e = 'ERROR_' === e.substr(0, 6) ? String(this.$i18n.t(e)) : ''), e || String(this.$i18n.t('ERROR_UNHANDLED'));
          },
          link: function () {
            var e = this.$store.state.butterbar.link;
            return e ? 'ERROR_' === e.substr(0, 6) && (e = String(this.$i18n.t(e))) : (e = 'https://support.mailmeteor.com/help/troubleshooting'), e;
          },
        },
        methods: {
          close: function () {
            this.$store.dispatch('closeButterbar');
          },
        },
      }),
      Fi = Gi,
      $i = Object(S['a'])(Fi, ki, Bi, !1, null, null, null),
      Wi = $i.exports,
      xi = n['a'].extend({
        name: 'mailmeteor',
        components: { AppRouter: Ri, ModalSplashScreen: Hi, ModalButterBar: Wi },
        data: function () {
          return { unloaded: !1 };
        },
        computed: Object(d['__assign'])(Object(d['__assign'])({}, Object(_['c'])(['user', 'ready', 'mode', 'location'])), {
          error: function () {
            var e = 0 === this.location.indexOf('/error');
            return e && this.removeLoadingScreen(), e;
          },
        }),
        methods: {
          removeLoadingScreen: function () {
            var e = document.getElementById('UILoader'),
              t = e && e.parentNode;
            e && t && t.removeChild(e), (this.unloaded = !0);
          },
        },
        watch: {
          ready: function () {
            var e = this.user,
              t = window._app && window._app.mode,
              a = this.$store,
              i = window._app && window._app.location;
            if (!this.error) {
              if ('sidebar' === t) (i = i || '/sidebar'), a.dispatch('setLocation', i);
              else {
                if (((i = e.installedAt ? i || '/' : '/onboarding'), e.blocked)) return void a.dispatch('setLocation', '/error/account-suspended');
                if ((a.dispatch('setLocation', i), e.premium)) a.dispatch('merge/setTracking', !0);
                else
                  try {
                    var s = Date.now(),
                      n = new Date('2021-11-27T07:59:00.000Z').getTime();
                    if (s < n) {
                      var o = window.localStorage && window.localStorage.getItem('MM_LAST_SPLASH_SCREEN'),
                        r = new Date(Number(o) || 0),
                        l = 6e4;
                      r.getTime() + 30 * l < Date.now() &&
                        (a.dispatch('showSplashScreen', 'blackfriday'), window.localStorage.setItem('MM_LAST_SPLASH_SCREEN', String(Date.now())));
                    } else if (e.mergesCounter > 0) {
                      (l = 6e4), (o = window.localStorage && window.localStorage.getItem('MM_LAST_SPLASH_SCREEN')), (r = new Date(Number(o) || Date.now()));
                      var c = Math.abs(Date.now() - r.getTime()) > 20 * l;
                      if (!o || c) {
                        var d = ['discount'];
                        e.quota.limit < 150 && d.push('add-review');
                        var _ = e.domain.split('.').includes('edu');
                        (_ = _ || e.domain.includes('university')),
                          (_ = _ || e.domain.includes('school')),
                          (_ = _ || e.domain.includes('college')),
                          (_ = _ || e.domain.includes('colegio')),
                          (_ = _ || e.domain.includes('.ac.')),
                          _ && d.push('edu'),
                          1 === e.mergesCounter && e.quota.limit < 150
                            ? a.dispatch('showSplashScreen', 'add-review')
                            : a.dispatch('showSplashScreen', d[Math.floor(Math.random() * d.length)]),
                          window.localStorage.setItem('MM_LAST_SPLASH_SCREEN', String(Date.now()));
                      }
                    }
                  } catch (O) {}
              }
              if ((this.removeLoadingScreen(), 'modal' === this.mode)) {
                var u = document.body,
                  m = document.createElement('script');
                (m.defer = !0), (m.src = 'https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.6.20/dist/editor/editor.min.js');
                var A = document.createElement('link');
                (A.href = 'https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.6.20/dist/editor/style.min.css'), (A.rel = 'stylesheet'), u.appendChild(m), u.appendChild(A);
              }
              if (
                (window.setTimeout(function () {
                  window._gtag('event', 'addon_cd_event', { cd1: e.premium ? 'paid' : 'free' });
                }, 2e3),
                window.telemetry.identify(e.uid),
                window.telemetry.profile({ $email: e.email, Plan: e.premium ? 'Premium' : 'Free', Quota: e.quota.limit }),
                window.bugsnagClient && (window.bugsnagClient.user = { email: e.email }),
                window && window._app && window._app.loadTime)
              ) {
                var p = window._app.loadTime,
                  h = Date.now(),
                  E = h - p;
                window.telemetry.track('Load time', { time: E });
              }
            }
          },
        },
      }),
      Vi = xi,
      ji = (a('034f'), Object(S['a'])(Vi, l, c, !1, null, null, null)),
      Yi = ji.exports,
      zi =
        (a('ea7b'),
        {
          isLogged: !1,
          uid: '',
          cid: '',
          name: '',
          email: '',
          domain: '',
          installationSource: '',
          createdAt: '',
          installedAt: '',
          mergesCounter: 0,
          quota: { limit: 75, available: 75, usage: 0, refreshDate: '' },
          notificationsUnread: !1,
          blocked: !1,
          premium: !1,
          plan: 'free',
          aliases: [],
        }),
      qi = {
        initialize: function (e) {
          var t = window && window._app && window._app.data && window._app.data.user;
          t
            ? window.setTimeout(function () {
                e.dispatch('onDataFetched', t);
              }, 10)
            : window.setTimeout(function () {
                e.dispatch('initialize');
              }, 150);
        },
        onDataFetched: function (e, t) {
          e.commit('set', t),
            e.dispatch('signin', t.token),
            e.dispatch('onChange'),
            e.dispatch('ready', 'user', { root: !0 }),
            window && window._app && window._app.$vm && window._app.$vm.setLanguage(t.language);
        },
        onChange: function (e) {
          r.a.auth().onAuthStateChanged(function (t) {
            t ||
              (e.state.isLogged &&
                (e.dispatch('logged', !1),
                e.dispatch('showButterbar', { message: 'ERROR_AUTHENTICATION_LOGGED_OUT', link: 'ERROR_AUTHENTICATION_LOGGED_OUT_LINK' }, { root: !0 }),
                window._logger(new Error('User has been logged out.'))));
          });
        },
        logged: function (e, t) {
          t && e.dispatch('onUserLogged', null, { root: !0 }), e.commit('logged', t);
        },
        signin: function (e, t) {
          if (!t)
            return (
              e.dispatch('logged', !1),
              e.dispatch('showButterbar', { message: 'ERROR_AUTHENTICATION_FAILED', link: 'ERROR_AUTHENTICATION_FAILED_LINK' }, { root: !0 }),
              void window._logger(new Error('Unable to sign user in. No token has been provided.'))
            );
          r.a
            .auth()
            .signInWithCustomToken(t)
            .then(function () {
              e.dispatch('logged', !0);
            })
            ['catch'](function (t) {
              e.dispatch('logged', !1),
                e.dispatch('showButterbar', { message: 'ERROR_AUTHENTICATION_FAILED', link: 'ERROR_AUTHENTICATION_FAILED_LINK' }, { root: !0 }),
                window._logger(t);
            });
        },
        signout: function () {
          r.a.auth().signOut();
        },
      },
      Ki = {
        set: function (e, t) {
          (e.uid = t.uid),
            (e.cid = t.uid + '.' + Math.round(new Date().getTime() / 1e3)),
            (e.name = t.name),
            (e.email = t.email),
            (e.domain = t.domain),
            (e.premium = t.premium),
            (e.plan = t.plan),
            (e.mergesCounter = t.mergesCounter),
            (e.blocked = t.blocked),
            (e.installedAt = t.installedAt),
            (e.createdAt = t.createdAt),
            (e.notificationsUnread = t.notificationsUnread),
            (e.installationSource = t.installationSource),
            t.quota && t.quota.available < 0 && (t.quota.available = 0),
            n['a'].set(e, 'quota', t.quota),
            n['a'].set(e, 'aliases', t.aliases);
        },
        logged: function (e, t) {
          e.isLogged = t;
        },
      },
      Xi = { namespaced: !0, state: zi, actions: qi, mutations: Ki },
      Qi = {
        emailing: { column: -1, columnName: '', columnHeading: '', recipients: -1 },
        stats: { lastRow: void 0 },
        headers: [],
        rows: [],
        name: '',
        sheetId: '',
        spreadsheetId: '',
        activeSheet: '',
        isEmpty: !1,
        isFiltered: !1,
      },
      Ji = {
        initialize: function (e) {
          var t = window && window._app && window._app.data && window._app.data.sheet;
          t
            ? e.dispatch('onDataFetched', t)
            : window.setTimeout(function () {
                e.dispatch('initialize');
              }, 150);
        },
        onDataFetched: function (e, t) {
          e.commit('set', t), e.dispatch('updateRows', t.rows);
        },
        updateRows: function (e, t) {
          if (t)
            for (var a = 0, i = t.length; a < i; a++) {
              var s = t[a],
                n = s[0];
              n && e.commit('updateRow', { key: n.row, value: s });
            }
        },
      },
      Zi = {
        set: function (e, t) {
          (e.isEmpty = t.isEmpty),
            (e.isFiltered = t.isFiltered),
            (e.activeSheet = t.activeSheet),
            (e.sheetId = t.sheetId),
            (e.spreadsheetId = t.spreadsheetId),
            (e.name = t.name),
            n['a'].set(e, 'emailing', t.emailing),
            n['a'].set(e, 'stats', t.stats),
            n['a'].set(e, 'headers', t.headers);
        },
        updateRow: function (e, t) {
          n['a'].set(e.rows, t.key - 1, t.value);
        },
      },
      es = { namespaced: !0, state: Qi, actions: Ji, mutations: Zi },
      ts = (a('e439'), ''),
      as = 0;
    try {
      (ts = Intl.DateTimeFormat().resolvedOptions().timeZone || ''), (as = new Date().getTimezoneOffset());
    } catch (Ps) {}
    var is = {
        hasTracking: !1,
        hasUnsubscribe: !1,
        template: null,
        senderName: '',
        senderEmail: '',
        alias: null,
        options: { at: void 0, startAt: void 0, timezone: ts, timezoneoffset: as, throttle: void 0, dailycap: void 0, weekdays: void 0 },
        followups: void 0,
      },
      ss = {
        initialize: function (e, t) {
          e.commit('senderName', t.name), e.commit('senderEmail', t.email);
        },
        setTemplate: function (e, t) {
          e.commit('template', t);
        },
        unsetTemplate: function (e, t) {
          if (t) {
            var a = e.state.template;
            a && a.id === t.id && e.commit('template', null);
          } else e.commit('template', null);
        },
        setAlias: function (e, t) {
          e.commit('alias', t), e.commit('senderName', t.name), e.commit('senderEmail', t.email);
        },
        unsetAlias: function (e, t) {
          if (t) {
            var a = e.state.alias;
            a && a.name === t.name && a.email === t.email && e.commit('alias', null);
          } else e.commit('alias', null);
        },
        setTracking: function (e, t) {
          e.commit('hasTracking', t);
        },
        setUnsubscribe: function (e, t) {
          e.commit('hasUnsubscribe', t);
        },
        setSenderName: function (e, t) {
          e.commit('senderName', t), window._backend.sheetUISaveUserName(t);
        },
        setSenderEmail: function (e, t) {
          e.commit('senderEmail', t);
        },
        setOptions: function (e, t) {
          e.commit('setOptions', t);
        },
        setFollowups: function (e, t) {
          e.commit('setFollowups', t);
        },
      },
      ns = {
        template: function (e, t) {
          e.template = t;
        },
        alias: function (e, t) {
          e.alias = t;
        },
        hasTracking: function (e, t) {
          e.hasTracking = t;
        },
        hasUnsubscribe: function (e, t) {
          e.hasUnsubscribe = t;
        },
        senderName: function (e, t) {
          e.senderName = t;
        },
        senderEmail: function (e, t) {
          e.senderEmail = t;
        },
        setOptions: function (e, t) {
          var a = t.at,
            i = t.startAt,
            s = t.throttle,
            n = t.dailycap,
            o = t.weekdays;
          if (
            (Object.getOwnPropertyDescriptor(t, 'at') &&
              ((e.options.at = a instanceof Date ? a : void 0), Object.getOwnPropertyDescriptor(t, 'startAt') || (e.options.startAt = void 0)),
            Object.getOwnPropertyDescriptor(t, 'startAt') && (e.options.startAt = 'string' === typeof i ? i : void 0),
            Object.getOwnPropertyDescriptor(t, 'throttle') && (e.options.throttle = 'number' === typeof s ? s : void 0),
            Object.getOwnPropertyDescriptor(t, 'dailycap') && (e.options.dailycap = 'number' === typeof n ? n : void 0),
            Object.getOwnPropertyDescriptor(t, 'weekdays'))
          )
            if ('undefined' !== typeof o) {
              e.options.weekdays = {};
              for (var r = 1; r <= 7; r++) e.options.weekdays[r] = Object.assign({}, o[r] || {});
            } else e.options.weekdays = void 0;
        },
        setFollowups: function (e, t) {
          e.followups = t;
        },
      },
      os = {
        isTemplateFetched: function (e) {
          return e.template && 'string' === typeof e.template.plainBody;
        },
      },
      rs = { namespaced: !0, state: is, actions: ss, mutations: ns, getters: os },
      ls = [],
      cs = {
        initialize: function (e, t) {
          e.commit('localUpdateAll', t);
        },
        select: function (e, t) {
          e.dispatch('merge/setAlias', t, { root: !0 });
        },
        update: function (e, t) {
          e.commit('localUpdate', t), e.dispatch('saveAll');
        },
        saveAll: function () {
          for (var e = ls, t = [], a = 0, i = e.length; a < i; a++) {
            var s = e[a];
            s.email && s.name && t.push({ email: s.email, name: s.name });
          }
          window._backend.sheetUISaveAliases(t);
        },
        remove: function (e, t) {
          e.commit('localRemove', t), e.dispatch('saveAll'), e.dispatch('merge/unsetAlias', t, { root: !0 });
        },
      },
      ds = {
        localRemove: function (e, t) {
          for (var a = 0, i = e.length; a < i; a++) if (e[a].name === t.name && e[a].email === t.email) return void n['a'].delete(e, a);
        },
        localUpdate: function (e, t) {
          for (var a = 0, i = e.length; a < i; a++) if (e[a].name === t.oldAlias.name && e[a].email === t.oldAlias.email) return void n['a'].set(e, a, t.newAlias);
          e.push(t.newAlias);
        },
        localUpdateAll: function (e, t) {
          for (var a = 0, i = e.length; a < i; a++) n['a'].delete(e, a);
          for (a = 0, i = t.length; a < i; a++) n['a'].set(e, a, t[a]);
        },
      },
      _s = { namespaced: !0, state: ls, actions: cs, mutations: ds },
      us = (a('4e82'), a('4d63'), []),
      ms = {
        fetchAll: function (e) {
          var t = r.a.database().ref('/users/' + e.rootState.user.uid + '/templates/');
          t.on('child_added', function (t) {
            var a = t.val();
            e.commit('localAdd', { id: t.key, name: a.name, subject: a.subject, updatedAt: a.updatedAt, attachments: a.attachments, developerMode: a.developerMode });
          }),
            t.on('child_changed', function (t) {
              var a = t.val();
              e.commit('localUpdate', { id: t.key, name: a.name, subject: a.subject, updatedAt: a.updatedAt, attachments: a.attachments, developerMode: a.developerMode });
            });
        },
        create: function (e, t) {
          var a = r.a.database().ref('templates'),
            i = a.push();
          if (((t.id = i.key || ''), !t.id)) throw new Error('Unable to create template. ID has been auto-generated');
          e.dispatch('update', t);
        },
        update: function (e, t) {
          var a = {},
            i = e.rootState.user.uid;
          (t.updatedAt = Date.now()),
            (a['users/' + i + '/templates/' + t.id] = {
              subject: t.subject || '',
              updatedAt: t.updatedAt,
              attachments: t.attachments || null,
              developerMode: t.developerMode || null,
            }),
            (a['templates/' + t.id] = { body: t.htmlBody, owner: i });
          var s = r.a.database().ref();
          s.update(a), (t.plainBody = Ht(t.htmlBody)), e.commit('localUpdate', t), e.dispatch('select', t);
        },
        select: function (e, t) {
          e.dispatch('merge/setTemplate', t, { root: !0 }),
            e.dispatch('hasUnsubscribe', t),
            t &&
              t.id &&
              'undefined' === typeof t.htmlBody &&
              e.dispatch('fetch', t).then(function (t) {
                e.dispatch('hasUnsubscribe', t), e.dispatch('merge/setTemplate', t, { root: !0 });
              });
        },
        fetch: function (e, t) {
          if (!t || !t.id) throw new Error('Could not fetch template. Missing template ID.');
          return new Promise(function (a, i) {
            r.a
              .database()
              .ref('templates/' + t.id)
              .once('value', function (s) {
                var n = s.val();
                return n ? ((t.htmlBody = n.body || ''), (t.plainBody = Ht(t.htmlBody)), e.commit('localUpdate', t), a(t)) : i(new Error('Template has no value'));
              })
              ['catch'](i);
          });
        },
        remove: function (e, t) {
          e.commit('localRemove', t);
          var a = r.a.database(),
            i = a.ref('users/' + e.rootState.user.uid + '/templates/' + t.id);
          i.set(null, function (e) {
            e || a.ref('templates/' + t.id).set(null);
          }),
            e.dispatch('merge/unsetTemplate', t, { root: !0 });
        },
        edit: function (e, t) {
          e.dispatch('select', t), e.dispatch('setLocation', '/templates/edit', { root: !0 });
        },
        hasUnsubscribe: function (e, t) {
          var a = new RegExp('https?://(www.)?mailmeteor.com/unsub?s?cribe/?', 'i'),
            i = (t && t.htmlBody && a.test(t.htmlBody)) || !1,
            s = new RegExp('{{ *unsubscribe *}}', 'i'),
            n = (t && t.htmlBody && s.test(t.htmlBody)) || !1;
          e.dispatch('merge/setUnsubscribe', i || n, { root: !0 });
        },
      },
      As = {
        localAdd: function (e, t) {
          var a = e;
          a.push(t),
            (e = a.sort(function (e, t) {
              return t.updatedAt - e.updatedAt;
            }));
        },
        localRemove: function (e, t) {
          for (var a = 0, i = e.length; a < i; a++)
            if (e[a].id == t.id) {
              n['a']['delete'](e, a);
              break;
            }
        },
        localUpdate: function (e, t) {
          for (var a = 0, i = e.length; a < i; a++)
            if (e[a].id === t.id) {
              n['a'].set(e[a], 'name', t.name),
                n['a'].set(e[a], 'subject', t.subject),
                n['a'].set(e[a], 'updatedAt', t.updatedAt),
                n['a'].set(e[a], 'attachments', t.attachments),
                n['a'].set(e[a], 'developerMode', t.developerMode),
                n['a'].set(e[a], 'htmlBody', t.htmlBody || void 0),
                n['a'].set(e[a], 'plainBody', t.plainBody || void 0);
              break;
            }
        },
      },
      ps = { namespaced: !0, state: us, actions: ms, mutations: As },
      hs = { ids: [], all: [] },
      Es = {
        initialize: function (e) {
          var t = window && window._app && window._app.data && window._app.data.campaigns;
          t
            ? e.dispatch('onDataFetched', t)
            : window.setTimeout(function () {
                e.dispatch('initialize');
              }, 150);
        },
        onDataFetched: function (e, t) {
          (e.state.ids = t), e.dispatch('fetchAll'), e.dispatch('ready', 'campaigns', { root: !0 });
        },
        fetchAll: function (e) {
          for (
            var t = r.a.database(),
              a = e.state.ids,
              i = function (i, s) {
                var n = a[i],
                  o = n.cid,
                  r = { id: n.column, name: n.columnName, heading: n.columnHeading },
                  l = t.ref('campaigns/' + o);
                l.once('value', function (t) {
                  var a = t.val();
                  if (a && a.metadata) {
                    var n = a.metadata || {},
                      l = a.metrics || {},
                      c = l.e || 0,
                      d = l.c || 0,
                      _ = l.u || 0,
                      u = l.o || 0;
                    u < d && (u = d);
                    var m = n.doNotTrack,
                      A = ('boolean' === typeof m ? !m : n.hasTracking) || !1,
                      p = n.hasUnsubscribe || !1,
                      h = {
                        id: n.id,
                        cid: o,
                        owner: n.owner,
                        name: n.name,
                        column: r.id,
                        columnName: r.name,
                        columnHeading: r.heading,
                        createdAt: n.createdAt || n.startedAt,
                        scheduledAt: n.scheduledAt || n.startAt,
                        hasTracking: A,
                        hasUnsubscribe: p,
                        status: n.status,
                        metrics: { emails: c, opens: u, unsubscribes: _, clicks: d },
                      };
                    e.commit('localUpdate', h), e.dispatch('listener', h), e.dispatch('events/listener', h, { root: !0 }), i + 1 === s && e.dispatch('setActive');
                  }
                });
              },
              s = 0,
              n = a.length;
            s < n;
            s++
          )
            i(s, n);
          window.setTimeout(function () {
            e.dispatch('setActive');
          }, 800);
        },
        listener: function (e, t) {
          var a = r.a.database(),
            i = a.ref('campaigns/' + t.cid + '/metrics');
          i.on('value', function (a) {
            var i = (a && a.val()) || {},
              s = i.e || 0,
              n = i.c || 0,
              o = i.u || 0,
              r = i.o || 0;
            r < n && (r = n), (t.metrics = { emails: s, opens: r, unsubscribes: o, clicks: n }), e.commit('localUpdate', t);
          });
        },
        setActive: function (e) {
          var t = e.state.all.length;
          t && e.dispatch('setActiveCampaign', e.state.all[t - 1], { root: !0 });
        },
      },
      Os = {
        localUpdate: function (e, t) {
          for (var a = e.all, i = 0, s = a.length; i < s; i++) if (a[i].cid === t.cid) return n['a'].set(e.all, i, t);
          a.push(t),
            (e.all = a.sort(function (e, t) {
              return t.column > e.column ? -1 : 1;
            }));
        },
      },
      Ts = { namespaced: !0, state: hs, actions: Es, mutations: Os },
      Ls = window._app && window._app.firebase_events[0],
      Is = r.a.initializeApp(Ls, 'event'),
      Ss = [],
      gs = {
        initialize: function (e) {
          e.dispatch('timer');
        },
        timer: function (e) {
          e.state.length && (window._backend.sheetUIUpdateSheetWithEvents(e.state), e.commit('clear')),
            window.setTimeout(function () {
              e.dispatch('timer');
            }, 2500);
        },
        listener: function (e, t) {
          t.hasTracking &&
            (r.a
              .database(Is)
              .ref('/events/open/' + t.cid)
              .on('child_added', function (a) {
                var i = 'EMAIL_OPENED',
                  s = a.val(),
                  n = s.p;
                if (!n) {
                  var o = !0;
                  for (var r in s) {
                    var l = s[r];
                    if (l && l.at && !l.bot) {
                      o = !1;
                      break;
                    }
                  }
                  if (o) return;
                }
                e.commit('stack', { cid: t.cid, column: t.column, eid: a.key, status: i });
              }),
            r.a
              .database(Is)
              .ref('/events/click/' + t.cid)
              .on('child_added', function (a) {
                var i = 'EMAIL_CLICKED';
                e.commit('stack', { cid: t.cid, column: t.column, eid: a.key, status: i });
              })),
            t.hasUnsubscribe &&
              r.a
                .database(Is)
                .ref('/events/unsubscribe/' + t.cid)
                .on('child_added', function (a) {
                  var i = 'UNSUBSCRIBED';
                  e.commit('stack', { cid: t.cid, column: t.column, eid: a.key, status: i });
                });
        },
      },
      Ds = {
        stack: function (e, t) {
          t.eid && e.push(t);
        },
        clear: function (e) {
          while (e.length > 0) e.pop();
        },
      },
      Ms = { namespaced: !0, state: Ss, actions: gs, mutations: Ds };
    n['a'].use(_['a']);
    var vs = new _['a'].Store({
        modules: { user: Xi, sheet: es, merge: rs, aliases: _s, templates: ps, campaigns: Ts, events: Ms },
        state: {
          user: Xi.state,
          templates: ps.state,
          merge: rs.state,
          sheet: es.state,
          aliases: _s.state,
          campaigns: Ts.state,
          location: '',
          navigation: [],
          splash: { active: !1, theme: 'upgrade' },
          butterbar: { active: !1, theme: 'error', message: '', link: '' },
          mode: (window._app && window._app.mode) || 'modal',
          ready: !1,
          loaded: {},
          activeCampaign: null,
        },
        getters: {
          getActiveTemplate: function (e) {
            var t = e.merge.template,
              a = e.templates;
            if (t) for (var i = 0, s = a.length, n = t.id; i < s; i++) if (a[i].id === n) return a[i];
          },
        },
        actions: {
          setLocation: function (e, t) {
            if (':back' === t) {
              e.state.navigation.pop();
              var a = e.state.navigation.pop();
              t = a || '/';
            } else if (':back(2)' === t) {
              e.state.navigation.pop(), e.state.navigation.pop();
              a = e.state.navigation.pop();
              t = a || '/';
            }
            e.state.navigation.push(t), (e.state.location = t);
          },
          showSplashScreen: function (e, t) {
            (e.state.splash.active = !0),
              (e.state.splash.theme = t),
              e.state.user.cid && window._gtag('config', 'UA-136395985-1', { page_path: '/splash/' + t, client_id: e.state.user.cid, client_storage: 'none' });
          },
          closeSplashScreen: function (e) {
            e.state.splash.active = !1;
          },
          showButterbar: function (e, t) {
            (e.state.butterbar.active = !0),
              'string' === typeof t
                ? ((e.state.butterbar.theme = 'error'), (e.state.butterbar.message = t), (e.state.butterbar.link = ''))
                : t && ((e.state.butterbar.link = t.link), (e.state.butterbar.theme = t.theme || 'error'), (e.state.butterbar.message = t.message));
          },
          closeButterbar: function (e) {
            (e.state.butterbar.active = !1), (e.state.butterbar.message = ''), (e.state.butterbar.link = ''), (e.state.butterbar.theme = 'error');
          },
          ready: function (e, t) {
            e.commit('loaded', t);
            for (var a = window._app && window._app.mode, i = e.state.loaded, s = 'sidebar' === a ? ['user', 'campaigns'] : ['user'], n = 0, o = 0, r = s.length; o < r; o++) {
              var l = i[s[o]];
              l && n++;
            }
            n === s.length &&
              window.setTimeout(function () {
                e.commit('ready');
              }, 100);
          },
          onUserLogged: function (e) {
            if ('sidebar' === e.state.mode) e.dispatch('campaigns/initialize'), e.dispatch('events/initialize');
            else if ('modal' === e.state.mode) {
              var t = e.state.user;
              e.dispatch('templates/fetchAll'), e.dispatch('aliases/initialize', (t && t.aliases) || []), e.dispatch('merge/initialize', t);
            }
          },
          setUserNotificationStatus: function (e, t) {
            t || window._backend.sheetUIMarkNotificationsAsRead(), (e.state.user.notificationsUnread = t);
          },
          setActiveCampaign: function (e, t) {
            e.state.activeCampaign = t;
          },
        },
        mutations: {
          ready: function (e) {
            e.ready = !0;
          },
          loaded: function (e, t) {
            e.loaded[t] = !0;
          },
        },
      }),
      fs = (a('ddb0'), a('a925'));
    function Ns() {
      var e = a('49f8'),
        t = {};
      return (
        e.keys().forEach(function (a) {
          var i = a.match(/([A-Za-z0-9-_]+)\./i);
          if (i && i.length > 1) {
            var s = i[1];
            t[s] = e(a);
          }
        }),
        t
      );
    }
    n['a'].use(fs['a']);
    var Cs = new fs['a']({ locale: 'en', fallbackLocale: 'en', messages: Ns() }),
      Rs = new n['a']({
        store: vs,
        i18n: Cs,
        created: function () {
          r.a.initializeApp(window._app && window._app.firebase);
          var e = this.$store,
            t = window._app && window._app.mode;
          e.dispatch('user/initialize'), 'modal' === t && e.dispatch('sheet/initialize');
        },
        methods: {
          errorBackendHandler: function (e) {
            var t = (e && e.message) || '',
              a = '';
            if (
              ('ScriptError: ' === t.substr(0, 13)
                ? (t = t.substr(13))
                : 'Error: ' === t.substr(0, 7)
                ? (t = t.substr(7))
                : 'Exception: ' === t.substr(0, 11) && (t = t.substr(11)),
              this.isAnAuthenticationError(t))
            )
              this.$store.dispatch('setLocation', '/error/switch-account');
            else {
              if (t.indexOf('.cloudfunctions.net') > 1) (t = 'ERROR_FIREBASE_FAILED'), (a = 'ERROR_FIREBASE_FAILED_LINK');
              else if (t.indexOf('User activity is suspicious') > -1) return void this.$store.dispatch('setLocation', '/error/account-suspended');
              this.$store.dispatch('showButterbar', { message: t, link: a }), window._logger(e);
            }
          },
          isAnAuthenticationError: function (e) {
            for (
              var t = [
                  'Authorization is required to perform that action',
                  'Authorisation is required to perform that action',
                  'এই ক্রিয়াটি সম্পাদনা করার জন্য অনুমোদন প্রয়োজন',
                  'Для виконання цієї дії потрібно здійснити авторизацію',
                  'Perlu otorisasi untuk melakukan tindakan itu',
                  'Se necesita autorización para realizar esta acción',
                  'Se requiere autorización para realizar esa acción',
                  'Cal tenir autorització per efectuar aquesta acció.',
                  'Este necesară autorizarea pentru a efectua acțiunea respectivă.',
                  'autorização para efetuar',
                  'autorização para executar',
                  'Kailangan ng awtorisasyon upang maisagawa ang aksyon na iyan.',
                  'A művelet végrehajtásához engedély szükséges.',
                  'Da biste izvršili tu akciju, potrebna je autorizacija.',
                  'वह कार्यवाही करने के लिए अधिकार की आवश्यकता है.',
                  'ती क्रिया करण्यासाठी अधिकृतता आवश्यक आहे.',
                  'এই ক্রিয়াটি সম্পাদনা করার জন্য অনুমোদন প্রয়োজন৷',
                  'Godkännande krävs för att utföra denna åtgärd.',
                  'Do wykonania tej czynności wymagana jest autoryzacja.',
                  'Vous devez disposer des autorisations requises pour pouvoir effectuer cette action.',
                  'Autorisation requise pour exécuter cette action. Exécutez à nouveau le script pour autoriser cette action.',
                  'Für die Ausführung dieser Aktion ist eine Berechtigung erforderlich.',
                  'K provedení dané akce je vyžadována autorizace.',
                  'Perlu otorisasi untuk melakukan tindakan itu.',
                  'За да извършите това действие, ви е необходимо разрешение.',
                  'その操作を実行するには承認が必要です。',
                  'அந்தச் செயலைச் செய்ய அங்கீகரிப்பு தேவைப்படுகிறது.',
                  'Для виконання цієї дії потрібно здійснити авторизацію.',
                  'Для выполнения этого действия необходима авторизация.',
                  'Autorisation er påkrævet',
                  "richiesta l'autorizzazione",
                  'toestemming nodig',
                  'Bu eylemi gerçekleştirmek için yetki gerekiyor',
                  '需要授權才能執行此動作。',
                  'נדרשת הרשאה לביצוע הפעולה.',
                  'Toiminnon tekemiseen vaaditaan lupa.',
                  'Cần được cho phép để thực hiện',
                  'Cần được cho phép để thực hiện hành động đó.',
                  'ต้องมีการตรวจสอบสิทธิ์เพื่อที่จะดำเนินการนั้น',
                  '작업을 수행하려면 인증이 필요합니다',
                  'You do not have permission to access the requested document',
                  "Vous n'êtes pas autorisé à accéder au document demandé",
                  'Bạn không có quyền truy cập vào tài liệu yêu cầu',
                  'Anda tidak memiliki izin untuk mengakses dokumen yang diminta',
                  "Non disponi dell'autorizzazione necessaria per accedere al documento richiesto",
                  'No tienes permiso para acceder al documento solicitado',
                  'Sie sind nicht berechtigt, auf das gewünschte Dokument zuzugreifen',
                  'Nie masz uprawnień dostępu do tego dokumentu',
                  'Du har ikke adgang til det ønskede dokument',
                  'Je hebt geen rechten om het gevraagde document te openen',
                  'No cuentas con el permiso necesario para acceder al documento solicitado',
                  'Não tem autorização para aceder ao documento pedido',
                  'У вас нет разрешения на доступ к этому документу',
                  'ليس لديك إذن للدخول إلى المستند المطلوب',
                  'אין לך הרשאה לגשת למסמך המבוקש',
                  '您無權存取所要求的文件',
                  '您无权访问所请求的文档。',
                  'คุณไม่มีสิทธิ์เข้าถึงเอกสารที่ต้องก',
                  'Você não tem permissão para acessar o documento solicitado',
                  "We're sorry, a server error occurred while reading from storage",
                ],
                a = 0;
              a < t.length;
              a++
            )
              if (e.indexOf(t[a]) > -1) return !0;
            return !1;
          },
          setLanguage: function (e) {
            e && (this.$i18n.locale = e);
          },
        },
        render: function (e) {
          return e(Yi);
        },
      }).$mount('#app');
    window._app && (window._app.$vm = Rs);
  },
  d4f4: function (e, t, a) {
    'use strict';
    a('a953');
  },
  d89f: function (e, t, a) {},
  e994: function (e, t, a) {
    'use strict';
    a('218d');
  },
  ebf4: function (e, t, a) {
    'use strict';
    a('0e29');
  },
  edd4: function (e) {
    e.exports = JSON.parse(
      '{"MODAL_START_MAIL_MERGE":"Start a mail merge now","MODAL_OPEN_TRACKING_REPORT":"Open tracking report","MODAL_ONBOARDING_TEMPLATE_SUBJECT":"Mailmeteor first campaign","MODAL_ONBOARDING_TEMPLATE_HTMLBODY":"Hi {{firstname}},<br/><br/>It was great meeting you. We\'re thrilled you want to start using Mailmeteor.<br/><br/>Being able to send hundreds of personalized emails from Gmail is an amazing tool and we are confident it will help boost {{company}}\'s communications with clients.<br/><br/>Have a wonderful day.<br/>Mary","MODAL_ONBOARDING_WELCOME_INTRO":"Welcome aboard Mailmeteor.<br />Follow our quick guide to send your first campaign.","MODAL_ONBOARDING_WELCOME_BUTTON_CONTINUE":"Show me around","MODAL_ONBOARDING_WELCOME_BUTTON_SKIP":"Skip","MODAL_ONBOARDING_WELCOME_IMAGE":"Welcome to Mailmeteor","MODAL_ONBOARDING_VIDEO_INTRO":"This 1-minute video will show you how to get started with Mailmeteor.","MODAL_ONBOARDING_VIDEO_BUTTON_CONTINUE":"Send your first campaign","MODAL_ONBOARDING_VIDEO_BUTTON_SKIP":"Skip","MODAL_ONBOARDING_FIRST_CAMPAIGN_SETUP":"<strong>Almost done!</strong> Now let\'s send your first campaign with Mailmeteor. To help you get started, we have added a sheet with recipients named \\"Mailmeteor Demo\\" and a template email. To continue, select the template (\\"Mailmeteor first campaign\\") then click on \\"Send emails\\".","MODAL_FORM_TIP":"Sending from <strong>{userEmail}</strong> to recipients in <strong>column {columnHeading}</strong>.","MODAL_FORM_SENDER_LABEL":"Sender name","MODAL_FORM_SENDER_PLACEHOLDER":"This text will be the sender\'s name","MODAL_FORM_SELECT_TEMPLATES_LABEL":"Email template","MODAL_FORM_SELECT_TEMPLATES_OPTION":"Select a template...","MODAL_FORM_TEMPLATES_SUB_MANAGE":"Manage templates","MODAL_FORM_TEMPLATES_SUB_CREATE":"Create a new template","MODAL_FORM_TEMPLATES_CREATE":"Create a template to start sending emails","MODAL_FORM_QUOTA_AVAILABLE":"You can email <strong>{available}</strong> / {limit} recipients with Mailmeteor","MODAL_FORM_QUOTA_UPGRADE":"✨ UPGRADE","MODAL_FORM_SUMMARY_LABEL":"Summary","MODAL_FORM_SUMMARY_FAILURE":"Looks like your sheet is empty or has no email addresses. To start sending emails, add email contacts (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/mailmeteor-tutorial\\">tutorial</a>).","MODAL_FORM_OPTIONS_LABEL":"Options","MODAL_FORM_OPTIONS_MANAGE_ALIAS":"Send emails from an alias","MODAL_FORM_OPTIONS_TRACK_EMAILS":"Track emails opened and clicked","MODAL_COMPOSE_TIP":"Personalize your email, by using column titles in brackets - e.g. <span style=\\"color: black\\">{{ firstname }}</span>","MODAL_COMPOSE_PLACEHOLDER":"Type your message here...","MODAL_COMPOSE_SUBJECT":"Subject","MODAL_COMPOSE_HTML_HEADING":"Developer mode &lt;&#47;&gt;","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_HEADING":"Drop your file here","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_DESCRIPTION":"Each of your recipients will receive an email<br />with the selected file attached.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_HEADING":"Add attachments to your emails","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_DESCRIPTION":"Drag and drop a file to attach it to your emails<br />or learn how to <a target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/attachments#how-to-add-personalized-attachments\\">send individual attachments</a>.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_ACTION":"Choose files","MODAL_PREVIEW_ERROR_WITH_PARSING_HEADING":"Mail merge issue | Mail merge issue | Mail merge issues","MODAL_PREVIEW_ERROR_WITH_PARSING_INTRO":"We noticed something likely to be wrong with row #{rowNumber}:","MODAL_PREVIEW_ERROR_WITH_PARSING_OUTRO":"If this seems normal to you, you can send your emails right now. They will be sent exactly as they look in the preview. Otherwise, we invite you to review row #{rowNumber} in the sheet.","MODAL_PREVIEW_ERROR_WITH_PARSING_EMPTY_VARIABLE":"empty variable:","MODAL_PREVIEW_ERROR_WITH_PARSING_INVALID_EMAIL":"invalid email: {email}","MODAL_PREVIEW_ERROR_WITH_PARSING_MISSING_TO_RECIPIENT":"the main recipient is missing","MODAL_PREVIEW_METADATA_ENABLED":"enabled","MODAL_PREVIEW_METADATA_DISABLED":"disabled","MODAL_PREVIEW_METADATA_SUBJECT":"subject:","MODAL_PREVIEW_METADATA_FROM":"from:","MODAL_PREVIEW_METADATA_TO":"to:","MODAL_PREVIEW_METADATA_CC":"cc:","MODAL_PREVIEW_METADATA_BCC":"bcc:","MODAL_PREVIEW_METADATA_TRACKING":"tracking:","MODAL_PREVIEW_METADATA_UNSUBSCRIBE":"unsubscribe:","MODAL_PREVIEW_METADATA_ROW":"row number:","MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS":"Personalized attachment(s) 🧷","MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS_URL":"https://support.mailmeteor.com/introduction/advanced/attachments#how-to-add-personalized-attachments","MODAL_TEMPLATES_MANAGE_SUBJECT":"Email subject","MODAL_TEMPLATES_MANAGE_LAST_EDITED":"Last edited","MODAL_TEMPLATES_MANAGE_EDIT":"Edit template","MODAL_TEMPLATES_MANAGE_DELETE":"Delete template","MODAL_TEMPLATES_MANAGE_CREATE":"Create a new template","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_TITLE":"No templates here","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_SUBTITLE":"Create a template to start sending emails.","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_IMAGE":"No templates","MODAL_ALIAS_EMAIL_HEADING":"Email address","MODAL_ALIAS_NAME_HEADING":"Sender name","MODAL_ALIAS_CREATE_NEW":"Add new alias","MODAL_ALIAS_SAVE_NEW":"Save new alias","MODAL_ALIAS_TOOLTIP_PRIMARY":"This is your primary email address","MODAL_ALIAS_TOOLTIP_ALIAS":"This is an alias","MODAL_ALIAS_TIP":"Send mail merge from your other email addresses (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/alias\\">learn more</a>).","MODAL_ALIAS_HELP":"<strong>How to use alias?</strong> Before using an email alias, you need to make sure that the alias is well configured in your Gmail settings. Learn more how to setup an alias, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/alias\\">read the guide</a>.","MODAL_LAUNCHPAD_READY_FOR_LIFT_OFF":"Ready for lift off?","MODAL_LAUNCHPAD_SUMMARY_SEND":"You\'re about to send {totalEmailsToSend} emails from {sender}.","MODAL_LAUNCHPAD_SUMMARY_SCHEDULE":"You\'re about to schedule {totalEmailsToSend} emails from {sender}.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED_WITH_AUTOPILOT":"Emails will be sent starting from {scheduledAt} using Autopilot.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED":"Emails will be sent starting from {scheduledAt}.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_WITH_AUTOPILOT":"Emails will be sent using Autopilot.","MODAL_LAUNCHPAD_SUMMARY_FOLLOWUP_ENABLED":"Recipients will receive automated follow-ups.","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SEND":"Send now","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SCHEDULE":"Schedule send","MODAL_SENDING_COUNTDOWN":"Meteor shower in {n} seconds.","MODAL_SENDING_PROGRESS":"Mails sent: {n}/{total}","MODAL_SENDING_ALMOST_COMPLETE":"It\'s almost done 🚀 Please don\'t close this window...","MODAL_SENT_SUCCESS":"All emails have been sent.","MODAL_SENT_SCHEDULED":"Your emails have being scheduled. You can close this window.<br />Your spreadsheet will be updated as emails are sent.","MODAL_SENT_BACKGROUND":"Your emails are being sent in the background. You can close this window.<br />Your spreadsheet will be updated gradually as emails are sent.","MODAL_SENT_VIEW_EMAILS":"View sent emails","MODAL_SENT_OPEN_DASHBOARD":"Open dashboard","MODAL_SENT_SCHEDULING_ELI5":"How scheduling works","MODAL_BUTTON_SEND_EMAILS":"Send emails","MODAL_BUTTON_SEND_EMAILS_TOOLTIP":"Ready to launch?","MODAL_BUTTON_SCHEDULE_SEND":"Schedule send","MODAL_BUTTON_FOLLOW_UP":"Follow-up","MODAL_BUTTON_AUTOPILOT":"Autopilot","MODAL_BUTTON_TEST_EMAIL":"Receive a test email","MODAL_BUTTON_PREVIEW_EMAILS":"Preview email | Preview email | Preview emails","MODAL_BUTTON_SAVE_TEMPLATE":"Save template","MODAL_BUTTON_GO_BACK":"Back","MODAL_BUTTON_MAIN_MENU":"Main menu","MODAL_BUTTON_CANCEL":"Cancel","MODAL_BUTTON_CLOSE":"Close","MODAL_BUTTON_RELOAD":"Reload","MODAL_BUTTON_GET_HELP":"Get help","MODAL_BUTTON_TRY_AGAIN":"Try again","MODAL_ICONS_SAVE":"Save","MODAL_ICONS_INFO":"Info","MODAL_ICONS_EDIT":"Edit","MODAL_ICONS_DELETE":"Delete","MODAL_SCHEDULING_TIP":"Pick date & time to schedule sending.","MODAL_SCHEDULING_PRIMARY_BUTTON":"Schedule send","MODAL_SCHEDULING_SECTION_DATE_LABEL":"Date","MODAL_SCHEDULING_SECTION_DATE_INVALID":"Invalid date","MODAL_SCHEDULING_SECTION_DATETIME_LABEL":"Time","MODAL_SCHEDULING_SECTION_DATETIME_INVALID":"Invalid time","MODAL_SCHEDULING_SECTION_OPTIONS_LABEL":"Options","MODAL_SCHEDULING_SECTION_OPTIONS_WORKING_TIME":"Working days / time only","MODAL_SCHEDULING_SECTION_OPTIONS_DAILY_CAP":"Max emails sent per day","MODAL_SCHEDULING_SECTION_SUMMARY_LABEL":"Summary","MODAL_SCHEDULING_SECTION_SUMMARY_TEXT":"Scheduling {totalEmailsToSend} emails to be sent from <strong>{senderEmail}</strong> starting from <strong>{startDate}</strong>.","MODAL_SCHEDULING_SECTION_SUMMARY_TIP":"Emails will be sent gradually starting from that date. It might take several minutes for all emails to be sent (<a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/scheduling\\" target=\\"_blank\\" rel=\\"noopener\\">learn more</a>).","MODAL_SCHEDULED_SUCCESS":"Your emails have been scheduled.","MODAL_AUTOPILOT_TIP":"Improve your deliverability with these sending options <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/autopilot\\" target=\\"_blank\\" rel=\\"noopener\\">(why it\'s important?)</a>.","MODAL_AUTOPILOT_TIMEZONE_TIP":"Based on your timezone","MODAL_AUTOPILOT_SECTION_CALENDAR_LABEL":"Send only on","MODAL_AUTOPILOT_SECTION_SENDING_RATE_LABEL":"Sending rate","MODAL_AUTOPILOT_SECTION_SENDING_RATE_DAILY_CAP":"Max emails per day:","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE":"Delay between emails:","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE_BASELINE":"seconds","MODAL_AUTOPILOT_SECTION_STARTING_DATE_LABEL":"Start sending from","MODAL_AUTOPILOT_SECTION_STARTING_DATE_RIGHT_NOW":"Right now","MODAL_AUTOPILOT_SECTION_STARTING_DATE_TOMORROW":"Tomorrow","MODAL_AUTOPILOT_SECTION_STARTING_DATE_WEDNESDAY":"Wednesday","MODAL_AUTOPILOT_SECTION_STARTING_DATE_NEXT_WEEK":"Next week","MODAL_AUTOPILOT_SECTION_SUMMARY_LABEL":"Summary","MODAL_AUTOPILOT_SECTION_SUMMARY_TEXT":"Scheduling {totalEmailsToSend} emails to be sent from <strong>{senderEmail}</strong>. With the current settings, all emails will be sent in about {timeToSendEmails}.","MODAL_AUTOPILOT_SECTION_SUMMARY_DEADLINE_EXCEEDED":"Autopilot can run up to 28 days only.","MODAL_AUTOPILOT_PRIMARY_BUTTON":"Send with Autopilot","MODAL_FOLLOWUP_TIP":"Get more replies by sending a follow-up email <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/\\" target=\\"_blank\\" rel=\\"noopener\\">(learn more)</a>.","MODAL_FOLLOWUP_SECTION_SEQUENCE_LABEL":"Sequence","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_NOW":"Send now","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_SCHEDULE":"Scheduled send","MODAL_FOLLOWUP_SECTION_SEQUENCE_NEW_STEP":"New step","MODAL_FOLLOWUP_SECTION_SEQUENCE_REMOVE_STEP":"Remove step","MODAL_FOLLOWUP_PRIMARY_BUTTON":"Send with a follow-up","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER":"after","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER_SEND":"send this email","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_ENTER":"Enter a message or","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_SELECT_TEMPLATE":"select a template","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_DAYS":"day | days","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_HOURS":"hour | hours","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_MINUTES":"minute | minutes","MODAL_SPLASH_PRIMARY_TEXT":"Upgrade now →","MODAL_SPLASH_SECONDARY_TEXT":"Not today","MODAL_SPLASH_ADD_REVIEW_TITLE":"Thank you!","MODAL_SPLASH_ADD_REVIEW_DESCRIPTION":"Looks like you\'re enjoying Mailmeteor! Want to send more emails? Leave us an awesome review and we double your quota for free (150 emails/day).","MODAL_SPLASH_ADD_REVIEW_PRIMARY_TEXT":"Double my quota","MODAL_SPLASH_ADD_REVIEW_PRIMARY_LINK":"https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301?utm_source=addon&utm_medium=splash&utm_campaign=add_review","MODAL_SPLASH_ADD_REVIEW_HINT":"After leaving a review, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"mailto:stars@mailmeteor.com\\">notify us at stars@mailmeteor.com</a>.","MODAL_SPLASH_ADD_REVIEW_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.1/dist/img/modals/splash-5stars.jpeg","MODAL_SPLASH_EDU_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.7.17/dist/img/modals/splash-education-program.jpg","MODAL_SPLASH_EDU_TITLE":"Member of a university or school?","MODAL_SPLASH_EDU_DESCRIPTION":"Enjoy Mailmeteor for free with our Education Program. Upgrade to 500 emails per day every member of the staff and students of your school, college or university.","MODAL_SPLASH_EDU_PRIMARY_TEXT":"Learn more →","MODAL_SPLASH_EDU_PRIMARY_LINK":"https://mailmeteor.com/education-program?utm_source=addon&utm_medium=splash&utm_campaign=edu","MODAL_SPLASH_ALIAS_TITLE":"Upgrade to send from an alias","MODAL_SPLASH_ALIAS_DESCRIPTION":"Send campaigns from another email address. Unlock this premium feature by upgrading to a paid plan.","MODAL_SPLASH_ALIAS_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=alias","MODAL_SPLASH_ATTACHMENT_TITLE":"Upgrade to add attachments","MODAL_SPLASH_ATTACHMENT_DESCRIPTION":"Add documents and files to your emails (up to 4MB). Unlock this premium feature by upgrading to a paid plan.","MODAL_SPLASH_ATTACHMENT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=attachment","MODAL_SPLASH_EDITHTML_TITLE":"Upgrade to access the \\"Developer Mode\\"","MODAL_SPLASH_EDITHTML_DESCRIPTION":"Design emails as you wish by editing the raw HTML. Unlock this premium feature by upgrading to a paid plan.","MODAL_SPLASH_EDITHTML_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=edithtml","MODAL_SPLASH_DISCOUNT_TITLE":"Upgrade now and get 20% OFF","MODAL_SPLASH_DISCOUNT_DESCRIPTION":"Get the most out of Mailmeteor with an exclusive deal. Up to {n} emails/day, schedule send at a later time, add attachments, send from an aliases and more.","MODAL_SPLASH_DISCOUNT_PRIMARY_TEXT":"Save 20% OFF now","MODAL_SPLASH_DISCOUNT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=discount&coupon=OFF20","MODAL_SPLASH_UPGRADE_TITLE":"Upgrade to Mailmeteor Premium","MODAL_SPLASH_UPGRADE_DESCRIPTION":"Get the most out of Mailmeteor. Up to {n} emails per day, attachments, send with an alias and more.","MODAL_SPLASH_UPGRADE_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=upgrade","MODAL_SPLASH_SCHEDULING_TITLE":"Upgrade to schedule your campaigns","MODAL_SPLASH_SCHEDULING_DESCRIPTION":"Send emails in one hour, tomorrow or even next week! Schedule your campaigns by upgrading to a paid plan.","MODAL_SPLASH_SCHEDULING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=scheduling","MODAL_SPLASH_AUTOPILOT_TITLE":"Upgrade to send with Autopilot","MODAL_SPLASH_AUTOPILOT_DESCRIPTION":"Put your campaign on autopilot and maximize your deliverability. Access advanced parameters such as daily limits and throttling by upgrading to a paid plan.","MODAL_SPLASH_AUTOPILOT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=autopilot","MODAL_SPLASH_TRACKING_TITLE":"Upgrade to track emails in real-time","MODAL_SPLASH_TRACKING_DESCRIPTION":"Track emails opened or clicked in real-time. Unlock this premium feature by upgrading to a paid plan.","MODAL_SPLASH_TRACKING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=tracking","MODAL_SPLASH_HTMLEDITOR_TITLE":"Are you sure you want to leave developer mode?","MODAL_SPLASH_HTMLEDITOR_DESCRIPTION":"The HTML content of your template might be altered when using the WYSIWYG editor. There is no turning back.","MODAL_SPLASH_HTMLEDITOR_PRIMARY_LINK":"Yes, switch to WYSIWYG","MODAL_SPLASH_HTMLEDITOR_SECONDARY_TEXT":"Cancel","MODAL_SPLASH_WARNING_TITLE":"Heads up!","MODAL_SPLASH_WARNING_SHEET_EMPTY_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.14/dist/img/modals/splash-warning-sheet-empty.jpeg","MODAL_SPLASH_WARNING_SHEET_EMPTY_DESCRIPTION":"Looks like your sheet is empty or has no email contacts. To send emails, please fill your spreadsheet with email addresses in a column named <i>\\"email\\"</i>.","MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_TEXT":"Follow a tutorial","MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_LINK":"https://support.mailmeteor.com/introduction/quick-start/mailmeteor-tutorial","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_TITLE":"Oh snap! No more email quota","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_DESCRIPTION":"You have sent too many emails recently. Please wait till {quotaRenewalDate} to have your quota fully reset (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/email-quota\\">learn more</a>). Or upgrade your account to send emails right now.","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_TEXT":"Upgrade & send emails →","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=quota_exhausted","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.7.17/dist/img/modals/splash-warning-quota-insufficient.jpg","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_TITLE":"Heads up! Not enough email quota","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_DESCRIPTION":"Your spreadsheet contains more rows than your current emailing quota. You can still send the first {quotaAvailable} rows of your spreadsheet or <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=quota_insufficient\\">upgrade now and send all emails</a>.","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_PRIMARY_TEXT":"Preview the first {quotaAvailable} rows","MODAL_SPLASH_FOLLOWUP_TITLE":"Upgrade to send with follow-ups","MODAL_SPLASH_FOLLOWUP_DESCRIPTION":"Make sure you get replies by sending automated follow-up emails. Unlock this feature by upgrading to a Pro or Business plan.","MODAL_SPLASH_FOLLOWUP_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=followup","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_TITLE":"The follow-up feature is soon on orbit!","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_DESCRIPTION":"Join the waiting list to be amongst the first to send automated follow-up emails until you get a reply.","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_TEXT":"Join the waiting list","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_LINK":"https://forms.gle/EzAeZPHvm9SDazeEA","MODAL_SPLASH_FOLLOWUP_EARLY_TITLE":"Early to the party!","MODAL_SPLASH_FOLLOWUP_EARLY_DESCRIPTION":"Our new follow-up feature is still in BETA. Some features are not yet ready but will very soon be. Join the waiting list to make sure you get notified once everything is live.","MODAL_SPLASH_OAUTH_HEADING":"Allow Mailmeteor to send emails","MODAL_SPLASH_OAUTH_DESCRIPTION":"To continue, Mailmeteor needs the permission to send emails and access your spreadsheets while you are not using the application.","MODAL_SPLASH_OAUTH_PRIMARY_BUTTON":"Allow","MODAL_SPLASH_OAUTH_FAILURE":"Oops, it didn\'t work. Please try again","MODAL_DIALOG_TEMPLATES_HEADING":"Select template","MODAL_NOTIFICATIONS_HEADING":"Latest notifications from Mailmeteor","MODAL_NOTIFICATIONS_DOUBLEQUOTA_HEADING":"💯 Double your quota","MODAL_NOTIFICATIONS_DOUBLEQUOTA_CONTENT":"Enjoying Mailmeteor? <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301\\">Leave us an awesome review</a> to increase your free email quota to 150 emails. Once reviewed, notify us at <a class=\\"addon-link\\" href=\\"mailto:stars@mailmeteor.com\\" target=\\"_blank\\">stars@mailmeteor.com</a> and get your quota increased shortly after.","MODAL_NOTIFICATIONS_UPGRADE_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=notifications","MODAL_NOTIFICATIONS_UPGRADE_HEADING":"✨ Unlock all features","MODAL_NOTIFICATIONS_UPGRADE_CONTENT":"Enjoying Mailmeteor? What about sending even more emails each day and having access to advanced features such as email scheduling, autopilot, aliases and more. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Discover all premium features &rarr;</a>","MODAL_NOTIFICATIONS_BLOGPOST_LINK":"https://mailmeteor.com/blog/mailmeteor-partners?utm_source=addon&utm_medium=notifications","MODAL_NOTIFICATIONS_BLOGPOST_HEADING":"🎉 Announcing Exclusive Partnerships","MODAL_NOTIFICATIONS_BLOGPOST_CONTENT":"We’re glad to announce a dozen of new partnerships with world’s leading software companies. From cleaning your contact list to warm up your account, there\'s a deal for you. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"{link}\\">Read on &rarr;</a>","MODAL_NOTIFICATIONS_EDU_LINK":"https://mailmeteor.com/education-program?utm_source=addon&utm_medium=notifications","MODAL_NOTIFICATIONS_EDU_HEADING":"🎓 Education program","MODAL_NOTIFICATIONS_EDU_CONTENT":"Member of a university, college or a school? Did you know you can enjoy Mailmeteor Premium for free. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Learn more about our Education Program</a>.","MODAL_NOTIFICATIONS_BLACKFRIDAY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=notifications&utm_campaign=blackfriday","MODAL_NOTIFICATIONS_BLACKFRIDAY_HEADING":"🔥 Black Friday Limited Offer","MODAL_NOTIFICATIONS_BLACKFRIDAY_CONTENT":"Now is your once-a-year chance to save up to 50% OFF on Mailmeteor plans. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Get your Black Friday discount before it\'s gone!</a> Offer ends on November 26th.","MODAL_ACCOUNT_TIP":"Manage your Mailmeteor account.","MODAL_ACCOUNT_SECTION_PRIMARY_EMAIL":"Email","MODAL_ACCOUNT_SECTION_QUOTA":"Available quota","MODAL_ACCOUNT_SECTION_QUOTA_LEARN_MORE":"Learn more about your emailing quota","MODAL_ACCOUNT_SECTION_BILLING_PLAN":"Plan","MODAL_ACCOUNT_SECTION_BILLING_MANAGE":"Manage your account","MODAL_ACCOUNT_SECTION_BILLING_RENEWAL":"Cancel","MODAL_ACCOUNT_SECTION_BILLING_CANCEL_BUTTON":"Cancel","MODAL_ACCOUNT_SECTION_LANGUAGE":"Language","MODAL_FOOTER_MENUITEMS_DASHBOARD":"Dashboard","MODAL_FOOTER_MENUITEMS_RELAUNCH_ONBOARDING":"Onboarding","MODAL_FOOTER_MENUITEMS_SHAREFEEDBACK":"Have a feedback?","MODAL_FOOTER_MENUITEMS_HELP":"Help","MODAL_FOOTER_MENUITEMS_YOUTUBE":"YouTube","MODAL_FOOTER_MENUITEMS_BLOG":"Blog","MODAL_FOOTER_SEND_WITH_AUTOPILOT_TIP":"Emails will be sent with Autopilot.","MODAL_FOOTER_SEND_WITH_SCHEDULING_TIP":"Sending will start on {scheduledAt}.","MODAL_FOOTER_SEND_WITH_FOLLOWUP_TIP":"Recipients will receive automated follow-ups emails.","SIDEBAR_SCHEDULING_TITLE_IDLE":"Scheduled campaign","SIDEBAR_SCHEDULING_SUBTITLE_BUSY":"started {date}","SIDEBAR_SCHEDULING_TOOLTIP_BUSY":"Sending hasn\'t finished yet","SIDEBAR_CAMPAIGN_SENT":"{n} emails sent","SIDEBAR_CAMPAIGN_SUBTITLE":"{date}","SIDEBAR_CAMPAIGN_CANCEL":"Stop sending","SIDEBAR_CAMPAIGN_COLUMN":"Column {columnHeading}","SIDEBAR_CAMPAIGN_TRACKING_OFF":"Tracking was disabled for this campaign. To track emails sent, start a new mail merge. It is not possible to enable tracking once the emails have been sent.","SIDEBAR_CAMPAIGN_TRACKING_OFF_UPGRADE":"Tracking is not enabled for this campaign. To track emails opened and clicked, unlock this feature by <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">upgrading to a paid plan</a>.","SIDEBAR_CAMPAIGN_TRACKING_ON_UPGRADE":"Tracking stats are available on premium plans only. To get access back to these stats, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">upgrade now</a>.","SIDEBAR_CAMPAIGN_HAS_FOLLOWUPS":"Stats includes all emails sent (including follow-ups). To get more metrics, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://dashboard.mailmeteor.com/campaigns/{campaignId}?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">open the dashboard</a>.","SIDEBAR_NAVIGATION_OVERVIEW":"No campaigns | {n} campaign | {n} campaigns","SIDEBAR_NAVIGATION_CAMPAIGN":"All campaigns","SIDEBAR_NAVIGATION_Settings":"Settings","SIDEBAR_OVERVIEW_HEADING":"Overview","SIDEBAR_OVERVIEW_TAB_OPENS":"Opens","SIDEBAR_OVERVIEW_TAB_CLICKS":"Clicks","SIDEBAR_OVERVIEW_METRICS_TIP":"Click on a column to see details","SIDEBAR_OVERVIEW_METRICS_TOTAL":"Total: {percent}","SIDEBAR_TIPS_1_HEADING":"Tracking report guide","SIDEBAR_TIPS_1_SUBHEADING":"Learn about how email tracking works","SIDEBAR_TIPS_2_HEADING":"Sending tips","SIDEBAR_TIPS_2_SUBHEADING":"A guide to increase your opening rate","SIDEBAR_MORE_START_MERGE":"Start a mail merge","SIDEBAR_MORE_OPEN_DASHBOARD":"View all campaigns","SIDEBAR_MORE_UPGRADE":"Upgrade","SIDEBAR_MORE_ACCOUNT":"My account","SIDEBAR_MORE_HELP":"Help","MAIL_EMPTY_SUBJECT":"(no subject)","MAIL_EVENTS_OPENS":"Opens","MAIL_EVENTS_OPENS_TOOLTIP":"Total emails opened","MAIL_EVENTS_CLICKS":"Clicks","MAIL_EVENTS_CLICKS_TOOLTIP":"Total emails clicked","MAIL_EVENTS_UNSUBSCRIBES":"Unsubscribes","MAIL_EVENTS_UNSUBSCRIBES_TOOLTIP":"Total unsubscribes","MAIL_EVENTS_COUNTER":"No events yet | {active} / {total} email | {active} / {total} emails","EDITOR_TOOLBAR_INSERT_VARIABLE":"Insert variable","PERCENT":"{x}%","FRACTION":"{a}/{b}","LOADING":"Loading...","LEARN_MORE":"Learn more","HELP":"Help","COMMON_EMAILS":"0 emails | 1 email | {n} emails","COMMON_TIME_DAYS":"0 days | 1 day | {n} days","COMMON_TIME_HOURS":"0 hours | 1 hour | {n} hours","COMMON_TIME_MINUTES":"0 minutes | 1 minute | {n} minutes","COMMON_TIME_SECONDS":"0 seconds | 1 second | {n} seconds","INFO_USER_IS_BLOCKED":"<strong>Sorry, you are temporarily blocked</strong>. Your activity on Mailmeteor has been reported as spam or misuse. If you think this is a mistake, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/help/contact-support\\">please contact us</a>.","ERROR_PREVIEW_UNKNOWN_TEMPLATE":"Unable to preview, because no template has been selected.","ERROR_PREVIEW_UNKNOWN_ROW":"Unable to preview. That row is empty or inaccessible.","ERROR_SHEET_HAS_NO_CAMPAIGN":"This sheet doesn\'t seem to be linked to a mail merge campaign.","ERROR_TEMPLATE_HAS_NO_SUBJECT":"Can\'t save. The subject is empty.","ERROR_TEMPLATE_IS_TOO_BIG":"Your template is too big. Try to reduce its size.","ERROR_FOLLOWUP_HAS_NO_BODY":"The follow-up has no content.","ERROR_FOLLOWUP_IS_TOO_BIG":"Your follow-up is too big. Try to reduce its size.","ERROR_LACKING_AUTHORIZATION":"We couldn\'t sign you in. Are you using multiple Google accounts?","ERROR_LACKING_AUTHORIZATION_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_FAILED":"We are having some difficulties to sign you in.","ERROR_AUTHENTICATION_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_LOGGED_OUT":"You\'ve been disconnected. Please close then re-open Mailmeteor.","ERROR_AUTHENTICATION_LOGGED_OUT_LINK":"https://support.mailmeteor.com/help/troubleshooting/disconnected","ERROR_FIREBASE_FAILED":"We\'re sorry, our servers experencied an error. Please try again.","ERROR_FIREBASE_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting","ERROR_UNHANDLED":"We\'re sorry, something went wrong. Please try again."}'
    );
  },
  f63b: function (e, t, a) {
    'use strict';
    a('81f4');
  },
  f693: function (e) {
    e.exports = JSON.parse(
      '{"MODAL_START_MAIL_MERGE":"Démarrer un nouveau publipostage","MODAL_OPEN_TRACKING_REPORT":"Ouvrir le rapport de suivi","MODAL_ONBOARDING_TEMPLATE_SUBJECT":"Ma première campagne Mailmeteor","MODAL_ONBOARDING_TEMPLATE_HTMLBODY":"Bonjour {{firstname}},<br/><br/>Je suis heureuse que nous ayons pu nous rencontrer et ravie que vous souhaitiez commencer à utiliser Mailmeteor.<br/><br/>Grâce à cet outil, il est possible d\'envoyer de nombreux courriels personnalisés directement depuis Gmail et nous sommes convaincus que cela aidera à stimuler la communication auprès de vos clients chez {{company}}.<br/><br/>Je te souhaite une excellente journée.<br/><br/>Mary","MODAL_ONBOARDING_WELCOME_INTRO":"Bienvenue à bord de Mailmeteor.<br />Suivez notre guide pour envoyer votre première campagne.","MODAL_ONBOARDING_WELCOME_BUTTON_CONTINUE":"Démarrons ensemble","MODAL_ONBOARDING_WELCOME_BUTTON_SKIP":"Passer","MODAL_ONBOARDING_WELCOME_IMAGE":"Bienvenue à bord de Mailmeteor","MODAL_ONBOARDING_VIDEO_INTRO":"Cette vidéo d\'une minute va vous montrer comment envoyer votre première campagne Mailmeteor.","MODAL_ONBOARDING_VIDEO_BUTTON_CONTINUE":"Envoyer votre première campagne","MODAL_ONBOARDING_VIDEO_BUTTON_SKIP":"Passer","MODAL_ONBOARDING_FIRST_CAMPAIGN_SETUP":"<strong>Vous y êtes presque!</strong> Maintenant, nous allons envoyer votre première campagne avec Mailmeteor. Pour vous donner un coup de pouce, nous avons ajouté une feuille de calcul dans votre document avec les bénéficiaires nommé \\"Mailmeteor Demo\\" ainsi qu\'un modèle de courriel. Pour continuer, sélectionnez le modèle (\\"Ma première campagne Mailmeteor\\"), puis cliquez sur \\"Envoyer les courriels\\".","MODAL_FORM_TIP":"Envoi depuis <strong>{userEmail}</strong> aux destinataires de la <strong>colonne {columnHeading}</strong>.","MODAL_FORM_SENDER_LABEL":"Nom de l\'expéditeur","MODAL_FORM_SENDER_PLACEHOLDER":"Ce texte sera le nom de l\'expéditeur","MODAL_FORM_SELECT_TEMPLATES_LABEL":"Modèle de courriel","MODAL_FORM_SELECT_TEMPLATES_OPTION":"Choisissez un modèle...","MODAL_FORM_TEMPLATES_SUB_MANAGE":"Gérer les modèles","MODAL_FORM_TEMPLATES_SUB_CREATE":"Créer un nouveau modèle","MODAL_FORM_TEMPLATES_CREATE":"Créer un modèle pour envoyer des courriels","MODAL_FORM_QUOTA_AVAILABLE":"Il vous reste <strong>{available}</strong> / {limit} courriels avec Mailmeteor","MODAL_FORM_QUOTA_UPGRADE":"✨ S\'ABONNER","MODAL_FORM_SUMMARY_LABEL":"Résumé","MODAL_FORM_SUMMARY_FAILURE":"Votre feuille de calcul semble ne pas contenir de contacts. Pour démarrer un envoi, veuillez remplir la feuille avec vos adresses courriels (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/mailmeteor-tutorial\\">tutoriel</a>).","MODAL_FORM_OPTIONS_LABEL":"Options","MODAL_FORM_OPTIONS_MANAGE_ALIAS":"Envoyer des courriels depuis un alias","MODAL_FORM_OPTIONS_TRACK_EMAILS":"Suivre les courriels envoyés et cliqués","MODAL_COMPOSE_TIP":"Personnalisez votre courriel, en utilisant des doubles accolades - par exemple <span style=\\"color: black\\">{{ Prénom }}</span>","MODAL_COMPOSE_PLACEHOLDER":"Ecrivez votre courriel ici...","MODAL_COMPOSE_SUBJECT":"Sujet","MODAL_COMPOSE_HTML_HEADING":"Mode développeur &lt;&#47;&gt;","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_HEADING":"Déposez votre fichier ici","MODAL_COMPOSE_ATTACHMENTS_DROP_OVERLAY_DESCRIPTION":"Chaque destinataire recevra un courriel<br />avec en pièce jointe le fichier sélectionné.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_HEADING":"Ajouter des pièces jointes à vos courriels","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_DESCRIPTION":"Déposez un fichier pour l\'ajouter en pièce jointe à vos courriels<br />ou découvrez comment <a target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/attachments#how-to-add-personalized-attachments\\">envoyer des pièces jointes personnalisées</a>.","MODAL_COMPOSE_ATTACHMENTS_OVERLAY_ACTION":"Choisir un fichier","MODAL_PREVIEW_ERROR_WITH_PARSING_HEADING":"Problème de publispotage | Problème de publispotage | Problèmes de publispotage","MODAL_PREVIEW_ERROR_WITH_PARSING_INTRO":"Nous avons remarqué que quelque chose ne va pas avec la ligne n° {rowNumber} :","MODAL_PREVIEW_ERROR_WITH_PARSING_OUTRO":"Si cela vous semble normal, vous pouvez envoyer vos emails sans inquiétudes. Ils seront envoyés exactement tels qu\'ils apparaissent dans l\'aperçu. Sinon, nous vous invitons à revoir la ligne n° {rowNumber} dans votre feuille de calcul.","MODAL_PREVIEW_ERROR_WITH_PARSING_EMPTY_VARIABLE":"variable vide:","MODAL_PREVIEW_ERROR_WITH_PARSING_INVALID_EMAIL":"courriel invalide: {email}","MODAL_PREVIEW_ERROR_WITH_PARSING_MISSING_TO_RECIPIENT":"le destinataire principal est manquant","MODAL_PREVIEW_METADATA_ENABLED":"activé","MODAL_PREVIEW_METADATA_DISABLED":"désactivé","MODAL_PREVIEW_METADATA_SUBJECT":"sujet:","MODAL_PREVIEW_METADATA_FROM":"de:","MODAL_PREVIEW_METADATA_TO":"à:","MODAL_PREVIEW_METADATA_CC":"cc:","MODAL_PREVIEW_METADATA_BCC":"bcc:","MODAL_PREVIEW_METADATA_TRACKING":"suivi:","MODAL_PREVIEW_METADATA_UNSUBSCRIBE":"désinscription:","MODAL_PREVIEW_METADATA_ROW":"numéro de ligne:","MODAL_PREVIEW_PERSONALIZED_ATTACHMENTS":"Pièces jointes personnalisées 🧷","MODAL_TEMPLATES_MANAGE_SUBJECT":"Sujet du courriel","MODAL_TEMPLATES_MANAGE_LAST_EDITED":"Dernière édition","MODAL_TEMPLATES_MANAGE_EDIT":"Modifier le modèle","MODAL_TEMPLATES_MANAGE_DELETE":"Supprimer le modèle","MODAL_TEMPLATES_MANAGE_CREATE":"Créer un nouveau modèle","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_TITLE":"Aucun modèle trouvé","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_SUBTITLE":"Créer un modèle pour démarrer l\'envoi de courriels","MODAL_TEMPLATES_MANAGE_EMPTY_STATE_IMAGE":"Aucun modèle","MODAL_ALIAS_EMAIL_HEADING":"E-mail","MODAL_ALIAS_NAME_HEADING":"Nom de l\'expéditeur","MODAL_ALIAS_CREATE_NEW":"Ajouter un nouvel alias","MODAL_ALIAS_SAVE_NEW":"Enregistrer un nouvel alias","MODAL_ALIAS_TOOLTIP_PRIMARY":"Ceci est votre adresse principale","MODAL_ALIAS_TOOLTIP_ALIAS":"Ceci est un alias","MODAL_ALIAS_TIP":"Envoyer des publipostages depuis vos différentes adresses.","MODAL_ALIAS_HELP":"<strong>Comment utiliser un alias?</strong> Avant d\'utiliser un alias, assurez-vous que l\'alias est bien configuré dans vos paramètres Gmail. Pour en savoir plus sur la manière de configurer un alias, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/advanced/alias\\">lisez le guide</a>.","MODAL_LAUNCHPAD_READY_FOR_LIFT_OFF":"Prêt pour le décollage?","MODAL_LAUNCHPAD_SUMMARY_SEND":"Vous allez envoyer {totalEmailsToSend} courriels depuis {sender}.","MODAL_LAUNCHPAD_SUMMARY_SCHEDULE":"Vous programmez {totalEmailsToSend} courriels à envoyer depuis {sender}.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED_WITH_AUTOPILOT":"Les courriels seront expédiés à partir du {scheduledAt} avec Autopilot.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_SCHEDULED":"Les courriels seront expédiés à partir du {scheduledAt}.","MODAL_LAUNCHPAD_SUMMARY_EMAILS_WITH_AUTOPILOT":"Les courriels seront expédiés avec Autopilot.","MODAL_LAUNCHPAD_SUMMARY_FOLLOWUP_ENABLED":"Les destinataires recevront des courriels de suivi.","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SEND":"Envoyer maintenant","MODAL_LAUNCHPAD_PRIMARY_BUTTON_SCHEDULE":"Programmer l\'envoi","MODAL_SENDING_COUNTDOWN":"Pluie de météores dans {n}.","MODAL_SENDING_PROGRESS":"E-mails envoyés: {n}/{total}","MODAL_SENDING_ALMOST_COMPLETE":"C\'est presque fini 🚀 Veuillez ne pas fermer cette fenêtre...","MODAL_SENT_SUCCESS":"Tous les courriels ont été envoyés.","MODAL_SENT_SCHEDULED":"Vos courriels sont planifiés. Vous pouvez fermer cette fenêtre.<br /> Votre feuille de calcul sera mise à jour, à mesure que vos courriels sont envoyés.","MODAL_SENT_BACKGROUND":"Vos courriels sont envoyés en arrière-plan. Vous pouvez fermer cette fenêtre.<br /> Votre feuille de calcul sera mise à jour, à mesure que vos courriels sont envoyés.","MODAL_SENT_VIEW_EMAILS":"Voir les courriels envoyés","MODAL_SENT_OPEN_DASHBOARD":"Ouvrir le dashboard","MODAL_SENT_SCHEDULING_ELI5":"En savoir plus sur la planification","MODAL_BUTTON_SEND_EMAILS":"Envoyer des courriels","MODAL_BUTTON_SEND_EMAILS_TOOLTIP":"Prêt pour le décollage?","MODAL_BUTTON_SCHEDULE_SEND":"Programmer l\'envoi","MODAL_BUTTON_AUTOPILOT":"Autopilot","MODAL_BUTTON_FOLLOW_UP":"E-mail de suivi","MODAL_BUTTON_TEST_EMAIL":"Recevoir un courriel de test","MODAL_BUTTON_PREVIEW_EMAILS":"Aperçu du courriel | Aperçu du courriel | Aperçu des courriels","MODAL_BUTTON_SAVE_TEMPLATE":"Enregistrer le modèle","MODAL_BUTTON_GO_BACK":"Retour","MODAL_BUTTON_MAIN_MENU":"Menu principal","MODAL_BUTTON_CANCEL":"Annuler","MODAL_BUTTON_CLOSE":"Fermer","MODAL_BUTTON_RELOAD":"Rafraîchir","MODAL_BUTTON_GET_HELP":"Aide","MODAL_BUTTON_TRY_AGAIN":"Réessayer","MODAL_ICONS_SAVE":"Sauvegarder","MODAL_ICONS_INFO":"Info","MODAL_ICONS_EDIT":"Éditer","MODAL_ICONS_DELETE":"Effacer","MODAL_SCHEDULING_TIP":"Choisissez la date et l\'heure de programmation d\'envoi.","MODAL_SCHEDULING_PRIMARY_BUTTON":"Programmer l\'envoi","MODAL_SCHEDULING_SECTION_DATE_LABEL":"Date","MODAL_SCHEDULING_SECTION_DATE_INVALID":"Date invalide","MODAL_SCHEDULING_SECTION_DATETIME_LABEL":"Temps","MODAL_SCHEDULING_SECTION_DATETIME_INVALID":"Heure non valide","MODAL_SCHEDULING_SECTION_OPTIONS_LABEL":"Options","MODAL_SCHEDULING_SECTION_OPTIONS_WORKING_TIME":"Jours ouvrables seulement","MODAL_SCHEDULING_SECTION_OPTIONS_DAILY_CAP":"Maximum de courriels envoyés par jour","MODAL_SCHEDULING_SECTION_SUMMARY_LABEL":"Résumé","MODAL_SCHEDULING_SECTION_SUMMARY_TEXT":"Planification de {totalEmailsToSend} courriels à envoyer depuis <strong>{senderEmail}</strong> à partir du <strong>{startDate}</strong>.","MODAL_SCHEDULING_SECTION_SUMMARY_TIP":"Les courriels seront envoyés progressivement à partir de cette date. Cela peut prendre plusieurs minutes pour que tous les courriels soient envoyés (<a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/scheduling\\" target=\\"_blank\\" rel=\\"noopener\\">en savoir plus</a>).","MODAL_SCHEDULED_SUCCESS":"Vos courriels ont été programmés.","MODAL_AUTOPILOT_TIP":"Améliorez votre délivrabilité avec ces options d\'envoi <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/introduction/advanced/autopilot\\" target=\\"_blank\\" rel=\\"noopener\\">(en savoir plus)</a>.","MODAL_AUTOPILOT_TIMEZONE_TIP":"En fonction de votre fuseau horaire","MODAL_AUTOPILOT_SECTION_CALENDAR_LABEL":"Envoyez seulement","MODAL_AUTOPILOT_SECTION_SENDING_RATE_LABEL":"Fréquence d\'envoi :","MODAL_AUTOPILOT_SECTION_SENDING_RATE_DAILY_CAP":"Maximum de courriels par jour :","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE":"Délai entre les courriels :","MODAL_AUTOPILOT_SECTION_SENDING_RATE_THROTTLE_BASELINE":"secondes","MODAL_AUTOPILOT_SECTION_STARTING_DATE_LABEL":"Commencer à envoyer à partir de","MODAL_AUTOPILOT_SECTION_STARTING_DATE_RIGHT_NOW":"Maintenant","MODAL_AUTOPILOT_SECTION_STARTING_DATE_TOMORROW":"Demain","MODAL_AUTOPILOT_SECTION_STARTING_DATE_WEDNESDAY":"Mercredi","MODAL_AUTOPILOT_SECTION_STARTING_DATE_NEXT_WEEK":"Semaine prochaine","MODAL_AUTOPILOT_SECTION_SUMMARY_LABEL":"Résumé","MODAL_AUTOPILOT_SECTION_SUMMARY_TEXT":"Programmation de {totalEmailsToSend} courriels à envoyer depuis <strong>{senderEmail}</strong>. Avec les options d\'envoi définis, tous les emails auront été expédiés dans environ {timeToSendEmails}.","MODAL_AUTOPILOT_SECTION_SUMMARY_DEADLINE_EXCEEDED":"Autopilot can run up to 28 days only.","MODAL_AUTOPILOT_PRIMARY_BUTTON":"Envoyer avec Autopilot","MODAL_FOLLOWUP_TIP":"Obtenez plus de réponses en envoyant un courriel de suivi <a class=\\"addon-link\\" href=\\"https://support.mailmeteor.com/\\" target=\\"_blank\\" rel=\\"noopener\\">(en savoir plus)</a>.","MODAL_FOLLOWUP_SECTION_SEQUENCE_LABEL":"Sequence","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_NOW":"Envoyer immédiatement","MODAL_FOLLOWUP_SECTION_SEQUENCE_STEP_SCHEDULE":"Envoie programmé","MODAL_FOLLOWUP_SECTION_SEQUENCE_NEW_STEP":"Nouvelle étape","MODAL_FOLLOWUP_SECTION_SEQUENCE_REMOVE_STEP":"Supprimer l\'étape","MODAL_FOLLOWUP_PRIMARY_BUTTON":"Envoyer avec suivi","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER":"après","MODAL_FOLLOWUP_EDITOR_TRIGGER_AFTER_SEND":"envoyer cet email","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_ENTER":"Entrez votre message ou","MODAL_FOLLOWUP_EDITOR_PLACEHOLDER_SELECT_TEMPLATE":"sélectionnez un modèle","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_DAYS":"jour | jours","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_HOURS":"heure | heures","MODAL_FOLLOWUP_TRIGGER_AFTER_PERIOD_MINUTES":"minute | minutes","MODAL_SPLASH_PRIMARY_TEXT":"Passer à la version premium →","MODAL_SPLASH_SECONDARY_TEXT":"Pas aujourd\'hui","MODAL_SPLASH_ADD_REVIEW_TITLE":"Merci beaucoup!","MODAL_SPLASH_ADD_REVIEW_DESCRIPTION":"On dirait que vous appréciez Mailmeteor! Souhaitez-vous envoyer davantage de courriels? Laissez-nous un super avis et doublez votre quota gratuitement.","MODAL_SPLASH_ADD_REVIEW_PRIMARY_TEXT":"Doublez mon quota","MODAL_SPLASH_ADD_REVIEW_PRIMARY_LINK":"https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301?utm_source=addon&utm_medium=splash&utm_campaign=add_review","MODAL_SPLASH_ADD_REVIEW_HINT":"Après avoir laissé un avis, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"mailto:stars@mailmeteor.com\\">prévenez-nous à stars@mailmeteor.com</a>.","MODAL_SPLASH_ADD_REVIEW_HERO":"https://cdn.jsdelivr.net/gh/frenchcooc/mailmeteor-landing@7.0.1/dist/img/modals/splash-5stars.jpeg","MODAL_SPLASH_EDU_TITLE":"Membre d\'une université ou d\'une école ?","MODAL_SPLASH_EDU_DESCRIPTION":"Profitez gratuitement de Mailmeteor avec notre programme éducatif. Passez à 500 e-mails par jour pour chaque membre du personnel et les étudiants de votre école, collège ou université.","MODAL_SPLASH_EDU_PRIMARY_TEXT":"En savoir plus →","MODAL_SPLASH_ALIAS_TITLE":"Envoyez depuis un alias avec la version premium","MODAL_SPLASH_ALIAS_DESCRIPTION":"Envoyer des campagnes depuis vos autres adresses d\'expédition. Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans payants.","MODAL_SPLASH_ALIAS_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=alias","MODAL_SPLASH_ATTACHMENT_TITLE":"Ajoutez des pièces jointes avec la version premium","MODAL_SPLASH_ATTACHMENT_DESCRIPTION":"Ajoutez des pièces jointes à vos courriels (jusqu\'à 4 Mo). Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans payants.","MODAL_SPLASH_ATTACHMENT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=attachment","MODAL_SPLASH_EDITHTML_TITLE":"Accéder au \\"Mode Développeur\\" avec la version premium","MODAL_SPLASH_EDITHTML_DESCRIPTION":"Utilisez vos propres modèles de courriels HTML. Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans payants.","MODAL_SPLASH_EDITHTML_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=edithtml","MODAL_SPLASH_DISCOUNT_TITLE":"Passez à premium maintenant et obtenez 20%","MODAL_SPLASH_DISCOUNT_DESCRIPTION":"Tirez le meilleur parti de Mailmeteor grâce à cette offre exclusive. Envoyez jusqu\'à {n} courriels / jour, programmez vos envois, ajoutez des pièces jointes, utilisez des alias et davantage encore.","MODAL_SPLASH_DISCOUNT_PRIMARY_TEXT":"20% de réduction maintenant","MODAL_SPLASH_DISCOUNT_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=discount&coupon=OFF20","MODAL_SPLASH_UPGRADE_TITLE":"Profitez de Mailmeteor Premium","MODAL_SPLASH_UPGRADE_DESCRIPTION":"Tirez le meilleur parti de Mailmeteor grâce à cette offre exclusive. Envoyez jusqu\'à {n} courriels / jour, programmez vos envois, ajoutez des pièces jointes, utilisez des alias et davantage encore.","MODAL_SPLASH_UPGRADE_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=upgrade","MODAL_SPLASH_SCHEDULING_TITLE":"Planifiez les envois avec la version premium","MODAL_SPLASH_SCHEDULING_DESCRIPTION":"Envoyer des courriels à la date et l\'heure de votre choix! Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans payants.","MODAL_SPLASH_SCHEDULING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=scheduling","MODAL_SPLASH_AUTOPILOT_TITLE":"Envoyez en mode Autopilot avec la version premium","MODAL_SPLASH_AUTOPILOT_DESCRIPTION":"Envoyez votre campagne en pilote automatique et maximisez votre délivrabilité. Accédez à des paramètres avancés tels que les limites quotidiennes en passant à un forfait payant.","MODAL_SPLASH_TRACKING_TITLE":"Suivez vos courriels en temps réel avec la version premium","MODAL_SPLASH_TRACKING_DESCRIPTION":"Suivez les ouvertures et les clics en temps réel. Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans payants.","MODAL_SPLASH_TRACKING_PRIMARY_LINK":"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=tracking","MODAL_SPLASH_HTMLEDITOR_TITLE":"Êtes-vous sûr de vouloir quitter le mode développeur?","MODAL_SPLASH_HTMLEDITOR_DESCRIPTION":"Le contenu HTML de votre courriel peut être affecté si vous modifiez le contenu du courriel dans l\'éditeur classique. Attention, les modifications apportés ne pourront pas être annulées.","MODAL_SPLASH_HTMLEDITOR_PRIMARY_LINK":"Oui, passer à l\'éditeur classique","MODAL_SPLASH_HTMLEDITOR_SECONDARY_TEXT":"Annuler","MODAL_SPLASH_WARNING_TITLE":"Aïe!","MODAL_SPLASH_WARNING_SHEET_EMPTY_DESCRIPTION":"Votre feuille de calcul semble ne pas contenir de contacts. Pour démarrer un envoi, veuillez remplir la feuille avec les adresses de vos destinataires dans une colonne intitulée <i>\\"email\\"</i>.","MODAL_SPLASH_WARNING_SHEET_EMPTY_PRIMARY_TEXT":"Voir le guide","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_TITLE":"Aïe! Plus de quota d\'emails","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_DESCRIPTION":"Vous avez épuisé votre quota de courriels. Merci d\'attendre jusque {quotaRenewalDate} afin de récupérer l\'ensemble de votre quota (<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/introduction/quick-start/email-quota\\">en savoir plus</a>). Ou passez à premium et envoyez vos emails dès maintenant.","MODAL_SPLASH_WARNING_QUOTA_EXHAUSTED_PRIMARY_TEXT":"Passer à la version premium →","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_TITLE":"Aïe! Pas assez de quota d\'emails","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_DESCRIPTION":"Votre liste contient plus de contacts que votre quota disponible. Vous pouvez toujours envoyer les {quotaAvailable} premières lignes ou <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=splash&utm_campaign=quota_insufficient\\">passer à premium et tout envoyer</a>.","MODAL_SPLASH_WARNING_QUOTA_INSUFFICIENT_PRIMARY_TEXT":"Previsualiser les {quotaAvailable} premières lignes","MODAL_SPLASH_FOLLOWUP_TITLE":"Envoyez des courriels de suivi avec la version premium","MODAL_SPLASH_FOLLOWUP_DESCRIPTION":"Obtenez plus de réponses en envoyant des courriels de suivi. Déverrouillez cette fonctionnalité premium en passant à l\'un de nos plans pro ou business.","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_TITLE":"Prochainement disponible","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_DESCRIPTION":"Rejoignez la liste d\'attente et soyez parmis les premiers à pouvoir programmer des séquences d\'envois, jusqu\'à ce que vos contacts répondent.","MODAL_SPLASH_FOLLOWUP_WAITINGLIST_PRIMARY_TEXT":"Rejoindre la liste d\'attente","MODAL_SPLASH_FOLLOWUP_EARLY_TITLE":"Vous arrivés un peu tôt!","MODAL_SPLASH_FOLLOWUP_EARLY_DESCRIPTION":"Notre nouvelle fonctionnalité de suivi est toujours en BETA. Certaines fonctionnalités ne sont pas encore prêtes mais le seront très bientôt. Inscrivez-vous sur la liste d\'attente pour vous assurer d\'être averti une fois que tout est en ligne.","MODAL_SPLASH_OAUTH_HEADING":"Autoriser Mailmeteor à envoyer vos courriels","MODAL_SPLASH_OAUTH_DESCRIPTION":"Pour continuer, Mailmeteor a besoin de votre permission d\'envoyer des emails et d\'accéder à vos feuilles de calcul lorsque vous n\'utilisez pas l\'application.","MODAL_SPLASH_OAUTH_PRIMARY_BUTTON":"Autoriser","MODAL_SPLASH_OAUTH_FAILURE":"Aïe, cela n\'a pas fonctionné. Essayez à nouveau","MODAL_DIALOG_TEMPLATES_HEADING":"Selectionner un modèle","MODAL_NOTIFICATIONS_HEADING":"Dernières nouvelles de Mailmeteor","MODAL_NOTIFICATIONS_DOUBLEQUOTA_HEADING":"💯 Doublez votre quota","MODAL_NOTIFICATIONS_DOUBLEQUOTA_CONTENT":"Vous appréciez Mailmeteor? <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"https://workspace.google.com/marketplace/app/mailmeteor_for_gmail/1008170693301\\">Laissez-nous un superbe avis</a> pour augmenter votre quota jusqu\'à 150 emails. Une fois l\'avis publié, prévenez-nous à l\'adresse <a class=\\"addon-link\\" href=\\"mailto:stars@mailmeteor.com\\" target=\\"_blank\\">stars@mailmeteor.com</a> pour en profiter.","MODAL_NOTIFICATIONS_UPGRADE_HEADING":"✨ Débloquez toutes les fonctionnalités","MODAL_NOTIFICATIONS_UPGRADE_CONTENT":"Que diriez-vous d\'envoyer encore plus d\'e-mails chaque jour et d\'avoir accès à des fonctionnalités avancées telles que la planification des e-mails, le pilote automatique et plus encore. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"{link}\\">Passer premium &rarr;</a>","MODAL_NOTIFICATIONS_BLOGPOST_HEADING":"🎉 Nouveau: Des Partenariats Exclusifs","MODAL_NOTIFICATIONS_BLOGPOST_CONTENT":"Nous sommes heureux d\'annoncer une douzaine de nouveaux partenariats avec les plus grands éditeurs de logiciels au monde. Du nettoyage de votre liste de contacts à la préparation de votre compte, il y a une offre pour vous. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"{link}\\">Lire l\'article &rarr;</a>","MODAL_NOTIFICATIONS_EDU_HEADING":"🎓 Programme Education","MODAL_NOTIFICATIONS_EDU_CONTENT":"Vous faites partie d\'une université, d\'un collège ou d\'une école? Saviez-vous que vous pouvez profiter gratuitement de Mailmeteor premium. <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"https://mailmeteor.com/education-program\\">En savoir plus sur notre Programme Education</a>.","MODAL_NOTIFICATIONS_BLACKFRIDAY_HEADING":"🔥 Offre limitée Black Friday","MODAL_NOTIFICATIONS_BLACKFRIDAY_CONTENT":"<a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=notifications&utm_campaign=blackfriday\\">Economiser jusqu\'à 50 % sur les forfaits Mailmeteor avec notre offre Black Friday</a>. L\'offre se termine le 26 novembre  (disponible une fois par an).","MODAL_ACCOUNT_TIP":"Gérez votre compte Mailmeteor.","MODAL_ACCOUNT_SECTION_PRIMARY_EMAIL":"E-mail","MODAL_ACCOUNT_SECTION_QUOTA":"Quota disponible","MODAL_ACCOUNT_SECTION_QUOTA_LEARN_MORE":"En savoir plus sur votre quota de courriels","MODAL_ACCOUNT_SECTION_BILLING_PLAN":"Plan","MODAL_ACCOUNT_SECTION_BILLING_MANAGE":"Gérez votre abonnement","MODAL_ACCOUNT_SECTION_BILLING_RENEWAL":"Annuler","MODAL_ACCOUNT_SECTION_BILLING_CANCEL_BUTTON":"Annuler","MODAL_ACCOUNT_SECTION_LANGUAGE":"Langue","MODAL_FOOTER_MENUITEMS_RELAUNCH_ONBOARDING":"Guide de démarrage","MODAL_FOOTER_MENUITEMS_SHAREFEEDBACK":"Partager une idée","MODAL_FOOTER_MENUITEMS_HELP":"Aide","MODAL_FOOTER_SEND_WITH_AUTOPILOT_TIP":"Les courriels seront envoyés avec Autopilot.","MODAL_FOOTER_SEND_WITH_SCHEDULING_TIP":"Les courriels seront expédiés à partir du {scheduledAt}.","MODAL_FOOTER_SEND_WITH_FOLLOWUP_TIP":"Les destinataires recevront des courriels de suivi.","SIDEBAR_SCHEDULING_TITLE_IDLE":"Campagne planifiée","SIDEBAR_SCHEDULING_SUBTITLE_BUSY":"commencé le {date}","SIDEBAR_SCHEDULING_TOOLTIP_BUSY":"L\'envoi n\'est pas encore fini","SIDEBAR_CAMPAIGN_SENT":"{n} courriels envoyés","SIDEBAR_CAMPAIGN_SUBTITLE":"{date}","SIDEBAR_CAMPAIGN_CANCEL":"Arrêter d\'envoyer","SIDEBAR_CAMPAIGN_COLUMN":"Colonne {columnHeading}","SIDEBAR_CAMPAIGN_TRACKING_OFF":"Le suivi a été désactivé pour cette campagne. Pour suivre les courriels envoyés, démarrez un nouvel envoi. Il n\'est pas possible d\'activer le suivi après qu\'une campagne ait été envoyée.","SIDEBAR_CAMPAIGN_TRACKING_OFF_UPGRADE":"Le suivi n\'est pas activé pour cette campagne. Pour suivre les courriels envoyés, dévérouillez cette fonctionnalité <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">en passant en premium</a>.","SIDEBAR_CAMPAIGN_TRACKING_ON_UPGRADE":"Le suivi des courriels est disponible dans la version premium de Mailmeteor uniquement. Pour suivre vos courriels, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://mailmeteor.com/pricing?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">passez en premium maintenant</a>.","SIDEBAR_CAMPAIGN_HAS_FOLLOWUPS":"Les statistiques incluent tous les e-mails envoyés (y compris les suivis). Pour obtenir plus de métriques, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" href=\\"https://dashboard.mailmeteor.com/campaigns/{campaignId}?utm_source=addon&utm_medium=sidebar&utm_campaign=tracking\\">ouvrez le dashboard</a>.","SIDEBAR_NAVIGATION_OVERVIEW":"Aucune campagne | {n} campagne | {n} campagnes","SIDEBAR_NAVIGATION_CAMPAIGN":"Toutes les campagnes","SIDEBAR_NAVIGATION_Settings":"Réglages","SIDEBAR_OVERVIEW_HEADING":"Vue d\'ensemble","SIDEBAR_OVERVIEW_TAB_OPENS":"Ouvertures","SIDEBAR_OVERVIEW_TAB_CLICKS":"Clics","SIDEBAR_OVERVIEW_METRICS_TIP":"Cliquez sur une colonne pour voir les détails","SIDEBAR_OVERVIEW_METRICS_TOTAL":"Total: {percent}","SIDEBAR_TIPS_1_HEADING":"Guide sur le rapport de suivi","SIDEBAR_TIPS_1_SUBHEADING":"En savoir plus sur le suivi des courriels","SIDEBAR_TIPS_2_HEADING":"Les bonnes pratiques","SIDEBAR_TIPS_2_SUBHEADING":"Un guide pour augmenter votre taux d\'ouverture","SIDEBAR_MORE_START_MERGE":"Démarrer un publipostage","SIDEBAR_MORE_OPEN_DASHBOARD":"Voir toutes les campagnes","SIDEBAR_MORE_UPGRADE":"Passer à premium","SIDEBAR_MORE_ACCOUNT":"Mon compte","SIDEBAR_MORE_HELP":"Aide","MAIL_EMPTY_SUBJECT":"(pas de sujet)","MAIL_EVENTS_OPENS":"Ouvertures","MAIL_EVENTS_OPENS_TOOLTIP":"Total des courriels ouverts","MAIL_EVENTS_CLICKS":"Clics","MAIL_EVENTS_CLICKS_TOOLTIP":"Total des courriels cliqués","MAIL_EVENTS_UNSUBSCRIBES":"Désinscriptions","MAIL_EVENTS_UNSUBSCRIBES_TOOLTIP":"Total des désinscriptions","MAIL_EVENTS_COUNTER":"Aucun évènement | {active} / {total} courriel | {active} / {total} courriels","EDITOR_TOOLBAR_INSERT_VARIABLE":"Insérer une variable","PERCENT":"{x}%","FRACTION":"{a}/{b}","LOADING":"Chargement...","LEARN_MORE":"En savoir plus","HELP":"Aide","COMMON_EMAILS":"0 courriel | 1 courriel | {n} courriels","COMMON_TIME_DAYS":"0 jour | 1 jour | {n} jours","COMMON_TIME_HOURS":"0 heure | 1 heure | {n} heures","COMMON_TIME_MINUTES":"0 minute | 1 minute | {n} minutes","COMMON_TIME_SECONDS":"0 seconde | 1 seconde | {n} secondes","INFO_USER_IS_BLOCKED":"<strong>Désolé, votre compte a été temporairement bloqué</strong>. Votre activité a été reportée comme étant potentiellement du spam. Si vous pensez que c\'est une erreur, <a class=\\"addon-link\\" target=\\"_blank\\" rel=\\"noopener\\" href=\\"https://support.mailmeteor.com/help/contact-support\\">veuillez nous contacter</a>.","ERROR_PREVIEW_UNKNOWN_TEMPLATE":"Impossible d\'afficher un aperçu, car aucun modèle n\'a été sélectionné.","ERROR_PREVIEW_UNKNOWN_ROW":"Impossible d\'afficher un aperçu. Cette ligne est vide ou inaccessible.","ERROR_SHEET_HAS_NO_CAMPAIGN":"Cette feuille de calcul ne semble pas liée à un précédent envoi","ERROR_TEMPLATE_HAS_NO_SUBJECT":"Impossible d\'enregistrer. Le sujet est vide.","ERROR_TEMPLATE_IS_TOO_BIG":"Votre modèle de courriel est trop volumineux. Essayez de réduire sa taille.","ERROR_FOLLOWUP_HAS_NO_BODY":"Votre e-mail de suivi n\'a pas de contenu.","ERROR_FOLLOWUP_IS_TOO_BIG":"L\'e-mail de suivi est top volumineux. Essayez de réduire sa taille.","ERROR_LACKING_AUTHORIZATION":"Nous n\'avons pas pu vous connecter. Utilisez-vous plusieurs comptes Google?","ERROR_LACKING_AUTHORIZATION_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_FAILED":"Nous avons quelques difficultés à vous connecter.","ERROR_AUTHENTICATION_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting/launch-error","ERROR_AUTHENTICATION_LOGGED_OUT":"Vous avez été déconnecté. Pouvez-vous essayer d\'ouvrir Mailmeteor à nouveau?","ERROR_AUTHENTICATION_LOGGED_OUT_LINK":"https://support.mailmeteor.com/help/troubleshooting/disconnected","ERROR_FIREBASE_FAILED":"Nous sommes désolés, nos serveurs ont rencontré une erreur. Veuillez réessayer.","ERROR_FIREBASE_FAILED_LINK":"https://support.mailmeteor.com/help/troubleshooting","ERROR_UNHANDLED":"Nous sommes désolés, quelque chose n\'a pas fonctionné. Veuillez réessayer."}'
    );
  },
});
