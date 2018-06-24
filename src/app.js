import React, {Component} from "react";
import Navigation from "./navigation";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container">
                    <h1>Bootstrap Tutorial</h1>
                    <button className="btn btn-primary" type="button" data-toggle="collapse"
                            data-target="#loremIpsum">Lorem Ipsum Test
                    </button>
                    <div className="collapse" id="loremIpsum">
                        <div className="card card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris ipsum, rhoncus id
                            pharetra
                            a, ullamcorper lacinia odio. Donec ac arcu eu dui malesuada suscipit pharetra nec risus. Sed
                            vel
                            ipsum lobortis, condimentum eros porttitor, imperdiet nisl. Suspendisse non cursus leo.
                            Phasellus eu lectus blandit, pharetra sem at, aliquet lacus. Quisque sit amet ligula sed dui
                            faucibus sodales. Aenean pretium posuere erat, ut pharetra quam auctor non. Proin sed libero
                            eget nisi condimentum facilisis id eu purus. Integer quis dapibus ante, sed fringilla augue.
                            Sed
                            vitae semper arcu. Maecenas vitae mi eget urna porttitor tincidunt.

                            In at tincidunt justo, sit amet pulvinar odio. Aliquam volutpat justo augue, rhoncus dictum
                            velit ultricies vitae. Nullam tempus venenatis est vitae laoreet. Suspendisse dignissim
                            felis
                            quam, et pharetra est accumsan nec. Maecenas commodo quis dui quis auctor. Aliquam molestie
                            quam
                            quis nulla facilisis maximus. Curabitur tristique pharetra erat, non efficitur nisl varius
                            vitae.

                            Fusce tristique in velit quis feugiat. Praesent et orci erat. Mauris et felis ligula. Nulla
                            sapien tellus, eleifend ac ullamcorper ut, maximus vitae lectus. Donec quis tincidunt dolor,
                            id
                            placerat magna. In ultrices lorem nec felis finibus, et tristique urna convallis. Proin in
                            neque
                            leo. Vestibulum vitae augue lectus. Vestibulum aliquet felis ut justo venenatis dictum.

                            Ut ultrices in massa non laoreet. Sed mattis et diam nec maximus. Nulla varius, ipsum at
                            rutrum
                            mollis, tellus libero commodo mauris, eget commodo libero arcu id mi. Donec quis dui sit
                            amet
                            enim pellentesque ornare pharetra ac velit. Donec euismod placerat neque, sed sagittis risus
                            tincidunt sit amet. Integer interdum nisi molestie velit varius, quis convallis turpis
                            interdum.
                            Sed nunc nisi, iaculis et euismod nec, ornare ut est. Donec ullamcorper porta lacus, a
                            ornare
                            tellus tristique non. Ut ipsum libero, sagittis sit amet feugiat at, commodo quis felis.
                            Nunc
                            faucibus mattis turpis.

                            Curabitur ullamcorper id metus id dictum. Integer sed auctor odio. Nullam ac ligula at erat
                            tristique lacinia. Aliquam lacinia aliquet tellus, cursus iaculis dui pellentesque et.
                            Integer
                            ligula massa, fermentum ac tempus quis, consequat vitae erat. Nam maximus diam nec sem
                            pulvinar,
                            ut placerat orci pharetra. Proin ac venenatis ligula. Mauris commodo congue sollicitudin.
                            Mauris
                            luctus tellus a congue suscipit.

                            Proin ultricies lorem quis dui pulvinar pharetra. Aenean et aliquam lacus, ut bibendum
                            massa.
                            Fusce ut diam cursus, sollicitudin lorem id, porta nibh. Sed egestas lobortis metus, a
                            venenatis
                            ex sollicitudin nec. Sed fringilla in velit ut efficitur. Morbi at tempor purus, vitae
                            rutrum
                            nibh. Proin nec felis sed est laoreet mattis porta vitae nisl. Phasellus lobortis urna sit
                            amet
                            diam consectetur, quis eleifend lorem ullamcorper. Nullam at ultrices ipsum, a pulvinar leo.
                            In
                            vulputate ante ut risus ornare, eu eleifend tellus pretium. Etiam molestie, nunc vitae
                            auctor
                            molestie, libero augue accumsan tellus, a vulputate nunc ex nec eros. Mauris finibus dapibus
                            metus, gravida bibendum magna pretium sit amet. Donec commodo turpis ut scelerisque
                            condimentum.
                            Pellentesque tempor sagittis dui semper scelerisque. Quisque et congue est.

                            Nulla facilisi. Donec egestas, nibh eget ultricies hendrerit, urna dui volutpat lorem, non
                            vulputate elit diam sed risus. Fusce sodales faucibus bibendum. Nunc lectus dui, malesuada
                            ut
                            quam eget, tincidunt auctor lorem. Ut enim velit, egestas maximus mauris at, placerat
                            euismod
                            quam. Suspendisse pharetra vitae massa non rutrum. Aliquam facilisis urna id neque ultrices,
                            vitae suscipit urna ullamcorper. Ut auctor enim ut turpis tempus faucibus. Mauris ut luctus
                            metus. Ut egestas metus id quam scelerisque, at facilisis arcu elementum. Duis elit urna,
                            fermentum vitae nibh quis, bibendum pretium erat. In tincidunt ipsum non massa accumsan
                            auctor.
                            Mauris non ante id tellus imperdiet imperdiet. Donec efficitur id nulla vitae finibus.

                            Suspendisse rhoncus libero ac massa finibus, vel blandit nulla imperdiet. Curabitur interdum
                            congue metus, eu cursus magna pretium id. Aenean convallis elit eu eros malesuada, non
                            fermentum
                            urna vehicula. Cras tincidunt gravida placerat. Maecenas sit amet facilisis nibh. Nam est
                            mi,
                            interdum sed accumsan nec, pulvinar ut massa. Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Nam luctus ultrices augue, eu consectetur est rutrum nec. Morbi bibendum libero arcu,
                            non
                            ullamcorper tortor dictum sit amet. Etiam mattis accumsan est sit amet elementum. Fusce
                            eleifend
                            aliquet diam, at condimentum leo pharetra vel. Curabitur vitae nunc et risus venenatis
                            aliquam.
                            Donec sed nisl eget magna fermentum efficitur vitae vitae magna. Sed ultrices ipsum in
                            dignissim
                            feugiat.

                            Etiam volutpat rhoncus erat, a facilisis nisl varius at. Quisque lacinia lacus et augue
                            ornare
                            varius. Etiam eget velit at justo mattis tristique pharetra vitae lorem. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam imperdiet
                            risus
                            id fermentum tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere
                            cubilia Curae; Vestibulum euismod mattis augue et semper. Proin ultrices viverra tortor.

                            Aliquam egestas enim id nulla pulvinar dignissim. Fusce ut felis sollicitudin, condimentum
                            ligula vitae, consequat nunc. Praesent sodales, nulla quis sodales tempor, quam lorem
                            dapibus
                            orci, non feugiat augue velit consectetur nibh. Pellentesque rhoncus leo massa, ac
                            sollicitudin
                            sapien blandit at. Quisque efficitur, nisi eu pellentesque pulvinar, magna tellus tristique
                            odio, eget bibendum nibh dui non erat. Mauris vel tincidunt purus. Curabitur lorem quam,
                            cursus
                            nec mattis in, tincidunt et sapien.
                        </div>
                    </div>
                    <p id="ptest">Test</p>
                </div>
            </div>
        );
    }
}

export default App;