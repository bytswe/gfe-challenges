// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document.getElementById("qna-list").addEventListener('click', function(param) {
    const questionId = param.target.id.slice(-1)
    const btnType = param.target.id.slice(0,-2)
    const answer = document.getElementById(`answer-${questionId}`)

    console.log(questionId, btnType)
    if(btnType === "close-btn"){
        let targetDiv = document.getElementById(`${param.target.id}-div`)
        let siblingDiv = document.getElementById(`open-btn-${questionId}-div`)
        
        targetDiv.setAttribute('aria-expanded','true')
        siblingDiv.setAttribute('aria-expanded','false')

        answer.classList.add('hidden')
        targetDiv.classList.add('hidden')
        siblingDiv.classList.remove('hidden')
    }else if(btnType === "open-btn"){
        let targetDiv = document.getElementById(`${param.target.id}-div`)
        let siblingDiv = document.getElementById(`close-btn-${questionId}-div`)
        
        targetDiv.setAttribute('aria-expanded','true')
        siblingDiv.setAttribute('aria-explanded','false')

        answer.classList.remove('hidden')
        targetDiv.classList.add('hidden')
        siblingDiv.classList.remove('hidden')
    }else if(btnType === "answer"){
        let closeDiv = document.getElementById(`close-btn-${questionId}-div`)
        let openDiv = document.getElementById(`open-btn-${questionId}-div`)

        closeDiv.classList.add("hidden")
        openDiv.classList.remove("hidden")
        answer.classList.add('hidden')
    }else if(btnType === "qna" || btnType === "question" || btnType === "question-header"){
        let closeDiv = document.getElementById(`close-btn-${questionId}-div`)
        let openDiv = document.getElementById(`open-btn-${questionId}-div`)

        if(closeDiv.classList.contains('hidden')){
            answer.classList.remove('hidden')
            closeDiv.classList.remove('hidden')
            openDiv.classList.add('hidden')
        }else if(openDiv.classList.contains('hidden')){
            answer.classList.add('hidden')
            closeDiv.classList.add('hidden')
            openDiv.classList.remove('hidden')
        }
    }
})