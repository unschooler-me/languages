/* eslint-disable import/no-anonymous-default-export */
import { LOCALES } from "../locales";
import {
    PLACEHOLDER_FAVORITES,
    PLACEHOLDER_MY,
} from "../../Components/constant";

export default {
    [LOCALES.PORTUGUESE]: {
        // common
        auth_button: "Entrar com Google",
        auth_button_short: "Entrar ",
        skills: "habilidades",
        careers: "Carreiras",
        month: "meses",
        terms: "Termos",
        policy: "Política de Privacidade",
        policy_content: "Política de Conteúdo",

        //footer
        footer_skill_map: "Mapa de Habilidades",
        footer_career_explorer: "Explorador de Carreiras",
        footer_courses: "Cursos online baseados em projetos",
        footer_pricing: "Preços",

        //btns
        more: "mais",
        share: "compartilhar",
        junior: "Fácil",
        middle: "Médio",
        senior: "Difícil",

        // header
        header_profile: "Especialização:",
        nav_tutorials: "carreira",
        nav_skills: "habilidades",
        nav_premium: "meu plano",
        nav_upgrade: "melhorar",
        nav_ask: "aprender",
        nav_exit: "Sair",
        nav_workspace: "ensinar",
        program_tutorial: "Selecione seu assunto favorito:",
        edit_user_label: "Meu perfil",
        user_name_label: "Nome do usuário",
        user_picture_label: "Avatar do usuário",

        //profile
        profile_moto: "Cursos em vídeo com IA para o seu objetivo de carreira pessoal.",
        profile_description:
            "Aprenda tudo o que precisa em minutos 24/7. Encontre a carreira mais adequada. Gere cursos pessoais com vídeos, questionários e feedback de IA para aprender habilidades que estão faltando.",
        profile_reccomended: "Carreiras recomendadas",
        profile_learn: "Aprenda algo com o mentor de IA, obtenha ",
        profile_map: "mapa com suas habilidades",
        profile_list_suggested: "e lista de sugeridos ",
        profile_upgrade_skills:
            "especialização é a área de conhecimento com a qual você mais se envolve. Aqui você aprendeu",
        profile_specialisation_times: "vezes",
        profile_specialisation_my: "Minha especialização",
        profile_your_learned: " você aprendeu",
        profile_matching: " correspondendo às suas habilidades",
        add_explainer_short: "Vincular aula a este curso",

        //skills
        skills_update_interest: "Atualizar habilidades do YouTube",
        skills_test_interest: "Descobrir habilidades no YouTube",

        //event
        event_create: "Criar um curso do zero",
        event_finish: "Saiu da sala ao vivo",
        event_proceed: "Sala ao vivo",
        event_change: "Editar curso",
        event_upgrade: "Inicie a avaliação gratuita para editar",
        event_btn_friend: "Compartilhar com os alunos",
        event_tasks_description: "Você vai aprender",
        event_result: "Resultado: você criará",
        event_need: "Você vai precisar",
        event_how: "Como funciona",

        create_event_title_edit: "Editar curso",
        create_event_title_create: "Criar um curso",
        create_event_remove_event: "Excluir curso para sempre",
        create_event_title_label: "Título do curso",
        create_event_title_message: "O curso deve ter um título",
        create_event_subject_label: "Selecione tags do curso para busca e organização",
        create_event_subject_extra:
            "Envie uma tag não encontrada para o chat, nós a adicionaremos em 15 min",
        create_event_subject_message:
            "Um evento sem tags não será criado",
        create_event_cost_label: "Preço por aluno (USD) / Você ganha de 1 aluno",
        create_event_save: "Salvar curso e sair",

        // event set date
        event_set_date_every_week: "Toda {day} às {time}",
        event_set_date_exist: "Evento já existe",
        event_set_date_added: "Evento adicionado",
        event_set_date_title: "Agenda",
        event_set_date_description:
            'Um curso sem data e hora será adicionado à seção "Anúncios". Esta opção é adequada para um conjunto de grupos.',
        event_set_date_schedule: "de {date} toda {day}, {time}",
        event_set_date_remove_item: "Remover aula",
        event_set_date_add_date: "Adicionar data e hora",
        event_set_date_date: "Data",
        event_set_date_time: "Hora",
        event_set_date_dont_repeat: "Não repetir",
        event_set_date_repeat: "Repetir toda semana",

        //groups
        group_groups: "Minhas escolas com cursos para estudantes:",
        group_tutorial: "Crie seu curso:",
        group_soon: "Cursos em destaque, experimente de graça ↓",
        group_soon_description:
            "Os cursos mais interessantes criados pelos nossos usuários. Você pode aprendê-los gratuitamente.",

        // Participants list
        participants_list_subsicribe: "Inscrição",

        //Payment page
        premium: "Premium",
        premium_pro: "Pro",
        premium_your: "Seu plano",
        premium_description:
            "Teste interesses e desenvolva habilidades que estão faltando",
        premium_pro_description:
            "Para educadores criarem sua escola e venderem cursos",
        premium_moneyback: "Teste grátis de 3 dias",
        payment_premium_monthly: "Começar teste grátis",
        payment_title: "Melhore seu plano",
        payment_button: "Começar teste grátis",
        payment_button_course: "Comece o teste grátis para criar cursos",
        payment_request_modal_cancel: "Cancelar",
        premium_valid: "a assinatura é válida até",
        premium_why: "Por que nós?",
        premium_why_des:
            "Nosso IA economiza horas de pesquisa no Google, repetindo coisas que você já sabe e lendo textos longos e vídeos no YouTube não informativos. Ele aprende constantemente com seus dados.",
        premium_why_call:
            "Descobrir sua paixão mais cedo influencia dramaticamente onde você estará em 15 anos. Isso pode custar milhares de dólares por ano, problemas de saúde e mentais, ou se tornar uma jornada feliz cheia de sucesso e entusiasmo.",

        //notifications
        notif_copy_event_link_description:
            "Envie o link para os seus amigos no chat, e eles podem entrar na aula.",
        notif_copy_event_link_workspace:
            "Envie o link para os seus alunos e colegas no chat, e eles podem se juntar a esta escola",
        notif_copy_link_title: "Link copiado para a área de transferência",
        notif_invite: "Enviamos um convite para os seus membros",
        notif_copy_link_description:
            "Gostou? Mostre aos seus amigos ou alunos!",
        notif_achieve_subject: "Você desbloqueou uma nova habilidade:",
        notif_achieve_theme: "Você desbloqueou uma nova habilidade:",
        notif_achieve_theme_skills: "Mapa das suas habilidades",
        notif_quiz_creating:
            "O teste está sendo criado... Pode levar 40 segundos. Por favor, aguarde até o final.",

        // event card
        event_card_button_join_room: "Participar ⚡",
        event_card_button_joined: "Inscrito 😊",

        // tabs
        tab_my_tutorial: "Minhas aulas & testes",
        tab_user_tutorial: "Aulas dos usuários",
        tab_subject_tutorial: "Novas aulas por dados",
        tab_subject_tutorial_new: "Novas aulas",
        tab_tag_tutorial: "Aulas por tag",
        tab_ai_mentor: "Chat IA",
        tab_ai_course: "Curso IA",
        tab_ai_test: "Teste",
        tab_tutorial_top: "Topo",
        tab_tutorial_featured: "Em destaque",

        //ai
        ai_mentor_place:
            "Pergunte sobre objetivos de carreira ou desafios de hoje",
        ai_course_des:
            "Construa seu próprio robô com Python, usando Inteligência Artificial, Aprendizado de Máquina e OpenAI GPT-4.",
        ai_course_channel:
            "Design de UX/UI para aplicativos móveis, sites e jogos",
        ai_test_des:
            "Teste suas habilidades para você ou seus alunos. Escreva o que você quer aprender e a IA gerará um Quiz. Não se esqueça de selecionar o nível de habilidade.",
        ai_test_place:
            "Escreva a habilidade, adicione o objetivo de carreira ou conhecimento que você quer verificar",
        ai_popup_example: "Exemplo",
        ai_popup_steps: "Passos",
        ai_popup_code: "Código",
        ai_popup_facts: "Fatos",
        ai_popup_video: "Vídeo",
        ai_popup_image: "Imagem",

        // task
        answer_link_event: "😎 só para inscritos 😎",
        task_try_again: "Errar nos torna inteligentes! Vamos corrigir isso",

        // forms
        form_theme_error_message: "Escolha um tópico que faça sentido",
        form_theme_placeholder: "Habilidades aprimoradas por esta aula",
        form_title_task_error_message: "Descreva o que você vai fazer",
        form_title_task: "Título",
        form_title_prompt: "Prompt de aula",
        form_step_prompt: "Prompt de passo",
        form_description_task_placeholder:
            "Adicione descrição, suas notas, solução e exemplos.",
        form_video_placeholder: "Link para o vídeo-tutorial no youtube ou vimeo",
        form_add_timestamp: "Adicionar timestamp",
        form_text_question_answer_placeholder: "Adicione desafio prático com verificação de IA",
        form_is_free_label: "Grátis",
        form_is_draft: "Rascunho",
        form_is_autogeneratte: "Autogerar",
        form_is_steps: "Passos",
        form_button_save: "Salvar",
        form_button_add_task: "Publicar",
        form_button_save_answer: "Salvar",
        form_add_comment: " Tem uma pergunta? Pode perguntar aqui",
        form_button_add_comment: "Adicionar um comentário 🙌",
        form_error_add_comment: "Ops, o campo está vazio",
        form_cover_title: "Enviar imagem",
        form_cover_error:
            "A imagem é muito grande. Por favor, otimize-a ou use outra.",
        form_field_is_right: "Certo?",
        form_add_new_answer: "Adicionar opção",
        form_remove_question: "Excluir este passo",
        form_add_question: "Adicionar passo",
        form_remove_task: "Excluir aula para sempre",
        form_add_task_to_event: "Adicionar uma nova aula",
        form_field_is_required: "O campo é obrigatório",
        form_one_is_right: "Um campo deve ser marcado como correto",
        form_min_one_is_right: "Pelo menos um campo deve ser marcado como correto",
        form_question_is_required:
            "A pergunta deve conter pelo menos uma resposta",
        form_question_label: "Adicionar descrição ou Pergunta",
        form_explanation_label: "Adicionar tipo de conteúdo e explicação",
        form_task_create_title: "Criar aula",
        form_task_edit_title: "Editar aula",
        form_task_edit_add_tag_placeholder: "Tags da aula",
        form_task_edit_add_tag_button: "Adicionar nova tag",
        form_task_max_tags_limit_error: "Você pode escolher {count} tags ou menos",

        // backend error
        backend_error: "Algo deu errado, por favor tente novamente mais tarde.",

        //auth from
        auth_form_title: "Selecionar Idioma & Entrar",
        auth_youtube_form_title: "Adicione seus interesses do YouTube",
        auth_youtube_form_description:
            "Vamos criar seu mapa pessoal de habilidades e prever uma paixão com base em seus vídeos favoritos no YouTube.",
        auth_youtube_form_description2:
            "Explore sua paixão com base em seus vídeos favoritos no YouTube. Selecione qualquer carreira e nível para se tornar o Melhor de Todos os Tempos: complete aulas, participe de cursos online e publique seu próprio conhecimento.",
        auth_youtube_form_description3:
            "e veja o mapa pessoal de habilidades com previsão profissional.",
        auth_form_secondary1: "Como processamos dados: ",
        auth_form_secondary2: "e  ",
        auth_form_notify: "Receba notificações sobre maneiras de aprimoramento",

        // result
        result_right_answer: "correto",
        result_wrong_answer: "errado",

        //skills
        skills_my: "← sua especialização",
        skills_learn_my: "Teste e aprenda qualquer habilidade",
        skills_des: "estrelas coloridas são habilidades que aprendi em ",
        skills_result_title:
            "Encontramos {totalVideo} vídeos que você gostou no Youtube",
        skills_result_free_title: "{freePercent}% de precisão",
        skills_result_free_text:
            "Na versão gratuita, processaremos apenas <b>{allComparedVideo} desses vídeos</b> e apresentaremos <b>{matchedVideo} dos seus interesses </b> que correspondem à nossa base de habilidades.",
        skills_result_free_text_2: "Não há dados suficientes para processar.",
        skills_result_free_text_3:
            "Na versão gratuita, processaremos apenas {allComparedVideo} vídeos que você gostou anteriormente. Para obter um relatório detalhado como todos os vídeos inspiradores no YouTube por um mês, volte para nós e teste seus interesses novamente.",
        skills_result_paid_title: "{paidPercent}% de precisão",
        skills_result_paid_text_1:
            "No plano pago processamos ★todos os seus dados, com a possibilidade ★ de editar suas habilidades manualmente e ★ de realizar testes adicionais para obter pelo menos 200 correspondências entre seus interesses e nosso banco de dados.",
        skills_result_paid_text_2:
            "Nesse caso, nossa previsão seria de até 80% precisa.",
        skills_result_free_label: "Versão de teste gratuita",
        skills_result_paid_label: "Plano Atualizado por ${price}",

        //careers
        career_title: "carreiras que correspondem às suas habilidades:",
        career_des: "Descrição da Carreira",
        career_select_skills: "Selecione suas habilidades",
        career_btn_show: "Mostrar ",
        career_btn_upgrade: "Inicie o teste gratuito de 3 dias para ver ",
        career_btn_all: "todas as carreiras correspondentes↓",
        career_btn_skills: "habilidades de carreira que você aprendeu",
        career_buy_des:
            "Explore habilidades que correspondem a esta carreira. Teste seu conhecimento e obtenha cursos pessoais para aprender pontos cegos 🚀.",
        career_btn_proceed: "Continue aprendendo",
        career_btn_start_career: "Aprenda habilidades ausentes nesta carreira",

        // meta
        meta_title_default:
            "Mentor de IA pessoal que ajuda a encontrar sua nova carreira",
        meta_title_default_short:
            "Mentor de IA pessoal que ajuda a encontrar sua nova carreira",
        meta_title_rating: "Classificação dos usuários por moedas no Unschooler.",
        meta_title_courses:
            "Cursos de IA online no Unschooler.me alimentados por GPT-4 com vídeo do YouTube. Aprenda qualquer habilidade, crie projetos e alcance seu objetivo de carreira.",
        meta_title_policy: "Política de privacidade no Unschooler",
        meta_title_terms: "Termos de uso no Unschooler",
        meta_task_title: "lição no Unschooler",
        meta_event_title: "Curso online no unschooler",
        meta_my_account: "Unschooler - minha conta",
        meta_programs:
            "Explore assuntos no seu próprio ritmo e salve suas descobertas.",
        meta_default_description:
            "Aulas divertidas passo a passo com aulas online conduzidas por profissionais para ganhar habilidades para o futuro",
        meta_description_default_primary:
            "O Unschooler é uma plataforma educacional online com cursos e aulas online onde profissionais publicaram cursos para adolescentes em torno de projetos práticos, adicionam aulas passo a passo e fornecem feedback em aulas online. \n" +
            "Cada novo resultado é armazenado no portfólio dos adolescentes e atualiza o mapa de habilidades. Funciona como um caminho natural de carreira.",
        meta_description_courses:
            "Gere cursos online com vídeo e IA para o seu objetivo de carreira pessoal com aulas passo a passo. Compartilhe-os com seus alunos.",
        meta_description_rating:
            "Moedas são uma moeda virtual que você ganha e gasta em um novo conhecimento. Compartilhe e colete: passe em quizzes, publique seus resultados e tutoriais, colete curtidas para eles, inscreva-se em cursos e crie o seu próprio.",
        meta_description_policy:
            "O Unschooler é uma plataforma educacional online com cursos e aulas online onde profissionais publicaram cursos para adolescentes em torno de projetos práticos, adicionam aulas passo a passo e fornecem feedback em aulas online.",
        meta_description_terms:
            "O Unschooler é uma plataforma educacional online com cursos e aulas online onde profissionais publicaram cursos para adolescentes em torno de projetos práticos, adicionam aulas passo a passo e fornecem feedback em aulas online.",
        meta_description_terms_mentor:
            "O Unschooler é um mercado de cursos online em turma e aulas UGC assíncronas. Os tutoriais são artigos interativos com quizzes e vídeos incorporados do YouTube. As pessoas mostram e contam o que criaram e compartilham materiais de aprendizagem legais. O curso online é uma sala de videoconferência fechada para aulas em grupo. Inclui um conjunto de lições disponíveis apenas para os participantes, pagamentos, agendamento, a possibilidade de compartilhar resultados dos alunos e fazer anotações de aprendizado.",

        // phone
        phone_remainders: "Lembretes do WhatsApp",
        phone_desciption:
            "Enviaremos tarefas de aprendizado e lembretes no WhatsApp. Sem spam ou anúncios, apenas informações que você pagou ou testou.",
        phone_placeholder: "Número de telefone",
        phone_button_label: "Salvar",
        show_more: "Mostrar mais",

        // google
        google_api_login: "Autorizar no youtube",
        bookmark: "Favorito",
        ask_video: "Solicitar vídeo",
        payment_button_create: "Crie seu curso",
        start: "Começar ",
        event_start_learning: "Começar a aprender",
        notif_typing_loader__message: "3-8 segundos",

        curriculim_regenerate: "Regenere este plano se não gostar ↓",
        curriculim_generate: "Gerar seu plano de curso",
        save_notes: "Salvar suas notas",

        // forms
        form_allow_answer_placeholder: 'ID das próximas lições "345"',
        quiz_generate: "Gerar um teste",
        summary: "Mostrar resumo",
        summary_hide: "Ocultar resumo",
        course: "curso",
        quiz: "questionário",
        add_courses_btn: "Adicione todos os seus cursos",
        add_creator: "Adicionar criador",
        course_creators: "Criadores do curso:",
        students: "alunos",
        leave: "Sair",
        last_questions: "Últimas lições, testes e chats",
        login_members: "Login para membros",
        sign_to_join: "Junte-se a esta escola",
        load_more: "carregar mais",
        youtube_channel: "Seu ID de Canal do YouTube",
        intro: "Selecione ou procure um vídeo:",
        continue: "Continuar",
        generate_video: " Gerar lição a partir do seu conteúdo",
        ask_video_placeholder: "Solicitar vídeo se não entender algo",
        search_string: "Procurar vídeo…",
        form_text_challenge: "Desafio",
        form_text_videosum_placeholder: "Resumo do vídeo autogerado disponível apenas se o vídeo contiver legendas",
        form_text_data_title: "Prompt: Objetivos de aprendizagem, resultados e avaliações",
        form_text_data_placeholder: "Descreva o conteúdo que deseja obter, cole qualquer artigo ou notas para gerar lição a partir do texto. Máximo de 50.000 caracteres. ",
        form_text_learning: "Resumo da fonte ",
        form_text_learning_placeholder: "Descreva o conteúdo que deseja obter",
        form_text_description: "Descrição",
        form_text_step: "Passo",
        form_text_step_order: "Alterar a ordem das questões",
        published: "Publicado ",
        learn: "Aprender",
        event_preenroll: 'Inscreva-se no curso e assine as notificações de tarefas diárias',
        event_preenroll_description: 'Complete tarefas diárias e receba feedback gerado por IA. Trabalhe em um projeto para seu portfólio e faça avaliações.',
        event_enroll_course: 'Participar',
        event_moneyback: 'Preço:',
        event_you_in: "Você se inscreveu no curso!",
        delete_this_step: "excluir",

        generate_subtitles: 'Gerar legendas para esta lição',
        progress_description_message: 'Descrição e etapas de aprendizado geradas pela IA. Seus dados não são usados para treinar a IA.',
        progress_plan_generate_message: 'A IA está gerando seu plano pessoal.',
        progress_create_question_message: 'As etapas estão criadas, seguindo-as você alcançará o objetivo.',
        progress_check_result_message: 'Sua solução está sendo verificada...',
        progress_subtitle_generation_message: 'Geração de legendas...',
        progress_update_database_data: 'Tutorial está sendo gerado...',
        connect_my_youtube_channel: 'Meu canal',
        connect_another_channel: 'Selecionar outro canal',
        connecting_to_youtube_channel: 'Conectando ao canal do YouTube',

        embed_modal_title: 'Incorpore este curso à sua plataforma',
        embed_copy_title: 'Copiar código',
        embed_copy_text: 'Código copiado para a área de transferência',
        copy_label: 'Copiar',
        cancel_label: 'Cancelar',
        footer_educators: 'Solução para educadores',
        premium_start: "Iniciar",
        premium_creator: "Criador",
        premium_university: "Universidade",
        premium_creator_description: "Gere cursos em minutos a partir dos seus vídeos",
        premium_university_description: "Integre o Unschooler à sua plataforma",
        upgrade: "Atualizar",
        contact_sales: "Contatar vendas",
        features: "Todas as funcionalidades",
        custom: "Personalizado",

        solution_placeholder: "Descreva a sua solução para esta tarefa",
        solution_send: "Enviar a solução",
        learning_type: "Escolha como quer aprender",
        learning_text: "Leia texto e exemplos",
        learning_project: "Pratique com pequeno projeto",
        learning_video: "Encontre um Vídeo",
        learning_check: "Verifique seu entendimento",
        learning_info: "Selecione Infográficos",
        learning_quiz: "Brinque com Quiz",

        //
        tab_ai_lesson: "Lição de IA",
        tab_ai_channel: "Canal do YouTube",
        tab_ai_vimeo: "Vimeo",
        ask_placeholder_def: "Faça qualquer pergunta",
        ask_placeholder_yt: "https://www.youtube.com/watch?v=FCqkUi1-7S0",
        question_regenerate: "limpar",
        question_add: "mais",

        header_courses: "Cursos de vídeo de IA para Educadores, Plataformas & Empresas",
        upload_video: "Carregar mp4, máx 300Mb 30 min",
        ai_course_promo: "Crie um curso para qualquer novo objetivo",
        ai_mentor_promo: "Pergunte sobre desafios de carreira e novas habilidades",
        ai_test_promo: "Teste qualquer uma das suas habilidades, compartilhe com outros",
        ai_lesson_promo: "Converta seu conteúdo em uma lição",
        ai_channel_promo: "Conecte o canal do YouTube e gere cursos a partir do seu conteúdo",

        tab_ai_video: "Link do YouTube/Vimeo",
        tab_ai_text: "Texto",
        tab_ai_mp4: "Vídeo",
        tab_ai_link: "URL",
        tab_ai_pdf: "PDF",

        //checkout
        checkout_subscription: 'Assinatura Mensal',
        checkout_weekly_subscription: 'Assinatura Semanal',
        checkout_guide_title: 'Obtenha seu Guia de Carreira pessoal',
        checkout_enroll_title: 'Inscrever-se no curso',
        checkout_thanks: 'Obrigado pelo pagamento',
        checkout_booking_confirmation:
            'Enviaremos a você uma confirmação da sua reserva por e-mail - ',
        checkout_success_purchase: 'você comprou acesso ao clube Premium',
        checkout_link_for_activation:
            'Enviaremos um link para a página de ativação do presente para o e-mail que você forneceu no pagamento.',
        checkout_check_other_lessons: 'Confira outras lições',
        checkout_go_to_skills: 'Vá testar interesses com o YouTube',

        // Stripe
        stripe_student_name: "Nome e sobrenome do aluno",
        stripe_student_email: "E-mail do aluno",
        stripe_student_phone: "Telefone do aluno",
        stripe_accept: 'Eu aceito',
        stripe_accept_terms: 'Termos de uso',
        stripe_accept_terms_confirm: 'e confirmo que meu computador ou telefone corresponde',
        stripe_technical_requirements: 'Requisitos técnicos',
        stripe_input_card_number: 'Insira os detalhes do seu cartão de crédito',
        stripe_pay: 'Pagar',
        stripe_accept_error: 'Por favor, certifique-se de que seu local de trabalho é adequado para aulas online.',
        stripe_error_email_message: "Não parece ser um e-mail correto!",
        stripe_error_phone_message: 'Por favor, verifique o número de telefone',

        form_text_course_title: "Insira um tópico de curso, resultados de aprendizagem ou objetivo",
        form_workspace_placeholder: "Nome da sua escola",
        form_workspace_description: "Descrição da sua escola",
        form_workspace_create: "Salvar configurações da escola",
        form_workspace_logo: "Carregar logotipo",
        form_workspace_cover: "Carregar capa",
        form_workspace_description_placeholder: "Escreva o propósito deste espaço de trabalho",
        form_link_placeholder: "URL da página da web: A IA irá analisá-la e gerar uma lição.",
        form_link_placeholder_input: "https://en.wikipedia.org/wiki/First_class_travel",

        free: "grátis",
        translate_modal_title: 'Traduza este curso para qualquer idioma. Nós vamos duplicá-lo e substituir os textos pelo idioma selecionado:',
        translate_btn: 'Traduzir',

        event_add_calendar: "Adicionar ao Calendário",
        event_added_calendar: "Adicionado ao Calendário",
        event_add_calendar_title: "As notificações foram adicionadas ao seu calendário",
        event_add_calendar_description: "Nós iremos lembrá-lo todos os dias para aprimorar sua carreira",
        event_connect_to_call: 'Participar da Chamada',

        create_your_school: "Crie sua escola",
        setup_your_school: "Configure o espaço de trabalho da sua escola",
        invite: "Convidar",
        download: "Baixar",
        translate: "Traduzir",
        add_your_content: "Selecione a fonte de informação ou adicione seu conteúdo",
        course_selling: "3. Venda do Curso a partir de Conteúdo de Vídeo Pessoal (Começando com o plano Criador)",
        form_text_course_plan: "Revise seu plano de aprendizagem, exclua qualquer tópico ou regenere",

        loader_generic: "está gerando, isso leva de 1-2 min",
        loader_quiz: "quiz está sendo criado e salvando",
        loader_task: 'A lição está gerando, aguarde 1 minuto',
        loader_step: 'IA está criando um passo ',
        loader_step_contentquiz: 'IA está criando um guia de passo que ajuda você a alcançar seu objetivo com quiz.',
        loader_step_quiz: 'IA está criando um guia de passo que ajuda você a alcançar seu objetivo com quiz.',
        loader_nextstepai: 'IA gera descrição e passos. Seus dados não são usados para treinar a IA.',
        loader_nextstepai_async: 'Próximo passo está sendo gerado, aguarde pelo fim do carregamento de 1 min…',
        loader_video: 'IA coleta os vídeos mais relevantes do YouTube sobre este tópico.',
        loader_assess: 'IA está criando um desafio prático que ajuda você a alcançar seu objetivo.',

        tab_workspace_tutorial: "Lições e testes publicados",
        tab_workspace_tutorial_draft: "Rascunhos dos meus testes",
        title_task: "Vamos praticar",
        select_text: "Selecione o texto para",
        btn_skip: "Pular",
        ai_popup_explain: "Explique",
        edit: "Editar",
        ask_ai: "Peça à IA para adicionar uma lição personalizada",
        loader_translate: "IA está traduzindo este curso com todos os passos. Após este processo você será redirecionado para o novo curso em.",
        ai_generate_tasks_button: "Gerar curso inteiro",
        ai_generation_tasks: "Geração do curso",
        click_upload: "Clique para Carregar",
        feedback_field: "O que foi perdido neste tutorial?",
        form_text_data_file: "Envie seu pdf: vamos pegar os primeiros 30 000 caracteres e gerar a lição.",

        tab_event_published: "Cursos Publicados",
        tab_event_drafts: "Rascunhos",
        tab_events_my: "Meus cursos",
        tab_events_user: "Cursos",
        tab_events_all: "Todos os cursos",
        tab_event_by_subjectIds: "Cursos em Destaque",

        vimeo_add_desc: "Adicione um link para a sua pasta do Vimeo para buscar vídeos",
        vimeo_add: "Adicionar pasta do Vimeo",
        vimeo_your: "Sua pasta do Vimeo",
        vimeo_change: "Mudar pasta do Vimeo",

        create_event_tab_1: "Fonte do Curso",
        create_event_tab_2: "Editar Lições",
        create_event_tab_3: "Exibir curso",

        search_placeholder: 'Buscar',
        search_result_title: 'Resultados da pesquisa por solicitação',
        search_result_not_found: 'Nenhum resultado encontrado',
        wrksp_add_section: 'Adicionar seção de eventos',
        wrksp_add_section_plchldr: "Insira o título aqui",
        wrksp_add_section_title: "Título",
        form_workspace_custom_domain: "Domínio personalizado",
        form_workspace_add_records: "Adicione registros A e TXT ao seu registrador de domínio:",
        form_workspace_content: "Conteúdo",
        form_workspace_host: "Host desejado",
        form_workspace_domain: "Domínio",
        form_workspace_sections: "Seções do curso",
        form_workspace_invite: "Convidar membros",
        form_workspace_send_invite: "Enviar convite",
        participants_list_title: " alunos juntaram-se a este curso",
        learning_time: "Tempo de aprendizagem",
        form_lesson_tab: 'Fonte da lição',
        form_content_tab: 'Conteúdo',
        form_display_tab: 'Exibição',
        feedback_easy: 'muito fácil',
        feedback_abstract: 'muito abstrato',
        feedback_wordy: 'muito prolixo',
        feedback_steps: 'mais passos',

        workspace_title_name: 'Marca e domínio personalizado',
        workspace_title_content: 'Layout da página da Web',
        workspace_title_payments: 'Pagamentos',
        form_workspace_settings: "Configurações escolares",
        auth_form_title_signup: "Criar nova conta",

        workspace_host_required: 'O anfitrião é obrigatório',
        workspace_host_is_not_valid: 'O anfitrião não é válido!',
        workspace_host_extra: 'O host deve conter apenas letras minúsculas sem espaços (pode conter números e hifens).',
        workspace_host_exist: 'O mesmo host já existe',
        workspace_domain_status: 'Status',
        workspace_domain_updates: '(atualizações em 24 horas)',
        workspace_layout_message: 'Gerencie a atenção dos alunos com um grupo de habilidades. Você pode configurá-los e alterá-los também na página principal.',
        workspace_domain_is_not_valid: 'Nome de domínio inválido',
        workspace_domain_is_not_extra: 'Este campo é opcional. O domínio deve conter letras minúsculas (pode conter hífens e pontos). Exemplos: ',

        stripe_connect_label: 'Conecte-se com Stripe',
        stripe_connect_existed_account: 'Você conectou a conta Stripe.',
        stripe_connect_existed_text_1: 'Conecte sua conta Stripe para começar a receber pagamentos pelas vendas de cursos',
        stripe_connect_existed_text_2: 'Stripe é rápido de configurar e não cobra nenhuma taxa mensal como a maioria dos processadores de pagamento, apenas uma pequena taxa por transação.',
        stripe_connect_existed_text_3: 'Você precisará criar e manter sua conta Stripe, caso ainda não tenha uma.',
        stripe_connect_existed_text_4: 'Você precisará lidar com estornos e todos os problemas de atendimento ao cliente. Não temos controle nem responsabilidade pelos pagamentos do seu cliente.',

        //translate_to_arrange
        ai_chat_questin_text1: 'Qual linguagem de programação aprender para criar jogos?',
        ai_chat_question_text2: 'Quais são as tarefas diárias de um desenvolvedor front-end?',
        login_button: 'Entrar com Email',
        reset_password_button: 'Redefinir senha',
        email_input_text: 'Email',
        password_input_text: 'Senha',
        enter_password_warning: 'Digite sua senha',
        enter_email_warning: 'Digite seu email',
        embed_button: 'incorporar',
        add_member_button: 'Adicionar membro',
        enter_title_warning: 'Por favor, insira o título!',
        title_input_text: 'Título',
        Change_title: 'Alterar dados do perfil',
        invite_subtitle: 'Sua escola está pronta, faça login e convide seus alunos ',
        welcome_title_text: 'Bem-vindo à escola {workspace}',
        access_information_start: 'Acesso ao',
        vimeo_folder: 'reprodutor vimeo',
        sign_to_join_signup: 'Registrar-se',
        payment_title_creator: 'Plano Criador teste gratuito',
        payment_title_premium: 'Plano Premium de teste gratuito',

        congrats: "Parabéns! Continue com o bom trabalho e alcance seu objetivo!",
        steps: "Guia passo a passo:"
    },
};
