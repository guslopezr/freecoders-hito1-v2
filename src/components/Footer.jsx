import './styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footerLogo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEUAn+P///81MTwAmuIAnOIAmOEAoOQAluEAmeEApewAoug2KzM3KS83Jio2KjAkZ49qvevs+P00LTUAouQ3JCa33vX0/P7h8vsedqW03PWl1PKNyu/O6Pg4IiN4wu3c7/oMk9FMsehhuOpwv+yEx+4AkN+d0PEmYIUuSmMEmNgqV3cYgLQVh7/P6fi33fVOsugrqOUjb5wxOkkwQVUsTmg4Hx05GxUzNEEwPlA5Fgi7bZbqAAAJVUlEQVR4nO2YC3PaOBCAMZZsbDDvN4YAoRCCc4Ekfdz//2OnXa1kmabXacxcfDP7zXQaS1jal3ZXrtUYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGYWyN84JP3Fzdd0pdyMBDSbHAeAbfd4k+kmcP2+xvu7w/mPQ8wKuLD6NOcOMD97xo3W1AuPM1YaxhO4GEW3myDP0RsUZrZzSws96Sg94RWC0efq2BNaIvvbhWlYmMU9OZgNbn7LxUUUsprTXw0sbe5lYbyyWq4EiZEfqOgEutGITSf9MbdK1UknhLvdolGa7eQoYA1xT5N0/lvPOh5vfktVPQxwW2tLrpKSBSoJ/PfCeFLX1yrDKM/DdOgO7LSidPqJK4dhMu772g3/1VeRTpwA7tzV5WJ2f0ZR1OroS/UeDqadxuu4FLcq9F0tn/Ow1zIwf18Nkpni0GeiMUc19tKqvBicB4Mzo4U8nk/Ky5Pgjk2/iDyTi0zGZEwecbTSYH2E2JmxxZ2T1Eb2dGxqZz+YmIHR/anjVQPKPCZDGgcJBdj887ONgQrXL18LoJwnIS0lcilQ+612E4idOQW58JvdZlr3LljEyOu7NkxiBZxrw1oHNpz3plZFcM7WzzLcHZcJa8U9M7vqWL0luPC6AJHKRwNxrOiaAj61UrPBsXlbYWCDZ5Ktxyim4vsF6XzzCGQveLoHQ6LRWEwDXOL/bQC9Q8AiixTx4DhXfEVzyrl3aLlEHu7k8novd12pSXQQUZ50BtttyNHbIpHNdrdT7yxNbwavpvN5yT2pnZlDRRZOg0q2hg2W+yoZlLlQrOUbznQmtIVoydV4tae0F1xQ2+8V5VM95I68eogHX8RinB7NpKI511DVQpfd2Ukra8T1aLbvcd3hWNAWj6F5WknkctTvuUIxzYf0FYQsmKnJcLldWnEpEaSusOrEBK8W8dEDZT2d46GUnsUxrUVHAPSOtgH7HI302blFYQ154XMIXJNdBtAmf1LGIZfnvLosmkpdQsfXAIHz9vudrB3lggpOowRdo6v9PJ4tsXe9SEKUSupYvAXrBjQQy4GuVNH1Mq7Ql+phFM6R4ERxD+PCilWH3EykjGEa0AqHNi7+G5k6wM62ZZSUR/yjXOwqY0hd2J6FD9lWIqiQm2hc3jVMZgldDIxRckkqYGzPB4IWtEkPjzKi3Iagjx7U8AXuRiB4ytqRxzMpiJvaSiXXlUQW1i03isjrA7aMWpPhQNd5Zx4eOvc89yG+UMarhwfUojc27sN+Yoye88y3pj35SYPSa02qZuO0p67hFv+asXvB7Q8irNxrEJmToMyCsKp8ezBptABMQrXX8rsXyQSqn/GPnAPCc/UUkJipAyShg0/XDl6y+L3maIBtU2kNbg5BBi+i9Jt6cCzx8NoqJ58TEDe83WuU1eATW7Tvb5PyK7VkDIIBEUhG/vaSFZD14BOxIapM45mGZdWEK25KkTpSHkpdK+/OqS8s/RluBnZxliJM175siEpBMFOtMQqVL59ypeg6LNf1QrfDyiprUIZUpYiG0rvFh/i3LbBZokJ5UgqX3T8PXW2UBh9k6SCPklNUwkON43taD5LnSWEG7E1mzIpI1Mim5iF6CKHZimXSFHOkd3J7f9JJb2VPysOa7turn6MIeg02O4ShYi1Nuv91JRr6C6OZimXSHGvidtpXJV2W76uREBdrsvC2e3OrpZw+weg+P1AFquRUQrNYl/5uIYetrzmafHuXuLsdimp3lUWTD82DbLovbMEpUuTNciS9nO68xnOWQhyQflEg+4Zz20s+Gdjz95olX9dEv6edOzNztbjjZ1x2GSRf6WRC6NjL91RL9eYAPamJ+576rGX3xrCFZ38u51ZSMxBkvLXXzp6+R1MSLnpdtVVqPilDL4ubbvd51phWEihftx9FoWPrfqn241wvsE2ZOHLmsDKKq7f2TgL6UAun2johBTuYOaGc8274+KXo38qSfEd3ciOb/I9OL8AVwlsZNPyeQaAPgz+D2LFTVa8CSIM5W0NH6wvl8upQirenPgwbA8772oIzi3Z4FeB6KFfb73rwzjrdA7H/7+KUbteT9bv6RE/Js2v7878rwiOw3p9aNSI3cCMXpXu1ofBVczic1yrfizHWatef4ngzyAKsumlM11HeipKlO5xBFoodQpTtTg6qoFLFkXB6XKZHiucqeJLu95/RC3Wj8Ok3W62lwet8FppWH99VVkoOB6SpAVTb1qVePq6bLXb7eTHYaj+by070b9t8qnEj/16+4LRNlXxiiSYWuNTCx5aajLIvtJU+01r/42e60393/BSWS/CYaNUGiTNVpKoxFNfwmN8Aen7Q5iMvsMUaLyE1IPu7ScJqqfHh5U9ivHQptL48Hhar6dK3iSLtXfrD49vkGviy9spW5/ApVOYUj/qP6yPB6Xi9+yYmVeqCHojMakFMU6NXtQfWaTzZIxTENGooVKteYliePklCmD8/ZJaAeCw9V+1htHx1Ol0pt/BIRCKy7xYxLXTRU09GOV1lxBoDf+laagAcUd544DCxY/LVrPZ1Ocw0N5tR/QrlTn1FEY0dQkYrCr1RM1fNQ0VwAZeLXpTp6mZtPqQPSLy7gNqGB2UsirVQGJZgnePOrTRPJ1YNw0VdaFKkpQkgmwJlSHLlMrgF8e7wVHVivYhy9QINgcmtKM3jE5sGn5UtSBGcNjWsan8URwd0C9UKKdRQIXxh5qaUnMAvwXlo74OVts0VBHQsHlZa5fVfxyjmska4CBVEdTx0qVfNWymOdDK2+iMD6ZpqCJQEurNb1kQn6BHS4ZJn7IGVARV1f9WHc16iVPDvlNHVGjHmXoFgvW1wuVQBVxCuTN6oQas3v+q21Ts1OB8YRLS6NvUEl+JIWohWMGV1b1HRqpGtKAoBLU3aKZbyfJ1qqvHSTXVQzxfUEhw6gVOaLD+e7jsq1R6+Dr8donxEZuG2KU6Gkfr6RRDLFAVfzo9ZbWIAk6V+elUlzmcmmZHPRU4/2Lnz2nHIauOioH91KYvuUFhJnCmfuOXqK66AsOysgfz4wRwPC3L6h7MD6NSbj/ne1U7gDIEkctnS8MwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDFNR/gHXcqZOKgW9UQAAAABJRU5ErkJggg==" alt="" />
                <p>Proyecto Final Desafio Latam</p>
            </div>
            <p> Full stack JavaScript g12-2023</p>
        </footer>
    )
}

export default Footer