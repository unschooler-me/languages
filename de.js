/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from "../locales";
import {
    PLACEHOLDER_FAVORITES,
    PLACEHOLDER_MY,
} from "../../Components/constant";

export default {
    [LOCALES.GERMAN]: {
        // common
        auth_button: "Mit Google anmelden",
        auth_button_short: "Anmelden ",
        skills: "Fähigkeiten",
        careers: "Karriere",
        month: "Mon",
        terms: "Bedingungen",
        policy: "Datenschutzbestimmungen",
        policy_content: "Inhaltspolitik",

        //footer
        footer_skill_map: "Fähigkeiten-Karte",
        footer_career_explorer: "Karriere-Explorer",
        footer_courses: "Projektbasierte Online-Kurse",
        footer_pricing: "Preisgestaltung",

        //btns
        more: "mehr",
        share: "teilen",
        junior: "Einfach",
        middle: "Mittel",
        senior: "Schwer",

        // header
        header_profile: "Spezialisierung:",
        nav_tutorials: "Karriere",
        nav_skills: "Fähigkeiten",
        nav_premium: "mein Plan",
        nav_upgrade: "aktualisieren",
        nav_ask: "lernen",
        nav_exit: "Ausloggen",
        nav_workspace: "lehren",
        program_tutorial: "Wählen Sie Ihr Lieblingsthema:",
        edit_user_label: "Mein Profil",
        user_name_label: "Benutzername",
        user_picture_label: "Benutzeravatar",

        //profile
        profile_moto: "KI-gestützte Videokurse für Ihr persönliches Karriereziel.",
        profile_description:
            "Lernen Sie alles, was Sie in Minuten 24/7 brauchen. Finden Sie die am besten geeignete Karriere. Erzeugen Sie persönliche Kurse mit Videos, Quizzen und KI-Feedback, um fehlende Fähigkeiten zu lernen.",
        profile_reccomended: "Empfohlene Karrieren",
        profile_learn: "Lernen Sie etwas mit einem KI-Mentor, bekommen Sie ",
        profile_map: "Karte mit Ihren Fähigkeiten",
        profile_list_suggested: "und Liste der vorgeschlagenen ",
        profile_upgrade_skills:
            "Spezialisierung ist das Wissensgebiet, mit dem Sie sich am meisten beschäftigen. Hier haben Sie gelernt",
        profile_specialisation_times: "Mal",
        profile_specialisation_my: "Meine Spezialisierung",
        profile_your_learned: " Sie haben gelernt",
        profile_matching: " passend zu Ihren Fähigkeiten",
        add_explainer_short: "Lektion zu diesem Kurs verlinken",

        //skills
        skills_update_interest: "YouTube-Fähigkeiten aktualisieren",
        skills_test_interest: "Finden Sie Fähigkeiten auf YouTube",

        //event
        event_create: "Einen Kurs von Grund auf erstellen",
        event_finish: "Haben das Live-Zimmer verlassen",
        event_proceed: "Live-Zimmer",
        event_change: "Kurs bearbeiten",
        event_upgrade: "Kostenlose Testversion starten, um zu bearbeiten",
        event_btn_friend: "Mit Studenten teilen",
        event_tasks_description: "Sie werden lernen",
        event_result: "Ergebnis: Sie werden erstellen",
        event_need: "Sie werden benötigen",
        event_how: "Wie es funktioniert",

        create_event_title_edit: "Kurs bearbeiten",
        create_event_title_create: "Einen Kurs erstellen",
        create_event_remove_event: "Kurs für immer löschen",
        create_event_title_label: "Titel des Kurses",
        create_event_title_message: "Der Kurs muss einen Titel haben",
        create_event_subject_label: "Wählen Sie Kursetiketten für Suche und Organisation",
        create_event_subject_extra:
            "Senden Sie ein nicht gefundenes Etikett in den Chat, wir werden es in 15 Min hinzufügen",
        create_event_subject_message:
            "Ein Ereignis ohne Etiketten wird nicht erstellt",
        create_event_cost_label: "Preis pro Schüler (USD) / Sie erhalten von einem Schüler",
        create_event_save: "Kurs speichern und beenden",

        // event set date
        event_set_date_every_week: "Jeden {Tag} um {Zeit}",
        event_set_date_exist: "Ereignis existiert bereits",
        event_set_date_added: "Ereignis hinzugefügt",
        event_set_date_title: "Planen",
        event_set_date_description:
            'Ein Kurs ohne Datum und Uhrzeit wird in den Abschnitt "Ankündigungen" hinzugefügt. Diese Option eignet sich für eine Gruppensammlung.',
        event_set_date_schedule: "vom {Datum} jeden {Tag}, {Zeit}",
        event_set_date_remove_item: "Lektion entfernen",
        event_set_date_add_date: "Datum und Zeit hinzufügen",
        event_set_date_date: "Datum",
        event_set_date_time: "Zeit",
        event_set_date_dont_repeat: "Nicht wiederholen",
        event_set_date_repeat: "Jede Woche wiederholen",

        //groups
        group_groups: "Meine Schulen mit Kursen für Schüler:",
        group_tutorial: "Erstelle deinen Kurs:",
        group_soon: "Ausgewählte Kurse, kostenlos ausprobieren ↓",
        group_soon_description:
            "Die interessantesten Kurse, die unsere Nutzer erstellt haben. Du kannst sie kostenlos lernen.",

        // Participants list
        participants_list_subsicribe: "Abonnement",

        //Payment page
        premium: "Premium",
        premium_pro: "Pro",
        premium_your: "Dein Plan",
        premium_description:
            "Interessen testen und fehlende Fähigkeiten aufbauen",
        premium_pro_description:
            "Für Pädagogen, um deine Schule zu erstellen und Kurse zu verkaufen",
        premium_moneyback: "3-tägige kostenlose Probezeit",
        payment_premium_monthly: "Kostenlose Probezeit beginnen",
        payment_title: "Deinen Plan upgraden",
        payment_button: "Kostenlose Probezeit beginnen",
        payment_button_course: "Kostenlose Probezeit starten, um Kurse zu erstellen",
        payment_request_modal_cancel: "Abbrechen",
        premium_valid: "Abonnement gültig bis",
        premium_why: "Warum wir?",
        premium_why_des:
            "Unsere KI spart dir Stunden auf Google-Suche, wiederholen von Dingen, die du bereits weißt und das Lesen von langen Texten und nicht informativen YouTube-Videos. Sie lernt ständig mit deinen Daten.",
        premium_why_call:
            "Deine Leidenschaft früher zu finden, beeinflusst dramatisch, wo du in 15 Jahren sein wirst. Es kann dich jedes Jahr tausende von Dollar kosten, Gesundheitsprobleme und psychische Probleme verursachen oder zu einer glücklichen Reise voller Erfolg und Eifer werden.",

        //notifications
        notif_copy_event_link_description:
            "Schicke den Link zu deinen Freunden im Chat, und sie können am Unterricht teilnehmen.",
        notif_copy_event_link_workspace:
            "Schicke den Link zu deinen Schülern und Kollegen im Chat, und sie können dieser Schule beitreten",
        notif_copy_link_title: "Link in Zwischenablage kopiert",
        notif_invite: "Wir haben eine Einladung an deine Mitglieder gesendet",
        notif_copy_link_description:
            "Gefällt es dir? Zeige es deinen Freunden oder Schülern!",
        notif_achieve_subject: "Du hast eine neue Fähigkeit freigeschaltet:",
        notif_achieve_theme: "Du hast eine neue Fähigkeit freigeschaltet:",
        notif_achieve_theme_skills: "Übersicht deiner Fähigkeiten",
        notif_quiz_creating:
            "Der Test wird erstellt… Es kann 40 Sekunden dauern. Bitte warte bis zum Ende.",

        // event card
        event_card_button_join_room: "Beitreten ⚡",
        event_card_button_joined: "Beigetreten 😊",

        // tabs
        tab_my_tutorial: "Meine Lektionen & Tests",
        tab_user_tutorial: "Benutzerlektionen",
        tab_subject_tutorial: "Neue Lektionen nach Daten",
        tab_subject_tutorial_new: "Neue Lektionen",
        tab_tag_tutorial: "Lektionen nach Tag",
        tab_ai_mentor: "KI-Chat",
        tab_ai_course: "KI-Kurs",
        tab_ai_test: "Test",
        tab_tutorial_top: "Top",
        tab_tutorial_featured: "Empfohlen",

        //ai
        ai_mentor_place:
            "Fragen zu Karrierezielen oder heutigen Herausforderungen stellen",
        ai_course_des:
            "Eigenen Roboter mit Python bauen, unter Verwendung von Künstlicher Intelligenz, Machine Learning und OpenAI GPT-4.",
        ai_course_channel:
            "UX/UI-Design für mobile Apps, Webseiten und Spiele",
        ai_test_des:
            "Teste deine Fähigkeiten für dich oder deine Schüler. Schreibe, was du lernen möchtest, und die KI wird ein Quiz generieren. Vergiss nicht, das Fähigkeitsniveau auszuwählen.",
        ai_test_place:
            "Schreibe die Fähigkeit, füge das Karriereziel oder das Wissen hinzu, das du überprüfen möchtest",
        ai_popup_example: "Beispiel",
        ai_popup_steps: "Schritte",
        ai_popup_code: "Code",
        ai_popup_facts: "Fakten",
        ai_popup_video: "Video",
        ai_popup_image: "Bild",

        // task
        answer_link_event: "😎 nur für Abonnenten 😎",
        task_try_again: "Aus Fehlern werden wir schlau! Lass es uns korrigieren",

        // forms
        form_theme_error_message: "Wähle ein sinnvolles Thema",
        form_theme_placeholder: "Durch diese Lektion verbesserte Fähigkeiten",
        form_title_task_error_message: "Beschreibe, was du tun wirst",
        form_title_task: "Titel",
        form_title_prompt: "Lektionsaufforderung",
        form_step_prompt: "Schrittaufforderung",
        form_description_task_placeholder:
            "Füge Beschreibung, deine Notizen, Lösung und Beispiele hinzu.",
        form_video_placeholder: "Link zum Video-Tutorial auf YouTube oder Vimeo",
        form_add_timestamp: "Zeitstempel hinzufügen",
        form_text_question_answer_placeholder: "Füge praktische Herausforderung mit KI-Prüfung hinzu",
        form_is_free_label: "Kostenlos",
        form_is_draft: "Entwurf",
        form_is_autogeneratte: "Autogenerieren",
        form_is_steps: "Schritte",
        form_button_save: "Speichern",
        form_button_add_task: "Veröffentlichen",
        form_button_save_answer: "Speichern",
        form_add_comment: "Hast du eine Frage? Frag ruhig hier",
        form_button_add_comment: "Einen Kommentar hinzufügen 🙌",
        form_error_add_comment: "Hoppla, das Feld ist leer",
        form_cover_title: "Bild hochladen",
        form_cover_error:
            "Bild ist zu groß. Bitte optimiere es oder verwende ein anderes.",
        form_field_is_right: "Richtig?",
        form_add_new_answer: "Option hinzufügen",
        form_remove_question: "Diesen Schritt löschen",
        form_add_question: "Schritt hinzufügen",
        form_remove_task: "Lektion für immer löschen",
        form_add_task_to_event: "Eine neue Lektion hinzufügen",
        form_field_is_required: "Das Feld ist erforderlich",
        form_one_is_right: "Ein Feld muss als richtig markiert sein",
        form_min_one_is_right: "Mindestens ein Feld muss als richtig markiert sein",
        form_question_is_required:
            "Die Frage muss mindestens eine Antwort enthalten",
        form_question_label: "Beschreibung oder Frage hinzufügen",
        form_explanation_label: "Füge Inhaltsart und Erklärung hinzu",
        form_task_create_title: "Lektion erstellen",
        form_task_edit_title: "Lektion bearbeiten",
        form_task_edit_add_tag_placeholder: "Lektionstags",
        form_task_edit_add_tag_button: "Neuen Tag hinzufügen",
        form_task_max_tags_limit_error: "Du kannst {count} Tags oder weniger auswählen",

        // backend error
        backend_error: "Etwas ist schiefgelaufen, bitte versuche es später noch einmal.",

        //auth from
        auth_form_title: "Sprache auswählen & Einloggen",
        auth_youtube_form_title: "Füge deine Interessen von YouTube hinzu",
        auth_youtube_form_description:
            "Wir erstellen deine persönliche Fähigkeitenkarte und prognostizieren eine Leidenschaft basierend auf deinen Lieblingsvideos auf YouTube.",
        auth_youtube_form_description2:
            "Entdecke deine Leidenschaft basierend auf deinen Lieblingsvideos auf YouTube. Wähle eine beliebige Karriere und verbessere sie, um der Beste aller Zeiten zu werden: vervollständige Lektionen, nimm an Online-Kursen teil und veröffentliche dein eigenes Wissen.",
        auth_youtube_form_description3:
            "und sieh dir die persönliche Fähigkeitenkarte mit Berufsvorhersage an.",
        auth_form_secondary1: "Wie wir Daten verarbeiten: ",
        auth_form_secondary2: "und ",
        auth_form_notify: "Benachrichtigungen über den Weg der Weiterbildung erhalten",

        // result
        result_right_answer: "richtig",
        result_wrong_answer: "falsch",

        //skills
        skills_my: "← Ihre Spezialisierung",
        skills_learn_my: "Testen und lernen Sie jede Fähigkeit",
        skills_des: "bunte Sterne sind Fähigkeiten, die in gelernt wurden",
        skills_result_title:
            "Wir haben {totalVideo} Videos gefunden, die Ihnen auf Youtube gefallen haben",
        skills_result_free_title: "{freePercent}% Genauigkeit",
        skills_result_free_text:
            "In der kostenlosen Version werden nur <b>{allComparedVideo} dieser Videos</b> verarbeitet und <b>{matchedVideo} Ihrer Interessen</b> präsentiert, die mit unserer Fähigkeitenbasis übereinstimmen.",
        skills_result_free_text_2: "Nicht genügend Daten zur Verarbeitung.",
        skills_result_free_text_3:
            "In der kostenlosen Version werden nur {allComparedVideo} zuvor gemochte Videos verarbeitet. Um einen detaillierten Bericht wie alle inspirierenden Videos auf YouTube für einen Monat zu erhalten, kommen Sie zurück zu uns und testen Sie Ihre Interessen erneut.",
        skills_result_paid_title: "{paidPercent}% Genauigkeit",
        skills_result_paid_text_1:
            "Im bezahlten Plan verarbeiten wir ★alle Ihre Daten, mit der Möglichkeit ★ Ihre Fähigkeiten manuell zu bearbeiten und ★ zusätzliche Tests zu absolvieren, um mindestens 200 Übereinstimmungen zwischen Ihren Interessen und unserer Datenbank zu erhalten.",
        skills_result_paid_text_2:
            "In diesem Fall wäre unsere Vorhersage bis zu 80% genau.",
        skills_result_free_label: "Kostenlose Testversion",
        skills_result_paid_label: "Upgrade-Plan für ${price}",

        //careers
        career_title: "Karrieren passen zu Ihren Fähigkeiten:",
        career_des: "Karrierebeschreibung",
        career_select_skills: "Wählen Sie Ihre Fähigkeiten aus",
        career_btn_show: "Zeigen",
        career_btn_upgrade: "Beginnen Sie eine kostenlose 3-Tage-Testversion, um zu sehen",
        career_btn_all: "alle passenden Karrieren↓",
        career_btn_skills: "Karrierefähigkeiten, die Sie gelernt haben",
        career_buy_des:
            "Erkunden Sie Fähigkeiten, die zu dieser Karriere passen. Testen Sie Ihr Wissen und erhalten Sie persönliche Kurse, um Ihre Schwachstellen zu lernen 🚀.",
        career_btn_proceed: "Weiterlernen",
        career_btn_start_career: "Fehlende Fähigkeiten in dieser Karriere lernen",

        // meta
        meta_title_default:
            "Persönlicher KI-Mentor, der Ihnen hilft, Ihre neue Karriere zu finden",
        meta_title_default_short:
            "Persönlicher KI-Mentor, der Ihnen hilft, Ihre neue Karriere zu finden",
        meta_title_rating: "Bewertung der Benutzer nach Münzen auf Unschooler. ",
        meta_title_courses:
            "KI-Onlinekurse auf Unschooler.me, angetrieben von GPT-4 mit Video von YouTube. Lernen Sie jede Fähigkeit, erstellen Sie Projekte und erreichen Sie Ihr Karriereziel.",
        meta_title_policy: "Datenschutzrichtlinie auf Unschooler",
        meta_title_terms: "Nutzungsbedingungen auf Unschooler",
        meta_task_title: "Unterricht auf Unschooler",
        meta_event_title: "Online-Kurs auf unschooler",
        meta_my_account: "Unschooler - mein Konto",
        meta_programs:
            "Erforschen Sie Themen in Ihrem eigenen Tempo und speichern Sie Ihre Entdeckungen.",
        meta_default_description:
            "Spaßige schrittweise Lektionen mit Online-Klassen, geleitet von Profis, um Fähigkeiten für die Zukunft zu erlangen",
        meta_description_default_primary:
            "Unschooler ist eine Online-Bildungsplattform mit Online-Kursen und -Lektionen, in denen Profis Kurse für Jugendliche rund um praktische Projekte veröffentlicht haben, schrittweise Lektionen hinzufügen und Feedback zu Online-Klassen geben. \n" +
            "Jedes neue Ergebnis wird im Portfolio der Jugendlichen gespeichert und aktualisiert die Fähigkeitenkarte. Es funktioniert als ein natürlicher Karriereweg.",
        meta_description_courses:
            "Generieren Sie Online-Kurse mit Video und KI für Ihr persönliches Karriereziel mit schrittweisen Lektionen. Teilen Sie sie mit Ihren Schülern.",
        meta_description_rating:
            "Münzen sind eine virtuelle Währung, die Sie verdienen und für neues Wissen ausgeben. Teilen und sammeln Sie sie: Bestehen Sie Quiz, veröffentlichen Sie Ihre Ergebnisse und Tutorials, sammeln Sie Likes dafür, schreiben Sie sich in Kurse ein und erstellen Sie Ihre eigenen.",
        meta_description_policy:
            "Unschooler ist eine Online-Bildungsplattform mit Online-Kursen und -Lektionen, in denen Profis Kurse für Jugendliche rund um praktische Projekte veröffentlicht haben, schrittweise Lektionen hinzufügen und Feedback zu Online-Klassen geben.",
        meta_description_terms:
            "Unschooler ist eine Online-Bildungsplattform mit Online-Kursen und -Lektionen, in denen Profis Kurse für Jugendliche rund um praktische Projekte veröffentlicht haben, schrittweise Lektionen hinzufügen und Feedback zu Online-Klassen geben.",
        meta_description_terms_mentor:
            "Unschooler ist ein Marktplatz für Online-Kohortenkurse und asynchrone UGC-Lektionen. Tutorials sind interaktive Artikel mit Quiz und eingebetteten YouTube-Videos. Die Menschen zeigen und erzählen, was sie erstellt haben und teilen cooles Lernmaterial. Der Online-Kurs ist ein geschlossener Videokonferenzraum für Gruppenkurse. Er beinhaltet einen Satz von Lektionen, die nur für die Teilnehmer verfügbar sind, Zahlungen, Zeitplanung, die Möglichkeit, Ergebnisse der Schüler zu teilen und Lernnotizen zu machen.",

        // phone
        phone_remainders: "WhatsApp-Erinnerungen",
        phone_desciption:
            "Wir senden Ihnen Lernaufgaben und Erinnerungen per WhatsApp. Kein Spam oder Werbung, nur Informationen, die Sie bezahlt oder getestet haben.",
        phone_placeholder: "Telefonnummer",
        phone_button_label: "Speichern",
        show_more: "Mehr anzeigen",

        // google
        google_api_login: "Bei Youtube autorisieren",
        bookmark: "Lesezeichen",
        ask_video: "Video anfragen",
        payment_button_create: "Erstellen Sie Ihren Kurs",
        start: "Starten",
        event_start_learning: "Mit dem Lernen beginnen",
        notif_typing_loader__message: "3-8 Sekunden",

        curriculim_regenerate: "Regenerieren Sie diesen Plan, wenn er Ihnen nicht gefällt ↓",
        curriculim_generate: "Generieren Sie Ihren Kursplan",
        save_notes: "Notizen speichern",

        // forms
        form_allow_answer_placeholder: 'ID der nächsten Lektionen "345"',
        quiz_generate: "Test generieren",
        summary: "Zusammenfassung anzeigen",
        summary_hide: "Zusammenfassung ausblenden",
        course: "Kurs",
        quiz: "Quiz",
        add_courses_btn: "Fügen Sie alle Ihre Kurse hinzu",
        add_creator: "Ersteller hinzufügen",
        course_creators: "Kursersteller:",
        students: "Schüler",
        leave: "Verlassen",
        last_questions: "Letzte Lektionen, Tests und Chats",
        login_members: "Login für Mitglieder",
        sign_to_join: "Treten Sie dieser Schule bei",
        load_more: "mehr laden",
        youtube_channel: "Ihre YouTube-Kanal-ID",
        intro: "Wählen oder suchen Sie ein Video:",
        continue: "Fortsetzen",
        generate_video: " Lektion aus Ihrem Inhalt generieren",
        ask_video_placeholder: "Video anfragen, wenn Sie etwas nicht verstehen",
        search_string: "Video suchen…",
        form_text_challenge: "Herausforderung",
        form_text_videosum_placeholder: "Automatisch generierte Videozusammenfassung nur verfügbar, wenn das Video Untertitel enthält",
        form_text_data_title: "Aufforderung: Lernziele, Ergebnisse und Bewertungen",
        form_text_data_placeholder: "Beschreiben Sie den Inhalt, den Sie erhalten möchten, fügen Sie einen beliebigen Artikel oder Notizen ein, um eine Lektion aus dem Text zu generieren. Maximale 50.000 Zeichen. ",
        form_text_learning: "Zusammenfassung der Quelle",
        form_text_learning_placeholder: "Beschreiben Sie den Inhalt, den Sie erhalten möchten",
        form_text_description: "Beschreibung",
        form_text_step: "Schritt",
        form_text_step_order: "Die Reihenfolge der Fragen ändern",
        published: "Veröffentlicht",
        learn: "Lernen",
        event_preenroll: 'Nehmen Sie am Kurs teil und abonnieren Sie die täglichen Aufgabenbenachrichtigungen',
        event_preenroll_description: 'Tägliche Aufgaben abschließen und KI-generiertes Feedback erhalten. Arbeiten Sie an einem Projekt für Ihr Portfolio und nehmen Sie Bewertungen vor.',
        event_enroll_course: 'Beitreten',
        event_moneyback: 'Preis:',
        event_you_in: "Sie haben sich für den Kurs angemeldet!",
        delete_this_step: "löschen",

        generate_subtitles: 'Untertitel für diese Lektion generieren',
        progress_description_message: 'KI generiert Beschreibung und Lernschritte. Ihre Daten werden nicht verwendet, um die KI zu trainieren.',
        progress_plan_generate_message: 'KI generiert Ihren persönlichen Plan.',
        progress_create_question_message: 'Schritte werden erstellt, denen Sie folgen werden, um das Ziel zu erreichen.',
        progress_check_result_message: 'Ihre Lösung wird überprüft...',
        progress_subtitle_generation_message: 'Untertitel-Generierung...',
        progress_update_database_data: 'Tutorial wird generiert...',
        connect_my_youtube_channel: 'Mein Kanal',
        connect_another_channel: 'Einen anderen Kanal wählen',
        connecting_to_youtube_channel: 'Verbindung zum YouTube-Kanal herstellen',

        embed_modal_title: 'Diesen Kurs in Ihre Plattform einbetten',
        embed_copy_title: 'Code kopieren',
        embed_copy_text: 'Code in die Zwischenablage kopiert',
        copy_label: 'Kopieren',
        cancel_label: 'Abbrechen',
        footer_educators: 'Lösung für Pädagogen',
        premium_start: "Start",
        premium_creator: "Ersteller",
        premium_university: "Universität",
        premium_creator_description: "Erstellen Sie in Minuten Kurse aus Ihren Videos",
        premium_university_description: "Integrieren Sie Unschooler in Ihre Plattform",
        upgrade: "Upgrade",
        contact_sales: "Vertrieb kontaktieren",
        features: "Alle Funktionen",
        custom: "Anpassen",

        solution_placeholder: "Beschreiben Sie Ihre Lösung für diese Aufgabe",
        solution_send: "Lösung senden",
        learning_type: "Wählen Sie, wie Sie lernen möchten",
        learning_text: "Text und Beispiele lesen",
        learning_project: "Mit einem kleinen Projekt üben",
        learning_video: "Ein Video finden",
        learning_check: "Ihr Verständnis überprüfen",
        learning_info: "Infografiken auswählen",
        learning_quiz: "Mit einem Quiz spielen",

        // 
        tab_ai_lesson: "KI-Lektion",
        tab_ai_channel: "YouTube-Kanal",
        tab_ai_vimeo: "Vimeo",
        ask_placeholder_def: "Stellen Sie eine beliebige Frage",
        ask_placeholder_yt: "https://www.youtube.com/watch?v=FCqkUi1-7S0",
        question_regenerate: "reinigen",
        question_add: "mehr",

        header_courses: "KI-Videokurse für Pädagogen, Plattformen & Unternehmen",
        upload_video: "Laden Sie mp4 hoch, max. 300Mb 30 min",
        ai_course_promo: "Erstellen Sie einen Kurs für jedes neue Ziel",
        ai_mentor_promo: "Fragen zu Karriereherausforderungen und neuen Fähigkeiten stellen",
        ai_test_promo: "Testen Sie Ihre Fähigkeiten und teilen Sie sie mit anderen",
        ai_lesson_promo: "Ihren Inhalt in eine Lektion umwandeln",
        ai_channel_promo: "YouTube-Kanal verbinden und Kurse aus Ihrem Inhalt generieren",

        tab_ai_video: "YouTube/Vimeo-Link",
        tab_ai_text: "Text",
        tab_ai_mp4: "Video",
        tab_ai_link: "URL",
        tab_ai_pdf: "PDF",

        //checkout
        checkout_subscription: 'Monatsabonnement',
        checkout_weekly_subscription: 'Wochenabonnement',
        checkout_guide_title: 'Holen Sie sich Ihren persönlichen Karriereführer',
        checkout_enroll_title: 'Kurs belegen',
        checkout_thanks: 'Danke für die Zahlung',
        checkout_booking_confirmation:
            'Wir senden Ihnen eine Bestätigung Ihrer Buchung per E-Mail - ',
        checkout_success_purchase: 'Sie haben Zugang zum Premium-Club gekauft',
        checkout_link_for_activation:
            'Wir senden einen Link zur Aktivierungsseite des Geschenks an die E-Mail, die Sie beim Bezahlen eingegeben haben.',
        checkout_check_other_lessons: 'Überprüfen Sie andere Lektionen',
        checkout_go_to_skills: 'Gehen Sie zum Testen von Interessen mit YouTube',

        // Stripe
        stripe_student_name: "Vor- und Nachname des Schülers",
        stripe_student_email: "E-Mail des Schülers",
        stripe_student_phone: "Telefon des Schülers",
        stripe_accept: 'Ich akzeptiere',
        stripe_accept_terms: 'Nutzungsbedingungen',
        stripe_accept_terms_confirm: 'und bestätige, dass mein Computer oder Telefon entspricht',
        stripe_technical_requirements: 'Technische Anforderungen',
        stripe_input_card_number: 'Geben Sie Ihre Kreditkartendaten ein',
        stripe_pay: 'Bezahlen',
        stripe_accept_error: 'Bitte stellen Sie sicher, dass Ihr Arbeitsplatz für Online-Kurse geeignet ist.',
        stripe_error_email_message: "Das sieht nicht nach der richtigen E-Mail aus!",
        stripe_error_phone_message: 'Bitte überprüfen Sie die Telefonnummer',

        form_text_course_title: "Geben Sie ein Kurs-Thema, Lernergebnisse oder Ziel ein",
        form_workspace_placeholder: "Name Ihrer Schule",
        form_workspace_description: "Beschreibung Ihrer Schule",
        form_workspace_create: "Schuleinstellungen speichern",
        form_workspace_logo: "Logo hochladen",
        form_workspace_cover: "Cover hochladen",
        form_workspace_description_placeholder: "Schreiben Sie den Zweck dieses Arbeitsbereichs",
        form_link_placeholder: "URL der Webseite: KI wird sie analysieren und eine Lektion generieren.",
        form_link_placeholder_input: "https://en.wikipedia.org/wiki/First_class_travel",

        free: "frei",
        translate_modal_title: 'Übersetze diesen Kurs in jede Sprache. Wir werden ihn duplizieren und die Texte durch die gewählte Sprache ersetzen:',
        translate_btn: 'Übersetzen',

        event_add_calendar: "Zum Kalender hinzufügen",
        event_added_calendar: "Zum Kalender hinzugefügt",
        event_add_calendar_title: "Benachrichtigungen wurden zu Ihrem Kalender hinzugefügt",
        event_add_calendar_description: "Wir erinnern Sie jeden Tag daran, Ihre Karriere voranzutreiben",
        event_connect_to_call: 'Anruf beitreten',

        create_your_school: "Erstelle deine Schule",
        setup_your_school: "Richte deinen Schul-Arbeitsbereich ein",
        invite: "Einladen",
        download: "Herunterladen",
        translate: "Übersetzen",
        add_your_content: "Wähle eine Informationsquelle aus oder füge deinen Inhalt hinzu",
        course_selling: "3. Kursverkauf aus persönlichem Videoinhalt (Beginnend mit dem Creator-Plan)",
        form_text_course_plan: "Überprüfe deinen Lernplan, lösche beliebige Themen oder generiere ihn neu",

        loader_generic: "wird generiert, es dauert 1-2 Min",
        loader_quiz: "Quiz wird erstellt und gespeichert",
        loader_task: 'Lektion wird generiert, warte eine Minute',
        loader_step: 'KI erstellt einen Schritt ',
        loader_step_contentquiz: 'KI erstellt einen Schritt-Leitfaden, der dir mit einem Quiz hilft, dein Ziel zu erreichen.',
        loader_step_quiz: 'KI erstellt einen Schritt-Leitfaden, der dir mit einem Quiz hilft, dein Ziel zu erreichen.',
        loader_nextstepai: 'KI generiert Beschreibung und Schritte. Ihre Daten werden nicht verwendet, um die KI zu trainieren.',
        loader_nextstepai_async: 'Nächster Schritt wird generiert, warte bis das Laden nach 1 Min. beendet ist…',
        loader_video: 'KI sammelt die relevantesten YouTube-Videos zu diesem Thema.',
        loader_assess: `KI erstellt eine praktische Herausforderung, die dir hilft, dein Ziel zu erreichen.`,

        tab_workspace_tutorial: "Veröffentlichte Lektionen & Tests",
        tab_workspace_tutorial_draft: "Meine Testentwürfe",
        title_task: "Lass uns üben",
        select_text: "Wähle Text für",
        btn_skip: "Überspringen",
        ai_popup_explain: "Erklären",
        edit: "Bearbeiten",
        ask_ai: "KI bitten, eine personalisierte Lektion hinzuzufügen",
        loader_translate: "KI übersetzt diesen Kurs mit allen Schritten. Nach diesem Prozess werden Sie zum neuen Kurs weitergeleitet.",
        ai_generate_tasks_button: "Ganzen Kurs generieren",
        ai_generation_tasks: "Kursgenerierung",
        click_upload: "Zum Hochladen klicken",
        feedback_field: "  Was wurde in diesem Tutorial vermisst?",
        form_text_data_file: "Lade deine PDF hoch: Wir nehmen die ersten 30.000 Zeichen und generieren die Lektion.",

        tab_event_published: "Veröffentlichte Kurse",
        tab_event_drafts: "Entwürfe",
        tab_events_my: "Meine Kurse",
        tab_events_user: "Kurse",
        tab_events_all: "Alle Kurse",
        tab_event_by_subjectIds: "Ausgewählte Kurse",

        vimeo_add_desc: "Füge einen Link zu deinem Vimeo-Ordner hinzu, um nach Videos zu suchen",
        vimeo_add: " Vimeo-Ordner hinzufügen",
        vimeo_your: "Dein Vimeo-Ordner",
        vimeo_change: "Vimeo-Ordner ändern",

        create_event_tab_1: "Kursquelle",
        create_event_tab_2: "Lektionen bearbeiten",
        create_event_tab_3: "Kurs anzeigen",

        search_placeholder: 'Suchen',
        search_result_title: 'Suchergebnisse nach Anfrage',
        search_result_not_found: 'Keine Ergebnisse gefunden',
        wrksp_add_section: 'Veranstaltungsabschnitt hinzufügen',
        wrksp_add_section_plchldr: "Titel hier eingeben",
        wrksp_add_section_title: "Titel",
        form_workspace_custom_domain: "Benutzerdefinierte Domain",
        form_workspace_add_records: "Fügen Sie A- und TXT-Einträge zu Ihrem Domainregister hinzu:",
        form_workspace_content: "Inhalt",
        form_workspace_host: "Gewünschter Host",
        form_workspace_domain: "Domain",
        form_workspace_sections: "Kursabschnitte",
        form_workspace_invite: "Mitglieder einladen",
        form_workspace_send_invite: "Einladung senden",
        participants_list_title: " Studenten haben sich diesem Kurs angeschlossen",
        learning_time: "Lernzeit",
        form_lesson_tab: 'Quelle der Lektion',
        form_content_tab: 'Inhalt',
        form_display_tab: 'Anzeige',
        feedback_easy: 'zu leicht',
        feedback_abstract: 'zu abstrakt',
        feedback_wordy: 'zu wortreich',
        feedback_steps: 'mehr Schritte',

        workspace_title_name: 'Branding und benutzerdefinierte Domain',
        workspace_title_content: 'Webseitenlayout',
        workspace_title_payments: 'Zahlungen',
        form_workspace_settings: "Schuleinstellungen",
        auth_form_title_signup: "Neuen Account erstellen",

        workspace_host_required: 'Der Host ist erforderlich',
        workspace_host_is_not_valid: 'Host ist ungültig!',
        workspace_host_extra: 'Der Host darf nur Kleinbuchstaben ohne Leerzeichen enthalten (kann Zahlen und Bindestriche enthalten).',
        workspace_host_exist: 'Derselbe Host existiert bereits',
        workspace_domain_status: 'Status',
        workspace_domain_updates: '(Aktualisierungen in 24 Stunden)',
        workspace_layout_message: 'Verwalten Sie die Aufmerksamkeit der Schüler mit einer Gruppe von Fähigkeiten. Sie können sie auch auf der Hauptseite konfigurieren und ändern.',
        workspace_domain_is_not_valid: 'Ungültiger Domänenname',
        workspace_domain_is_not_extra: 'Dieses Feld ist optional. Die Domain muss aus Kleinbuchstaben bestehen (kann Bindestriche und Punkte enthalten). Beispiele: ',

        stripe_connect_label: 'Verbinden Sie sich mit Stripe',
        stripe_connect_existed_account: 'Sie haben ein Stripe-Konto verbunden.',
        stripe_connect_existed_text_1: 'Verbinden Sie Ihr Stripe-Konto, um Zahlungen für Kursverkäufe zu erhalten',
        stripe_connect_existed_text_2: 'Stripe lässt sich schnell einrichten und erhebt keine monatlichen Gebühren wie die meisten Zahlungsabwickler, sondern nur eine geringe Gebühr pro Transaktion.',
        stripe_connect_existed_text_3: 'Sie müssen Ihr Stripe-Konto erstellen und verwalten, falls Sie noch keines haben.',
        stripe_connect_existed_text_4: 'Sie müssen sich um Rückbuchungen und alle Kundendienstprobleme kümmern. Wir haben keine Kontrolle über die Zahlungen Ihrer Kunden und sind nicht dafür verantwortlich.',

        //translate_to_arrange
        ai_chat_questin_text1: 'Welche Programmiersprache soll man lernen, um Spiele zu erstellen?',
        ai_chat_question_text2: 'Was sind die täglichen Aufgaben eines Front-End-Entwicklers?',
        login_button: 'Mit E-Mail einloggen',
        reset_password_button: 'Passwort zurücksetzen',
        email_input_text: 'E-Mail',
        password_input_text: 'Passwort',
        enter_password_warning: 'Gib dein Passwort ein',
        enter_email_warning: 'Gib deine E-Mail ein',
        embed_button: 'einbetten',
        add_member_button: 'Mitglied hinzufügen',
        enter_title_warning: 'Bitte geben Sie einen Titel ein!',
        title_input_text: 'Titel',
        Change_title: 'Profil Daten ändern',
        invite_subtitle: 'Ihre Schule ist bereit, melden Sie sich an und laden Sie Ihre Schüler ein',
        welcome_title_text: 'Willkommen in der {workspace} Schule',
        access_information_start: 'Zugriff auf die',
        vimeo_folder: 'vimeo-Player',
        sign_to_join_signup: 'Registrieren',
        payment_title_creator: "Kostenlose Testversion des Creator-Plans",
        payment_title_premium: 'Premium-Plan kostenloser Test',

        congrats: "Glückwunsch! Mach weiter so und erreiche dein Ziel!",
        steps: "Schritt-für-Schritt-Anleitung:"
    },
};
