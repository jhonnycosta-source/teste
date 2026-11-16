2026-11-16 19:10:52.845 |  Started by user BACKSTAGE ARQUITETURA DE TECNICA
2026-11-16 19:10:52.854 |  Checking out git https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git into /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@script/a91a763263d88ccdb3bbb29f698a8955410e48f4335cbb60268589be95976198 to read jenkins_java_container/Jenkinsfile_CD_OnPre
2026-11-16 19:10:52.873 |  The recommended git tool is: git
2026-11-16 19:10:52.874 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:10:52.918 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@script/a91a763263d88ccdb3bbb29f698a8955410e48f4335cbb60268589be95976198/.git # timeout=10
2026-11-16 19:10:52.944 |  Fetching changes from the remote Git repository
2026-11-16 19:10:52.950 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-11-16 19:10:52.975 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:10:52.975 |   > git --version # timeout=10
2026-11-16 19:10:52.985 |   > git --version # 'git version 2.33.0'
2026-11-16 19:10:52.985 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:10:53.024 |   > git fetch --tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:10:53.426 |   > git rev-parse refs/remotes/origin/backstage^{commit} # timeout=10
2026-11-16 19:10:53.437 |  Checking out Revision 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 (refs/remotes/origin/backstage)
2026-11-16 19:10:53.437 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:10:53.455 |   > git checkout -f 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 # timeout=10
2026-11-16 19:10:53.522 |  Commit message: "Merge branch 'feat/scorecard-lead-time' into 'backstage'"
2026-11-16 19:10:53.523 |   > git rev-list --no-walk 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 # timeout=10
2026-11-16 19:10:55.117 |  [Pipeline] Start of Pipeline
2026-11-16 19:10:55.217 |  [Pipeline] echo
2026-11-16 19:10:55.241 |  SCM branch detectada: */backstage
2026-11-16 19:10:55.276 |  [Pipeline] echo
2026-11-16 19:10:55.282 |  Carregando sharedlib jenkins_sharedLibs_plataforma@backstage
2026-11-16 19:10:55.322 |  [Pipeline] library
2026-11-16 19:10:55.363 |  Loading library jenkins_sharedLibs_plataforma@backstage
2026-11-16 19:10:55.364 |  Attempting to resolve backstage from remote references...
2026-11-16 19:10:55.364 |   > git --version # timeout=10
2026-11-16 19:10:55.392 |   > git --version # 'git version 2.33.0'
2026-11-16 19:10:55.392 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:10:55.392 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-11-16 19:10:55.686 |  Found match: refs/heads/backstage revision 8dfb24aaab83d4c0c7d53139c9c920d3939326b0
2026-11-16 19:10:55.705 |  The recommended git tool is: git
2026-11-16 19:10:55.706 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:10:55.728 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@libs/57a4112013c5a6d3134ddbc037860f7f4416af19692dfd70bd8e9537f991bfec/.git # timeout=10
2026-11-16 19:10:55.748 |  Fetching changes from the remote Git repository
2026-11-16 19:10:55.760 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-11-16 19:10:55.776 |  Fetching without tags
2026-11-16 19:10:55.776 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:10:55.776 |   > git --version # timeout=10
2026-11-16 19:10:55.785 |   > git --version # 'git version 2.33.0'
2026-11-16 19:10:55.785 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:10:55.818 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:10:56.217 |  Checking out Revision 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 (backstage)
2026-11-16 19:10:56.217 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:10:56.227 |   > git checkout -f 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 # timeout=10
2026-11-16 19:10:56.300 |  Commit message: "Merge branch 'feat/scorecard-lead-time' into 'backstage'"
2026-11-16 19:10:59.032 |  [Pipeline] library
2026-11-16 19:10:59.057 |  Loading library containers-serverless-lib@master
2026-11-16 19:10:59.057 |  Attempting to resolve master from remote references...
2026-11-16 19:10:59.057 |   > git --version # timeout=10
2026-11-16 19:10:59.081 |   > git --version # 'git version 2.33.0'
2026-11-16 19:10:59.081 |  using GIT_ASKPASS to set credentials cred-cpe-gitlab - Credencial Riscos / SI
2026-11-16 19:10:59.082 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git # timeout=10
2026-11-16 19:10:59.349 |  Found match: refs/heads/master revision 7215bee77f073023fb5091cc50f86495456228e1
2026-11-16 19:10:59.352 |  The recommended git tool is: NONE
2026-11-16 19:10:59.352 |  using credential cred-cpe-gitlab
2026-11-16 19:10:59.404 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@libs/e8fb46986c9122dbbdd6eca002d2f75e39ca67501ee1a8f13611fe61d9fbc15d/.git # timeout=10
2026-11-16 19:10:59.413 |  Fetching changes from the remote Git repository
2026-11-16 19:10:59.441 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git # timeout=10
2026-11-16 19:10:59.467 |  Fetching without tags
2026-11-16 19:10:59.467 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git
2026-11-16 19:10:59.467 |   > git --version # timeout=10
2026-11-16 19:10:59.477 |   > git --version # 'git version 2.33.0'
2026-11-16 19:10:59.477 |  using GIT_ASKPASS to set credentials cred-cpe-gitlab - Credencial Riscos / SI
2026-11-16 19:10:59.530 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:10:59.838 |  Checking out Revision 7215bee77f073023fb5091cc50f86495456228e1 (master)
2026-11-16 19:10:59.838 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:10:59.871 |   > git checkout -f 7215bee77f073023fb5091cc50f86495456228e1 # timeout=10
2026-11-16 19:10:59.911 |  Commit message: "fix: setting legado variable"
2026-11-16 19:10:59.912 |   > git rev-list --no-walk 7215bee77f073023fb5091cc50f86495456228e1 # timeout=10
2026-11-16 19:11:00.068 |  [Pipeline] library
2026-11-16 19:11:00.095 |  Loading library validacoes-tecnologia-arquitetura@backstage
2026-11-16 19:11:00.096 |  Attempting to resolve backstage from remote references...
2026-11-16 19:11:00.096 |   > git --version # timeout=10
2026-11-16 19:11:00.115 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:00.115 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:11:00.116 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/idp-jenkins-files-devxp.git # timeout=10
2026-11-16 19:11:00.412 |  Found match: refs/heads/backstage revision c532d68842c9dd37dc7c76d0fd22dc790a4c104d
2026-11-16 19:11:00.421 |  The recommended git tool is: git
2026-11-16 19:11:00.421 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:11:00.449 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@libs/0d4582f650a525b8ec33506b2c19d696a94995b7232965aa49c58a9ee427e9e4/.git # timeout=10
2026-11-16 19:11:00.458 |  Fetching changes from the remote Git repository
2026-11-16 19:11:00.472 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/idp-jenkins-files-devxp.git # timeout=10
2026-11-16 19:11:00.489 |  Fetching without tags
2026-11-16 19:11:00.489 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/idp-jenkins-files-devxp.git
2026-11-16 19:11:00.489 |   > git --version # timeout=10
2026-11-16 19:11:00.497 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:00.498 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:11:00.528 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/idp-jenkins-files-devxp.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:11:00.867 |  Checking out Revision c532d68842c9dd37dc7c76d0fd22dc790a4c104d (backstage)
2026-11-16 19:11:00.867 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:11:00.877 |   > git checkout -f c532d68842c9dd37dc7c76d0fd22dc790a4c104d # timeout=10
2026-11-16 19:11:00.943 |  Commit message: "Merge branch 'patch-1' into 'backstage'"
2026-11-16 19:11:00.944 |   > git rev-list --no-walk c532d68842c9dd37dc7c76d0fd22dc790a4c104d # timeout=10
2026-11-16 19:11:02.352 |  [Pipeline] library
2026-11-16 19:11:02.373 |  Loading library nodes_k8s_plataforma@master
2026-11-16 19:11:02.373 |  Attempting to resolve master from remote references...
2026-11-16 19:11:02.373 |   > git --version # timeout=10
2026-11-16 19:11:02.428 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:02.428 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:11:02.428 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git # timeout=10
2026-11-16 19:11:02.710 |  Found match: refs/heads/master revision a530311ac1702f7392cb97083935645c3ba8702d
2026-11-16 19:11:02.713 |  Selected Git installation does not exist. Using Default
2026-11-16 19:11:02.713 |  The recommended git tool is: NONE
2026-11-16 19:11:02.713 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:11:02.731 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@libs/c401a38b6949f412ace490d97d9e44b83a0dd9b78b7517669ed7dab171f3e051/.git # timeout=10
2026-11-16 19:11:02.740 |  Fetching changes from the remote Git repository
2026-11-16 19:11:02.761 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git # timeout=10
2026-11-16 19:11:02.775 |  Fetching without tags
2026-11-16 19:11:02.775 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git
2026-11-16 19:11:02.775 |   > git --version # timeout=10
2026-11-16 19:11:02.786 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:02.786 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:11:02.815 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:11:03.160 |  Checking out Revision a530311ac1702f7392cb97083935645c3ba8702d (master)
2026-11-16 19:11:03.160 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:11:03.171 |   > git checkout -f a530311ac1702f7392cb97083935645c3ba8702d # timeout=10
2026-11-16 19:11:03.192 |  Commit message: "Merge branch 'DV-818' into 'master'"
2026-11-16 19:11:03.193 |   > git rev-list --no-walk a530311ac1702f7392cb97083935645c3ba8702d # timeout=10
2026-11-16 19:11:03.578 |  [Pipeline] echo
2026-11-16 19:11:03.599 |  ############## COMUNICADO DEVSECOPS #########################
2026-11-16 19:11:03.635 |  [Pipeline] echo
2026-11-16 19:11:03.641 |  Você está utilizando o novo modelo de Nós Executores no Jenkins em container K8S.
2026-11-16 19:11:03.662 |  [Pipeline] echo
2026-11-16 19:11:03.679 |  Fique atento aos próximos logs ou acesse a documentação em caso de dúvida: https://portoseguro.atlassian.net/wiki/spaces/ED/pages/1533640833/Manual+de+uso+de+n+s+do+Jenkins+no+K8S
2026-11-16 19:11:03.700 |  [Pipeline] echo
2026-11-16 19:11:03.721 |  Parametros de entrada em código: PADRÃO=padrao-small / COORDENAÇÃO=PSG-DEVSECOPS-TECHSTORE / CC=10013223
2026-11-16 19:11:03.740 |  [Pipeline] echo
2026-11-16 19:11:03.744 |  Parametros de entrada em params: COORDENAÇÃO=null / CC=10013223
2026-11-16 19:11:03.857 |  [Pipeline] echo
2026-11-16 19:11:03.867 |  Parâmetros foram reconfigurados: PADRAO=padrao-small / COORDENACAO=psg-devsecops-techstore / CC=10013223
2026-11-16 19:11:03.891 |  [Pipeline] libraryResource
2026-11-16 19:11:03.951 |  [Pipeline] echo
2026-11-16 19:11:03.968 |  #########################################################
2026-11-16 19:11:04.146 |  [Pipeline] node
2026-11-16 19:11:04.233 |  Running on EC2 (aws-ec2-devsecops-prd-config-techstore) - DevSecOps Nodes TechStore (imagem padrao) (i-0e4375d8c3be887a5) in /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8
2026-11-16 19:11:04.296 |  [Pipeline] {
2026-11-16 19:11:04.372 |  [Pipeline] stage
2026-11-16 19:11:04.381 |  [Pipeline] { (Declarative: Checkout SCM)
2026-11-16 19:11:04.475 |  [Pipeline] checkout
2026-11-16 19:11:04.653 |  The recommended git tool is: git
2026-11-16 19:11:04.995 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:11:05.183 |  Cloning the remote Git repository
2026-11-16 19:11:05.239 |  Cloning repository https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:11:05.239 |   > git init /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8 # timeout=10
2026-11-16 19:11:05.244 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:11:05.244 |   > git --version # timeout=10
2026-11-16 19:11:05.246 |   > git --version # 'git version 2.52.0'
2026-11-16 19:11:05.246 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:11:05.247 |   > git fetch --tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:11:17.068 |  Avoid second fetch
2026-11-16 19:11:17.187 |  Checking out Revision 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 (refs/remotes/origin/backstage)
2026-11-16 19:11:16.878 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-11-16 19:11:16.882 |   > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:11:17.125 |   > git rev-parse refs/remotes/origin/backstage^{commit} # timeout=10
2026-11-16 19:11:17.243 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:11:17.246 |   > git checkout -f 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 # timeout=10
2026-11-16 19:11:17.499 |  Commit message: "Merge branch 'feat/scorecard-lead-time' into 'backstage'"
2026-11-16 19:11:17.576 |  [Pipeline] }
2026-11-16 19:11:17.662 |  [Pipeline] // stage
2026-11-16 19:11:17.729 |  [Pipeline] withEnv
2026-11-16 19:11:17.746 |  [Pipeline] {
2026-11-16 19:11:17.814 |  [Pipeline] stage
2026-11-16 19:11:17.827 |  [Pipeline] { (Inicializar)
2026-11-16 19:11:17.886 |  [Pipeline] script
2026-11-16 19:11:17.894 |  [Pipeline] {
2026-11-16 19:11:17.998 |  [Pipeline] echo
2026-11-16 19:11:18.004 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:18.004 |  | Ambiente detectado: PRD
2026-11-16 19:11:18.004 |  | Carregando arquivo de configuração: jenkinsfile-config.json
2026-11-16 19:11:18.004 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:18.029 |  [Pipeline] libraryResource
2026-11-16 19:11:18.064 |  [Pipeline] readJSON
2026-11-16 19:11:18.224 |  [Pipeline] echo
2026-11-16 19:11:18.240 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:18.240 |  | Stage Inicializar
2026-11-16 19:11:18.240 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:18.270 |  [Pipeline] wrap
2026-11-16 19:11:18.359 |  [Pipeline] {
2026-11-16 19:11:18.434 |  [Pipeline] script
2026-11-16 19:11:18.442 |  [Pipeline] {
2026-11-16 19:11:18.525 |  [Pipeline] }
2026-11-16 19:11:18.599 |  [Pipeline] // script
2026-11-16 19:11:18.637 |  [Pipeline] }
2026-11-16 19:11:18.714 |  [Pipeline] // wrap
2026-11-16 19:11:18.842 |  [Pipeline] echo
2026-11-16 19:11:18.891 |  null
2026-11-16 19:11:18.919 |  [Pipeline] echo
2026-11-16 19:11:18.932 |  null
2026-11-16 19:11:18.956 |  [Pipeline] echo
2026-11-16 19:11:18.969 |  null
2026-11-16 19:11:18.974 |  [Pipeline] }
2026-11-16 19:11:19.056 |  [Pipeline] // script
2026-11-16 19:11:19.090 |  [Pipeline] }
2026-11-16 19:11:19.148 |  [Pipeline] // stage
2026-11-16 19:11:19.197 |  [Pipeline] stage
2026-11-16 19:11:19.208 |  [Pipeline] { (Checkout)
2026-11-16 19:11:19.298 |  [Pipeline] script
2026-11-16 19:11:19.313 |  [Pipeline] {
2026-11-16 19:11:19.371 |  [Pipeline] echo
2026-11-16 19:11:19.385 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:19.385 |  | Stage Checkout
2026-11-16 19:11:19.385 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:19.435 |  [Pipeline] readJSON
2026-11-16 19:11:19.565 |  [Pipeline] echo
2026-11-16 19:11:19.579 |  #### VOCÊ ESTA UTILIZANDO O NOVO MODULO DE CHECKOUT DE DEVSECOPS ####
2026-11-16 19:11:19.579 |  PARAMETROS DE ENTRADA
2026-11-16 19:11:19.579 |  URL DO GITLAB : https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git
2026-11-16 19:11:19.579 |  BRANCH DO GITLAB : refs/tags/1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:11:19.579 |  PARAMETROS EXTRA DO GITLAB :
2026-11-16 19:11:19.579 |  
2026-11-16 19:11:19.606 |  [Pipeline] echo
2026-11-16 19:11:19.614 |  
2026-11-16 19:11:19.614 |  ######## RELAÇÃO DE PARAMETROS EXTRAS EXISTENTE ##########
2026-11-16 19:11:19.614 |  DIRETÓRIO DE DESTINO DO CHECKOUT:
2026-11-16 19:11:19.614 |  
2026-11-16 19:11:19.614 |  ######## DADOS IMPORTANTES ##########
2026-11-16 19:11:19.614 |  GRUPO DO PROJETO: plataforma_devops
2026-11-16 19:11:19.614 |  
2026-11-16 19:11:19.707 |  [Pipeline] withCredentials
2026-11-16 19:11:19.721 |  Masking supported pattern matches of $gitlabsenha or $gitlabuser
2026-11-16 19:11:19.765 |  [Pipeline] {
2026-11-16 19:11:19.806 |  [Pipeline] echo
2026-11-16 19:11:19.814 |  CREDENCIAL LOCALIZADA!! cred-plataforma_devops-gitlab
2026-11-16 19:11:19.825 |  [Pipeline] }
2026-11-16 19:11:19.900 |  [Pipeline] // withCredentials
2026-11-16 19:11:19.953 |  [Pipeline] echo
2026-11-16 19:11:19.969 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git, BRANCH: refs/tags/1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:11:20.008 |  [Pipeline] echo
2026-11-16 19:11:20.029 |  credenciaisIdConvertido: cred-plataforma_devops-gitlab
2026-11-16 19:11:20.057 |  [Pipeline] sh
2026-11-16 19:11:20.961 |  + rm /home/ec2-user/.git-credentials
2026-11-16 19:11:20.961 |  rm: cannot remove '/home/ec2-user/.git-credentials': No such file or directory
2026-11-16 19:11:21.089 |  [Pipeline] echo
2026-11-16 19:11:21.107 |  Arquivo não encontrado ~/.git-credentials
2026-11-16 19:11:21.144 |  [Pipeline] sh
2026-11-16 19:11:21.916 |  + rm /home/ec2-user/.gitconfig
2026-11-16 19:11:21.916 |  rm: cannot remove '/home/ec2-user/.gitconfig': No such file or directory
2026-11-16 19:11:22.016 |  [Pipeline] echo
2026-11-16 19:11:22.040 |  Arquivo não encontrado ~/.gitconfig
2026-11-16 19:11:22.047 |  [Pipeline] isUnix
2026-11-16 19:11:22.070 |  [Pipeline] isUnix
2026-11-16 19:11:22.141 |  [Pipeline] withCredentials
2026-11-16 19:11:22.500 |   > git --version # timeout=10
2026-11-16 19:11:22.524 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:22.864 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-11-16 19:11:22.870 |  [Pipeline] {
2026-11-16 19:11:22.912 |  [Pipeline] sh
2026-11-16 19:11:23.672 |  + ls -la
2026-11-16 19:11:23.672 |  total 28
2026-11-16 19:11:23.672 |  drwxr-xr-x. 17 ec2-user ec2-user 4096 Nov 16 22:11 .
2026-11-16 19:11:23.672 |  drwxr-xr-x. 40 ec2-user ec2-user 4096 Nov 16 22:05 ..
2026-11-16 19:11:23.672 |  drwxr-xr-x.  7 ec2-user ec2-user  146 Nov 16 22:11 .git
2026-11-16 19:11:23.672 |  -rw-r--r--.  1 ec2-user ec2-user   63 Nov 16 22:11 .gitignore
2026-11-16 19:11:23.672 |  drwxr-xr-x.  6 ec2-user ec2-user 4096 Nov 16 22:11 docs
2026-11-16 19:11:23.672 |  drwxr-xr-x.  2 ec2-user ec2-user   79 Nov 16 22:11 jenkins_android_mobile
2026-11-16 19:11:23.672 |  drwxr-xr-x.  3 ec2-user ec2-user   86 Nov 16 22:11 jenkins_api_gateway
2026-11-16 19:11:23.672 |  drwxr-xr-x.  3 ec2-user ec2-user  158 Nov 16 22:11 jenkins_dotnet_container
2026-11-16 19:11:23.672 |  drwxr-xr-x.  4 ec2-user ec2-user 4096 Nov 16 22:11 jenkins_graal_container
2026-11-16 19:11:23.672 |  drwxr-xr-x.  2 ec2-user ec2-user   75 Nov 16 22:11 jenkins_ios_mobile
2026-11-16 19:11:23.672 |  drwxr-xr-x.  4 ec2-user ec2-user 4096 Nov 16 22:11 jenkins_java_container
2026-11-16 19:11:23.672 |  drwxr-xr-x.  3 ec2-user ec2-user   90 Nov 16 22:11 jenkins_java_websphere
2026-11-16 19:11:23.672 |  drwxr-xr-x.  3 ec2-user ec2-user  158 Nov 16 22:11 jenkins_npm_container
2026-11-16 19:11:23.672 |  drwxr-xr-x.  2 ec2-user ec2-user   90 Nov 16 22:11 jenkins_npm_testes_funcionais
2026-11-16 19:11:23.672 |  drwxr-xr-x.  3 ec2-user ec2-user 4096 Nov 16 22:11 jenkins_python_container
2026-11-16 19:11:23.672 |  drwxr-xr-x.  2 ec2-user ec2-user   58 Nov 16 22:11 jenkins_terraform_gcp
2026-11-16 19:11:23.672 |  drwxr-xr-x.  2 ec2-user ec2-user   58 Nov 16 22:11 jenkins_terraform_oci
2026-11-16 19:11:23.672 |  drwxr-xr-x.  4 ec2-user ec2-user   35 Nov 16 22:11 sharedlibs
2026-11-16 19:11:23.750 |  [Pipeline] sh
2026-11-16 19:11:24.516 |  + pwd
2026-11-16 19:11:24.516 |  /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8
2026-11-16 19:11:24.613 |  [Pipeline] sh
2026-11-16 19:11:25.390 |  + rm -rf docs jenkins_android_mobile jenkins_api_gateway jenkins_dotnet_container jenkins_graal_container jenkins_ios_mobile jenkins_java_container jenkins_java_websphere jenkins_npm_container jenkins_npm_testes_funcionais jenkins_python_container jenkins_terraform_gcp jenkins_terraform_oci sharedlibs .git .gitignore
2026-11-16 19:11:25.476 |  [Pipeline] sh
2026-11-16 19:11:26.244 |  + git clone https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git .
2026-11-16 19:11:26.244 |  Cloning into '.'...
2026-11-16 19:11:28.140 |  [Pipeline] sh
2026-11-16 19:11:28.932 |  + git checkout refs/tags/1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:11:28.932 |  Note: switching to 'refs/tags/1.0.0-snapshot-gf-featureautor332602-hsmanual-17869'.
2026-11-16 19:11:28.932 |  
2026-11-16 19:11:28.932 |  You are in 'detached HEAD' state. You can look around, make experimental
2026-11-16 19:11:28.932 |  changes and commit them, and you can discard any commits you make in this
2026-11-16 19:11:28.932 |  state without impacting any branches by switching back to a branch.
2026-11-16 19:11:28.932 |  
2026-11-16 19:11:28.932 |  If you want to create a new branch to retain commits you create, you may
2026-11-16 19:11:28.932 |  do so (now or later) by using -c with the switch command. Example:
2026-11-16 19:11:28.932 |  
2026-11-16 19:11:28.933 |    git switch -c <new-branch-name>
2026-11-16 19:11:28.933 |  
2026-11-16 19:11:28.933 |  Or undo this operation with:
2026-11-16 19:11:28.933 |  
2026-11-16 19:11:28.933 |    git switch -
2026-11-16 19:11:28.933 |  
2026-11-16 19:11:28.933 |  Turn off this advice by setting config variable advice.detachedHead to false
2026-11-16 19:11:28.933 |  
2026-11-16 19:11:28.933 |  HEAD is now at 349f98a AUTOR3-32602 - inclusão dos campos de estado da oferta, totais e descarte no prêmio informado
2026-11-16 19:11:29.024 |  [Pipeline] sh
2026-11-16 19:11:29.845 |  + git branch
2026-11-16 19:11:29.845 |  * (HEAD detached at 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869)
2026-11-16 19:11:29.845 |    master
2026-11-16 19:11:29.916 |  [Pipeline] sh
2026-11-16 19:11:30.694 |  + ls -la
2026-11-16 19:11:30.694 |  total 36
2026-11-16 19:11:30.694 |  drwxr-xr-x.  5 ec2-user ec2-user   114 Nov 16 22:11 .
2026-11-16 19:11:30.694 |  drwxr-xr-x. 40 ec2-user ec2-user  4096 Nov 16 22:05 ..
2026-11-16 19:11:30.694 |  drwxr-xr-x.  7 ec2-user ec2-user   147 Nov 16 22:11 .git
2026-11-16 19:11:30.694 |  -rw-r--r--.  1 ec2-user ec2-user   566 Nov 16 22:11 .gitignore
2026-11-16 19:11:30.694 |  -rw-r--r--.  1 ec2-user ec2-user  2516 Nov 16 22:11 README.md
2026-11-16 19:11:30.694 |  drwxr-xr-x.  2 ec2-user ec2-user    98 Nov 16 22:11 config
2026-11-16 19:11:30.694 |  -rw-r--r--.  1 ec2-user ec2-user   120 Nov 16 22:11 lombok.config
2026-11-16 19:11:30.694 |  -rw-r--r--.  1 ec2-user ec2-user 16517 Nov 16 22:11 pom.xml
2026-11-16 19:11:30.694 |  drwxr-xr-x.  4 ec2-user ec2-user    30 Nov 16 22:11 src
2026-11-16 19:11:30.759 |  [Pipeline] }
2026-11-16 19:11:30.907 |  [Pipeline] // withCredentials
2026-11-16 19:11:30.976 |  [Pipeline] isUnix
2026-11-16 19:11:31.017 |  [Pipeline] sh
2026-11-16 19:11:31.784 |  + git rev-parse HEAD
2026-11-16 19:11:31.889 |  [Pipeline] echo
2026-11-16 19:11:31.901 |  SL_InjetarParametroBuild: parâmetro 'git_commit_sha' injetado com sucesso.
2026-11-16 19:11:32.043 |  [Pipeline] echo
2026-11-16 19:11:32.069 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.069 |  | Ambiente detectado: PRD
2026-11-16 19:11:32.069 |  | Carregando arquivo de configuração: jenkinsfile-config.json
2026-11-16 19:11:32.069 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.101 |  [Pipeline] libraryResource
2026-11-16 19:11:32.151 |  [Pipeline] readJSON
2026-11-16 19:11:32.253 |  [Pipeline] echo
2026-11-16 19:11:32.270 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.270 |  | IMPORTANTE!!!
2026-11-16 19:11:32.270 |  | O pipeline inicia realizando a consulta dos dados da aplicação no Backstage.
2026-11-16 19:11:32.270 |  | Verifique as informações cadastradas na ferramenta para o pipeline não abortar.
2026-11-16 19:11:32.270 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.326 |  [Pipeline] echo
2026-11-16 19:11:32.338 |  gitlabSourceRepoHttpUrl não existe, disparo manual!
2026-11-16 19:11:32.382 |  [Pipeline] echo
2026-11-16 19:11:32.391 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.391 |  | GIT_URL_LOCAL: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git
2026-11-16 19:11:32.391 |  | GIT_BRANCH_LOCAL: null - Para essa etapa esse parametro não é lido sendo fixo master
2026-11-16 19:11:32.391 |  | GIT_HASH_LOCAL: hsmanual
2026-11-16 19:11:32.391 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:32.440 |  [Pipeline] echo
2026-11-16 19:11:32.445 |  #### VOCÊ ESTA UTILIZANDO O NOVO MODULO DE CHECKOUT DE DEVSECOPS ####
2026-11-16 19:11:32.445 |  PARAMETROS DE ENTRADA
2026-11-16 19:11:32.445 |  URL DO GITLAB : https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git
2026-11-16 19:11:32.445 |  BRANCH DO GITLAB : master
2026-11-16 19:11:32.445 |  PARAMETROS EXTRA DO GITLAB : 43400
2026-11-16 19:11:32.445 |  
2026-11-16 19:11:32.467 |  [Pipeline] echo
2026-11-16 19:11:32.486 |  
2026-11-16 19:11:32.486 |  ######## RELAÇÃO DE PARAMETROS EXTRAS EXISTENTE ##########
2026-11-16 19:11:32.486 |  DIRETÓRIO DE DESTINO DO CHECKOUT: 43400
2026-11-16 19:11:32.486 |  
2026-11-16 19:11:32.486 |  ######## DADOS IMPORTANTES ##########
2026-11-16 19:11:32.486 |  GRUPO DO PROJETO: plataforma_devops
2026-11-16 19:11:32.486 |  
2026-11-16 19:11:32.566 |  [Pipeline] withCredentials
2026-11-16 19:11:32.583 |  Masking supported pattern matches of $gitlabsenha or $gitlabuser
2026-11-16 19:11:32.617 |  [Pipeline] {
2026-11-16 19:11:32.719 |  [Pipeline] echo
2026-11-16 19:11:32.734 |  CREDENCIAL LOCALIZADA!! cred-plataforma_devops-gitlab
2026-11-16 19:11:32.751 |  [Pipeline] }
2026-11-16 19:11:32.837 |  [Pipeline] // withCredentials
2026-11-16 19:11:32.946 |  [Pipeline] dir
2026-11-16 19:11:32.947 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8/43400
2026-11-16 19:11:32.953 |  [Pipeline] {
2026-11-16 19:11:33.020 |  [Pipeline] echo
2026-11-16 19:11:33.041 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git, BRANCH: master, DIRETORIO: 43400
2026-11-16 19:11:33.091 |  [Pipeline] echo
2026-11-16 19:11:33.111 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git, BRANCH: master
2026-11-16 19:11:33.152 |  [Pipeline] echo
2026-11-16 19:11:33.161 |  credenciaisIdConvertido: cred-plataforma_devops-gitlab
2026-11-16 19:11:33.198 |  [Pipeline] sh
2026-11-16 19:11:34.085 |  + rm /home/ec2-user/.git-credentials
2026-11-16 19:11:34.085 |  rm: cannot remove '/home/ec2-user/.git-credentials': No such file or directory
2026-11-16 19:11:34.205 |  [Pipeline] echo
2026-11-16 19:11:34.217 |  Arquivo não encontrado ~/.git-credentials
2026-11-16 19:11:34.239 |  [Pipeline] sh
2026-11-16 19:11:35.013 |  + rm /home/ec2-user/.gitconfig
2026-11-16 19:11:35.013 |  rm: cannot remove '/home/ec2-user/.gitconfig': No such file or directory
2026-11-16 19:11:35.121 |  [Pipeline] echo
2026-11-16 19:11:35.127 |  Arquivo não encontrado ~/.gitconfig
2026-11-16 19:11:35.143 |  [Pipeline] isUnix
2026-11-16 19:11:35.167 |  [Pipeline] isUnix
2026-11-16 19:11:35.237 |  [Pipeline] withCredentials
2026-11-16 19:11:35.596 |   > git --version # timeout=10
2026-11-16 19:11:35.669 |   > git --version # 'git version 2.33.0'
2026-11-16 19:11:36.010 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-11-16 19:11:36.021 |  [Pipeline] {
2026-11-16 19:11:36.072 |  [Pipeline] sh
2026-11-16 19:11:36.843 |  + ls -la
2026-11-16 19:11:36.844 |  total 0
2026-11-16 19:11:36.844 |  drwxr-xr-x. 2 ec2-user ec2-user   6 Nov 16 22:11 .
2026-11-16 19:11:36.844 |  drwxr-xr-x. 7 ec2-user ec2-user 144 Nov 16 22:11 ..
2026-11-16 19:11:36.975 |  [Pipeline] sh
2026-11-16 19:11:37.774 |  + pwd
2026-11-16 19:11:37.774 |  /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8/43400
2026-11-16 19:11:37.853 |  [Pipeline] sh
2026-11-16 19:11:38.623 |  + rm -rf '*' '.[!.]*'
2026-11-16 19:11:38.701 |  [Pipeline] sh
2026-11-16 19:11:39.474 |  + git clone https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git .
2026-11-16 19:11:39.474 |  Cloning into '.'...
2026-11-16 19:11:41.350 |  [Pipeline] sh
2026-11-16 19:11:42.107 |  + git checkout master
2026-11-16 19:11:42.107 |  Already on 'master'
2026-11-16 19:11:42.107 |  Your branch is up to date with 'origin/master'.
2026-11-16 19:11:42.221 |  [Pipeline] sh
2026-11-16 19:11:42.990 |  + git branch
2026-11-16 19:11:42.990 |  * master
2026-11-16 19:11:43.078 |  [Pipeline] sh
2026-11-16 19:11:43.863 |  + ls -la
2026-11-16 19:11:43.863 |  total 28
2026-11-16 19:11:43.863 |  drwxr-xr-x. 5 ec2-user ec2-user    93 Nov 16 22:11 .
2026-11-16 19:11:43.863 |  drwxr-xr-x. 7 ec2-user ec2-user   144 Nov 16 22:11 ..
2026-11-16 19:11:43.863 |  drwxr-xr-x. 7 ec2-user ec2-user   147 Nov 16 22:11 .git
2026-11-16 19:11:43.863 |  -rw-r--r--. 1 ec2-user ec2-user  1059 Nov 16 22:11 .gitignore
2026-11-16 19:11:43.863 |  -rw-r--r--. 1 ec2-user ec2-user  2516 Nov 16 22:11 README.md
2026-11-16 19:11:43.863 |  drwxr-xr-x. 2 ec2-user ec2-user    98 Nov 16 22:11 config
2026-11-16 19:11:43.863 |  -rw-r--r--. 1 ec2-user ec2-user 20360 Nov 16 22:11 pom.xml
2026-11-16 19:11:43.863 |  drwxr-xr-x. 4 ec2-user ec2-user    30 Nov 16 22:11 src
2026-11-16 19:11:43.936 |  [Pipeline] }
2026-11-16 19:11:44.089 |  [Pipeline] // withCredentials
2026-11-16 19:11:44.124 |  [Pipeline] }
2026-11-16 19:11:44.223 |  [Pipeline] // dir
2026-11-16 19:11:44.268 |  [Pipeline] fileExists
2026-11-16 19:11:44.430 |  [Pipeline] fileExists
2026-11-16 19:11:44.581 |  [Pipeline] echo
2026-11-16 19:11:44.594 |  ./43400/pom.xml
2026-11-16 19:11:44.624 |  [Pipeline] readMavenPom
2026-11-16 19:11:45.045 |  [Pipeline] fileExists
2026-11-16 19:11:45.395 |  [Pipeline] fileExists
2026-11-16 19:11:45.661 |  [Pipeline] echo
2026-11-16 19:11:45.686 |  isMaven: true
2026-11-16 19:11:45.735 |  [Pipeline] echo
2026-11-16 19:11:45.749 |  isNPM: false
2026-11-16 19:11:45.776 |  [Pipeline] echo
2026-11-16 19:11:45.783 |  isPython: false
2026-11-16 19:11:45.902 |  [Pipeline] withCredentials
2026-11-16 19:11:45.948 |  Masking supported pattern matches of $BACKSTAGE_PASS
2026-11-16 19:11:45.976 |  [Pipeline] {
2026-11-16 19:11:46.031 |  [Pipeline] httpRequest
2026-11-16 19:11:46.078 |  Warning: A secret was passed to "httpRequest" using Groovy String interpolation, which is insecure.
2026-11-16 19:11:46.078 |  		 Affected argument(s) used the following variable(s): [BACKSTAGE_PASS]
2026-11-16 19:11:46.078 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-11-16 19:11:46.945 |  [Pipeline] readJSON
2026-11-16 19:11:47.039 |  [Pipeline] }
2026-11-16 19:11:47.126 |  [Pipeline] // withCredentials
2026-11-16 19:11:47.198 |  [Pipeline] echo
2026-11-16 19:11:47.213 |  vou chamar: https://internal-lb-portobackstage-backend-781942978.ca-central-1.elb.amazonaws.com/api/v1/componente/detalhes?nome_componente=sboot-auto-cota-premio-informado
2026-11-16 19:11:47.244 |  [Pipeline] httpRequest
2026-11-16 19:11:47.548 |  [Pipeline] echo
2026-11-16 19:11:47.554 |  CICD_CONFIGS_RAW: {"propriedades_gerais":{"codigo_componente":11819,"nome_componente":"sboot-auto-cota-premio-informado","descricao_componente":"Aplicação para controle e monitoramento do prêmio informado","descricao_template":"template - mvc - para a criação de aplicações de backend com spring-boot 4","descricao_grupo":"Produto Seguro Auto","descricao_subgrupo":"Processos e integrações de Cotação","codigo_grupo":2,"codigo_subgrupo":108,"codigo_template":36,"sigla_grupo":"auto","sigla_subgrupo":"cota","centro_custo":"10013223","sigla_template":"sboot","versao_template":2,"https_repositorio":"https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git","codigo_componente_git":37904,"nrbuild":0,"ssh_repositorio":"gitlab@gitportoprd.portoseguro.brasil:plataforma_devops/auto/cota/sboot-auto-cota-premio-informado.git","slaveci":"plataforma.jenkinsci.slave","slavecd":"plataforma.jenkinscd.slave","googlechat_link":" https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w","bypasslibseguranca":false,"jobci":"https://jenkinsciportoprd.portoseguro.brasil/job/Continuous_Delivery/job/Java_Container_OnPre_CI_Backstage/buildWithParameters","jobcd":"https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/buildWithParameters","tokenjobci":"d9a6d0536666eb24e11ff1bfcdc44ffe","webhookjobci":"https://jenkinsciportoprd.portoseguro.brasil/project/Continuous_Delivery/Java_Container_OnPre_CI_Backstage","codigo_template_orquestrador":"sboot-onpre","flag_orquestrador":true,"codigo_sistema":85,"status_integracao":"S","data_integracao":"2026-11-16T00:00:00.000Z","appexterna":false,"grupoparametros":264,"tipo_ambiente":13,"verifica_namespace":true},"grupo":"auto","subgrupo":"cota","slaveCI":"plataforma.jenkinsci.slave","slaveCD":"plataforma.jenkinscd.slave","googleChatWebhook":" https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w","deploy":[{"chave":"helm_tool","valor":"helm-v3.8.2-linux-amd64"},{"chave":"dast","valor":"backend"}],"build":[{"chave":"versao_docker_file","valor":"v1"},{"chave":"customMaven","valor":"maven-3.8.6"},{"chave":"customCommands","valor":"-Dspring.profiles.active=testepipeline"},{"chave":"tecnologia","valor":"java"},{"chave":"imagemBaseArquitetura","valor":"continuous_delivery/corp/arqt/image-corp-arqt-java21:1.22.0-release"},{"chave":"customJDK","valor":"jdk21-aws"}],"libs_obrigatorias":["lib-corp-arqt-sboot-security"],"bypasslibseguranca":false,"appexterna":false,"ambientes":[{"nome":"kube-onprem-openshift-dev","grupo_execucao":"dev","codigo_ambiente":410,"descricao_ambiente":"kube-onprem-openshift-dev","propriedades":[{"chave":"credenciais_jenkins","valor":"jenkinsOcpmasterNPRString"},{"chave":"host","valor":"auto-cota-dev.apps.ocpnpr.portoseguro.brasil"},{"chave":"id_conta","valor":"0"},{"chave":"kube_server_api","valor":"https://api.ocpnpr.portoseguro.brasil:6443"},{"chave":"label_cluster","valor":"corp"},{"chave":"namespace","valor":"n/a"},{"chave":"nome_cluster","valor":"kube-onprem-openshift-dev"},{"chave":"regiao_cluster","valor":"datacenter"},{"chave":"tipo_cluster","valor":"OC"}]},{"nome":"kube-onprem-openshift-autoen01-tst","grupo_execucao":"tst","codigo_ambiente":919,"descricao_ambiente":"kube-onprem-openshift-autoen01-tst","propriedades":[{"chave":"credenciais_jenkins","valor":"jenkins-oc-autoen01-tst"},{"chave":"host","valor":"auto-cota-tst.apps.ocpnpr.portoseguro.brasil"},{"chave":"id_conta","valor":"0"},{"chave":"kube_server_api","valor":"https://api.autoen01.tst.platform.porto:6443"},{"chave":"label_cluster","valor":"autoen01tst"},{"chave":"namespace","valor":"n/a"},{"chave":"nome_cluster","valor":"kube-onprem-openshift-autoen01-tst"},{"chave":"regiao_cluster","valor":"datacenter"},{"chave":"tipo_cluster","valor":"OC"}]},{"nome":"kube-onprem-openshift-autoen01-dev","grupo_execucao":"dev","codigo_ambiente":860,"descricao_ambiente":"kube-onprem-openshift-autoen01-dev","propriedades":[{"chave":"credenciais_jenkins","valor":"jenkins-oc-autoen01-tst"},{"chave":"host","valor":"auto-cota-dev.apps.ocpnpr.portoseguro.brasil"},{"chave":"id_conta","valor":"0"},{"chave":"kube_server_api","valor":"https://api.autoen01.tst.platform.porto:6443"},{"chave":"label_cluster","valor":"autoen01tst"},{"chave":"namespace","valor":"n/a"},{"chave":"nome_cluster","valor":"kube-onprem-openshift-autoen01-tst"},{"chave":"regiao_cluster","valor":"datacenter"},{"chave":"tipo_cluster","valor":"OC"}]}],"rdm":{"matricula_cliente_responsavel":"F0133542","area_afetada":"PSG - SQUAD VENDAS AUTO I","categorias":[{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Sistema Auto Cotação","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Sistema Auto Cotação","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Sistema Auto Cotação","grupo_execucao":"hml"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Sistema Auto Cotação","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"hml"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Sistema Expurgo Convivencia","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Sistema Expurgo Convivencia","grupo_execucao":"hml"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Sistema Expurgo Convivencia","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Sistema Expurgo Convivencia","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Histórico de Documento","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Histórico de Documento","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Histórico de Documento","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Histórico de Documento","grupo_execucao":"hml"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Exceções Urgentes","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.Devops.Exceções Substituto","grupo_execucao":"prd"}]},"env":{"env":"PRD","url_fila":"https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage","credencial":"svc-jenkins-cicd.devsecops-prd","bucket_qa":"qa-s3-techstore-qa-prd"}}
2026-11-16 19:11:47.591 |  [Pipeline] echo
2026-11-16 19:11:47.597 |  class [B
2026-11-16 19:11:47.634 |  [Pipeline] readJSON
2026-11-16 19:11:47.740 |  [Pipeline] dir
2026-11-16 19:11:47.740 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8/43400
2026-11-16 19:11:47.762 |  [Pipeline] {
2026-11-16 19:11:47.825 |  [Pipeline] deleteDir
2026-11-16 19:11:47.989 |  [Pipeline] }
2026-11-16 19:11:48.064 |  [Pipeline] // dir
2026-11-16 19:11:48.123 |  [Pipeline] dir
2026-11-16 19:11:48.124 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage@8/43400@tmp
2026-11-16 19:11:48.135 |  [Pipeline] {
2026-11-16 19:11:48.178 |  [Pipeline] deleteDir
2026-11-16 19:11:48.334 |  [Pipeline] }
2026-11-16 19:11:48.424 |  [Pipeline] // dir
2026-11-16 19:11:48.464 |  [Pipeline] readMavenPom
2026-11-16 19:11:48.956 |  [Pipeline] }
2026-11-16 19:11:49.038 |  [Pipeline] // script
2026-11-16 19:11:49.070 |  [Pipeline] }
2026-11-16 19:11:49.178 |  [Pipeline] // stage
2026-11-16 19:11:49.237 |  [Pipeline] stage
2026-11-16 19:11:49.246 |  [Pipeline] { (Configurar)
2026-11-16 19:11:49.388 |  [Pipeline] script
2026-11-16 19:11:49.400 |  [Pipeline] {
2026-11-16 19:11:49.474 |  [Pipeline] echo
2026-11-16 19:11:49.485 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:49.485 |  | Stage Configurar
2026-11-16 19:11:49.485 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:49.557 |  [Pipeline] echo
2026-11-16 19:11:49.567 |  Enviado mensagem via google chat...
2026-11-16 19:11:49.680 |  [Pipeline] echo
2026-11-16 19:11:49.690 |  URL de Envio:  https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w&threadKey=sboot-auto-cota-premio-informado:build-43400CD
2026-11-16 19:11:49.726 |  [Pipeline] echo
2026-11-16 19:11:49.740 |  Enviando Request...
2026-11-16 19:11:49.765 |  [Pipeline] httpRequest
2026-11-16 19:11:50.380 |  [Pipeline] echo
2026-11-16 19:11:50.406 |  Enviando mensagem para o backstage - componente: sboot-auto-cota-premio-informado - step: INICIO - status: P - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:11:50.463 |  [Pipeline] withCredentials
2026-11-16 19:11:50.511 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-11-16 19:11:50.532 |  [Pipeline] {
2026-11-16 19:11:50.582 |  [Pipeline] echo
2026-11-16 19:11:50.602 |  Mensagem a ser enviada para o backstage: key:STEPCD;componente:sboot-auto-cota-premio-informado;step:INICIO;status:P;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:11:50.621 |  [Pipeline] sh
2026-11-16 19:11:51.619 |  + aws --region ca-central-1 sqs send-message --queue-url https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage --message-body 'key:STEPCD;componente:sboot-auto-cota-premio-informado;step:INICIO;status:P;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/'
2026-11-16 19:11:51.920 |  {
2026-11-16 19:11:51.920 |      "MD5OfMessageBody": "6be0ea8c121149c3b45a4ced2bfd1084",
2026-11-16 19:11:51.920 |      "MessageId": "3fc11ef5-db84-4019-9902-472d24a54fd7"
2026-11-16 19:11:51.920 |  }
2026-11-16 19:11:52.085 |  [Pipeline] }
2026-11-16 19:11:52.176 |  [Pipeline] // withCredentials
2026-11-16 19:11:52.221 |  [Pipeline] readJSON
2026-11-16 19:11:52.489 |  [Pipeline] withCredentials
2026-11-16 19:11:52.502 |  Masking supported pattern matches of $BACKSTAGE_PASS
2026-11-16 19:11:52.540 |  [Pipeline] {
2026-11-16 19:11:52.590 |  [Pipeline] httpRequest
2026-11-16 19:11:52.610 |  Warning: A secret was passed to "httpRequest" using Groovy String interpolation, which is insecure.
2026-11-16 19:11:52.610 |  		 Affected argument(s) used the following variable(s): [BACKSTAGE_PASS]
2026-11-16 19:11:52.610 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-11-16 19:11:53.470 |  [Pipeline] readJSON
2026-11-16 19:11:53.581 |  [Pipeline] }
2026-11-16 19:11:53.679 |  [Pipeline] // withCredentials
2026-11-16 19:11:53.729 |  [Pipeline] httpRequest
2026-11-16 19:11:54.021 |  [Pipeline] echo
2026-11-16 19:11:54.033 |  [{"nome":"ALESSANDRO BALMANT DA SILVA","codigo_membro":3996,"matricula":"F0130722","lider":true,"pendente":false},{"nome":"ALFREDO GOMES DOS SANTOS","codigo_membro":11109,"matricula":"F0137262","lider":true,"pendente":false},{"nome":"ANDERSON BARROS DOBLINSKI","codigo_membro":7455,"matricula":"F0113896","lider":true,"pendente":false},{"nome":"ANDERSON FABIO DA SILVA JUNIOR","codigo_membro":6637,"matricula":"F0135885","lider":true,"pendente":false},{"nome":"ANDERSON JOSE DE LIMA","codigo_membro":7537,"matricula":"P0665450","lider":true,"pendente":false},{"nome":"ANDRE BUESSO DE LUCCA","codigo_membro":3348,"matricula":"F0132732","lider":true,"pendente":false},{"nome":"ANDRE DA SILVA LINS","codigo_membro":2763,"matricula":"F0127096","lider":true,"pendente":false},{"nome":"ANDRE DE PINA MENDES","codigo_membro":4956,"matricula":"F0132417","lider":true,"pendente":false},{"nome":"ANDRE MONT MOR DE AQUINO","codigo_membro":5621,"matricula":"F0131743","lider":true,"pendente":false},{"nome":"ANDRE TADEU DORNELAS DE ARAUJO","codigo_membro":5416,"matricula":"P0645985","lider":true,"pendente":false},{"nome":"ARTHUR DIEGO MENDONCA DE SANTANA","codigo_membro":5092,"matricula":"P0659650","lider":true,"pendente":false},{"nome":"BEATRIZ DANTAS DE MELO","codigo_membro":2612,"matricula":"F0131955","lider":true,"pendente":false},{"nome":"BRUNA RIBEIRO LEITE FERREIRA","codigo_membro":6636,"matricula":"F0112275","lider":true,"pendente":false},{"nome":"CAIO TUVO","codigo_membro":4813,"matricula":"F0116754","lider":true,"pendente":false},{"nome":"CARLOS ALBERTO VAZ DA SILVA","codigo_membro":5713,"matricula":"F0104782","lider":true,"pendente":false},{"nome":"CARLOS JOSE SANTA CRUZ SANTOS","codigo_membro":6044,"matricula":"P0648597","lider":true,"pendente":false},{"nome":"CELSO DE SOUZA MARTINS","codigo_membro":4104,"matricula":"P0645676","lider":true,"pendente":false},{"nome":"CREYTON BARRETO DE MORAES FERREIRA","codigo_membro":4172,"matricula":"F0132049","lider":true,"pendente":false},{"nome":"DANIELA VANNINI PINTER","codigo_membro":3997,"matricula":"F0113847","lider":true,"pendente":false},{"nome":"DANIEL DA SILVA OLIVEIRA","codigo_membro":10040,"matricula":"F0134397","lider":true,"pendente":false},{"nome":"DANIEL PEDERSEN MEDEIROS","codigo_membro":8503,"matricula":"P0645548","lider":true,"pendente":false},{"nome":"DANILO EDUARDO DA SILVA","codigo_membro":8456,"matricula":"F0134660","lider":true,"pendente":false},{"nome":"DENIS CRISPE SILVA","codigo_membro":4158,"matricula":"F0133310","lider":true,"pendente":false},{"nome":"DENIS SCAPIN RECALDE","codigo_membro":2622,"matricula":"F0130762","lider":true,"pendente":false},{"nome":"DENNI GERALDES DE CARVALHOSA MORAES","codigo_membro":2489,"matricula":"F0130547","lider":true,"pendente":false},{"nome":"DIEGO ALVES DOS SANTOS","codigo_membro":2405,"matricula":"F0121864","lider":true,"pendente":false},{"nome":"DIEGO MIGUEL ARRUDA DE MOURA","codigo_membro":10425,"matricula":"F0135638","lider":true,"pendente":false},{"nome":"ELTON BESERRA MORAES","codigo_membro":5001,"matricula":"P0649874","lider":true,"pendente":false},{"nome":"EMERSON NUNES DE SOUZA","codigo_membro":2909,"matricula":"F0133981","lider":true,"pendente":false},{"nome":"ERICK DOURADO GABRIEL","codigo_membro":9759,"matricula":"F0131253","lider":true,"pendente":false},{"nome":"ERIKSON BASTOS CAVALCANTI","codigo_membro":2295,"matricula":"P0648893","lider":true,"pendente":false},{"nome":"FABIO NUNES DELGADO","codigo_membro":4217,"matricula":"F0135023","lider":true,"pendente":false},{"nome":"FELIPE FIRMINO DE OLIVEIRA","codigo_membro":2839,"matricula":"F0129421","lider":true,"pendente":false},{"nome":"FERNANDO DOS SANTOS TERRA","codigo_membro":2274,"matricula":"F0116686","lider":true,"pendente":false},{"nome":"FERNANDO MARCOS DE OLIVEIRA SILVA","codigo_membro":2203,"matricula":"F0131810","lider":true,"pendente":false},{"nome":"FERNANDO SEPAROVIC","codigo_membro":4730,"matricula":"F0116218","lider":true,"pendente":false},{"nome":"GABRIEL ALMEIDA CARRERA","codigo_membro":5701,"matricula":"P0661285","lider":true,"pendente":false},{"nome":"GUSTAVO HENRIQUE ALVES DE JESUS","codigo_membro":5766,"matricula":"F0129759","lider":true,"pendente":false},{"nome":"HENRIQUE DO CANTO MALVEIRA","codigo_membro":2141,"matricula":"F0133542","lider":true,"pendente":false},{"nome":"HERBERT SOUZA DA SILVA","codigo_membro":5058,"matricula":"F0128281","lider":true,"pendente":false},{"nome":"ICARO ANTONIO FIGARO ARAUJO","codigo_membro":6245,"matricula":"F0134432","lider":true,"pendente":false},{"nome":"IURI MAGALHAES SILVA","codigo_membro":4625,"matricula":"F0127267","lider":true,"pendente":false},{"nome":"JOSE AUGUSTO DA COSTA JALES NETO","codigo_membro":7824,"matricula":"P0664768","lider":true,"pendente":false},{"nome":"JOSE BERNARDO SOARES CORTIZO","codigo_membro":6443,"matricula":"P0656812","lider":true,"pendente":false},{"nome":"KAYQUE LIMA NUNES","codigo_membro":6243,"matricula":"F0134437","lider":true,"pendente":false},{"nome":"LAUDEMIRO ELIAS DIAS DA SILVA","codigo_membro":10617,"matricula":"F0129564","lider":true,"pendente":false},{"nome":"LINCOLN FELIPE GONCALVES MEDEIROS","codigo_membro":5202,"matricula":"F0134634","lider":true,"pendente":false},{"nome":"LUCAS GONCALVES LEITE","codigo_membro":5737,"matricula":"F0133022","lider":true,"pendente":false},{"nome":"LUCAS HENRIQUE BARREIRA BUENO","codigo_membro":3539,"matricula":"F0115747","lider":true,"pendente":false},{"nome":"LUCA SILVA GOUVEIA","codigo_membro":4040,"matricula":"P0662501","lider":true,"pendente":false},{"nome":"LUIZ FELIPE BARBOSA FERRAZ AMORIM","codigo_membro":3800,"matricula":"F0133853","lider":true,"pendente":false},{"nome":"MARCELO GOMES DE VASCONCELOS","codigo_membro":4614,"matricula":"F0134669","lider":true,"pendente":false},{"nome":"MARCEL ROGER VILELA GARCIA","codigo_membro":8737,"matricula":"F0133319","lider":true,"pendente":false},{"nome":"MARCIO ROBERTO BUENO","codigo_membro":2145,"matricula":"F0105873","lider":true,"pendente":false},{"nome":"MARCOS VINICIUS BESERRA PINHO","codigo_membro":5624,"matricula":"F0130288","lider":true,"pendente":false},{"nome":"MATHEUS MATOS PIEROPAN DE SOUZA","codigo_membro":4698,"matricula":"F0133300","lider":true,"pendente":false},{"nome":"NELSON TINAJERO RONCATTI","codigo_membro":2597,"matricula":"F0123167","lider":true,"pendente":false},{"nome":"PATRICIA DA SILVA","codigo_membro":9913,"matricula":"F0113738","lider":true,"pendente":false},{"nome":"PAULO GIGANTE CORSI","codigo_membro":5388,"matricula":"F0135516","lider":true,"pendente":false},{"nome":"PERKINS ALVES FERREIRA","codigo_membro":3716,"matricula":"F0100990","lider":true,"pendente":false},{"nome":"RAFAEL ALVES DE LIMA","codigo_membro":2232,"matricula":"F0130565","lider":true,"pendente":false},{"nome":"RAFAEL DE OLIVEIRA SILVA","codigo_membro":4982,"matricula":"F0133778","lider":true,"pendente":false},{"nome":"RAFAEL GONCALVES VASTAG","codigo_membro":9438,"matricula":"F0136882","lider":true,"pendente":false},{"nome":"RANGEL VICTOR SANTOS","codigo_membro":9065,"matricula":"F0135188","lider":true,"pendente":false},{"nome":"RICARDO APARECIDO DA SILVA P SANTOS","codigo_membro":5918,"matricula":"F0113753","lider":true,"pendente":false},{"nome":"RICARDO SOUZA MEDEIROS","codigo_membro":9500,"matricula":"F0136988","lider":true,"pendente":false},{"nome":"ROMARIO SERAFIM DA SILVA","codigo_membro":9429,"matricula":"F0132638","lider":true,"pendente":false},{"nome":"SAMUEL DO NASCIMENTO MACHADO DE OLIVEIRA","codigo_membro":3315,"matricula":"F0133201","lider":true,"pendente":false},{"nome":"SERGIO RICARDO LOURENCO FILHO","codigo_membro":4272,"matricula":"F0130977","lider":true,"pendente":false},{"nome":"TATIANE DE CASSIA BRANDANI","codigo_membro":3813,"matricula":"F0131708","lider":true,"pendente":false},{"nome":"TIAGO BARBANO VENTURA","codigo_membro":4639,"matricula":"F0113800","lider":true,"pendente":false},{"nome":"TIAGO RICARDO ALMEIDA DA SILVA","codigo_membro":3799,"matricula":"F0122569","lider":true,"pendente":false},{"nome":"TIAGO RODRIGUES CORA","codigo_membro":4890,"matricula":"P0655232","lider":true,"pendente":false},{"nome":"VANDEIR DE PAULA BARREIRO","codigo_membro":4012,"matricula":"F0130888","lider":true,"pendente":false},{"nome":"VICTOR ABRANCHES DE SESSA","codigo_membro":8807,"matricula":"F0134662","lider":true,"pendente":false},{"nome":"VICTOR KENGOO MORISUE KODAMA","codigo_membro":6391,"matricula":"F0135673","lider":true,"pendente":false},{"nome":"VINICIUS THIAGO LEITE DOS SANTOS","codigo_membro":11113,"matricula":"F0134640","lider":true,"pendente":false},{"nome":"VITOR AUGUSTO ALVES","codigo_membro":4263,"matricula":"F0133202","lider":true,"pendente":false},{"nome":"WAGNER FERREIRA DA CRUZ","codigo_membro":3970,"matricula":"F0131509","lider":true,"pendente":false},{"nome":"WENDER CRIS DE SOUZA FIRMINO","codigo_membro":3824,"matricula":"F0134631","lider":true,"pendente":false},{"nome":"WESLEY SOARES DE OLIVEIRA","codigo_membro":5476,"matricula":"F0135164","lider":true,"pendente":false}]
2026-11-16 19:11:54.074 |  [Pipeline] readJSON
2026-11-16 19:11:54.211 |  [Pipeline] echo
2026-11-16 19:11:54.218 |  {"nome":"ALESSANDRO BALMANT DA SILVA","codigo_membro":3996,"matricula":"F0130722","lider":true,"pendente":false}
2026-11-16 19:11:54.240 |  [Pipeline] echo
2026-11-16 19:11:54.267 |  {"nome":"ALFREDO GOMES DOS SANTOS","codigo_membro":11109,"matricula":"F0137262","lider":true,"pendente":false}
2026-11-16 19:11:54.305 |  [Pipeline] echo
2026-11-16 19:11:54.325 |  {"nome":"ANDERSON BARROS DOBLINSKI","codigo_membro":7455,"matricula":"F0113896","lider":true,"pendente":false}
2026-11-16 19:11:54.346 |  [Pipeline] echo
2026-11-16 19:11:54.360 |  {"nome":"ANDERSON FABIO DA SILVA JUNIOR","codigo_membro":6637,"matricula":"F0135885","lider":true,"pendente":false}
2026-11-16 19:11:54.405 |  [Pipeline] echo
2026-11-16 19:11:54.414 |  {"nome":"ANDERSON JOSE DE LIMA","codigo_membro":7537,"matricula":"P0665450","lider":true,"pendente":false}
2026-11-16 19:11:54.449 |  [Pipeline] echo
2026-11-16 19:11:54.456 |  {"nome":"ANDRE BUESSO DE LUCCA","codigo_membro":3348,"matricula":"F0132732","lider":true,"pendente":false}
2026-11-16 19:11:54.492 |  [Pipeline] echo
2026-11-16 19:11:54.497 |  {"nome":"ANDRE DA SILVA LINS","codigo_membro":2763,"matricula":"F0127096","lider":true,"pendente":false}
2026-11-16 19:11:54.539 |  [Pipeline] echo
2026-11-16 19:11:54.551 |  {"nome":"ANDRE DE PINA MENDES","codigo_membro":4956,"matricula":"F0132417","lider":true,"pendente":false}
2026-11-16 19:11:54.604 |  [Pipeline] echo
2026-11-16 19:11:54.622 |  {"nome":"ANDRE MONT MOR DE AQUINO","codigo_membro":5621,"matricula":"F0131743","lider":true,"pendente":false}
2026-11-16 19:11:54.668 |  [Pipeline] echo
2026-11-16 19:11:54.677 |  {"nome":"ANDRE TADEU DORNELAS DE ARAUJO","codigo_membro":5416,"matricula":"P0645985","lider":true,"pendente":false}
2026-11-16 19:11:54.735 |  [Pipeline] echo
2026-11-16 19:11:54.753 |  {"nome":"ARTHUR DIEGO MENDONCA DE SANTANA","codigo_membro":5092,"matricula":"P0659650","lider":true,"pendente":false}
2026-11-16 19:11:54.791 |  [Pipeline] echo
2026-11-16 19:11:54.814 |  {"nome":"BEATRIZ DANTAS DE MELO","codigo_membro":2612,"matricula":"F0131955","lider":true,"pendente":false}
2026-11-16 19:11:54.857 |  [Pipeline] echo
2026-11-16 19:11:54.870 |  {"nome":"BRUNA RIBEIRO LEITE FERREIRA","codigo_membro":6636,"matricula":"F0112275","lider":true,"pendente":false}
2026-11-16 19:11:54.911 |  [Pipeline] echo
2026-11-16 19:11:54.930 |  {"nome":"CAIO TUVO","codigo_membro":4813,"matricula":"F0116754","lider":true,"pendente":false}
2026-11-16 19:11:54.991 |  [Pipeline] echo
2026-11-16 19:11:55.002 |  {"nome":"CARLOS ALBERTO VAZ DA SILVA","codigo_membro":5713,"matricula":"F0104782","lider":true,"pendente":false}
2026-11-16 19:11:55.040 |  [Pipeline] echo
2026-11-16 19:11:55.055 |  {"nome":"CARLOS JOSE SANTA CRUZ SANTOS","codigo_membro":6044,"matricula":"P0648597","lider":true,"pendente":false}
2026-11-16 19:11:55.089 |  [Pipeline] echo
2026-11-16 19:11:55.101 |  {"nome":"CELSO DE SOUZA MARTINS","codigo_membro":4104,"matricula":"P0645676","lider":true,"pendente":false}
2026-11-16 19:11:55.124 |  [Pipeline] echo
2026-11-16 19:11:55.130 |  {"nome":"CREYTON BARRETO DE MORAES FERREIRA","codigo_membro":4172,"matricula":"F0132049","lider":true,"pendente":false}
2026-11-16 19:11:55.158 |  [Pipeline] echo
2026-11-16 19:11:55.163 |  {"nome":"DANIELA VANNINI PINTER","codigo_membro":3997,"matricula":"F0113847","lider":true,"pendente":false}
2026-11-16 19:11:55.188 |  [Pipeline] echo
2026-11-16 19:11:55.213 |  {"nome":"DANIEL DA SILVA OLIVEIRA","codigo_membro":10040,"matricula":"F0134397","lider":true,"pendente":false}
2026-11-16 19:11:55.252 |  [Pipeline] echo
2026-11-16 19:11:55.257 |  {"nome":"DANIEL PEDERSEN MEDEIROS","codigo_membro":8503,"matricula":"P0645548","lider":true,"pendente":false}
2026-11-16 19:11:55.283 |  [Pipeline] echo
2026-11-16 19:11:55.299 |  {"nome":"DANILO EDUARDO DA SILVA","codigo_membro":8456,"matricula":"F0134660","lider":true,"pendente":false}
2026-11-16 19:11:55.352 |  [Pipeline] echo
2026-11-16 19:11:55.367 |  {"nome":"DENIS CRISPE SILVA","codigo_membro":4158,"matricula":"F0133310","lider":true,"pendente":false}
2026-11-16 19:11:55.405 |  [Pipeline] echo
2026-11-16 19:11:55.423 |  {"nome":"DENIS SCAPIN RECALDE","codigo_membro":2622,"matricula":"F0130762","lider":true,"pendente":false}
2026-11-16 19:11:55.466 |  [Pipeline] echo
2026-11-16 19:11:55.472 |  {"nome":"DENNI GERALDES DE CARVALHOSA MORAES","codigo_membro":2489,"matricula":"F0130547","lider":true,"pendente":false}
2026-11-16 19:11:55.509 |  [Pipeline] echo
2026-11-16 19:11:55.516 |  {"nome":"DIEGO ALVES DOS SANTOS","codigo_membro":2405,"matricula":"F0121864","lider":true,"pendente":false}
2026-11-16 19:11:55.565 |  [Pipeline] echo
2026-11-16 19:11:55.576 |  {"nome":"DIEGO MIGUEL ARRUDA DE MOURA","codigo_membro":10425,"matricula":"F0135638","lider":true,"pendente":false}
2026-11-16 19:11:55.624 |  [Pipeline] echo
2026-11-16 19:11:55.639 |  {"nome":"ELTON BESERRA MORAES","codigo_membro":5001,"matricula":"P0649874","lider":true,"pendente":false}
2026-11-16 19:11:55.680 |  [Pipeline] echo
2026-11-16 19:11:55.685 |  {"nome":"EMERSON NUNES DE SOUZA","codigo_membro":2909,"matricula":"F0133981","lider":true,"pendente":false}
2026-11-16 19:11:55.722 |  [Pipeline] echo
2026-11-16 19:11:55.730 |  {"nome":"ERICK DOURADO GABRIEL","codigo_membro":9759,"matricula":"F0131253","lider":true,"pendente":false}
2026-11-16 19:11:55.789 |  [Pipeline] echo
2026-11-16 19:11:55.807 |  {"nome":"ERIKSON BASTOS CAVALCANTI","codigo_membro":2295,"matricula":"P0648893","lider":true,"pendente":false}
2026-11-16 19:11:55.866 |  [Pipeline] echo
2026-11-16 19:11:55.884 |  {"nome":"FABIO NUNES DELGADO","codigo_membro":4217,"matricula":"F0135023","lider":true,"pendente":false}
2026-11-16 19:11:55.951 |  [Pipeline] echo
2026-11-16 19:11:55.968 |  {"nome":"FELIPE FIRMINO DE OLIVEIRA","codigo_membro":2839,"matricula":"F0129421","lider":true,"pendente":false}
2026-11-16 19:11:56.014 |  [Pipeline] echo
2026-11-16 19:11:56.040 |  {"nome":"FERNANDO DOS SANTOS TERRA","codigo_membro":2274,"matricula":"F0116686","lider":true,"pendente":false}
2026-11-16 19:11:56.085 |  [Pipeline] echo
2026-11-16 19:11:56.105 |  {"nome":"FERNANDO MARCOS DE OLIVEIRA SILVA","codigo_membro":2203,"matricula":"F0131810","lider":true,"pendente":false}
2026-11-16 19:11:56.147 |  [Pipeline] echo
2026-11-16 19:11:56.161 |  {"nome":"FERNANDO SEPAROVIC","codigo_membro":4730,"matricula":"F0116218","lider":true,"pendente":false}
2026-11-16 19:11:56.187 |  [Pipeline] echo
2026-11-16 19:11:56.208 |  {"nome":"GABRIEL ALMEIDA CARRERA","codigo_membro":5701,"matricula":"P0661285","lider":true,"pendente":false}
2026-11-16 19:11:56.256 |  [Pipeline] echo
2026-11-16 19:11:56.268 |  {"nome":"GUSTAVO HENRIQUE ALVES DE JESUS","codigo_membro":5766,"matricula":"F0129759","lider":true,"pendente":false}
2026-11-16 19:11:56.305 |  [Pipeline] echo
2026-11-16 19:11:56.311 |  {"nome":"HENRIQUE DO CANTO MALVEIRA","codigo_membro":2141,"matricula":"F0133542","lider":true,"pendente":false}
2026-11-16 19:11:56.369 |  [Pipeline] echo
2026-11-16 19:11:56.375 |  {"nome":"HERBERT SOUZA DA SILVA","codigo_membro":5058,"matricula":"F0128281","lider":true,"pendente":false}
2026-11-16 19:11:56.427 |  [Pipeline] echo
2026-11-16 19:11:56.434 |  {"nome":"ICARO ANTONIO FIGARO ARAUJO","codigo_membro":6245,"matricula":"F0134432","lider":true,"pendente":false}
2026-11-16 19:11:56.471 |  [Pipeline] echo
2026-11-16 19:11:56.499 |  {"nome":"IURI MAGALHAES SILVA","codigo_membro":4625,"matricula":"F0127267","lider":true,"pendente":false}
2026-11-16 19:11:56.537 |  [Pipeline] echo
2026-11-16 19:11:56.559 |  {"nome":"JOSE AUGUSTO DA COSTA JALES NETO","codigo_membro":7824,"matricula":"P0664768","lider":true,"pendente":false}
2026-11-16 19:11:56.593 |  [Pipeline] echo
2026-11-16 19:11:56.598 |  {"nome":"JOSE BERNARDO SOARES CORTIZO","codigo_membro":6443,"matricula":"P0656812","lider":true,"pendente":false}
2026-11-16 19:11:56.621 |  [Pipeline] echo
2026-11-16 19:11:56.629 |  {"nome":"KAYQUE LIMA NUNES","codigo_membro":6243,"matricula":"F0134437","lider":true,"pendente":false}
2026-11-16 19:11:56.677 |  [Pipeline] echo
2026-11-16 19:11:56.707 |  {"nome":"LAUDEMIRO ELIAS DIAS DA SILVA","codigo_membro":10617,"matricula":"F0129564","lider":true,"pendente":false}
2026-11-16 19:11:56.736 |  [Pipeline] echo
2026-11-16 19:11:56.745 |  {"nome":"LINCOLN FELIPE GONCALVES MEDEIROS","codigo_membro":5202,"matricula":"F0134634","lider":true,"pendente":false}
2026-11-16 19:11:56.778 |  [Pipeline] echo
2026-11-16 19:11:56.784 |  {"nome":"LUCAS GONCALVES LEITE","codigo_membro":5737,"matricula":"F0133022","lider":true,"pendente":false}
2026-11-16 19:11:56.833 |  [Pipeline] echo
2026-11-16 19:11:56.853 |  {"nome":"LUCAS HENRIQUE BARREIRA BUENO","codigo_membro":3539,"matricula":"F0115747","lider":true,"pendente":false}
2026-11-16 19:11:56.917 |  [Pipeline] echo
2026-11-16 19:11:56.948 |  {"nome":"LUCA SILVA GOUVEIA","codigo_membro":4040,"matricula":"P0662501","lider":true,"pendente":false}
2026-11-16 19:11:56.991 |  [Pipeline] echo
2026-11-16 19:11:57.018 |  {"nome":"LUIZ FELIPE BARBOSA FERRAZ AMORIM","codigo_membro":3800,"matricula":"F0133853","lider":true,"pendente":false}
2026-11-16 19:11:57.069 |  [Pipeline] echo
2026-11-16 19:11:57.123 |  {"nome":"MARCELO GOMES DE VASCONCELOS","codigo_membro":4614,"matricula":"F0134669","lider":true,"pendente":false}
2026-11-16 19:11:57.183 |  [Pipeline] echo
2026-11-16 19:11:57.197 |  {"nome":"MARCEL ROGER VILELA GARCIA","codigo_membro":8737,"matricula":"F0133319","lider":true,"pendente":false}
2026-11-16 19:11:57.240 |  [Pipeline] echo
2026-11-16 19:11:57.249 |  {"nome":"MARCIO ROBERTO BUENO","codigo_membro":2145,"matricula":"F0105873","lider":true,"pendente":false}
2026-11-16 19:11:57.287 |  [Pipeline] echo
2026-11-16 19:11:57.320 |  {"nome":"MARCOS VINICIUS BESERRA PINHO","codigo_membro":5624,"matricula":"F0130288","lider":true,"pendente":false}
2026-11-16 19:11:57.381 |  [Pipeline] echo
2026-11-16 19:11:57.398 |  {"nome":"MATHEUS MATOS PIEROPAN DE SOUZA","codigo_membro":4698,"matricula":"F0133300","lider":true,"pendente":false}
2026-11-16 19:11:57.434 |  [Pipeline] echo
2026-11-16 19:11:57.442 |  {"nome":"NELSON TINAJERO RONCATTI","codigo_membro":2597,"matricula":"F0123167","lider":true,"pendente":false}
2026-11-16 19:11:57.470 |  [Pipeline] echo
2026-11-16 19:11:57.477 |  {"nome":"PATRICIA DA SILVA","codigo_membro":9913,"matricula":"F0113738","lider":true,"pendente":false}
2026-11-16 19:11:57.548 |  [Pipeline] echo
2026-11-16 19:11:57.573 |  {"nome":"PAULO GIGANTE CORSI","codigo_membro":5388,"matricula":"F0135516","lider":true,"pendente":false}
2026-11-16 19:11:57.619 |  [Pipeline] echo
2026-11-16 19:11:57.635 |  {"nome":"PERKINS ALVES FERREIRA","codigo_membro":3716,"matricula":"F0100990","lider":true,"pendente":false}
2026-11-16 19:11:57.671 |  [Pipeline] echo
2026-11-16 19:11:57.677 |  {"nome":"RAFAEL ALVES DE LIMA","codigo_membro":2232,"matricula":"F0130565","lider":true,"pendente":false}
2026-11-16 19:11:57.711 |  [Pipeline] echo
2026-11-16 19:11:57.717 |  {"nome":"RAFAEL DE OLIVEIRA SILVA","codigo_membro":4982,"matricula":"F0133778","lider":true,"pendente":false}
2026-11-16 19:11:57.762 |  [Pipeline] echo
2026-11-16 19:11:57.768 |  {"nome":"RAFAEL GONCALVES VASTAG","codigo_membro":9438,"matricula":"F0136882","lider":true,"pendente":false}
2026-11-16 19:11:57.806 |  [Pipeline] echo
2026-11-16 19:11:57.817 |  {"nome":"RANGEL VICTOR SANTOS","codigo_membro":9065,"matricula":"F0135188","lider":true,"pendente":false}
2026-11-16 19:11:57.864 |  [Pipeline] echo
2026-11-16 19:11:57.884 |  {"nome":"RICARDO APARECIDO DA SILVA P SANTOS","codigo_membro":5918,"matricula":"F0113753","lider":true,"pendente":false}
2026-11-16 19:11:57.936 |  [Pipeline] echo
2026-11-16 19:11:57.949 |  {"nome":"RICARDO SOUZA MEDEIROS","codigo_membro":9500,"matricula":"F0136988","lider":true,"pendente":false}
2026-11-16 19:11:57.989 |  [Pipeline] echo
2026-11-16 19:11:58.002 |  {"nome":"ROMARIO SERAFIM DA SILVA","codigo_membro":9429,"matricula":"F0132638","lider":true,"pendente":false}
2026-11-16 19:11:58.053 |  [Pipeline] echo
2026-11-16 19:11:58.059 |  {"nome":"SAMUEL DO NASCIMENTO MACHADO DE OLIVEIRA","codigo_membro":3315,"matricula":"F0133201","lider":true,"pendente":false}
2026-11-16 19:11:58.117 |  [Pipeline] echo
2026-11-16 19:11:58.122 |  {"nome":"SERGIO RICARDO LOURENCO FILHO","codigo_membro":4272,"matricula":"F0130977","lider":true,"pendente":false}
2026-11-16 19:11:58.154 |  [Pipeline] echo
2026-11-16 19:11:58.168 |  {"nome":"TATIANE DE CASSIA BRANDANI","codigo_membro":3813,"matricula":"F0131708","lider":true,"pendente":false}
2026-11-16 19:11:58.204 |  [Pipeline] echo
2026-11-16 19:11:58.237 |  {"nome":"TIAGO BARBANO VENTURA","codigo_membro":4639,"matricula":"F0113800","lider":true,"pendente":false}
2026-11-16 19:11:58.282 |  [Pipeline] echo
2026-11-16 19:11:58.288 |  {"nome":"TIAGO RICARDO ALMEIDA DA SILVA","codigo_membro":3799,"matricula":"F0122569","lider":true,"pendente":false}
2026-11-16 19:11:58.322 |  [Pipeline] echo
2026-11-16 19:11:58.339 |  {"nome":"TIAGO RODRIGUES CORA","codigo_membro":4890,"matricula":"P0655232","lider":true,"pendente":false}
2026-11-16 19:11:58.379 |  [Pipeline] echo
2026-11-16 19:11:58.391 |  {"nome":"VANDEIR DE PAULA BARREIRO","codigo_membro":4012,"matricula":"F0130888","lider":true,"pendente":false}
2026-11-16 19:11:58.433 |  [Pipeline] echo
2026-11-16 19:11:58.448 |  {"nome":"VICTOR ABRANCHES DE SESSA","codigo_membro":8807,"matricula":"F0134662","lider":true,"pendente":false}
2026-11-16 19:11:58.507 |  [Pipeline] echo
2026-11-16 19:11:58.522 |  {"nome":"VICTOR KENGOO MORISUE KODAMA","codigo_membro":6391,"matricula":"F0135673","lider":true,"pendente":false}
2026-11-16 19:11:58.558 |  [Pipeline] echo
2026-11-16 19:11:58.574 |  {"nome":"VINICIUS THIAGO LEITE DOS SANTOS","codigo_membro":11113,"matricula":"F0134640","lider":true,"pendente":false}
2026-11-16 19:11:58.633 |  [Pipeline] echo
2026-11-16 19:11:58.647 |  {"nome":"VITOR AUGUSTO ALVES","codigo_membro":4263,"matricula":"F0133202","lider":true,"pendente":false}
2026-11-16 19:11:58.690 |  [Pipeline] echo
2026-11-16 19:11:58.702 |  {"nome":"WAGNER FERREIRA DA CRUZ","codigo_membro":3970,"matricula":"F0131509","lider":true,"pendente":false}
2026-11-16 19:11:58.761 |  [Pipeline] echo
2026-11-16 19:11:58.777 |  {"nome":"WENDER CRIS DE SOUZA FIRMINO","codigo_membro":3824,"matricula":"F0134631","lider":true,"pendente":false}
2026-11-16 19:11:58.814 |  [Pipeline] echo
2026-11-16 19:11:58.827 |  {"nome":"WESLEY SOARES DE OLIVEIRA","codigo_membro":5476,"matricula":"F0135164","lider":true,"pendente":false}
2026-11-16 19:11:59.046 |  [Pipeline] }
2026-11-16 19:11:59.143 |  [Pipeline] // script
2026-11-16 19:11:59.177 |  [Pipeline] }
2026-11-16 19:11:59.268 |  [Pipeline] // stage
2026-11-16 19:11:59.345 |  [Pipeline] stage
2026-11-16 19:11:59.357 |  [Pipeline] { (Seleção do ambiente)
2026-11-16 19:11:59.473 |  [Pipeline] script
2026-11-16 19:11:59.489 |  [Pipeline] {
2026-11-16 19:11:59.568 |  [Pipeline] echo
2026-11-16 19:11:59.576 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:59.576 |  | Stage Seleção do ambiente
2026-11-16 19:11:59.576 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:11:59.645 |  [Pipeline] echo
2026-11-16 19:11:59.663 |  Enviado mensagem via google chat...
2026-11-16 19:11:59.717 |  [Pipeline] echo
2026-11-16 19:11:59.727 |  URL de Envio:  https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w&threadKey=sboot-auto-cota-premio-informado:build-43400CD
2026-11-16 19:11:59.761 |  [Pipeline] echo
2026-11-16 19:11:59.772 |  Enviando Request...
2026-11-16 19:11:59.827 |  [Pipeline] httpRequest
2026-11-16 19:12:00.547 |  [Pipeline] echo
2026-11-16 19:12:00.553 |  Enviando mensagem para o backstage - componente: sboot-auto-cota-premio-informado - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:12:00.596 |  [Pipeline] echo
2026-11-16 19:12:00.610 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:00.610 |  | Seleção automática de ambiente
2026-11-16 19:12:00.610 |  | dev
2026-11-16 19:12:00.610 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:00.785 |  [Pipeline] echo
2026-11-16 19:12:00.797 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:00.797 |  | Seleção automática de Versão
2026-11-16 19:12:00.797 |  | 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:12:00.797 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:01.023 |  [Pipeline] echo
2026-11-16 19:12:01.029 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:01.029 |  | Seleção automática do cluster
2026-11-16 19:12:01.029 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:01.076 |  [Pipeline] echo
2026-11-16 19:12:01.082 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:01.100 |  [Pipeline] echo
2026-11-16 19:12:01.120 |  Lista: [[codigo_propriedade:2011, chave:credenciais_jenkins, valor:jenkinsOcpmasterNPRString, obrigatorio:1], [codigo_propriedade:2012, chave:host, valor:apps.ocpnpr.portoseguro.brasil, obrigatorio:1], [codigo_propriedade:2017, chave:id_conta, valor:0, obrigatorio:1], [codigo_propriedade:2013, chave:kube_server_api, valor:https://api.ocpnpr.portoseguro.brasil:6443, obrigatorio:1], [codigo_propriedade:4040, chave:label_cluster, valor:corp, obrigatorio:1], [codigo_propriedade:2010, chave:namespace, valor:n/a, obrigatorio:1], [codigo_propriedade:2014, chave:nome_cluster, valor:kube-onprem-openshift-dev, obrigatorio:1], [codigo_propriedade:2016, chave:regiao_cluster, valor:datacenter, obrigatorio:1], [codigo_propriedade:2015, chave:tipo_cluster, valor:OC, obrigatorio:1]]
2026-11-16 19:12:01.150 |  [Pipeline] echo
2026-11-16 19:12:01.156 |  Chave Input: regiao_cluster
2026-11-16 19:12:01.213 |  [Pipeline] echo
2026-11-16 19:12:01.230 |  Chave: regiao_cluster
2026-11-16 19:12:01.269 |  [Pipeline] echo
2026-11-16 19:12:01.288 |  Valor:datacenter
2026-11-16 19:12:01.338 |  [Pipeline] echo
2026-11-16 19:12:01.344 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:01.388 |  [Pipeline] echo
2026-11-16 19:12:01.411 |  Lista: [[codigo_propriedade:2011, chave:credenciais_jenkins, valor:jenkinsOcpmasterNPRString, obrigatorio:1], [codigo_propriedade:2012, chave:host, valor:apps.ocpnpr.portoseguro.brasil, obrigatorio:1], [codigo_propriedade:2017, chave:id_conta, valor:0, obrigatorio:1], [codigo_propriedade:2013, chave:kube_server_api, valor:https://api.ocpnpr.portoseguro.brasil:6443, obrigatorio:1], [codigo_propriedade:4040, chave:label_cluster, valor:corp, obrigatorio:1], [codigo_propriedade:2010, chave:namespace, valor:n/a, obrigatorio:1], [codigo_propriedade:2014, chave:nome_cluster, valor:kube-onprem-openshift-dev, obrigatorio:1], [codigo_propriedade:2016, chave:regiao_cluster, valor:datacenter, obrigatorio:1], [codigo_propriedade:2015, chave:tipo_cluster, valor:OC, obrigatorio:1]]
2026-11-16 19:12:01.423 |  [Pipeline] echo
2026-11-16 19:12:01.428 |  Chave Input: nome_cluster
2026-11-16 19:12:01.466 |  [Pipeline] echo
2026-11-16 19:12:01.471 |  Chave: nome_cluster
2026-11-16 19:12:01.488 |  [Pipeline] echo
2026-11-16 19:12:01.517 |  Valor:kube-onprem-openshift-dev
2026-11-16 19:12:01.562 |  [Pipeline] echo
2026-11-16 19:12:01.586 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:01.615 |  [Pipeline] echo
2026-11-16 19:12:01.627 |  Lista: [[codigo_propriedade:2011, chave:credenciais_jenkins, valor:jenkinsOcpmasterNPRString, obrigatorio:1], [codigo_propriedade:2012, chave:host, valor:apps.ocpnpr.portoseguro.brasil, obrigatorio:1], [codigo_propriedade:2017, chave:id_conta, valor:0, obrigatorio:1], [codigo_propriedade:2013, chave:kube_server_api, valor:https://api.ocpnpr.portoseguro.brasil:6443, obrigatorio:1], [codigo_propriedade:4040, chave:label_cluster, valor:corp, obrigatorio:1], [codigo_propriedade:2010, chave:namespace, valor:n/a, obrigatorio:1], [codigo_propriedade:2014, chave:nome_cluster, valor:kube-onprem-openshift-dev, obrigatorio:1], [codigo_propriedade:2016, chave:regiao_cluster, valor:datacenter, obrigatorio:1], [codigo_propriedade:2015, chave:tipo_cluster, valor:OC, obrigatorio:1]]
2026-11-16 19:12:01.653 |  [Pipeline] echo
2026-11-16 19:12:01.659 |  Chave Input: credenciais_jenkins
2026-11-16 19:12:01.696 |  [Pipeline] echo
2026-11-16 19:12:01.708 |  Chave: credenciais_jenkins
2026-11-16 19:12:01.727 |  [Pipeline] echo
2026-11-16 19:12:01.732 |  Valor:jenkinsOcpmasterNPRString
2026-11-16 19:12:01.786 |  [Pipeline] echo
2026-11-16 19:12:01.791 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:01.820 |  [Pipeline] echo
2026-11-16 19:12:01.833 |  Lista: [[codigo_propriedade:2011, chave:credenciais_jenkins, valor:jenkinsOcpmasterNPRString, obrigatorio:1], [codigo_propriedade:2012, chave:host, valor:apps.ocpnpr.portoseguro.brasil, obrigatorio:1], [codigo_propriedade:2017, chave:id_conta, valor:0, obrigatorio:1], [codigo_propriedade:2013, chave:kube_server_api, valor:https://api.ocpnpr.portoseguro.brasil:6443, obrigatorio:1], [codigo_propriedade:4040, chave:label_cluster, valor:corp, obrigatorio:1], [codigo_propriedade:2010, chave:namespace, valor:n/a, obrigatorio:1], [codigo_propriedade:2014, chave:nome_cluster, valor:kube-onprem-openshift-dev, obrigatorio:1], [codigo_propriedade:2016, chave:regiao_cluster, valor:datacenter, obrigatorio:1], [codigo_propriedade:2015, chave:tipo_cluster, valor:OC, obrigatorio:1]]
2026-11-16 19:12:01.853 |  [Pipeline] echo
2026-11-16 19:12:01.865 |  Chave Input: host
2026-11-16 19:12:01.920 |  [Pipeline] echo
2026-11-16 19:12:01.929 |  Chave: host
2026-11-16 19:12:01.961 |  [Pipeline] echo
2026-11-16 19:12:01.977 |  Valor:apps.ocpnpr.portoseguro.brasil
2026-11-16 19:12:02.168 |  [Pipeline] stash
2026-11-16 19:12:02.350 |  Stashed 141 file(s)
2026-11-16 19:12:02.366 |  [Pipeline] }
2026-11-16 19:12:02.447 |  [Pipeline] // script
2026-11-16 19:12:02.486 |  [Pipeline] }
2026-11-16 19:12:02.563 |  [Pipeline] // stage
2026-11-16 19:12:02.604 |  [Pipeline] stage
2026-11-16 19:12:02.609 |  [Pipeline] { (Parametros de Abertura RDM)
2026-11-16 19:12:02.714 |  Stage "Parametros de Abertura RDM" skipped due to when conditional
2026-11-16 19:12:02.726 |  [Pipeline] }
2026-11-16 19:12:02.792 |  [Pipeline] // stage
2026-11-16 19:12:02.903 |  [Pipeline] stage
2026-11-16 19:12:02.927 |  [Pipeline] { (Criar RDM)
2026-11-16 19:12:02.990 |  Stage "Criar RDM" skipped due to when conditional
2026-11-16 19:12:03.024 |  [Pipeline] }
2026-11-16 19:12:03.113 |  [Pipeline] // stage
2026-11-16 19:12:03.170 |  [Pipeline] stage
2026-11-16 19:12:03.186 |  [Pipeline] { (Aguardando Aprovação)
2026-11-16 19:12:03.274 |  Stage "Aguardando Aprovação" skipped due to when conditional
2026-11-16 19:12:03.296 |  [Pipeline] }
2026-11-16 19:12:03.373 |  [Pipeline] // stage
2026-11-16 19:12:03.439 |  [Pipeline] stage
2026-11-16 19:12:03.446 |  [Pipeline] { (Aguardando Horário Agendado)
2026-11-16 19:12:03.518 |  Stage "Aguardando Horário Agendado" skipped due to when conditional
2026-11-16 19:12:03.537 |  [Pipeline] }
2026-11-16 19:12:03.604 |  [Pipeline] // stage
2026-11-16 19:12:03.669 |  [Pipeline] stage
2026-11-16 19:12:03.687 |  [Pipeline] { (Configuração de ambiente e Publicação)
2026-11-16 19:12:03.798 |  [Pipeline] podTemplate
2026-11-16 19:12:03.812 |  [Pipeline] {
2026-11-16 19:12:03.927 |  [Pipeline] node
2026-11-16 19:12:04.187 |  Created Pod: devsecops-rancher psg-devsecops-cd/ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv
2026-11-16 19:12:11.141 |  Agent ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv is provisioned from template ntinuous_delivery_Java_Container_OnPre_CD_Backstage_43400-bzjv8-q5pmw
2026-11-16 19:12:11.141 |  ---
2026-11-16 19:12:11.141 |  apiVersion: "v1"
2026-11-16 19:12:11.141 |  kind: "Pod"
2026-11-16 19:12:11.141 |  metadata:
2026-11-16 19:12:11.141 |    annotations:
2026-11-16 19:12:11.141 |      buildUrl: "https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/"
2026-11-16 19:12:11.141 |      runUrl: "job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/"
2026-11-16 19:12:11.141 |    labels:
2026-11-16 19:12:11.141 |      tipoDoNode: "node-jenkins-padrao-small"
2026-11-16 19:12:11.141 |      cordenacao: "psg-devsecops-techstore"
2026-11-16 19:12:11.141 |      centrodecusto: "10013223"
2026-11-16 19:12:11.141 |      jenkins: "slave"
2026-11-16 19:12:11.141 |      jenkins/label-digest: "cd4b5884468c9ea51546df80bd8935869117ebc7"
2026-11-16 19:12:11.141 |      jenkins/label: "ntinuous_delivery_Java_Container_OnPre_CD_Backstage_43400-bzjv8"
2026-11-16 19:12:11.141 |    name: "ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv"
2026-11-16 19:12:11.141 |    namespace: "psg-devsecops-cd"
2026-11-16 19:12:11.141 |  spec:
2026-11-16 19:12:11.141 |    containers:
2026-11-16 19:12:11.141 |    - args:
2026-11-16 19:12:11.141 |      - "$(JENKINS_SECRET)"
2026-11-16 19:12:11.141 |      - "$(JENKINS_NAME)"
2026-11-16 19:12:11.141 |      env:
2026-11-16 19:12:11.141 |      - name: "JENKINS_SECRET"
2026-11-16 19:12:11.141 |        value: "********"
2026-11-16 19:12:11.141 |      - name: "JENKINS_AGENT_NAME"
2026-11-16 19:12:11.141 |        value: "ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv"
2026-11-16 19:12:11.141 |      - name: "DOCKER_HOST"
2026-11-16 19:12:11.141 |        value: "tcp://0.0.0.0:2375"
2026-11-16 19:12:11.141 |      - name: "JENKINS_NAME"
2026-11-16 19:12:11.141 |        value: "ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv"
2026-11-16 19:12:11.141 |      - name: "JENKINS_AGENT_WORKDIR"
2026-11-16 19:12:11.141 |        value: "/home/jenkins/agent"
2026-11-16 19:12:11.141 |      - name: "POD_IP"
2026-11-16 19:12:11.141 |        valueFrom:
2026-11-16 19:12:11.141 |          fieldRef:
2026-11-16 19:12:11.141 |            fieldPath: "status.podIP"
2026-11-16 19:12:11.141 |      - name: "JENKINS_URL"
2026-11-16 19:12:11.141 |        value: "https://jenkinsportoprd.portoseguro.brasil/"
2026-11-16 19:12:11.141 |      - name: "JENKINS_JAVA_OPTS"
2026-11-16 19:12:11.141 |        value: "-Duser.timezone=America/Bahia -Xmx6g -Djava.awt.headless=true -Dhttp.auth.preference=basic\
2026-11-16 19:12:11.141 |          \ -Dhttp.auth.proxy-scheme-pref=\"Basic\" -Dhttp.auth.scheme-priority=\"Basic\"\
2026-11-16 19:12:11.141 |          \ -Djdk.http.auth.tunneling.disabledSchemes=NTLM,DIGEST -Dhudson.security.csrf.requestfield=crumb\
2026-11-16 19:12:11.141 |          \ -Dhttp.auth.digest.validateServer=true -Dhttp.auth.digest.validateProxy=true\
2026-11-16 19:12:11.141 |          \ -Djava.net.preferIPv4Stack=true -Dhttp.proxyHost=proxyserver.portoseguro.brasil\
2026-11-16 19:12:11.141 |          \ -Dhttp.proxyPort=3128 -Dhttps.proxyHost=proxyserver.portoseguro.brasil -Dhttps.proxyPort=3128\
2026-11-16 19:12:11.141 |          \ -Dhttp.nonProxyHosts=\"localhost|127.0.0.1|.portoseguro.brasil|.github.com*|*.portoseguro.brasil\""
2026-11-16 19:12:11.141 |      image: "registryapp.portoseguro.brasil/continuous_delivery/corp/dops/image-corp-dops-jenkins-node-jdk21:1.27.0-release"
2026-11-16 19:12:11.141 |      imagePullPolicy: "Always"
2026-11-16 19:12:11.141 |      name: "jnlp"
2026-11-16 19:12:11.141 |      resources:
2026-11-16 19:12:11.141 |        limits:
2026-11-16 19:12:11.141 |          memory: "7Gi"
2026-11-16 19:12:11.141 |          cpu: "600m"
2026-11-16 19:12:11.141 |        requests:
2026-11-16 19:12:11.141 |          memory: "128Mi"
2026-11-16 19:12:11.141 |          cpu: "10m"
2026-11-16 19:12:11.141 |      securityContext:
2026-11-16 19:12:11.141 |        allowPrivilegeEscalation: true
2026-11-16 19:12:11.141 |        capabilities:
2026-11-16 19:12:11.141 |          drop:
2026-11-16 19:12:11.141 |          - "ALL"
2026-11-16 19:12:11.141 |        privileged: true
2026-11-16 19:12:11.141 |        runAsNonRoot: true
2026-11-16 19:12:11.141 |        runAsUser: 1000
2026-11-16 19:12:11.141 |        seccompProfile:
2026-11-16 19:12:11.141 |          type: "RuntimeDefault"
2026-11-16 19:12:11.141 |        fsGroup: 1000
2026-11-16 19:12:11.141 |      volumeMounts:
2026-11-16 19:12:11.141 |      - mountPath: "/var/run/docker.sock"
2026-11-16 19:12:11.141 |        name: "docker-socket"
2026-11-16 19:12:11.141 |      - mountPath: "/home/jenkins/agent"
2026-11-16 19:12:11.141 |        name: "workspace-volume"
2026-11-16 19:12:11.141 |        readOnly: false
2026-11-16 19:12:11.141 |    - env:
2026-11-16 19:12:11.141 |      - name: "DOCKER_TLS_CERTDIR"
2026-11-16 19:12:11.141 |        value: ""
2026-11-16 19:12:11.141 |      image: "registryapp.portoseguro.brasil/continuous_delivery/corp/dops/image-corp-dops-jenkins-dind:1.4.0-release"
2026-11-16 19:12:11.141 |      name: "dind"
2026-11-16 19:12:11.141 |      resources:
2026-11-16 19:12:11.141 |        limits:
2026-11-16 19:12:11.141 |          memory: "2Gi"
2026-11-16 19:12:11.141 |          cpu: "2"
2026-11-16 19:12:11.141 |        requests:
2026-11-16 19:12:11.141 |          memory: "256Mi"
2026-11-16 19:12:11.141 |          cpu: "20m"
2026-11-16 19:12:11.141 |      securityContext:
2026-11-16 19:12:11.141 |        privileged: true
2026-11-16 19:12:11.141 |      volumeMounts:
2026-11-16 19:12:11.141 |      - mountPath: "/var/lib/docker"
2026-11-16 19:12:11.141 |        name: "docker-graph-storage"
2026-11-16 19:12:11.141 |      - mountPath: "/home/jenkins/agent"
2026-11-16 19:12:11.141 |        name: "workspace-volume"
2026-11-16 19:12:11.141 |        readOnly: false
2026-11-16 19:12:11.141 |    nodeSelector:
2026-11-16 19:12:11.141 |      kubernetes.io/os: "linux"
2026-11-16 19:12:11.141 |    restartPolicy: "Never"
2026-11-16 19:12:11.141 |    volumes:
2026-11-16 19:12:11.141 |    - emptyDir: {}
2026-11-16 19:12:11.141 |      name: "docker-graph-storage"
2026-11-16 19:12:11.141 |    - emptyDir:
2026-11-16 19:12:11.141 |        medium: ""
2026-11-16 19:12:11.141 |      name: "workspace-volume"
2026-11-16 19:12:11.141 |    - hostPath:
2026-11-16 19:12:11.141 |        path: "/var/run/docker.sock"
2026-11-16 19:12:11.141 |      name: "docker-socket"
2026-11-16 19:12:11.141 |  
2026-11-16 19:12:11.183 |  Running on ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv in /home/jenkins/agent/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage
2026-11-16 19:12:11.195 |  [Pipeline] {
2026-11-16 19:12:11.279 |  [Pipeline] checkout
2026-11-16 19:12:14.441 |  The recommended git tool is: git
2026-11-16 19:12:20.043 |  using credential cred-Continuous_Delivery-gitlab
2026-11-16 19:12:20.113 |  Cloning the remote Git repository
2026-11-16 19:12:20.143 |  Cloning repository https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:12:20.217 |   > git init /home/jenkins/agent/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage # timeout=10
2026-11-16 19:12:20.322 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-11-16 19:12:20.323 |   > git --version # timeout=10
2026-11-16 19:12:20.328 |   > git --version # 'git version 2.50.1'
2026-11-16 19:12:20.328 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-11-16 19:12:20.331 |   > git fetch --tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:12:22.658 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-11-16 19:12:22.662 |   > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-11-16 19:12:23.819 |  Avoid second fetch
2026-11-16 19:12:23.829 |  Checking out Revision 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 (refs/remotes/origin/backstage)
2026-11-16 19:12:24.622 |  Commit message: "Merge branch 'feat/scorecard-lead-time' into 'backstage'"
2026-11-16 19:12:24.715 |  [Pipeline] withEnv
2026-11-16 19:12:24.729 |  [Pipeline] {
2026-11-16 19:12:24.812 |  [Pipeline] script
2026-11-16 19:12:24.826 |  [Pipeline] {
2026-11-16 19:12:23.822 |   > git rev-parse refs/remotes/origin/backstage^{commit} # timeout=10
2026-11-16 19:12:23.837 |   > git config core.sparsecheckout # timeout=10
2026-11-16 19:12:23.913 |   > git checkout -f 8dfb24aaab83d4c0c7d53139c9c920d3939326b0 # timeout=10
2026-11-16 19:12:24.897 |  [Pipeline] echo
2026-11-16 19:12:24.913 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:24.913 |  | Stage Configuração de ambiente e Publicação
2026-11-16 19:12:24.913 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:24.986 |  [Pipeline] echo
2026-11-16 19:12:24.991 |  Enviado mensagem via google chat...
2026-11-16 19:12:25.081 |  [Pipeline] echo
2026-11-16 19:12:25.102 |  URL de Envio:  https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w&threadKey=sboot-auto-cota-premio-informado:build-43400CD
2026-11-16 19:12:25.128 |  [Pipeline] echo
2026-11-16 19:12:25.142 |  Enviando Request...
2026-11-16 19:12:25.185 |  [Pipeline] httpRequest
2026-11-16 19:12:27.474 |  [Pipeline] echo
2026-11-16 19:12:27.486 |  Enviando mensagem para o backstage - componente: sboot-auto-cota-premio-informado - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:12:27.510 |  [Pipeline] unstash
2026-11-16 19:12:27.956 |  [Pipeline] echo
2026-11-16 19:12:27.975 |  Iniciando modulo de deploy CI CD Rancher
2026-11-16 19:12:28.019 |  [Pipeline] echo
2026-11-16 19:12:28.033 |  CICD_VERSAO: 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:12:28.054 |  [Pipeline] echo
2026-11-16 19:12:28.060 |  CICD_VERSAO_ROLLBACK: null
2026-11-16 19:12:28.072 |  [Pipeline] echo
2026-11-16 19:12:28.078 |  Modo create - 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:12:28.247 |  [Pipeline] echo
2026-11-16 19:12:28.260 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:28.283 |  [Pipeline] echo
2026-11-16 19:12:28.305 |  Lista: [[chave:helm_tool, valor:helm-v3.8.2-linux-amd64], [chave:dast, valor:backend]]
2026-11-16 19:12:28.332 |  [Pipeline] echo
2026-11-16 19:12:28.345 |  Chave Input: helm_tool
2026-11-16 19:12:28.374 |  [Pipeline] echo
2026-11-16 19:12:28.399 |  Chave: helm_tool
2026-11-16 19:12:28.412 |  [Pipeline] echo
2026-11-16 19:12:28.418 |  Valor:helm-v3.8.2-linux-amd64
2026-11-16 19:12:28.439 |  [Pipeline] readJSON
2026-11-16 19:12:28.561 |  [Pipeline] readYaml
2026-11-16 19:12:28.745 |  [Pipeline] echo
2026-11-16 19:12:28.757 |  Inicio Execução Lib RemoteGetValorChave
2026-11-16 19:12:28.774 |  [Pipeline] echo
2026-11-16 19:12:28.783 |  Lista: [[chave:versao_docker_file, valor:v1], [chave:customMaven, valor:maven-3.8.6], [chave:customCommands, valor:-Dspring.profiles.active=testepipeline], [chave:tecnologia, valor:java], [chave:imagemBaseArquitetura, valor:continuous_delivery/corp/arqt/image-corp-arqt-java21:1.22.0-release], [chave:customJDK, valor:jdk21-aws]]
2026-11-16 19:12:28.794 |  [Pipeline] echo
2026-11-16 19:12:28.810 |  Chave Input: tecnologia
2026-11-16 19:12:28.857 |  [Pipeline] echo
2026-11-16 19:12:28.867 |  Chave: tecnologia
2026-11-16 19:12:28.904 |  [Pipeline] echo
2026-11-16 19:12:28.916 |  Valor:java
2026-11-16 19:12:28.983 |  [Pipeline] echo
2026-11-16 19:12:29.023 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:29.023 |  | REALIZANDO PUBLICACAO
2026-11-16 19:12:29.023 |  | nomeAplicacao                 : sboot-auto-cota-premio-informado
2026-11-16 19:12:29.023 |  | nomeCluster                   : kube-onprem-openshift-dev
2026-11-16 19:12:29.023 |  | idConta                       : null
2026-11-16 19:12:29.023 |  | regiaoCluster                 : datacenter
2026-11-16 19:12:29.023 |  | repoEcr                       : registryapp.portoseguro.brasil/continuous_delivery/auto/cota/sboot-auto-cota-premio-informado
2026-11-16 19:12:29.023 |  | imageTag                      : 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:12:29.023 |  | nameSpace                     : auto-cota
2026-11-16 19:12:29.023 |  | valuesFile                    : /home/jenkins/agent/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage/config/values_dev.yaml
2026-11-16 19:12:29.023 |  | acao                          : create
2026-11-16 19:12:29.023 |  | ingressHost                   : apps.ocpnpr.portoseguro.brasil
2026-11-16 19:12:29.023 |  | appFramework                  : java
2026-11-16 19:12:29.023 |  | ambienteDeploy                : PRD
2026-11-16 19:12:29.023 |  | grupoExecucao                 : dev
2026-11-16 19:12:29.023 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:29.193 |  [Pipeline] echo
2026-11-16 19:12:29.215 |  
2026-11-16 19:12:29.215 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:29.215 |  | #INICIANDO A BIBLIOTECA DE DEPLOY
2026-11-16 19:12:29.215 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:29.215 |  
2026-11-16 19:12:29.236 |  [Pipeline] readJSON
2026-11-16 19:12:29.381 |  [Pipeline] echo
2026-11-16 19:12:29.399 |  {"grupo":"auto","subgrupo":"cota","requisitante":"P0668420","versao":"1.0.0-snapshot-gf-featureautor332602-hsmanual-17869","ambiente":[{"codigo_ambiente":410,"descricao_ambiente":"kube-onprem-openshift-dev","nome":"kube-onprem-openshift-dev","flag_ativo":true,"codigo_tipo_ambiente":13,"grupo_execucao":"dev","descricao_modelo_operacional":"OUTROS","propriedades":[{"codigo_propriedade":2011,"chave":"credenciais_jenkins","valor":"jenkinsOcpmasterNPRString","obrigatorio":1},{"codigo_propriedade":2012,"chave":"host","valor":"apps.ocpnpr.portoseguro.brasil","obrigatorio":1},{"codigo_propriedade":2017,"chave":"id_conta","valor":"0","obrigatorio":1},{"codigo_propriedade":2013,"chave":"kube_server_api","valor":"https://api.ocpnpr.portoseguro.brasil:6443","obrigatorio":1},{"codigo_propriedade":4040,"chave":"label_cluster","valor":"corp","obrigatorio":1},{"codigo_propriedade":2010,"chave":"namespace","valor":"n/a","obrigatorio":1},{"codigo_propriedade":2014,"chave":"nome_cluster","valor":"kube-onprem-openshift-dev","obrigatorio":1},{"codigo_propriedade":2016,"chave":"regiao_cluster","valor":"datacenter","obrigatorio":1},{"codigo_propriedade":2015,"chave":"tipo_cluster","valor":"OC","obrigatorio":1}]}],"slave":"plataforma.jenkinscd.slave","slaveci":"plataforma.jenkinsci.slave","slavecd":"plataforma.jenkinscd.slave","centrocusto":"10013223","acao":"-","env":{"env":"PRD","url_fila":"https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage","credencial":"svc-jenkins-cicd.devsecops-prd"}}
2026-11-16 19:12:29.461 |  [Pipeline] tool
2026-11-16 19:12:29.509 |  Unpacking https://nexusportoprd.portoseguro.brasil/repository/Releases_Porto/com/porto/devops/helm/3.10.2/helm-3.10.2.tar.gz to /home/jenkins/agent/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/helm-v3.8.2-linux-amd64 on ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv
2026-11-16 19:12:31.862 |  [Pipeline] tool
2026-11-16 19:12:31.915 |  [kubectl-1.17.0] $ sh -e /home/jenkins/agent/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/hudson11733940045765530142.sh
2026-11-16 19:12:31.926 |    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
2026-11-16 19:12:31.926 |                                   Dload  Upload   Total   Spent    Left  Speed
2026-11-16 19:12:32.476 |  
0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
84 41.4M   84 35.0M    0     0  72.5M      0 --:--:-- --:--:-- --:--:-- 72.5M
100 41.4M  100 41.4M    0     0  75.3M      0 --:--:-- --:--:-- --:--:-- 75.2M
2026-11-16 19:12:32.513 |  [Pipeline] tool
2026-11-16 19:12:32.574 |  Unpacking https://nexusportoprd.portoseguro.brasil/repository/Releases_Porto/com/porto/devops/oc-tool/4.12.9/oc-tool-4.12.9.tar.gz to /home/jenkins/agent/tools/com.openshift.jenkins.plugins.OpenShiftClientTools/oc on ntinuous-delivery-java-container-onpre-cd-backstage-43400-kgkzv
2026-11-16 19:12:36.216 |  [Pipeline] withCredentials
2026-11-16 19:12:36.238 |   > git --version # timeout=10
2026-11-16 19:12:36.264 |   > git --version # 'git version 2.33.0'
2026-11-16 19:12:36.276 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-11-16 19:12:36.306 |  [Pipeline] {
2026-11-16 19:12:36.353 |  [Pipeline] withCredentials
2026-11-16 19:12:36.368 |  Masking supported pattern matches of $jwt
2026-11-16 19:12:36.427 |  [Pipeline] {
2026-11-16 19:12:36.475 |  [Pipeline] sh
2026-11-16 19:12:36.831 |  + git clone https://gitportoprd.portoseguro.brasil/ti-arquitetura/portobackstage/helm_onpremises.git
2026-11-16 19:12:36.832 |  Cloning into 'helm_onpremises'...
2026-11-16 19:12:37.460 |  [Pipeline] sh
2026-11-16 19:12:37.527 |  + git clone https://gitportoprd.portoseguro.brasil/middleware/rancher-porto.git
2026-11-16 19:12:37.528 |  Cloning into 'rancher-porto'...
2026-11-16 19:12:38.150 |  [Pipeline] sh
2026-11-16 19:12:38.214 |  + cat /home/jenkins/agent/workspace/continuous_delivery/Java_Container_OnPre_CD_Backstage/config/values_dev.yaml
2026-11-16 19:12:38.281 |  [Pipeline] sh
2026-11-16 19:12:38.346 |  + cat rancher-porto/aplicacoes_permitidas
2026-11-16 19:12:38.409 |  [Pipeline] readYaml
2026-11-16 19:12:38.515 |  [Pipeline] fileExists
2026-11-16 19:12:38.637 |  [Pipeline] echo
2026-11-16 19:12:38.655 |  
2026-11-16 19:12:38.655 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:38.655 |  | Arquivo config/corp/values_dev.yaml não existe
2026-11-16 19:12:38.655 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:38.655 |  
2026-11-16 19:12:38.690 |  [Pipeline] sh
2026-11-16 19:12:38.750 |  + cd config
2026-11-16 19:12:38.751 |  + ls
2026-11-16 19:12:38.751 |  values_dev.yaml
2026-11-16 19:12:38.751 |  values_hml.yaml
2026-11-16 19:12:38.751 |  values_prd.yaml
2026-11-16 19:12:38.751 |  values_tst.yaml
2026-11-16 19:12:38.821 |  [Pipeline] echo
2026-11-16 19:12:38.834 |  appFramework não voltou nulo
2026-11-16 19:12:38.898 |  [Pipeline] echo
2026-11-16 19:12:38.914 |  
2026-11-16 19:12:38.914 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:38.914 |  | springboot
2026-11-16 19:12:38.914 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:38.914 |  
2026-11-16 19:12:38.944 |  [Pipeline] writeYaml
2026-11-16 19:12:39.066 |  [Pipeline] withCredentials
2026-11-16 19:12:39.141 |  Masking supported pattern matches of $tokenopenshift
2026-11-16 19:12:39.156 |  [Pipeline] {
2026-11-16 19:12:39.206 |  [Pipeline] echo
2026-11-16 19:12:39.228 |  auto
2026-11-16 19:12:39.253 |  [Pipeline] echo
2026-11-16 19:12:39.276 |  cota
2026-11-16 19:12:39.322 |  [Pipeline] echo
2026-11-16 19:12:39.340 |  dev
2026-11-16 19:12:39.357 |  [Pipeline] echo
2026-11-16 19:12:39.362 |  apps.ocpnpr.portoseguro.brasil
2026-11-16 19:12:39.374 |  [Pipeline] echo
2026-11-16 19:12:39.387 |  Implentacao da formacao do hosthost
2026-11-16 19:12:39.459 |  [Pipeline] echo
2026-11-16 19:12:39.476 |  
2026-11-16 19:12:39.476 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:39.476 |  | Iniciando o deploy da aplicação sboot-auto-cota-premio-informado no OPENSHIFT
2026-11-16 19:12:39.476 |  | Ambiente........: dev
2026-11-16 19:12:39.476 |  | Custer..........: kube-onprem-openshift-dev
2026-11-16 19:12:39.476 |  | Credencial......: jenkinsOcpmasterNPRString
2026-11-16 19:12:39.476 |  | NameSpace.......: dev-psg-auto-auto20
2026-11-16 19:12:39.476 |  | Server API......: https://api.ocpnpr.portoseguro.brasil:6443
2026-11-16 19:12:39.476 |  | Tipo do Custer..: OPENSHIFT
2026-11-16 19:12:39.476 |  | HOST............: auto-cota-dev.apps.ocpnpr.portoseguro.brasil
2026-11-16 19:12:39.476 |  | Versão..........: 1.0.0-snapshot-gf-featureautor332602-hsmanual-17869
2026-11-16 19:12:39.476 |  | Centro de Custo.: 10013223
2026-11-16 19:12:39.476 |  | Matricula.......: P0668420
2026-11-16 19:12:39.476 |  +-----------------------------------------------------------------------------+
2026-11-16 19:12:39.476 |  
2026-11-16 19:12:39.514 |  [Pipeline] sh
2026-11-16 19:12:39.559 |  Warning: A secret was passed to "sh" using Groovy String interpolation, which is insecure.
2026-11-16 19:12:39.559 |  		 Affected argument(s) used the following variable(s): [tokenopenshift]
2026-11-16 19:12:39.559 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-11-16 19:12:39.595 |  + /home/jenkins/agent/tools/com.openshift.jenkins.plugins.OpenShiftClientTools/oc/oc login --insecure-skip-tls-verify --token=**** --server=https://api.ocpnpr.portoseguro.brasil:6443
2026-11-16 19:12:39.797 |  error: dial tcp 172.25.216.249:6443: connect: no route to host - verify you have provided the correct host and port and that the server is currently running.
2026-11-16 19:12:39.829 |  [Pipeline] }
2026-11-16 19:12:39.957 |  [Pipeline] // withCredentials
2026-11-16 19:12:40.019 |  [Pipeline] }
2026-11-16 19:12:40.126 |  [Pipeline] // withCredentials
2026-11-16 19:12:40.166 |  [Pipeline] }
2026-11-16 19:12:40.316 |  [Pipeline] // withCredentials
2026-11-16 19:12:40.392 |  [Pipeline] }
2026-11-16 19:12:40.493 |  [Pipeline] // script
2026-11-16 19:12:40.540 |  Post stage
2026-11-16 19:12:40.569 |  [Pipeline] script
2026-11-16 19:12:40.586 |  [Pipeline] {
2026-11-16 19:12:40.726 |  [Pipeline] echo
2026-11-16 19:12:40.744 |  Enviado mensagem via google chat...
2026-11-16 19:12:40.871 |  [Pipeline] echo
2026-11-16 19:12:40.902 |  URL de Envio:  https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w&threadKey=sboot-auto-cota-premio-informado:build-43400CD
2026-11-16 19:12:40.997 |  [Pipeline] echo
2026-11-16 19:12:41.007 |  Enviando Request...
2026-11-16 19:12:41.029 |  [Pipeline] httpRequest
2026-11-16 19:12:41.743 |  [Pipeline] echo
2026-11-16 19:12:41.748 |  Enviando mensagem para o backstage - componente: sboot-auto-cota-premio-informado - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:12:41.766 |  [Pipeline] }
2026-11-16 19:12:41.846 |  [Pipeline] // script
2026-11-16 19:12:41.870 |  [Pipeline] }
2026-11-16 19:12:41.973 |  [Pipeline] // withEnv
2026-11-16 19:12:42.043 |  [Pipeline] }
2026-11-16 19:12:42.178 |  [Pipeline] // node
2026-11-16 19:12:42.223 |  [Pipeline] }
2026-11-16 19:12:42.308 |  [Pipeline] // podTemplate
2026-11-16 19:12:42.350 |  [Pipeline] }
2026-11-16 19:12:42.453 |  [Pipeline] // stage
2026-11-16 19:12:42.549 |  [Pipeline] stage
2026-11-16 19:12:42.555 |  [Pipeline] { (DAST)
2026-11-16 19:12:42.620 |  Stage "DAST" skipped due to earlier failure(s)
2026-11-16 19:12:42.649 |  [Pipeline] }
2026-11-16 19:12:42.752 |  [Pipeline] // stage
2026-11-16 19:12:42.822 |  [Pipeline] stage
2026-11-16 19:12:42.831 |  [Pipeline] { (Ação Manual - Realizar Rollback?)
2026-11-16 19:12:42.893 |  Stage "Ação Manual - Realizar Rollback?" skipped due to earlier failure(s)
2026-11-16 19:12:42.914 |  [Pipeline] }
2026-11-16 19:12:43.008 |  [Pipeline] // stage
2026-11-16 19:12:43.070 |  [Pipeline] stage
2026-11-16 19:12:43.206 |  [Pipeline] { (Rollback)
2026-11-16 19:12:43.250 |  Stage "Rollback" skipped due to earlier failure(s)
2026-11-16 19:12:43.279 |  [Pipeline] }
2026-11-16 19:12:43.381 |  [Pipeline] // stage
2026-11-16 19:12:43.462 |  [Pipeline] stage
2026-11-16 19:12:43.468 |  [Pipeline] { (Promoção de Artefato)
2026-11-16 19:12:43.530 |  Stage "Promoção de Artefato" skipped due to earlier failure(s)
2026-11-16 19:12:43.554 |  [Pipeline] }
2026-11-16 19:12:43.666 |  [Pipeline] // stage
2026-11-16 19:12:43.745 |  [Pipeline] stage
2026-11-16 19:12:43.753 |  [Pipeline] { (Declarative: Post Actions)
2026-11-16 19:12:43.831 |  [Pipeline] script
2026-11-16 19:12:43.847 |  [Pipeline] {
2026-11-16 19:12:43.932 |  [Pipeline] timeout
2026-11-16 19:12:43.932 |  Timeout set to expire in 1 min 0 sec
2026-11-16 19:12:43.938 |  [Pipeline] {
2026-11-16 19:12:44.047 |  [Pipeline] cleanWs
2026-11-16 19:12:44.314 |  [WS-CLEANUP] Deleting project workspace...
2026-11-16 19:12:44.314 |  [WS-CLEANUP] Deferred wipeout is used...
2026-11-16 19:12:44.564 |  [WS-CLEANUP] done
2026-11-16 19:12:44.579 |  [Pipeline] }
2026-11-16 19:12:44.723 |  [Pipeline] // timeout
2026-11-16 19:12:44.764 |  [Pipeline] }
2026-11-16 19:12:44.871 |  [Pipeline] // script
2026-11-16 19:12:44.985 |  [Pipeline] script
2026-11-16 19:12:44.996 |  [Pipeline] {
2026-11-16 19:12:45.072 |  [Pipeline] echo
2026-11-16 19:12:45.077 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:45.078 |  | Stage Declarative: Post Actions
2026-11-16 19:12:45.078 |  +-----------------------------------------------------------------------------------------------------+
2026-11-16 19:12:45.128 |  [Pipeline] echo
2026-11-16 19:12:45.133 |  Enviado mensagem via google chat...
2026-11-16 19:12:45.198 |  [Pipeline] echo
2026-11-16 19:12:45.216 |  URL de Envio:  https://chat.googleapis.com/v1/spaces/AAQAqk97tY8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=o463xY2eS0W4WdsNr-EHK_aoZ1Tkul9uL6YaNbj8h8w&threadKey=sboot-auto-cota-premio-informado:build-43400CD
2026-11-16 19:12:45.253 |  [Pipeline] echo
2026-11-16 19:12:45.270 |  Enviando Request...
2026-11-16 19:12:45.305 |  [Pipeline] httpRequest
2026-11-16 19:12:46.024 |  [Pipeline] echo
2026-11-16 19:12:46.038 |  Enviando mensagem para o backstage - componente: sboot-auto-cota-premio-informado - step: FIM - status: F - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:12:46.094 |  [Pipeline] withCredentials
2026-11-16 19:12:46.109 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-11-16 19:12:46.178 |  [Pipeline] {
2026-11-16 19:12:46.229 |  [Pipeline] echo
2026-11-16 19:12:46.247 |  Mensagem a ser enviada para o backstage: key:STEPCD;componente:sboot-auto-cota-premio-informado;step:FIM;status:F;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/
2026-11-16 19:12:46.274 |  [Pipeline] sh
2026-11-16 19:12:47.168 |  + aws --region ca-central-1 sqs send-message --queue-url https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage --message-body 'key:STEPCD;componente:sboot-auto-cota-premio-informado;step:FIM;status:F;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_OnPre_CD_Backstage/43400/'
2026-11-16 19:12:47.669 |  {
2026-11-16 19:12:47.669 |      "MD5OfMessageBody": "efa98d9095859730ce80e2d9a5c76457",
2026-11-16 19:12:47.669 |      "MessageId": "867071a3-dafd-4160-a8a0-3d7de9e4590b"
2026-11-16 19:12:47.669 |  }
2026-11-16 19:12:47.849 |  [Pipeline] }
2026-11-16 19:12:47.963 |  [Pipeline] // withCredentials
2026-11-16 19:12:47.999 |  [Pipeline] }
2026-11-16 19:12:48.096 |  [Pipeline] // script
2026-11-16 19:12:48.144 |  [Pipeline] }
2026-11-16 19:12:48.233 |  [Pipeline] // stage
2026-11-16 19:12:48.256 |  [Pipeline] }
2026-11-16 19:12:48.355 |  [Pipeline] // withEnv
2026-11-16 19:12:48.417 |  [Pipeline] }
2026-11-16 19:12:48.558 |  [Pipeline] // node
2026-11-16 19:12:48.690 |  [Pipeline] End of Pipeline
2026-11-16 19:12:48.758 |  ERROR: script returned exit code 1
2026-11-16 19:12:48.791 |  Finished: FAILURE