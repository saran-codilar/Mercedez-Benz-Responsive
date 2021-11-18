import React, { Component } from 'react'
import './description.css';
import Petrol from './petrol.svg';
import Leaf from './leaf.png';
export default class Description extends Component {
    render() {
        return (
            <div className="description">
                <div className="threesentence">
                    <div className="petrol">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.169 69.731" width="1rem" height="1rem" className="sen1"><path d="M57.367 59.706c-5.792 0-10.137-4.901-10.137-11.919 0-2.228.78-5.458 1.671-8.243.78-2.562 1.559-5.235 1.559-7.018 0-4.122-2.228-6.238-6.684-6.238l-1.448.111v37.094h3.899v6.238H0v-6.238h3.899V0h38.43v21.499c9.803 0 13.144 4.456 13.144 11.251-.111 1.337-.668 3.787-1.671 7.352-1.114 3.676-1.671 6.238-1.671 7.797 0 4.122 2.228 7.018 4.79 7.018 3.23 0 5.347-4.344 5.347-10.916v-20.72l-3.676-3.787v-8.132L52.02 4.121 56.03.445l11.139 12.253v31.301c0 6.349-1.114 10.471-3.342 12.587-2.115 2.118-4.343 3.12-6.46 3.12zM33.975 24.395V8.466H12.476v15.929h21.499zm-5.793 18.937c0-2.116-4.344-9.691-4.901-9.691L20.83 37.54c-1.671 2.785-2.451 4.79-2.451 5.792 0 2.785 2.116 5.013 4.901 5.013 2.675-.001 4.902-2.228 4.902-5.013z" fill="currentColor"></path></svg>
                        <span className="title"> Kraftstoffverbrauch kombiniert
                        </span>
                    </div>
                    <div className="co2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.625 66.615" width="1.0714285714285714rem" height="1rem" className="sen1"><path d="M22.613 56.254c5.681 0 11.696-1.337 17.823-4.01 6.238-2.673 11.808-5.904 16.597-9.803 4.79-3.899 8.132-7.463 9.914-10.694.111 1.671.223 3.008.223 4.01.111 12.699-8.911 31.078-36.537 30.856-8.354-.446-15.818-2.005-22.613-4.79-3.008-1.225-5.681-2.562-8.02-4.01 3.008-5.458 6.238-10.471 9.691-14.815 8.132-10.582 16.597-17.377 25.286-20.608 5.235-1.894 10.137-2.896 14.704-2.896 3.676 0 7.018.557 10.025 1.782C63.159 16.709 65.721 9.58 67.503 0l4.122 1.003c-.334 4.01-.78 7.463-1.559 10.248-.668 2.785-2.005 6.906-4.122 12.476-1.671 4.567-5.347 9.134-10.805 13.924S43.443 46.34 36.536 49.459c-6.795 3.119-12.922 4.678-18.38 4.678l1.225 1.894c1.338.112 2.452.223 3.232.223z" fill="currentColor"></path></svg>
                        <span className="title"> CO₂-Emissionen kombiniert
                        </span>
                    </div>
                    <div className="diesel">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.6 69.9" width="0.8571428571428571rem" height="1rem" className="sen1"><path d="M67.2 23.8v20.3c0 9.5-3.7 13.7-7.1 15.1-1.2.4-2.3.7-3.3.7-5.3 0-9.7-5-9.7-12 0-2.1.8-5.3 1.7-8.1 1-3.5 1.6-5.8 1.6-7.1 0-4.5-2.3-6.1-6.2-6.1-.8 0-1.4 0-1.8.1v37h3.9v6.2H0v-6.2h3.9V0h38.4v21.5c9.9 0 13 4.2 13 11.3 0 1.4-.6 4.1-1.8 8-1 3.6-1.6 5.9-1.6 7.1 0 4.1 2.2 7 4.8 7 3.2 0 5.5-4.6 5.5-10.9V23.8c-4-1.2-6.7-4.7-6.7-8.6V9.1h2.6V2.6H63v6.5h3.2V2.6h4.9v6.5h2.5v6.1c0 4-2.5 7.3-6.4 8.6zm-33.1.6V8.5H12.6v15.9h21.5z" fill="currentColor"></path></svg>
                        <span className="title"> Stromverbrauch im kombinierten Testzyklus
                        </span>
                    </div>

                </div>
                <div className="threesentencemedia">
                    <div className="threesentence1">
                        <div className="petrol">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.169 69.731" width="1rem" height="1rem" className="sen1"><path d="M57.367 59.706c-5.792 0-10.137-4.901-10.137-11.919 0-2.228.78-5.458 1.671-8.243.78-2.562 1.559-5.235 1.559-7.018 0-4.122-2.228-6.238-6.684-6.238l-1.448.111v37.094h3.899v6.238H0v-6.238h3.899V0h38.43v21.499c9.803 0 13.144 4.456 13.144 11.251-.111 1.337-.668 3.787-1.671 7.352-1.114 3.676-1.671 6.238-1.671 7.797 0 4.122 2.228 7.018 4.79 7.018 3.23 0 5.347-4.344 5.347-10.916v-20.72l-3.676-3.787v-8.132L52.02 4.121 56.03.445l11.139 12.253v31.301c0 6.349-1.114 10.471-3.342 12.587-2.115 2.118-4.343 3.12-6.46 3.12zM33.975 24.395V8.466H12.476v15.929h21.499zm-5.793 18.937c0-2.116-4.344-9.691-4.901-9.691L20.83 37.54c-1.671 2.785-2.451 4.79-2.451 5.792 0 2.785 2.116 5.013 4.901 5.013 2.675-.001 4.902-2.228 4.902-5.013z" fill="currentColor"></path></svg>
                            <span className="title"> Kraftstoffverbrauch kombiniert
                            </span>
                        </div>
                        <div className="co2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.625 66.615" width="1.0714285714285714rem" height="1rem" className="sen1"><path d="M22.613 56.254c5.681 0 11.696-1.337 17.823-4.01 6.238-2.673 11.808-5.904 16.597-9.803 4.79-3.899 8.132-7.463 9.914-10.694.111 1.671.223 3.008.223 4.01.111 12.699-8.911 31.078-36.537 30.856-8.354-.446-15.818-2.005-22.613-4.79-3.008-1.225-5.681-2.562-8.02-4.01 3.008-5.458 6.238-10.471 9.691-14.815 8.132-10.582 16.597-17.377 25.286-20.608 5.235-1.894 10.137-2.896 14.704-2.896 3.676 0 7.018.557 10.025 1.782C63.159 16.709 65.721 9.58 67.503 0l4.122 1.003c-.334 4.01-.78 7.463-1.559 10.248-.668 2.785-2.005 6.906-4.122 12.476-1.671 4.567-5.347 9.134-10.805 13.924S43.443 46.34 36.536 49.459c-6.795 3.119-12.922 4.678-18.38 4.678l1.225 1.894c1.338.112 2.452.223 3.232.223z" fill="currentColor"></path></svg>
                            <span className="title"> CO₂-Emissionen kombiniert
                            </span>
                        </div>
                    </div>
                    <div className="diesel">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.6 69.9" width="0.8571428571428571rem" height="1rem" className="sen1"><path d="M67.2 23.8v20.3c0 9.5-3.7 13.7-7.1 15.1-1.2.4-2.3.7-3.3.7-5.3 0-9.7-5-9.7-12 0-2.1.8-5.3 1.7-8.1 1-3.5 1.6-5.8 1.6-7.1 0-4.5-2.3-6.1-6.2-6.1-.8 0-1.4 0-1.8.1v37h3.9v6.2H0v-6.2h3.9V0h38.4v21.5c9.9 0 13 4.2 13 11.3 0 1.4-.6 4.1-1.8 8-1 3.6-1.6 5.9-1.6 7.1 0 4.1 2.2 7 4.8 7 3.2 0 5.5-4.6 5.5-10.9V23.8c-4-1.2-6.7-4.7-6.7-8.6V9.1h2.6V2.6H63v6.5h3.2V2.6h4.9v6.5h2.5v6.1c0 4-2.5 7.3-6.4 8.6zm-33.1.6V8.5H12.6v15.9h21.5z" fill="currentColor"></path></svg>
                        <span className="title"> Stromverbrauch im kombinierten Testzyklus
                        </span>
                    </div>

                </div>

                <div className="para1">
                    <p>1 Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die
                        „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte
                        wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
                        ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
                        CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die
                        CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen
                        Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
                    </p>
                </div>

                <div className="para1">
                    <p>4 Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom
                        Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in
                        NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch
                        nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
                    </p>
                </div>


                <div className="para1">
                    <p>6 Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und
                        Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen
                        Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem
                        „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
                        Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil
                        Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.

                    </p>
                </div>

                <div className="para1">
                    <p>7 Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen Dienst für das
                        Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die EG-Typgenehmigung und eine
                        Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und
                        den amtlichen Werten sind möglich.

                    </p>
                </div>

                <div className="para1">
                    <p>8 Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren
                        Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine
                        EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den
                        Angaben und den amtlichen Werten sind möglich.</p>
                </div>
                <div className="space"></div>
            </div>
        )
    }
}



{/* <div class="threesentence">
                    <a href="#petrol"><img src={Petrol} alt="petrol" height="5%" width="5%" className="new4" /></a>
                    <p class="threesen1">Kraftstoffverbrauch kombiniert</p>
                    <a href="#leaf"><img src={Leaf} alt="Co2" height="5%" width="5%" className="new5" /></a>
                    <p class="threesen2">CO₂-Emissionen kombiniert</p>
                    <p class="threesen1"><a href="#petrol"><img src={Petrol} alt="petrol" height="3%" width="3%" className="new4" /></a>Stromverbrauch im kombinierten Testzyklus</p>  
                </div> */}