/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from "../locales";

export default {
    [LOCALES.SWEDISH]: {
        // common
        auth_button: "Logga in med Google",
        auth_button_short: "Logga in ",
        skills: "färdigheter",
        careers: "Karriärer",
        month: "mån",
        terms: "Villkor",
        policy: "Integritetspolicy",
        policy_content: "Innehållspolicy",

        //footer
        footer_skill_map: "Färdighetskarta",
        footer_career_explorer: "Karriärutforskare",
        footer_courses: "Projektbaserade online-kurser",
        footer_pricing: "Prissättning",

        //btns
        more: "mer",
        share: "dela",
        junior: "Lätt",
        middle: "Medel",
        senior: "Svår",

        // header
        header_profile: "Specialisering:",
        nav_tutorials: "karriär",
        nav_skills: "färdigheter",
        nav_premium: "min plan",
        nav_upgrade: "uppgradera",
        nav_ask: "lära",
        nav_exit: "Logga ut",
        nav_workspace: "undervisa",
        program_tutorial: "Välj ditt favoritämne:",
        edit_user_label: "Min profil",
        user_name_label: "Användarnamn",
        user_picture_label: "Användaravatar",

        //profile
        profile_moto: "AI-drivna videokurser för ditt personliga karriärmål.",
        profile_description:
            "Lär dig allt du behöver på minuter 24/7. Hitta den bäst lämpade karriären. Skapa personliga kurser med videor, frågesporter och AI-feedback för att lära dig saknade färdigheter.",
        profile_reccomended: "Rekommenderade karriärer",
        profile_learn: "Lär dig något med AI-mentor, få ",
        profile_map: "karta över dina färdigheter",
        profile_list_suggested: "och lista över föreslagna ",
        profile_upgrade_skills:
            "specialisering är det kunskapsområde du engagerar dig mest i. Här har du lärt dig",
        profile_specialisation_times: "gånger",
        profile_specialisation_my: "Min specialisering",
        profile_your_learned: " du har lärt dig",
        profile_matching: " som matchar dina färdigheter",
        add_explainer_short: "Länka lektion till denna kurs",

        //skills
        skills_update_interest: "Uppdatera YouTube-färdigheter",
        skills_test_interest: "Hitta färdigheter på YouTube",

        //event
        event_create: "Skapa en kurs från grunden",
        event_finish: "Lämna livesalen",
        event_proceed: "Livesal",
        event_change: "Redigera kurs",
        event_upgrade: "Börja gratis testperiod för att redigera",
        event_btn_friend: "Dela med studenter",
        event_tasks_description: "Du kommer att lära dig",
        event_result: "Resultat: du kommer att skapa",
        event_need: "Du behöver",
        event_how: "Hur det fungerar",

        create_event_title_edit: "Redigera kurs",
        create_event_title_create: "Skapa en kurs",
        create_event_remove_event: "Radera kursen för alltid",
        create_event_title_label: "Kursens titel",
        create_event_title_message: "Kursen måste ha en titel",
        create_event_subject_label: "Välj kurs taggar för sökning och organisera",
        create_event_subject_extra:
            "Skicka en tagg som inte finns till chatten, vi lägger till den inom 15 min",
        create_event_subject_message:
            "En händelse utan taggar kommer inte att skapas",
        create_event_cost_label: "Pris per student (USD) / Du får från 1 student",
        create_event_save: "Spara kursen och avsluta",

        // event set date
        event_set_date_every_week: "Varje {dag} kl {tid}",
        event_set_date_exist: "Händelsen finns redan",
        event_set_date_added: "Händelse tillagd",
        event_set_date_title: "Schema",
        event_set_date_description:
            'En kurs utan ett datum och tid kommer att läggas till i "Meddelanden" -avsnittet. Detta alternativ passar för en uppsättning grupper.',
        event_set_date_schedule: "från {datum} varje {dag}, {tid}",
        event_set_date_remove_item: "Ta bort lektion",
        event_set_date_add_date: "Lägg till datum och tid",
        event_set_date_date: "Datum",
        event_set_date_time: "Tid",
        event_set_date_dont_repeat: "Upprepa inte",
        event_set_date_repeat: "Upprepa varje vecka",

        //groups
        group_groups: "Mina skolor med kurser för elever:",
        group_tutorial: "Skapa din kurs:",
        group_soon: "Utvalda kurser, prova gratis ↓",
        group_soon_description:
            "De mest intressanta kurserna våra användare har skapat. Du kan lära dig dem gratis.",

        // Participants list
        participants_list_subsicribe: "Prenumeration",

        //Payment page
        premium: "Premium",
        premium_pro: "Pro",
        premium_your: "Ditt abonnemang",
        premium_description:
            "Testa intressen och bygg upp saknade färdigheter",
        premium_pro_description:
            "För utbildare att skapa din skola och sälja kurser",
        premium_moneyback: "3 dagars gratis provperiod",
        payment_premium_monthly: "Börja gratis provperiod",
        payment_title: "Uppgradera ditt abonnemang",
        payment_button: "Börja gratis provperiod",
        payment_button_course: "Börja gratis provperiod för att skapa kurser",
        payment_request_modal_cancel: "Avbryt",
        premium_valid: "abonnemanget är giltigt till",
        premium_why: "Varför oss?",
        premium_why_des:
            "Vår AI sparar dig timmar på Google-sökningar, upprepning av saker du redan vet och läsning av långa texter och oinformativa YouTube-videor. Den lär sig konstant med dina data.",
        premium_why_call:
            "Att hitta din passion tidigare påverkar dramatiskt var du kommer att vara om 15 år. Det kan kosta dig tusentals dollar varje år, hälsa och mentala problem, eller bli en lycklig resa fylld av framgång och ivrighet.",

        //notifications
        notif_copy_event_link_description:
            "Skicka länken till dina vänner i chatten, och de kan gå med i klassen.",
        notif_copy_event_link_workspace:
            "Skicka länken till dina studenter och kollegor i chatten, och de kan gå med i denna skola",
        notif_copy_link_title: "Länken kopierades till urklipp",
        notif_invite: "Vi har skickat en inbjudan till dina medlemmar",
        notif_copy_link_description:
            "Gillar du det? Visa det för dina vänner eller studenter!",
        notif_achieve_subject: "Du har låst upp en ny färdighet:",
        notif_achieve_theme: "Du har låst upp en ny färdighet:",
        notif_achieve_theme_skills: "Karta över dina färdigheter",
        notif_quiz_creating:
            "Testet skapas... Det kan ta 40 sekunder. Vänligen vänta tills det är klart.",

        // event card
        event_card_button_join_room: "Gå med ⚡",
        event_card_button_joined: "Ansluten 😊",

        // tabs
        tab_my_tutorial: "Mina lektioner & tester",
        tab_user_tutorial: "Användarlektioner",
        tab_subject_tutorial: "Nya lektioner efter data",
        tab_subject_tutorial_new: "Nya lektioner",
        tab_tag_tutorial: "Lektioner efter tagg",
        tab_ai_mentor: "AI-chatt",
        tab_ai_course: "AI-kurs",
        tab_ai_test: "Test",
        tab_tutorial_top: "Topp",
        tab_tutorial_featured: "Utvald",

        //ai
        ai_mentor_place:
            "Fråga om karriärmål eller dagens utmaningar",
        ai_course_des:
            "Bygg egen robot med Python, med hjälp av Artificiell Intelligens, Maskininlärning och OpenAI GPT-4.",
        ai_course_channel:
            "UX/UI-design för mobilappar, webbplatser och spel",
        ai_test_des:
            "Testa dina färdigheter för dig själv eller dina elever. Skriv vad du vill lära dig, och AI kommer att generera ett quiz. Glöm inte att välja kompetensnivå.",
        ai_test_place:
            "Skriv färdigheten, lägg till karriärmålet eller kunskapen du vill kontrollera",
        ai_popup_example: "Exempel",
        ai_popup_steps: "Steg",
        ai_popup_code: "Kod",
        ai_popup_facts: "Fakta",
        ai_popup_video: "Video",
        ai_popup_image: "Bild",

        // task
        answer_link_event: "😎 endast för prenumeranter 😎",
        task_try_again: "Att göra misstag gör oss smarta! Låt oss fixa det",

        // forms
        form_theme_error_message: "Välj ett ämne som ger mening",
        form_theme_placeholder: "Färdigheter uppgraderade av denna lektion",
        form_title_task_error_message: "Beskriv vad du kommer att göra",
        form_title_task: "Titel",
        form_title_prompt: "Lektionsprompt",
        form_step_prompt: "Stegprompt",
        form_description_task_placeholder:
            "Lägg till beskrivning, dina anteckningar, lösning och exempel.",
        form_video_placeholder: "Länk till videoundervisningen på youtube eller vimeo",
        form_add_timestamp: "Lägg till tidstämpel",
        form_text_question_answer_placeholder: "Lägg till praktisk utmaning med AI-kontroll",
        form_is_free_label: "Gratis",
        form_is_draft: "Utkast",
        form_is_autogeneratte: "Autogenerera",
        form_is_steps: "Steg",
        form_button_save: "Spara",
        form_button_add_task: "Publicera",
        form_button_save_answer: "Spara",
        form_add_comment: " Har du en fråga? Tveka inte att fråga här",
        form_button_add_comment: "Lägg till en kommentar 🙌",
        form_error_add_comment: "Hoppsan, fältet är tomt",
        form_cover_title: "Ladda upp bild",
        form_cover_error:
            "Bilden är för stor. Vänligen optimera den eller använd en annan.",
        form_field_is_right: "Rätt?",
        form_add_new_answer: "Lägg till alternativ",
        form_remove_question: "Ta bort detta steg",
        form_add_question: "Lägg till steg",
        form_remove_task: "Ta bort lektionen för alltid",
        form_add_task_to_event: "Lägg till en ny lektion",
        form_field_is_required: "Fältet är obligatoriskt",
        form_one_is_right: "Ett fält måste markeras som korrekt",
        form_min_one_is_right: "Minst ett fält måste markeras som korrekt",
        form_question_is_required:
            "Frågan måste innehålla minst ett svar",
        form_question_label: "Lägg till beskrivning eller fråga",
        form_explanation_label: "Lägg till typ av innehåll och förklaring",
        form_task_create_title: "Skapa lektion",
        form_task_edit_title: "Redigera lektion",
        form_task_edit_add_tag_placeholder: "Lektionstagg",
        form_task_edit_add_tag_button: "Lägg till ny tagg",
        form_task_max_tags_limit_error: "Du kan välja {count} taggar eller färre",

        // backend error
        backend_error: "Något gick fel, försök igen senare.",

        //auth from
        auth_form_title: "Välj språk & logga in",
        auth_youtube_form_title: "Lägg till dina intressen från YouTube",
        auth_youtube_form_description:
            "Vi kommer att skapa din personliga färdighetskarta och förutsäga en passion baserat på dina favoritvideor på YouTube.",
        auth_youtube_form_description2:
            "Utforska din passion baserat på dina favoritvideor på YouTube. Välj vilken karriär som helst och nivå upp för att bli en Greatest of All Time: genomför lektioner, gå med i onlinekurser och publicera dina egna kunskaper.",
        auth_youtube_form_description3:
            "och se personlig färdighetskarta med yrkesprognos.",
        auth_form_secondary1: "Hur vi behandlar data: ",
        auth_form_secondary2: "och ",
        auth_form_notify: "Få notiser om sätt att förbättra färdigheter",
        // result
        result_right_answer: "rätt",
        result_wrong_answer: "fel",

        //skills
        skills_my: "← din specialisering",
        skills_learn_my: "Testa och lär dig valfri färdighet",
        skills_des: "färgglada stjärnor är färdigheter har lärt dig i ",
        skills_result_title:
            "Vi har hittat {totalVideo} videor som du gillade på Youtube",
        skills_result_free_title: "{freePercent}% träffsäkerhet",
        skills_result_free_text:
            "I den fria versionen kommer vi endast att bearbeta <b>{allComparedVideo} av dessa videor</b> och presentera <b>{matchedVideo} av dina intressen </b> som matchar vår färdighetsbas.",
        skills_result_free_text_2: "Inte tillräckligt med data för att bearbeta.",
        skills_result_free_text_3:
            "I den fria versionen kommer vi endast att bearbeta {allComparedVideo} videor som du tidigare gillat. För att få en detaljerad rapport som alla inspirerande videor på YouTube under en månad, kom tillbaka till oss och testa dina intressen igen.",
        skills_result_paid_title: "{paidPercent}% träffsäkerhet",
        skills_result_paid_text_1:
            "I betalplanen bearbetar vi ★all din data , med möjligheten ★ att redigera dina färdigheter manuellt och ★ att genomgå ytterligare tester för att få minst 200 matchningar mellan dina intressen och vår databas.",
        skills_result_paid_text_2:
            "I det fallet skulle vår förutsägelse vara upp till 80% exakt.",
        skills_result_free_label: "Gratis testversion",
        skills_result_paid_label: "Uppgraderad Plan för ${price}",

        //careers
        career_title: "karriärer matchar dina färdigheter:",
        career_des: "Karriärbeskrivning",
        career_select_skills: "Välj dina färdigheter",
        career_btn_show: "Visa ",
        career_btn_upgrade: "Starta gratis 3-dagars prov för att se ",
        career_btn_all: "alla matchande karriärer↓",
        career_btn_skills: "karriärfärdigheter du lärt dig",
        career_buy_des:
            "Utforska färdigheter som matchar denna karriär. Testa din kunskap och få personliga kurser för att lära dig blinda fläckar 🚀.",
        career_btn_proceed: "Fortsätt lära dig",
        career_btn_start_career: "Lär dig saknade färdigheter i denna karriär",

        // meta
        meta_title_default:
            "Personlig AI-mentor som hjälper till att hitta din nya karriär",
        meta_title_default_short:
            "Personlig AI-mentor som hjälper till att hitta din nya karriär",
        meta_title_rating: "Användares betyg med mynt på Unschooler. ",
        meta_title_courses:
            "AI online-kurser på Unschooler.me drivs av GPT-4 med video från YouTube. Lär dig vilken färdighet som helst, skapa projekt och nå ditt karriärmål.",
        meta_title_policy: "Integritetspolicy på Unschooler",
        meta_title_terms: "Användarvillkor på Unschooler",
        meta_task_title: "lektion på Unschooler",
        meta_event_title: "Onlinekurs på unschooler",
        meta_my_account: "Unschooler - mitt konto",
        meta_programs:
            "Utforska ämnen i din egen takt och spara dina upptäckter.",
        meta_default_description:
            "Roliga steg-för-steg-lektioner med online-klasser ledda av proffs för att få färdigheter för framtiden",
        meta_description_default_primary:
            "Unschooler är en online utbildningsplattform med onlinekurser och lektioner där proffs publicerade kurser för tonåringar runt praktiska projekt, lägger till steg-för-steg-lektioner och ger feedback på online-klasser. \n" +
            "Varje nytt resultat lagras i tonåringens portfölj och uppdaterar färdighetskarta. Det fungerar som en naturlig karriärväg.",
        meta_description_courses:
            "Generera onlinekurser med video och AI för ditt personliga karriärmål med steg-för-steg-lektioner. Dela dem med dina elever.",
        meta_description_rating:
            "Mynt är en virtuell valuta som du tjänar och spenderar på ny kunskap. Dela och samla den: klara quiz, publicera dina resultat och handledningar, samla gillanden för dem, registrera kurser och skapa dina egna.",
        meta_description_policy:
            "Unschooler är en online utbildningsplattform med onlinekurser och lektioner där proffs publicerade kurser för tonåringar runt praktiska projekt, lägger till steg-för-steg-lektioner och ger feedback på online-klasser.",
        meta_description_terms:
            "Unschooler är en online utbildningsplattform med onlinekurser och lektioner där proffs publicerade kurser för tonåringar runt praktiska projekt, lägger till steg-för-steg-lektioner och ger feedback på online-klasser.",
        meta_description_terms_mentor:
            "Unschooler är en marknadsplats för online cohort-kurser och asynkrona UGC-lektioner. Handledningar är interaktiva artiklar med quiz och inbäddade youtube-videor. Folk visar och berättar vad de skapat och delar coola läromaterial. Onlinekursen är ett stängt videokonferensrum för grupplektioner. Det inkluderar en uppsättning lektioner som endast är tillgängliga för deltagarna, betalningar, schemaläggning, möjligheten att dela studenternas resultat och göra lärnoter.",

        // phone
        phone_remainders: "WhatsApp-påminnelser",
        phone_desciption:
            "Vi skickar dig läxa och påminnelser på WhatsApp. Ingen spam eller annonser, endast information som du betalat för eller testat.",
        phone_placeholder: "Telefonnummer",
        phone_button_label: "Spara",
        show_more: "Visa mer",

        // google
        google_api_login: "Auktorisera på youtube",
        bookmark: "Bokmärke",
        ask_video: "Fråga video",
        payment_button_create: "Skapa din kurs",
        start: "Starta ",
        event_start_learning: "Börja lära dig",
        notif_typing_loader__message: "3-8 sekunder",

        curriculim_regenerate: "Generera om denna plan om du inte gillar den ↓",
        curriculim_generate: "Generera din kursplan",
        save_notes: "Spara dina anteckningar",

        // forms
        form_allow_answer_placeholder: 'ID för nästa lektioner "345"',
        quiz_generate: "Skapa ett test",
        summary: "Visa sammanfattning",
        summary_hide: "Dölj sammanfattning",
        course: "kurs",
        quiz: "quiz",
        add_courses_btn: "Lägg till alla dina kurser",
        add_creator: "Lägg till skapare",
        course_creators: "Kurs skapare:",
        students: "studenter",
        leave: "Lämna",
        last_questions: "Sista lektioner, tester och chattar",
        login_members: "Logga in för medlemmar",
        sign_to_join: "Anslut till denna skola",
        load_more: "ladda mer",
        youtube_channel: "Din YouTube-kanal ID",
        intro: "Välj eller sök en video:",
        continue: "Fortsätt",
        generate_video: " Generera lektion från ditt innehåll",
        ask_video_placeholder: "Fråga video om du inte förstår något",
        search_string: "Sök video…",
        form_text_challenge: "Utmaning",
        form_text_videosum_placeholder: "Autogenererad video Sammanfattning tillgänglig endast om video innehåller undertexter",
        form_text_data_title: "Uppmaning: Lärandemål, utfall och bedömningar",
        form_text_data_placeholder: "Beskriv det innehåll du vill få, klistra in någon artikel eller anteckningar för att generera lektion från text. Maximalt 50 000 tecken.",

        form_text_learning: "Sammanfattning av källan",
        form_text_learning_placeholder: "Beskriv innehållet du vill få",
        form_text_description: "Beskrivning",
        form_text_step: "Steg",
        form_text_step_order: "Ändra ordningen på frågorna",
        published: "Publicerad",
        learn: "Lär",
        event_preenroll: 'Gå med i kursen och prenumerera på dagliga uppgiftsnotiser',
        event_preenroll_description: 'Genomför dagliga uppgifter och få AI-genererad feedback. Arbeta med ett projekt för din portfölj och genomför bedömningar.',
        event_enroll_course: 'Gå med',
        event_moneyback: 'Pris:',
        event_you_in: "Du har gått med i kursen!",
        delete_this_step: "radera",

        generate_subtitles: 'Generera undertexter till den här lektionen',
        progress_description_message: 'AI genererar beskrivning och inlärningssteg. Dina data används inte för att träna AI:n.',
        progress_plan_generate_message: 'AI genererar din personliga plan.',
        progress_create_question_message: 'Steg skapas, genom att följa dem kommer du att uppnå målet.',
        progress_check_result_message: 'Din lösning kontrolleras...',
        progress_subtitle_generation_message: 'Generering av undertexter...',
        progress_update_database_data: 'Läxhjälp genereras...',
        connect_my_youtube_channel: 'Min kanal',
        connect_another_channel: 'Välj en annan kanal',
        connecting_to_youtube_channel: 'Ansluter till YouTube-kanal',

        embed_modal_title: 'Bädda in den här kursen på din plattform',
        embed_copy_title: 'Kopiera kod',
        embed_copy_text: 'Kod kopierad till urklipp',
        copy_label: 'Kopiera',
        cancel_label: 'Avbryt',
        footer_educators: 'Lösning för utbildare',
        premium_start: "Start",
        premium_creator: "Skapare",
        premium_university: "Universitet",
        premium_creator_description: "Generera kurser på minuter från dina videor",
        premium_university_description: "Integrera Unschooler till din plattform",
        upgrade: "Uppgradera",
        contact_sales: "Kontakta försäljning",
        features: "Alla funktioner",
        custom: "Anpassad",

        solution_placeholder: "Beskriv din lösning på denna uppgift",
        solution_send: "Skicka lösningen",
        learning_type: "Välj hur du vill lära dig",
        learning_text: "Läs text och exempel",
        learning_project: "Öva med litet projekt",
        learning_video: "Hitta en video",
        learning_check: "Kontrollera din förståelse",
        learning_info: "Välj informationsgrafik",
        learning_quiz: "Spela med quiz",

        // 
        tab_ai_lesson: "AI-lektion",
        tab_ai_channel: "YouTube-kanal",
        tab_ai_vimeo: "Vimeo",
        ask_placeholder_def: "Ställ en fråga",
        ask_placeholder_yt: "https://www.youtube.com/watch?v=FCqkUi1-7S0",
        question_regenerate: "rengör",
        question_add: "mer",

        header_courses: "AI-videokurser för utbildare, plattformar och företag",
        upload_video: "Ladda upp mp4, max 300Mb 30 min",
        ai_course_promo: "Skapa en kurs för varje nytt mål",
        ai_mentor_promo: "Fråga om karriärutmaningar och nya färdigheter",
        ai_test_promo: "Testa någon av dina färdigheter, dela med andra",
        ai_lesson_promo: "Omvandla ditt innehåll till en lektion",
        ai_channel_promo: "Anslut YouTube-kanal och generera kurser från ditt innehåll",

        tab_ai_video: "YouTube/Vimeo-länk",
        tab_ai_text: "Text",
        tab_ai_mp4: "Video",
        tab_ai_link: "URL",
        tab_ai_pdf: "PDF",

        //kassan
        checkout_subscription: 'Månadsprenumeration',
        checkout_weekly_subscription: 'Veckoprenumeration',
        checkout_guide_title: 'Få din personliga karriärguide',
        checkout_enroll_title: 'Registrera kurs',
        checkout_thanks: 'Tack för betalningen',
        checkout_booking_confirmation:
            'Vi kommer att skicka en bekräftelse på din bokning via e-post - ',
        checkout_success_purchase: 'du har köpt tillgång till Premiumklubben',
        checkout_link_for_activation:
            'Vi kommer att skicka en länk till aktiveringssidan för presenten till den e-post du angav vid betalning.',
        checkout_check_other_lessons: 'Kontrollera andra lektioner',
        checkout_go_to_skills: 'Gå till att testa intressen med YouTube',

        // Stripe
        stripe_student_name: "Studentens för- och efternamn",
        stripe_student_email: "Studentens e-post",
        stripe_student_phone: "Studentens telefon",
        stripe_accept: 'Jag accepterar',
        stripe_accept_terms: 'Användarvillkor',
        stripe_accept_terms_confirm: 'och bekräftar att min dator eller telefon motsvarar',
        stripe_technical_requirements: 'Tekniska krav',
        stripe_input_card_number: 'Ange dina kreditkortsuppgifter',
        stripe_pay: 'Betala',
        stripe_accept_error: 'Vänligen se till att din arbetsplats är lämplig för onlineklasser.',
        stripe_error_email_message: "Det ser inte ut som rätt e-post!",
        stripe_error_phone_message: 'Var god kontrollera telefonnumret',

        form_text_course_title: "Ange en kursämne, lärande resultat eller mål",
        form_workspace_placeholder: "Namn på din skola",
        form_workspace_description: "Beskrivning av din skola",
        form_workspace_create: "Spara skolinställningar",
        form_workspace_logo: "Ladda upp logotyp",
        form_workspace_cover: "Ladda upp omslag",
        form_workspace_description_placeholder: "Skriv syftet med denna arbetsyta",
        form_link_placeholder: "URL till webbsidan: AI kommer att analysera den och generera en lektion.",
        form_link_placeholder_input: "https://sv.wikipedia.org/wiki/F%C3%B6rsta_klass-resa",

        free: "gratis",
        translate_modal_title: 'Översätt denna kurs till vilket språk som helst. Vi kommer att duplicera den och ersätta texterna med det valda språket:',
        translate_btn: 'Översätt',

        event_add_calendar: "Lägg till i Kalender",
        event_added_calendar: "Tillagd i Kalender",
        event_add_calendar_title: "Notiser har lagts till i din kalender",
        event_add_calendar_description: "Vi kommer att påminna dig varje dag för att uppgradera din karriär",
        event_connect_to_call: 'Anslut till samtalet',

        create_your_school: "Skapa din skola",
        setup_your_school: "Ställ in din skolas arbetsområde",
        invite: "Bjud in",
        download: "Ladda ner",
        translate: "Översätt",
        add_your_content: "Välj informationskälla eller lägg till ditt innehåll",
        course_selling: "3. Kurser som säljer från personligt videomaterial (Börjar med Creator plan)",
        form_text_course_plan: "Granska din inlärningsplan, radera alla ämnen eller återskapa",

        loader_generic: "genereras, det tar 1-2 min",
        loader_quiz: "quiz skapas och sparas",
        loader_task: "Lektion genereras, vänta 1 minut",
        loader_step: "AI skapar ett steg",
        loader_step_contentquiz: "AI skapar en stegguide som hjälper dig att uppnå ditt mål med quiz.",
        loader_step_quiz: "AI skapar en stegguide som hjälper dig att uppnå ditt mål med quiz.",
        loader_nextstepai: "AI genererar beskrivning och steg. Dina data används inte för att träna AI.",
        loader_nextstepai_async: "Nästa steg genereras, vänta på att laddningen avslutas 1 min…",
        loader_video: "AI samlar de mest relevanta YouTube-videorna om detta ämne.",
        loader_assess: "AI skapar en praktisk utmaning som hjälper dig att uppnå ditt mål.",

        tab_workspace_tutorial: "Publicerade lektioner & tester",
        tab_workspace_tutorial_draft: "Mina testutkast",
        title_task: "Låt oss öva",
        select_text: "Välj text för",
        btn_skip: "Hoppa över",
        ai_popup_explain: "Förklara",
        edit: "Redigera",
        ask_ai: "Be AI att lägga till en personlig lektion",
        loader_translate: "AI översätter denna kurs med alla steg. Efter denna process kommer du att omdirigeras till den nya kursen i.",
        ai_generate_tasks_button: "Generera hela kursen",
        ai_generation_tasks: "Kursgenerering",
        click_upload: "Klicka för att ladda upp",
        feedback_field: "Vad missades i denna handledning?",
        form_text_data_file: "Ladda upp din pdf: vi kommer att ta de första 30 000 tecknen och generera lektionen.",

        tab_event_published: "Publicerade Kurser",
        tab_event_drafts: "Utkast",
        tab_events_my: "Mina kurser",
        tab_events_user: "Kurser",
        tab_events_all: "Alla kurser",
        tab_event_by_subjectIds: "Utvalda kurser",

        vimeo_add_desc: "Lägg till en länk till din Vimeo-mapp för att söka efter videor",
        vimeo_add: "Lägg till Vimeo-mapp",
        vimeo_your: "Din Vimeo-mapp",
        vimeo_change: "Byt Vimeo-mapp",

        create_event_tab_1: "Kurskälla",
        create_event_tab_2: "Redigera Lektioner",
        create_event_tab_3: "Visa kurs",

        search_placeholder: 'Sök',
        search_result_title: 'Sökresultat på begäran',
        search_result_not_found: 'Inga resultat hittades',

        wrksp_add_section: 'Lägg till händelseavsnitt',
        wrksp_add_section_plchldr: "Ange titel här",
        wrksp_add_section_title: "Titel",
        form_workspace_custom_domain: "Anpassad domän",
        form_workspace_add_records: "Lägg till A- och TXT-poster i din domänregister:",
        form_workspace_content: "Innehåll",
        form_workspace_host: "Önskad värd",
        form_workspace_domain: "Domän",
        form_workspace_sections: "Kursavsnitt",
        form_workspace_invite: "Bjud in medlemmar",
        form_workspace_send_invite: "Skicka inbjudan",
        participants_list_title: " studenter har gått med i denna kurs",
        learning_time: "Lärtid",
        form_lesson_tab: 'Lektionskälla',
        form_content_tab: 'Innehåll',
        form_display_tab: 'Visa',
        feedback_easy: 'för lätt',
        feedback_abstract: 'för abstrakt',
        feedback_wordy: 'för ordrik',
        feedback_steps: 'fler steg',

        workspace_title_name: 'Varumärke & anpassad domän',
        workspace_title_content: 'Webbsidas layout',
        workspace_title_payments: 'Betalningar',
        form_workspace_settings: "Skolinställningar",
        auth_form_title_signup: "Skapa nytt konto",

        workspace_host_required: 'Värden krävs',
        workspace_host_is_not_valid: 'Värden är inte giltig!',
        workspace_host_extra: 'Värden får endast innehålla små bokstäver utan mellanslag (kan innehålla siffror och bindestreck).',
        workspace_host_exist: 'Samma värd finns redan',
        workspace_domain_status: 'Status',
        workspace_domain_updates: '(uppdateringar inom 24 timmar)',
        workspace_layout_message: 'Hantera elevernas uppmärksamhet med en grupp färdigheter. Du kan konfigurera dem och ändra dem också på huvudsidan.',
        workspace_domain_is_not_valid: 'Ogiltigt domännamn',
        workspace_domain_is_not_extra: 'Detta fält är valfritt. Domänen måste innehålla små bokstäver (kan innehålla bindestreck och punkter). Exempel: ',

        stripe_connect_label: 'Anslut med Stripe',
        stripe_connect_existed_account: 'Du har anslutit Stripe-konto.',
        stripe_connect_existed_text_1: 'Anslut ditt Stripe-konto för att börja ta emot betalningar för kursförsäljning',
        stripe_connect_existed_text_2: 'Stripe är snabb att installera och tar inte ut några månadsavgifter som de flesta betalningsprocessorer, bara en liten avgift per transaktion.',
        stripe_connect_existed_text_3: 'Du måste skapa och underhålla ditt Stripe-konto om du inte redan har ett.',
        stripe_connect_existed_text_4: 'Du måste hantera återkrav och alla kundtjänstproblem. Vi har inte kontroll över eller ansvar för din kunds betalningar.',

        //translate_to_arrange
        ai_chat_questin_text1: 'Vilket programmeringsspråk ska man lära sig för att skapa spel?',
        ai_chat_question_text2: 'Vad är de dagliga uppgifterna för en front-end utvecklare?',
        login_button: 'Logga in med e-post',
        reset_password_button: 'Återställ lösenord',
        email_input_text: 'E-post',
        password_input_text: 'Lösenord',
        enter_password_warning: 'Ange ditt lösenord',
        enter_email_warning: 'Ange din e-post',
        embed_button: 'integrera',
        add_member_button: 'Lägg till medlem',
        enter_title_warning: 'Vänligen ange titel!',
        title_input_text: 'Titel',
        Change_title: 'Ändra profildata',
        invite_subtitle: 'Din skola är redo, logga in och bjud in dina studenter',
        welcome_title_text: 'Välkommen till {workspace} skola',
        access_information_start: 'Tillgång till', 
        vimeo_folder: 'wimeo-spelare',
        sign_to_join_signup: 'Registrera dig',
        payment_title_creator: 'Skaparplanen gratis provversion',
        payment_title_premium: 'Gratis provperiod för Premium-planen',

        congrats: "Grattis! Fortsätt det goda arbetet och nå ditt mål!",
        steps: "Steg-för-steg-guide:"
    }
};
