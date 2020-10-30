//chamada a api
export default function auth() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'JwThagsTksOihssgYtgsgstEfsPonfowebwoubfyysdfLsisdndJlasoalW',
                user: {
                    name: 'Daiane',
                    email: 'daiane@gmail.com.br',
                },
            });
        }, 2000);
    });
}










