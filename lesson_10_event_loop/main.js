function getUp(isWorkingDay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (isWorkingDay){
                resolve ('Get up!!!')
            }
            reject ('You can still sleep))');
        }, 300);
    });
};

function morningExercises (exercise){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ('I do my morning exercises every days')
        }, 1500);
    });
};

function morningShower (shower){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve (shower);
        }, 1000);
    });
};

function breakfast(food){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (food){
                resolve (`today ${food} for breakfast`)
            };
            reject ('Today without breakfast')
        }, 400);
    });
};

function goWork (job){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (job){
                resolve ('Today I am working')
            };
            reject ('Today is weekend')
        }, 4000);
    });
};

function letsStudy (tasks){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ('I study every day')
        }, 2500);
    });
};

function goSleep (time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (time > 22){
                resolve ('I am going to sleep')
            };
            reject ('It is still earle to sleep')
        }, 1000);
    });

};

// getUp(true)
//     .then(morning=>{
//         console.log(morning);
//         return morningExercises('It is time to do morning sport')
//     })
//     .then(sport=>{
//         console.log(sport);
//         return morningShower('morning shower')
//     })
//     .then(shower=>{
//         console.log(shower);
//         return breakfast('coffee and sandwich')
//     })
//     .then(food=>{
//         console.log(food);
//         return goWork(true)
//     })
//     .then(job=>{
//         console.log(job);
//         return letsStudy('Java Script')
//     })
//     .then(lessons=>{
//         console.log(lessons);
//         return goSleep(23)
//     })
//     .then(night=>{
//         console.log(night)
//     })
//
//     .catch(reason => {
//         console.error(reason, 'error')
//     });

async function myDay(){
    try {
       const morning = await getUp(true);
        console.log(morning);
        const morningSport = await morningExercises('morning exercises');
        console.log(morningSport);
        const shower = await morningShower('morning shower');
        console.log(shower);
        const food = await breakfast('coffee and sandwich');
        console.log(food);
        const job = await goWork(true);
        console.log(job);
        const tasks = await letsStudy('Java Script');
        console.log(tasks);
        const sleep = await goSleep(20);
        console.log(sleep);
    }
    catch (e){
        console.log(e)
    }
} ;

myDay();



