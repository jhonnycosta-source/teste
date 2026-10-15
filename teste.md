2026-10-15 14:11:41.881 |  Started by user BACKSTAGE ARQUITETURA DE TECNICA
2026-10-15 14:11:42.534 |  Obtained jenkins_java_container/Jenkinsfile_CD_EKS_ECR_AWS from git https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-10-15 14:11:42.743 |  [Pipeline] Start of Pipeline
2026-10-15 14:11:42.840 |  [Pipeline] echo
2026-10-15 14:11:42.880 |  SCM branch detectada: */backstage
2026-10-15 14:11:42.917 |  [Pipeline] echo
2026-10-15 14:11:42.956 |  Carregando sharedlib jenkins_sharedLibs_plataforma@backstage
2026-10-15 14:11:42.987 |  [Pipeline] library
2026-10-15 14:11:43.028 |  Loading library jenkins_sharedLibs_plataforma@backstage
2026-10-15 14:11:43.029 |  Attempting to resolve backstage from remote references...
2026-10-15 14:11:43.029 |   > git --version # timeout=10
2026-10-15 14:11:43.064 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:43.064 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-10-15 14:11:43.065 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-10-15 14:11:43.337 |  Found match: refs/heads/backstage revision 5caaeeec99aeb14588ba23c9424c3063cf7d918e
2026-10-15 14:11:43.352 |  The recommended git tool is: git
2026-10-15 14:11:43.352 |  using credential cred-Continuous_Delivery-gitlab
2026-10-15 14:11:43.382 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage@libs/57a4112013c5a6d3134ddbc037860f7f4416af19692dfd70bd8e9537f991bfec/.git # timeout=10
2026-10-15 14:11:43.393 |  Fetching changes from the remote Git repository
2026-10-15 14:11:43.414 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-10-15 14:11:43.462 |  Fetching without tags
2026-10-15 14:11:43.462 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-10-15 14:11:43.462 |   > git --version # timeout=10
2026-10-15 14:11:43.471 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:43.471 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-10-15 14:11:43.518 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-10-15 14:11:44.174 |  Checking out Revision 5caaeeec99aeb14588ba23c9424c3063cf7d918e (backstage)
2026-10-15 14:11:44.174 |   > git config core.sparsecheckout # timeout=10
2026-10-15 14:11:44.202 |   > git checkout -f 5caaeeec99aeb14588ba23c9424c3063cf7d918e # timeout=10
2026-10-15 14:11:44.309 |  Commit message: "Merge branch 'fix/outputpla' into 'backstage'"
2026-10-15 14:11:44.310 |   > git rev-list --no-walk 5caaeeec99aeb14588ba23c9424c3063cf7d918e # timeout=10
2026-10-15 14:11:48.194 |  [Pipeline] library
2026-10-15 14:11:48.235 |  Loading library containers-serverless-lib@master
2026-10-15 14:11:48.236 |  Attempting to resolve master from remote references...
2026-10-15 14:11:48.236 |   > git --version # timeout=10
2026-10-15 14:11:48.280 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:48.280 |  using GIT_ASKPASS to set credentials cred-cpe-gitlab - Credencial Riscos / SI
2026-10-15 14:11:48.283 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git # timeout=10
2026-10-15 14:11:48.532 |  Found match: refs/heads/master revision 7215bee77f073023fb5091cc50f86495456228e1
2026-10-15 14:11:48.538 |  The recommended git tool is: NONE
2026-10-15 14:11:48.538 |  using credential cred-cpe-gitlab
2026-10-15 14:11:48.557 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage@libs/e8fb46986c9122dbbdd6eca002d2f75e39ca67501ee1a8f13611fe61d9fbc15d/.git # timeout=10
2026-10-15 14:11:48.566 |  Fetching changes from the remote Git repository
2026-10-15 14:11:48.580 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git # timeout=10
2026-10-15 14:11:48.598 |  Fetching without tags
2026-10-15 14:11:48.598 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git
2026-10-15 14:11:48.598 |   > git --version # timeout=10
2026-10-15 14:11:48.606 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:48.606 |  using GIT_ASKPASS to set credentials cred-cpe-gitlab - Credencial Riscos / SI
2026-10-15 14:11:48.652 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/jenkinslib.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-10-15 14:11:48.954 |  Checking out Revision 7215bee77f073023fb5091cc50f86495456228e1 (master)
2026-10-15 14:11:48.954 |   > git config core.sparsecheckout # timeout=10
2026-10-15 14:11:48.973 |   > git checkout -f 7215bee77f073023fb5091cc50f86495456228e1 # timeout=10
2026-10-15 14:11:49.038 |  Commit message: "fix: setting legado variable"
2026-10-15 14:11:49.038 |   > git rev-list --no-walk 7215bee77f073023fb5091cc50f86495456228e1 # timeout=10
2026-10-15 14:11:49.188 |  [Pipeline] library
2026-10-15 14:11:49.232 |  Loading library nodes_k8s_plataforma@master
2026-10-15 14:11:49.232 |  Attempting to resolve master from remote references...
2026-10-15 14:11:49.232 |   > git --version # timeout=10
2026-10-15 14:11:49.244 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:49.244 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-10-15 14:11:49.257 |   > git ls-remote -h -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git # timeout=10
2026-10-15 14:11:49.507 |  Found match: refs/heads/master revision a530311ac1702f7392cb97083935645c3ba8702d
2026-10-15 14:11:49.521 |  Selected Git installation does not exist. Using Default
2026-10-15 14:11:49.521 |  The recommended git tool is: NONE
2026-10-15 14:11:49.521 |  using credential cred-Continuous_Delivery-gitlab
2026-10-15 14:11:49.555 |   > git rev-parse --resolve-git-dir /jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage@libs/c401a38b6949f412ace490d97d9e44b83a0dd9b78b7517669ed7dab171f3e051/.git # timeout=10
2026-10-15 14:11:49.566 |  Fetching changes from the remote Git repository
2026-10-15 14:11:49.579 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git # timeout=10
2026-10-15 14:11:49.606 |  Fetching without tags
2026-10-15 14:11:49.606 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git
2026-10-15 14:11:49.606 |   > git --version # timeout=10
2026-10-15 14:11:49.614 |   > git --version # 'git version 2.33.0'
2026-10-15 14:11:49.614 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-10-15 14:11:49.638 |   > git fetch --no-tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/nos_executores_cloud/nos_executores_k8s.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-10-15 14:11:49.940 |  Checking out Revision a530311ac1702f7392cb97083935645c3ba8702d (master)
2026-10-15 14:11:49.940 |   > git config core.sparsecheckout # timeout=10
2026-10-15 14:11:49.952 |   > git checkout -f a530311ac1702f7392cb97083935645c3ba8702d # timeout=10
2026-10-15 14:11:50.038 |  Commit message: "Merge branch 'DV-818' into 'master'"
2026-10-15 14:11:50.039 |   > git rev-list --no-walk a530311ac1702f7392cb97083935645c3ba8702d # timeout=10
2026-10-15 14:11:50.775 |  [Pipeline] node
2026-10-15 14:11:50.837 |  Running on EC2 (aws-ec2-devsecops-prd-config-techstore) - DevSecOps Nodes TechStore (imagem padrao) (i-06f120f175ae94d77) in /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage
2026-10-15 14:11:50.869 |  [Pipeline] {
2026-10-15 14:11:50.986 |  [Pipeline] stage
2026-10-15 14:11:50.997 |  [Pipeline] { (Declarative: Checkout SCM)
2026-10-15 14:11:51.091 |  [Pipeline] checkout
2026-10-15 14:11:51.247 |  The recommended git tool is: git
2026-10-15 14:11:51.588 |  using credential cred-Continuous_Delivery-gitlab
2026-10-15 14:11:51.723 |  Cloning the remote Git repository
2026-10-15 14:11:51.779 |  Cloning repository https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-10-15 14:11:51.779 |   > git init /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage # timeout=10
2026-10-15 14:11:51.783 |  Fetching upstream changes from https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git
2026-10-15 14:11:51.783 |   > git --version # timeout=10
2026-10-15 14:11:51.785 |   > git --version # 'git version 2.47.3'
2026-10-15 14:11:51.785 |  using GIT_ASKPASS to set credentials cred-Continuous_Delivery-gitlab - Credencial Riscos / SI
2026-10-15 14:11:51.786 |   > git fetch --tags --force --progress -- https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-10-15 14:12:03.285 |  Avoid second fetch
2026-10-15 14:12:03.401 |  Checking out Revision 5caaeeec99aeb14588ba23c9424c3063cf7d918e (refs/remotes/origin/backstage)
2026-10-15 14:12:03.717 |  Commit message: "Merge branch 'fix/outputpla' into 'backstage'"
2026-10-15 14:12:03.773 |  [Pipeline] }
2026-10-15 14:12:03.852 |  [Pipeline] // stage
2026-10-15 14:12:03.110 |   > git config remote.origin.url https://gitportoprd.portoseguro.brasil/Continuous_Delivery/jenkins/jenkins_pipelines.git # timeout=10
2026-10-15 14:12:03.112 |   > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
2026-10-15 14:12:03.341 |   > git rev-parse refs/remotes/origin/backstage^{commit} # timeout=10
2026-10-15 14:12:03.458 |   > git config core.sparsecheckout # timeout=10
2026-10-15 14:12:03.460 |   > git checkout -f 5caaeeec99aeb14588ba23c9424c3063cf7d918e # timeout=10
2026-10-15 14:12:03.922 |  [Pipeline] withEnv
2026-10-15 14:12:03.940 |  [Pipeline] {
2026-10-15 14:12:04.044 |  [Pipeline] stage
2026-10-15 14:12:04.059 |  [Pipeline] { (Inicializar)
2026-10-15 14:12:04.173 |  [Pipeline] script
2026-10-15 14:12:04.199 |  [Pipeline] {
2026-10-15 14:12:04.388 |  [Pipeline] echo
2026-10-15 14:12:04.396 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:04.396 |  | Ambiente detectado: PRD
2026-10-15 14:12:04.396 |  | Carregando arquivo de configuração: jenkinsfile-config.json
2026-10-15 14:12:04.396 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:04.452 |  [Pipeline] libraryResource
2026-10-15 14:12:04.562 |  [Pipeline] readJSON
2026-10-15 14:12:04.759 |  [Pipeline] echo
2026-10-15 14:12:04.784 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:04.784 |  | Stage Inicializar
2026-10-15 14:12:04.784 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:04.831 |  [Pipeline] wrap
2026-10-15 14:12:04.950 |  [Pipeline] {
2026-10-15 14:12:05.089 |  [Pipeline] script
2026-10-15 14:12:05.107 |  [Pipeline] {
2026-10-15 14:12:05.168 |  [Pipeline] }
2026-10-15 14:12:05.255 |  [Pipeline] // script
2026-10-15 14:12:05.292 |  [Pipeline] }
2026-10-15 14:12:05.384 |  [Pipeline] // wrap
2026-10-15 14:12:05.493 |  [Pipeline] echo
2026-10-15 14:12:05.511 |  null
2026-10-15 14:12:05.550 |  [Pipeline] echo
2026-10-15 14:12:05.559 |  null
2026-10-15 14:12:05.590 |  [Pipeline] echo
2026-10-15 14:12:05.618 |  null
2026-10-15 14:12:05.640 |  [Pipeline] }
2026-10-15 14:12:05.778 |  [Pipeline] // script
2026-10-15 14:12:05.836 |  [Pipeline] }
2026-10-15 14:12:05.960 |  [Pipeline] // stage
2026-10-15 14:12:06.075 |  [Pipeline] stage
2026-10-15 14:12:06.096 |  [Pipeline] { (Checkout)
2026-10-15 14:12:06.263 |  [Pipeline] script
2026-10-15 14:12:06.284 |  [Pipeline] {
2026-10-15 14:12:06.384 |  [Pipeline] echo
2026-10-15 14:12:06.446 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:06.446 |  | Stage Checkout
2026-10-15 14:12:06.446 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:06.516 |  [Pipeline] readJSON
2026-10-15 14:12:06.703 |  [Pipeline] echo
2026-10-15 14:12:06.721 |  #### VOCÊ ESTA UTILIZANDO O NOVO MODULO DE CHECKOUT DE DEVSECOPS ####
2026-10-15 14:12:06.721 |  PARAMETROS DE ENTRADA
2026-10-15 14:12:06.721 |  URL DO GITLAB : https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git
2026-10-15 14:12:06.721 |  BRANCH DO GITLAB : refs/tags/1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:12:06.721 |  PARAMETROS EXTRA DO GITLAB :
2026-10-15 14:12:06.721 |  
2026-10-15 14:12:06.789 |  [Pipeline] echo
2026-10-15 14:12:06.825 |  
2026-10-15 14:12:06.825 |  ######## RELAÇÃO DE PARAMETROS EXTRAS EXISTENTE ##########
2026-10-15 14:12:06.825 |  DIRETÓRIO DE DESTINO DO CHECKOUT:
2026-10-15 14:12:06.825 |  
2026-10-15 14:12:06.825 |  ######## DADOS IMPORTANTES ##########
2026-10-15 14:12:06.825 |  GRUPO DO PROJETO: plataforma_devops
2026-10-15 14:12:06.825 |  
2026-10-15 14:12:06.971 |  [Pipeline] withCredentials
2026-10-15 14:12:07.019 |  Masking supported pattern matches of $gitlabsenha or $gitlabuser
2026-10-15 14:12:07.071 |  [Pipeline] {
2026-10-15 14:12:07.142 |  [Pipeline] echo
2026-10-15 14:12:07.175 |  CREDENCIAL LOCALIZADA!! cred-plataforma_devops-gitlab
2026-10-15 14:12:07.197 |  [Pipeline] }
2026-10-15 14:12:07.321 |  [Pipeline] // withCredentials
2026-10-15 14:12:07.373 |  [Pipeline] echo
2026-10-15 14:12:07.390 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git, BRANCH: refs/tags/1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:12:07.445 |  [Pipeline] echo
2026-10-15 14:12:07.462 |  credenciaisIdConvertido: cred-plataforma_devops-gitlab
2026-10-15 14:12:07.509 |  [Pipeline] sh
2026-10-15 14:12:08.390 |  + rm /home/ec2-user/.git-credentials
2026-10-15 14:12:08.390 |  rm: cannot remove '/home/ec2-user/.git-credentials': No such file or directory
2026-10-15 14:12:08.492 |  [Pipeline] echo
2026-10-15 14:12:08.511 |  Arquivo não encontrado ~/.git-credentials
2026-10-15 14:12:08.579 |  [Pipeline] sh
2026-10-15 14:12:09.366 |  + rm /home/ec2-user/.gitconfig
2026-10-15 14:12:09.366 |  rm: cannot remove '/home/ec2-user/.gitconfig': No such file or directory
2026-10-15 14:12:09.489 |  [Pipeline] echo
2026-10-15 14:12:09.500 |  Arquivo não encontrado ~/.gitconfig
2026-10-15 14:12:09.512 |  [Pipeline] isUnix
2026-10-15 14:12:09.556 |  [Pipeline] isUnix
2026-10-15 14:12:09.642 |  [Pipeline] withCredentials
2026-10-15 14:12:09.999 |   > git --version # timeout=10
2026-10-15 14:12:10.026 |   > git --version # 'git version 2.33.0'
2026-10-15 14:12:10.369 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-10-15 14:12:10.398 |  [Pipeline] {
2026-10-15 14:12:10.492 |  [Pipeline] sh
2026-10-15 14:12:11.304 |  + ls -la
2026-10-15 14:12:11.304 |  total 28
2026-10-15 14:12:11.304 |  drwxr-xr-x. 17 ec2-user ec2-user 4096 Oct 15 17:12 .
2026-10-15 14:12:11.304 |  drwxr-xr-x. 22 ec2-user ec2-user 4096 Oct 15 17:11 ..
2026-10-15 14:12:11.304 |  drwxr-xr-x.  8 ec2-user ec2-user  162 Oct 15 17:12 .git
2026-10-15 14:12:11.304 |  -rw-r--r--.  1 ec2-user ec2-user   63 Oct 15 17:12 .gitignore
2026-10-15 14:12:11.304 |  drwxr-xr-x.  6 ec2-user ec2-user 4096 Oct 15 17:12 docs
2026-10-15 14:12:11.304 |  drwxr-xr-x.  2 ec2-user ec2-user   79 Oct 15 17:12 jenkins_android_mobile
2026-10-15 14:12:11.304 |  drwxr-xr-x.  3 ec2-user ec2-user   86 Oct 15 17:12 jenkins_api_gateway
2026-10-15 14:12:11.304 |  drwxr-xr-x.  3 ec2-user ec2-user  158 Oct 15 17:12 jenkins_dotnet_container
2026-10-15 14:12:11.304 |  drwxr-xr-x.  4 ec2-user ec2-user 4096 Oct 15 17:12 jenkins_graal_container
2026-10-15 14:12:11.304 |  drwxr-xr-x.  2 ec2-user ec2-user   75 Oct 15 17:12 jenkins_ios_mobile
2026-10-15 14:12:11.304 |  drwxr-xr-x.  4 ec2-user ec2-user 4096 Oct 15 17:12 jenkins_java_container
2026-10-15 14:12:11.304 |  drwxr-xr-x.  3 ec2-user ec2-user   90 Oct 15 17:12 jenkins_java_websphere
2026-10-15 14:12:11.304 |  drwxr-xr-x.  3 ec2-user ec2-user  158 Oct 15 17:12 jenkins_npm_container
2026-10-15 14:12:11.304 |  drwxr-xr-x.  2 ec2-user ec2-user   90 Oct 15 17:12 jenkins_npm_testes_funcionais
2026-10-15 14:12:11.304 |  drwxr-xr-x.  3 ec2-user ec2-user 4096 Oct 15 17:12 jenkins_python_container
2026-10-15 14:12:11.304 |  drwxr-xr-x.  2 ec2-user ec2-user   58 Oct 15 17:12 jenkins_terraform_gcp
2026-10-15 14:12:11.304 |  drwxr-xr-x.  2 ec2-user ec2-user   58 Oct 15 17:12 jenkins_terraform_oci
2026-10-15 14:12:11.304 |  drwxr-xr-x.  4 ec2-user ec2-user   35 Oct 15 17:12 sharedlibs
2026-10-15 14:12:11.398 |  [Pipeline] sh
2026-10-15 14:12:12.215 |  + pwd
2026-10-15 14:12:12.215 |  /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage
2026-10-15 14:12:12.333 |  [Pipeline] sh
2026-10-15 14:12:13.119 |  + rm -rf docs jenkins_android_mobile jenkins_api_gateway jenkins_dotnet_container jenkins_graal_container jenkins_ios_mobile jenkins_java_container jenkins_java_websphere jenkins_npm_container jenkins_npm_testes_funcionais jenkins_python_container jenkins_terraform_gcp jenkins_terraform_oci sharedlibs .git .gitignore
2026-10-15 14:12:13.237 |  [Pipeline] sh
2026-10-15 14:12:14.015 |  + git clone https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git .
2026-10-15 14:12:14.015 |  Cloning into '.'...
2026-10-15 14:12:17.557 |  [Pipeline] sh
2026-10-15 14:12:18.481 |  + git checkout refs/tags/1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:12:18.481 |  Note: switching to 'refs/tags/1.0-snapshot-gf-developer-hsmanual-36610'.
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |  You are in 'detached HEAD' state. You can look around, make experimental
2026-10-15 14:12:18.481 |  changes and commit them, and you can discard any commits you make in this
2026-10-15 14:12:18.481 |  state without impacting any branches by switching back to a branch.
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |  If you want to create a new branch to retain commits you create, you may
2026-10-15 14:12:18.481 |  do so (now or later) by using -c with the switch command. Example:
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |    git switch -c <new-branch-name>
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |  Or undo this operation with:
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |    git switch -
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |  Turn off this advice by setting config variable advice.detachedHead to false
2026-10-15 14:12:18.481 |  
2026-10-15 14:12:18.481 |  HEAD is now at c71310a Merge branch 'feature/AUTOR3-30575' into 'developer'
2026-10-15 14:12:18.559 |  [Pipeline] sh
2026-10-15 14:12:19.339 |  + git branch
2026-10-15 14:12:19.339 |  * (HEAD detached at 1.0-snapshot-gf-developer-hsmanual-36610)
2026-10-15 14:12:19.339 |    master
2026-10-15 14:12:19.429 |  [Pipeline] sh
2026-10-15 14:12:20.205 |  + ls -la
2026-10-15 14:12:20.206 |  total 36
2026-10-15 14:12:20.206 |  drwxr-xr-x.  5 ec2-user ec2-user   114 Oct 15 17:12 .
2026-10-15 14:12:20.206 |  drwxr-xr-x. 22 ec2-user ec2-user  4096 Oct 15 17:11 ..
2026-10-15 14:12:20.206 |  drwxr-xr-x.  8 ec2-user ec2-user   163 Oct 15 17:12 .git
2026-10-15 14:12:20.206 |  -rw-r--r--.  1 ec2-user ec2-user   491 Oct 15 17:12 .gitignore
2026-10-15 14:12:20.206 |  -rw-r--r--.  1 ec2-user ec2-user  6548 Oct 15 17:12 README.md
2026-10-15 14:12:20.206 |  drwxr-xr-x.  2 ec2-user ec2-user    75 Oct 15 17:12 config
2026-10-15 14:12:20.206 |  -rw-r--r--.  1 ec2-user ec2-user   119 Oct 15 17:12 lombok.config
2026-10-15 14:12:20.206 |  -rw-r--r--.  1 ec2-user ec2-user 12856 Oct 15 17:12 pom.xml
2026-10-15 14:12:20.206 |  drwxr-xr-x.  5 ec2-user ec2-user    42 Oct 15 17:12 src
2026-10-15 14:12:20.279 |  [Pipeline] }
2026-10-15 14:12:20.444 |  [Pipeline] // withCredentials
2026-10-15 14:12:20.529 |  [Pipeline] echo
2026-10-15 14:12:20.554 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:20.554 |  | Ambiente detectado: PRD
2026-10-15 14:12:20.554 |  | Carregando arquivo de configuração: jenkinsfile-config.json
2026-10-15 14:12:20.554 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:20.590 |  [Pipeline] libraryResource
2026-10-15 14:12:20.657 |  [Pipeline] readJSON
2026-10-15 14:12:20.791 |  [Pipeline] echo
2026-10-15 14:12:20.821 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:20.821 |  | IMPORTANTE!!!
2026-10-15 14:12:20.821 |  | O pipeline inicia realizando a consulta dos dados da aplicação no Backstage.
2026-10-15 14:12:20.821 |  | Verifique as informações cadastradas na ferramenta para o pipeline não abortar.
2026-10-15 14:12:20.821 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:20.896 |  [Pipeline] echo
2026-10-15 14:12:20.957 |  gitlabSourceRepoHttpUrl não existe, disparo manual!
2026-10-15 14:12:21.047 |  [Pipeline] echo
2026-10-15 14:12:21.087 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:21.087 |  | GIT_URL_LOCAL: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git
2026-10-15 14:12:21.087 |  | GIT_BRANCH_LOCAL: null - Para essa etapa esse parametro não é lido sendo fixo master
2026-10-15 14:12:21.087 |  | GIT_HASH_LOCAL: hsmanual
2026-10-15 14:12:21.087 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:21.168 |  [Pipeline] echo
2026-10-15 14:12:21.197 |  #### VOCÊ ESTA UTILIZANDO O NOVO MODULO DE CHECKOUT DE DEVSECOPS ####
2026-10-15 14:12:21.197 |  PARAMETROS DE ENTRADA
2026-10-15 14:12:21.197 |  URL DO GITLAB : https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git
2026-10-15 14:12:21.197 |  BRANCH DO GITLAB : master
2026-10-15 14:12:21.197 |  PARAMETROS EXTRA DO GITLAB : 122052
2026-10-15 14:12:21.197 |  
2026-10-15 14:12:21.264 |  [Pipeline] echo
2026-10-15 14:12:21.283 |  
2026-10-15 14:12:21.283 |  ######## RELAÇÃO DE PARAMETROS EXTRAS EXISTENTE ##########
2026-10-15 14:12:21.283 |  DIRETÓRIO DE DESTINO DO CHECKOUT: 122052
2026-10-15 14:12:21.283 |  
2026-10-15 14:12:21.283 |  ######## DADOS IMPORTANTES ##########
2026-10-15 14:12:21.283 |  GRUPO DO PROJETO: plataforma_devops
2026-10-15 14:12:21.283 |  
2026-10-15 14:12:21.384 |  [Pipeline] withCredentials
2026-10-15 14:12:21.398 |  Masking supported pattern matches of $gitlabsenha or $gitlabuser
2026-10-15 14:12:21.438 |  [Pipeline] {
2026-10-15 14:12:21.506 |  [Pipeline] echo
2026-10-15 14:12:21.533 |  CREDENCIAL LOCALIZADA!! cred-plataforma_devops-gitlab
2026-10-15 14:12:21.548 |  [Pipeline] }
2026-10-15 14:12:21.687 |  [Pipeline] // withCredentials
2026-10-15 14:12:21.787 |  [Pipeline] dir
2026-10-15 14:12:21.788 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052
2026-10-15 14:12:21.840 |  [Pipeline] {
2026-10-15 14:12:21.926 |  [Pipeline] echo
2026-10-15 14:12:21.942 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git, BRANCH: master, DIRETORIO: 122052
2026-10-15 14:12:22.013 |  [Pipeline] echo
2026-10-15 14:12:22.028 |  REALIZANDO CHECKOUT DO REPOSITÓRIO: https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git, BRANCH: master
2026-10-15 14:12:22.097 |  [Pipeline] echo
2026-10-15 14:12:22.106 |  credenciaisIdConvertido: cred-plataforma_devops-gitlab
2026-10-15 14:12:22.136 |  [Pipeline] sh
2026-10-15 14:12:23.094 |  + rm /home/ec2-user/.git-credentials
2026-10-15 14:12:23.094 |  rm: cannot remove '/home/ec2-user/.git-credentials': No such file or directory
2026-10-15 14:12:23.255 |  [Pipeline] echo
2026-10-15 14:12:23.260 |  Arquivo não encontrado ~/.git-credentials
2026-10-15 14:12:23.302 |  [Pipeline] sh
2026-10-15 14:12:24.077 |  + rm /home/ec2-user/.gitconfig
2026-10-15 14:12:24.077 |  rm: cannot remove '/home/ec2-user/.gitconfig': No such file or directory
2026-10-15 14:12:24.171 |  [Pipeline] echo
2026-10-15 14:12:24.186 |  Arquivo não encontrado ~/.gitconfig
2026-10-15 14:12:24.223 |  [Pipeline] isUnix
2026-10-15 14:12:24.241 |  [Pipeline] isUnix
2026-10-15 14:12:24.338 |  [Pipeline] withCredentials
2026-10-15 14:12:24.714 |   > git --version # timeout=10
2026-10-15 14:12:24.746 |   > git --version # 'git version 2.33.0'
2026-10-15 14:12:25.084 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-10-15 14:12:25.107 |  [Pipeline] {
2026-10-15 14:12:25.169 |  [Pipeline] sh
2026-10-15 14:12:25.939 |  + ls -la
2026-10-15 14:12:25.939 |  total 0
2026-10-15 14:12:25.939 |  drwxr-xr-x. 2 ec2-user ec2-user   6 Oct 15 17:12 .
2026-10-15 14:12:25.939 |  drwxr-xr-x. 7 ec2-user ec2-user 146 Oct 15 17:12 ..
2026-10-15 14:12:26.123 |  [Pipeline] sh
2026-10-15 14:12:26.897 |  + pwd
2026-10-15 14:12:26.897 |  /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052
2026-10-15 14:12:26.992 |  [Pipeline] sh
2026-10-15 14:12:27.757 |  + rm -rf '*' '.[!.]*'
2026-10-15 14:12:27.867 |  [Pipeline] sh
2026-10-15 14:12:28.648 |  + git clone https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git .
2026-10-15 14:12:28.648 |  Cloning into '.'...
2026-10-15 14:12:32.341 |  [Pipeline] sh
2026-10-15 14:12:33.093 |  + git checkout master
2026-10-15 14:12:33.094 |  Already on 'master'
2026-10-15 14:12:33.094 |  Your branch is up to date with 'origin/master'.
2026-10-15 14:12:33.176 |  [Pipeline] sh
2026-10-15 14:12:33.940 |  + git branch
2026-10-15 14:12:33.940 |  * master
2026-10-15 14:12:34.136 |  [Pipeline] sh
2026-10-15 14:12:34.924 |  + ls -la
2026-10-15 14:12:34.924 |  total 28
2026-10-15 14:12:34.924 |  drwxr-xr-x. 5 ec2-user ec2-user   114 Oct 15 17:12 .
2026-10-15 14:12:34.924 |  drwxr-xr-x. 7 ec2-user ec2-user   146 Oct 15 17:12 ..
2026-10-15 14:12:34.924 |  drwxr-xr-x. 8 ec2-user ec2-user   163 Oct 15 17:12 .git
2026-10-15 14:12:34.924 |  -rw-r--r--. 1 ec2-user ec2-user   491 Oct 15 17:12 .gitignore
2026-10-15 14:12:34.924 |  -rw-r--r--. 1 ec2-user ec2-user  6548 Oct 15 17:12 README.md
2026-10-15 14:12:34.924 |  drwxr-xr-x. 2 ec2-user ec2-user    75 Oct 15 17:12 config
2026-10-15 14:12:34.924 |  -rw-r--r--. 1 ec2-user ec2-user   119 Oct 15 17:12 lombok.config
2026-10-15 14:12:34.924 |  -rw-r--r--. 1 ec2-user ec2-user 10351 Oct 15 17:12 pom.xml
2026-10-15 14:12:34.924 |  drwxr-xr-x. 5 ec2-user ec2-user    42 Oct 15 17:12 src
2026-10-15 14:12:35.016 |  [Pipeline] }
2026-10-15 14:12:35.156 |  [Pipeline] // withCredentials
2026-10-15 14:12:35.197 |  [Pipeline] }
2026-10-15 14:12:35.291 |  [Pipeline] // dir
2026-10-15 14:12:35.375 |  [Pipeline] fileExists
2026-10-15 14:12:35.568 |  [Pipeline] fileExists
2026-10-15 14:12:35.750 |  [Pipeline] echo
2026-10-15 14:12:35.766 |  ./122052/pom.xml
2026-10-15 14:12:35.816 |  [Pipeline] readMavenPom
2026-10-15 14:12:36.249 |  [Pipeline] fileExists
2026-10-15 14:12:36.465 |  [Pipeline] fileExists
2026-10-15 14:12:36.640 |  [Pipeline] echo
2026-10-15 14:12:36.656 |  isMaven: true
2026-10-15 14:12:36.682 |  [Pipeline] echo
2026-10-15 14:12:36.702 |  isNPM: false
2026-10-15 14:12:36.724 |  [Pipeline] echo
2026-10-15 14:12:36.744 |  isPython: false
2026-10-15 14:12:36.899 |  [Pipeline] withCredentials
2026-10-15 14:12:37.005 |  Masking supported pattern matches of $BACKSTAGE_PASS
2026-10-15 14:12:37.047 |  [Pipeline] {
2026-10-15 14:12:37.107 |  [Pipeline] httpRequest
2026-10-15 14:12:37.130 |  Warning: A secret was passed to "httpRequest" using Groovy String interpolation, which is insecure.
2026-10-15 14:12:37.130 |  		 Affected argument(s) used the following variable(s): [BACKSTAGE_PASS]
2026-10-15 14:12:37.130 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-10-15 14:12:38.064 |  [Pipeline] readJSON
2026-10-15 14:12:38.226 |  [Pipeline] }
2026-10-15 14:12:38.308 |  [Pipeline] // withCredentials
2026-10-15 14:12:38.346 |  [Pipeline] echo
2026-10-15 14:12:38.351 |  vou chamar: https://internal-lb-portobackstage-backend-781942978.ca-central-1.elb.amazonaws.com/api/v1/componente/detalhes?nome_componente=sboot-auto-apol-geracao-documento-bff
2026-10-15 14:12:38.387 |  [Pipeline] httpRequest
2026-10-15 14:12:38.671 |  [Pipeline] echo
2026-10-15 14:12:38.686 |  CICD_CONFIGS_RAW: {"propriedades_gerais":{"codigo_componente":8020,"nome_componente":"sboot-auto-apol-geracao-documento-bff","descricao_componente":"bff para geração de documentos da emissão auto","descricao_template":"clean arch r3 - template para a criação de aplicações com spring-boot 3","descricao_grupo":"Produto Seguro Auto","descricao_subgrupo":"Apólice","codigo_grupo":2,"codigo_subgrupo":112,"codigo_template":40,"sigla_grupo":"auto","sigla_subgrupo":"apol","centro_custo":"0010015229","sigla_template":"sboot","versao_template":1,"https_repositorio":"https://gitportoprd.portoseguro.brasil/plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git","codigo_componente_git":31324,"nrbuild":0,"ssh_repositorio":"gitlab@gitportoprd.portoseguro.brasil:plataforma_devops/auto/apol/sboot-auto-apol-geracao-documento-bff.git","slaveci":"plataforma.jenkinsci.slave","slavecd":"plataforma.jenkinscd.slave","googlechat_link":"https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8","bypasslibseguranca":false,"jobci":"https://jenkinsciportoprd.portoseguro.brasil/job/Continuous_Delivery/job/Java_Container_AWS_CI_Backstage/buildWithParameters","jobcd":"https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/buildWithParameters","tokenjobci":"d9a6d0536666eb24e11ff1bfcdc44ffe","webhookjobci":"https://jenkinsciportoprd.portoseguro.brasil/project/Continuous_Delivery/Java_Container_AWS_CI_Backstage","codigo_template_orquestrador":"sboot-aws","flag_orquestrador":true,"codigo_sistema":184,"status_integracao":"S","data_integracao":"2026-10-15T00:00:00.000Z","appexterna":false,"grupoparametros":252,"tipo_ambiente":1,"verifica_namespace":true},"grupo":"auto","subgrupo":"apol","slaveCI":"plataforma.jenkinsci.slave","slaveCD":"plataforma.jenkinscd.slave","googleChatWebhook":"https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8","deploy":[{"chave":"helm_tool","valor":"helm-v3.8.2-linux-amd64"},{"chave":"dast","valor":"backend"}],"build":[{"chave":"customCommands","valor":"-Dspring.profiles.active=testepipeline"},{"chave":"customJDK","valor":"jdk21-aws"},{"chave":"tecnologia","valor":"java"},{"chave":"imagemBaseArquitetura","valor":"continuous_delivery/corp/arqt/image-corp-arqt-java21:1.21.0-release"},{"chave":"versao_docker_file","valor":"v1"},{"chave":"customMaven","valor":"maven-3.8.6"}],"libs_obrigatorias":["lib-corp-arqt-sboot-security"],"bypasslibseguranca":false,"appexterna":false,"ambientes":[{"nome":"aws-eks-auto-ecor-dev","grupo_execucao":"dev","codigo_ambiente":124,"descricao_ambiente":"aws-eks-auto-ecor-dev","propriedades":[{"chave":"credenciais_jenkins","valor":"svc-jenkins-cicd.auto-emissao-dev"},{"chave":"host","valor":"apps.auto-emissao.dev.awsporto"},{"chave":"id_conta","valor":"490861488992"},{"chave":"ingress_migrado","valor":"true"},{"chave":"nome_cluster","valor":"eks-auto-ecor-dev"},{"chave":"regiao_cluster","valor":"ca-central-1"}]},{"nome":"aws-eks-auto-ecor-hml","grupo_execucao":"hml","codigo_ambiente":373,"descricao_ambiente":"aws-eks-auto-ecor-hml","propriedades":[{"chave":"credenciais_jenkins","valor":"svc-jenkins-cicd.auto-emissao-hml"},{"chave":"host","valor":"apps.auto-emissao.hml.awsporto"},{"chave":"id_conta","valor":"851725163918"},{"chave":"nome_cluster","valor":"eks-auto-ecor-hml"},{"chave":"regiao_cluster","valor":"ca-central-1"}]}],"rdm":{"matricula_cliente_responsavel":"F0130565","area_afetada":"PSG - PROGRAMA AUTO 2.0 - OPERACAO","categorias":[{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Automóvel Legado","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Automóvel Legado","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"hml"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Sistema de nova emissão","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Automóvel Legado","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Automóvel Legado","grupo_execucao":"hml"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Automóvel Acompanhamento Legado","grupo_execucao":"hml"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Automóvel Acompanhamento Legado","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Automóvel Acompanhamento Legado","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Automóvel Acompanhamento Legado","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Exceções Urgentes","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Auto por Assinatura","grupo_execucao":"hml"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Normal.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Normal.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Normal.DevOps.Auto por Assinatura","grupo_execucao":"prd"},{"categoria":"Homologação.Sistemas.Padrão.DevOps.Endossos Apólice","grupo_execucao":"hml"},{"categoria":"Corretiva.Sistemas.Padrão.DevOps.Endossos Apólice","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Padrão.DevOps.Endossos Apólice","grupo_execucao":"prd"},{"categoria":"Projeto.Sistemas.Normal.DevOps.Endossos Apólice","grupo_execucao":"prd"},{"categoria":"Corretiva.Sistemas.Normal.DevOps.Endossos Apólice","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Normal.DevOps.Endossos Apólice","grupo_execucao":"prd"},{"categoria":"Melhoria.Sistemas.Padrão.DevOps.Endossos Apólice","grupo_execucao":"prd"}]},"env":{"env":"PRD","url_fila":"https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage","credencial":"svc-jenkins-cicd.devsecops-prd","bucket_qa":"qa-s3-techstore-qa-prd"}}
2026-10-15 14:12:38.725 |  [Pipeline] echo
2026-10-15 14:12:38.764 |  class [B
2026-10-15 14:12:38.783 |  [Pipeline] readJSON
2026-10-15 14:12:38.920 |  [Pipeline] dir
2026-10-15 14:12:38.921 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052
2026-10-15 14:12:38.936 |  [Pipeline] {
2026-10-15 14:12:39.003 |  [Pipeline] deleteDir
2026-10-15 14:12:39.213 |  [Pipeline] }
2026-10-15 14:12:39.333 |  [Pipeline] // dir
2026-10-15 14:12:39.397 |  [Pipeline] dir
2026-10-15 14:12:39.397 |  Running in /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052@tmp
2026-10-15 14:12:39.413 |  [Pipeline] {
2026-10-15 14:12:39.503 |  [Pipeline] deleteDir
2026-10-15 14:12:39.695 |  [Pipeline] }
2026-10-15 14:12:39.780 |  [Pipeline] // dir
2026-10-15 14:12:39.832 |  [Pipeline] readMavenPom
2026-10-15 14:12:40.325 |  [Pipeline] }
2026-10-15 14:12:40.428 |  [Pipeline] // script
2026-10-15 14:12:40.464 |  [Pipeline] }
2026-10-15 14:12:40.565 |  [Pipeline] // stage
2026-10-15 14:12:40.655 |  [Pipeline] stage
2026-10-15 14:12:40.678 |  [Pipeline] { (Configurar)
2026-10-15 14:12:40.806 |  [Pipeline] script
2026-10-15 14:12:40.822 |  [Pipeline] {
2026-10-15 14:12:40.991 |  [Pipeline] echo
2026-10-15 14:12:41.028 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:41.028 |  | Stage Configurar
2026-10-15 14:12:41.028 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:41.095 |  [Pipeline] echo
2026-10-15 14:12:41.120 |  Enviado mensagem via google chat...
2026-10-15 14:12:41.216 |  [Pipeline] echo
2026-10-15 14:12:41.225 |  URL de Envio: https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8&threadKey=sboot-auto-apol-geracao-documento-bff:build-122052CD
2026-10-15 14:12:41.251 |  [Pipeline] echo
2026-10-15 14:12:41.261 |  Enviando Request...
2026-10-15 14:12:41.289 |  [Pipeline] httpRequest
2026-10-15 14:12:42.122 |  [Pipeline] echo
2026-10-15 14:12:42.144 |  Enviando mensagem para o backstage - componente: sboot-auto-apol-geracao-documento-bff - step: INICIO - status: P - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:12:42.209 |  [Pipeline] withCredentials
2026-10-15 14:12:42.259 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:12:42.352 |  [Pipeline] {
2026-10-15 14:12:42.411 |  [Pipeline] echo
2026-10-15 14:12:42.423 |  Mensagem a ser enviada para o backstage: key:STEPCD;componente:sboot-auto-apol-geracao-documento-bff;step:INICIO;status:P;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:12:42.457 |  [Pipeline] sh
2026-10-15 14:12:43.349 |  + aws --region ca-central-1 sqs send-message --queue-url https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage --message-body 'key:STEPCD;componente:sboot-auto-apol-geracao-documento-bff;step:INICIO;status:P;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/'
2026-10-15 14:12:43.951 |  {
2026-10-15 14:12:43.951 |      "MD5OfMessageBody": "c5d9e5a96f9a29859113b7c922ea5fbe",
2026-10-15 14:12:43.951 |      "MessageId": "ab6f3796-0166-4372-938d-d2f8166bd6e2"
2026-10-15 14:12:43.951 |  }
2026-10-15 14:12:44.130 |  [Pipeline] }
2026-10-15 14:12:44.226 |  [Pipeline] // withCredentials
2026-10-15 14:12:44.295 |  [Pipeline] readJSON
2026-10-15 14:12:44.663 |  [Pipeline] withCredentials
2026-10-15 14:12:44.684 |  Masking supported pattern matches of $BACKSTAGE_PASS
2026-10-15 14:12:44.747 |  [Pipeline] {
2026-10-15 14:12:44.822 |  [Pipeline] httpRequest
2026-10-15 14:12:44.854 |  Warning: A secret was passed to "httpRequest" using Groovy String interpolation, which is insecure.
2026-10-15 14:12:44.854 |  		 Affected argument(s) used the following variable(s): [BACKSTAGE_PASS]
2026-10-15 14:12:44.854 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-10-15 14:12:45.725 |  [Pipeline] readJSON
2026-10-15 14:12:45.897 |  [Pipeline] }
2026-10-15 14:12:46.020 |  [Pipeline] // withCredentials
2026-10-15 14:12:46.078 |  [Pipeline] httpRequest
2026-10-15 14:12:46.378 |  [Pipeline] echo
2026-10-15 14:12:46.397 |  [{"nome":"ALESSANDRO BALMANT DA SILVA","codigo_membro":3536,"matricula":"F0130722","lider":true,"pendente":false},{"nome":"ANDERSON BARROS DOBLINSKI","codigo_membro":4619,"matricula":"F0113896","lider":true,"pendente":false},{"nome":"ANDERSON FABIO DA SILVA JUNIOR","codigo_membro":6638,"matricula":"F0135885","lider":true,"pendente":false},{"nome":"ANDERSON JOSE DE LIMA","codigo_membro":7483,"matricula":"P0665450","lider":true,"pendente":false},{"nome":"ANDRE BUESSO DE LUCCA","codigo_membro":5596,"matricula":"F0132732","lider":true,"pendente":false},{"nome":"ANDRE DE PINA MENDES","codigo_membro":7393,"matricula":"F0132417","lider":true,"pendente":false},{"nome":"BRUNA RIBEIRO LEITE FERREIRA","codigo_membro":3670,"matricula":"F0112275","lider":true,"pendente":false},{"nome":"CREYTON BARRETO DE MORAES FERREIRA","codigo_membro":7779,"matricula":"F0132049","lider":true,"pendente":false},{"nome":"DANIELA VANNINI PINTER","codigo_membro":6882,"matricula":"F0113847","lider":true,"pendente":false},{"nome":"DANIEL PEDERSEN MEDEIROS","codigo_membro":7339,"matricula":"P0645548","lider":true,"pendente":false},{"nome":"DANILO EDUARDO DA SILVA","codigo_membro":8027,"matricula":"F0134660","lider":true,"pendente":false},{"nome":"DENIS CRISPE SILVA","codigo_membro":2432,"matricula":"F0133310","lider":true,"pendente":false},{"nome":"DENNI GERALDES DE CARVALHOSA MORAES","codigo_membro":5926,"matricula":"F0130547","lider":true,"pendente":false},{"nome":"DIEGO ALVES DOS SANTOS","codigo_membro":7392,"matricula":"F0121864","lider":true,"pendente":false},{"nome":"DIEGO MIGUEL ARRUDA DE MOURA","codigo_membro":6571,"matricula":"F0135638","lider":true,"pendente":false},{"nome":"ERICK DOURADO GABRIEL","codigo_membro":9758,"matricula":"F0131253","lider":true,"pendente":false},{"nome":"FABIO NUNES DELGADO","codigo_membro":4215,"matricula":"F0135023","lider":true,"pendente":false},{"nome":"FERNANDO MARCOS DE OLIVEIRA SILVA","codigo_membro":4604,"matricula":"F0131810","lider":true,"pendente":false},{"nome":"FERNANDO SEPAROVIC","codigo_membro":2731,"matricula":"F0116218","lider":true,"pendente":false},{"nome":"GABRIEL ALMEIDA CARRERA","codigo_membro":3978,"matricula":"P0661285","lider":true,"pendente":false},{"nome":"GUSTAVO HENRIQUE ALVES DE JESUS","codigo_membro":9137,"matricula":"F0129759","lider":true,"pendente":false},{"nome":"HENRIQUE DO CANTO MALVEIRA","codigo_membro":2458,"matricula":"F0133542","lider":true,"pendente":false},{"nome":"IURI MAGALHAES SILVA","codigo_membro":4605,"matricula":"F0127267","lider":true,"pendente":false},{"nome":"KLEYTON ASSUNCAO MEIRA","codigo_membro":8818,"matricula":"F0132068","lider":true,"pendente":false},{"nome":"LINCOLN FELIPE GONCALVES MEDEIROS","codigo_membro":5204,"matricula":"F0134634","lider":true,"pendente":false},{"nome":"LUCAS HENRIQUE BARREIRA BUENO","codigo_membro":3537,"matricula":"F0115747","lider":true,"pendente":false},{"nome":"LUCA SILVA GOUVEIA","codigo_membro":4036,"matricula":"P0662501","lider":true,"pendente":false},{"nome":"MARCOS VINICIUS BESERRA PINHO","codigo_membro":5880,"matricula":"F0130288","lider":true,"pendente":false},{"nome":"MATHEUS MATOS PIEROPAN DE SOUZA","codigo_membro":2849,"matricula":"F0133300","lider":true,"pendente":false},{"nome":"MIGUEL FARIA DA SILVA","codigo_membro":10917,"matricula":"F0136218","lider":true,"pendente":false},{"nome":"NELSON TINAJERO RONCATTI","codigo_membro":6055,"matricula":"F0123167","lider":true,"pendente":false},{"nome":"PATRICIA DA SILVA","codigo_membro":7151,"matricula":"F0113738","lider":true,"pendente":false},{"nome":"PAULO GIGANTE CORSI","codigo_membro":5390,"matricula":"F0135516","lider":true,"pendente":false},{"nome":"PERKINS ALVES FERREIRA","codigo_membro":3495,"matricula":"F0100990","lider":true,"pendente":false},{"nome":"RAFAEL ALVES DE LIMA","codigo_membro":2269,"matricula":"F0130565","lider":true,"pendente":false},{"nome":"RANGEL VICTOR SANTOS","codigo_membro":9171,"matricula":"F0135188","lider":true,"pendente":false},{"nome":"RICARDO APARECIDO DA SILVA P SANTOS","codigo_membro":6401,"matricula":"F0113753","lider":true,"pendente":false},{"nome":"SAMUEL DO NASCIMENTO MACHADO DE OLIVEIRA","codigo_membro":4166,"matricula":"F0133201","lider":true,"pendente":false},{"nome":"SERGIO RICARDO LOURENCO FILHO","codigo_membro":3498,"matricula":"F0130977","lider":true,"pendente":false},{"nome":"TATIANE DE CASSIA BRANDANI","codigo_membro":3496,"matricula":"F0131708","lider":true,"pendente":false},{"nome":"TIAGO BARBANO VENTURA","codigo_membro":9930,"matricula":"F0113800","lider":true,"pendente":false},{"nome":"TIAGO RICARDO ALMEIDA DA SILVA","codigo_membro":7118,"matricula":"F0122569","lider":true,"pendente":false},{"nome":"TIAGO RODRIGUES CORA","codigo_membro":5248,"matricula":"P0655232","lider":true,"pendente":false},{"nome":"VANDEIR DE PAULA BARREIRO","codigo_membro":3726,"matricula":"F0130888","lider":true,"pendente":false},{"nome":"VICTOR RIOS DE SOUZA","codigo_membro":9974,"matricula":"F0133840","lider":true,"pendente":false},{"nome":"VITOR AUGUSTO ALVES","codigo_membro":4262,"matricula":"F0133202","lider":true,"pendente":false},{"nome":"WAGNER FERREIRA DA CRUZ","codigo_membro":5710,"matricula":"F0131509","lider":true,"pendente":false},{"nome":"WENDER CRIS DE SOUZA FIRMINO","codigo_membro":8517,"matricula":"F0134631","lider":true,"pendente":false},{"nome":"WESLEY SOARES DE OLIVEIRA","codigo_membro":9101,"matricula":"F0135164","lider":true,"pendente":false}]
2026-10-15 14:12:46.485 |  [Pipeline] readJSON
2026-10-15 14:12:46.658 |  [Pipeline] echo
2026-10-15 14:12:46.684 |  {"nome":"ALESSANDRO BALMANT DA SILVA","codigo_membro":3536,"matricula":"F0130722","lider":true,"pendente":false}
2026-10-15 14:12:46.750 |  [Pipeline] echo
2026-10-15 14:12:46.765 |  {"nome":"ANDERSON BARROS DOBLINSKI","codigo_membro":4619,"matricula":"F0113896","lider":true,"pendente":false}
2026-10-15 14:12:46.842 |  [Pipeline] echo
2026-10-15 14:12:46.870 |  {"nome":"ANDERSON FABIO DA SILVA JUNIOR","codigo_membro":6638,"matricula":"F0135885","lider":true,"pendente":false}
2026-10-15 14:12:46.957 |  [Pipeline] echo
2026-10-15 14:12:46.974 |  {"nome":"ANDERSON JOSE DE LIMA","codigo_membro":7483,"matricula":"P0665450","lider":true,"pendente":false}
2026-10-15 14:12:47.043 |  [Pipeline] echo
2026-10-15 14:12:47.063 |  {"nome":"ANDRE BUESSO DE LUCCA","codigo_membro":5596,"matricula":"F0132732","lider":true,"pendente":false}
2026-10-15 14:12:47.118 |  [Pipeline] echo
2026-10-15 14:12:47.170 |  {"nome":"ANDRE DE PINA MENDES","codigo_membro":7393,"matricula":"F0132417","lider":true,"pendente":false}
2026-10-15 14:12:47.261 |  [Pipeline] echo
2026-10-15 14:12:47.280 |  {"nome":"BRUNA RIBEIRO LEITE FERREIRA","codigo_membro":3670,"matricula":"F0112275","lider":true,"pendente":false}
2026-10-15 14:12:47.356 |  [Pipeline] echo
2026-10-15 14:12:47.367 |  {"nome":"CREYTON BARRETO DE MORAES FERREIRA","codigo_membro":7779,"matricula":"F0132049","lider":true,"pendente":false}
2026-10-15 14:12:47.480 |  [Pipeline] echo
2026-10-15 14:12:47.497 |  {"nome":"DANIELA VANNINI PINTER","codigo_membro":6882,"matricula":"F0113847","lider":true,"pendente":false}
2026-10-15 14:12:47.545 |  [Pipeline] echo
2026-10-15 14:12:47.570 |  {"nome":"DANIEL PEDERSEN MEDEIROS","codigo_membro":7339,"matricula":"P0645548","lider":true,"pendente":false}
2026-10-15 14:12:47.646 |  [Pipeline] echo
2026-10-15 14:12:47.652 |  {"nome":"DANILO EDUARDO DA SILVA","codigo_membro":8027,"matricula":"F0134660","lider":true,"pendente":false}
2026-10-15 14:12:47.735 |  [Pipeline] echo
2026-10-15 14:12:47.771 |  {"nome":"DENIS CRISPE SILVA","codigo_membro":2432,"matricula":"F0133310","lider":true,"pendente":false}
2026-10-15 14:12:47.835 |  [Pipeline] echo
2026-10-15 14:12:47.857 |  {"nome":"DENNI GERALDES DE CARVALHOSA MORAES","codigo_membro":5926,"matricula":"F0130547","lider":true,"pendente":false}
2026-10-15 14:12:47.909 |  [Pipeline] echo
2026-10-15 14:12:47.927 |  {"nome":"DIEGO ALVES DOS SANTOS","codigo_membro":7392,"matricula":"F0121864","lider":true,"pendente":false}
2026-10-15 14:12:47.999 |  [Pipeline] echo
2026-10-15 14:12:48.016 |  {"nome":"DIEGO MIGUEL ARRUDA DE MOURA","codigo_membro":6571,"matricula":"F0135638","lider":true,"pendente":false}
2026-10-15 14:12:48.085 |  [Pipeline] echo
2026-10-15 14:12:48.092 |  {"nome":"ERICK DOURADO GABRIEL","codigo_membro":9758,"matricula":"F0131253","lider":true,"pendente":false}
2026-10-15 14:12:48.153 |  [Pipeline] echo
2026-10-15 14:12:48.174 |  {"nome":"FABIO NUNES DELGADO","codigo_membro":4215,"matricula":"F0135023","lider":true,"pendente":false}
2026-10-15 14:12:48.237 |  [Pipeline] echo
2026-10-15 14:12:48.258 |  {"nome":"FERNANDO MARCOS DE OLIVEIRA SILVA","codigo_membro":4604,"matricula":"F0131810","lider":true,"pendente":false}
2026-10-15 14:12:48.320 |  [Pipeline] echo
2026-10-15 14:12:48.342 |  {"nome":"FERNANDO SEPAROVIC","codigo_membro":2731,"matricula":"F0116218","lider":true,"pendente":false}
2026-10-15 14:12:48.407 |  [Pipeline] echo
2026-10-15 14:12:48.425 |  {"nome":"GABRIEL ALMEIDA CARRERA","codigo_membro":3978,"matricula":"P0661285","lider":true,"pendente":false}
2026-10-15 14:12:48.481 |  [Pipeline] echo
2026-10-15 14:12:48.488 |  {"nome":"GUSTAVO HENRIQUE ALVES DE JESUS","codigo_membro":9137,"matricula":"F0129759","lider":true,"pendente":false}
2026-10-15 14:12:48.600 |  [Pipeline] echo
2026-10-15 14:12:48.639 |  {"nome":"HENRIQUE DO CANTO MALVEIRA","codigo_membro":2458,"matricula":"F0133542","lider":true,"pendente":false}
2026-10-15 14:12:48.694 |  [Pipeline] echo
2026-10-15 14:12:48.706 |  {"nome":"IURI MAGALHAES SILVA","codigo_membro":4605,"matricula":"F0127267","lider":true,"pendente":false}
2026-10-15 14:12:48.756 |  [Pipeline] echo
2026-10-15 14:12:48.769 |  {"nome":"KLEYTON ASSUNCAO MEIRA","codigo_membro":8818,"matricula":"F0132068","lider":true,"pendente":false}
2026-10-15 14:12:48.849 |  [Pipeline] echo
2026-10-15 14:12:48.863 |  {"nome":"LINCOLN FELIPE GONCALVES MEDEIROS","codigo_membro":5204,"matricula":"F0134634","lider":true,"pendente":false}
2026-10-15 14:12:48.967 |  [Pipeline] echo
2026-10-15 14:12:49.001 |  {"nome":"LUCAS HENRIQUE BARREIRA BUENO","codigo_membro":3537,"matricula":"F0115747","lider":true,"pendente":false}
2026-10-15 14:12:49.090 |  [Pipeline] echo
2026-10-15 14:12:49.103 |  {"nome":"LUCA SILVA GOUVEIA","codigo_membro":4036,"matricula":"P0662501","lider":true,"pendente":false}
2026-10-15 14:12:49.156 |  [Pipeline] echo
2026-10-15 14:12:49.186 |  {"nome":"MARCOS VINICIUS BESERRA PINHO","codigo_membro":5880,"matricula":"F0130288","lider":true,"pendente":false}
2026-10-15 14:12:49.227 |  [Pipeline] echo
2026-10-15 14:12:49.238 |  {"nome":"MATHEUS MATOS PIEROPAN DE SOUZA","codigo_membro":2849,"matricula":"F0133300","lider":true,"pendente":false}
2026-10-15 14:12:49.319 |  [Pipeline] echo
2026-10-15 14:12:49.349 |  {"nome":"MIGUEL FARIA DA SILVA","codigo_membro":10917,"matricula":"F0136218","lider":true,"pendente":false}
2026-10-15 14:12:49.415 |  [Pipeline] echo
2026-10-15 14:12:49.445 |  {"nome":"NELSON TINAJERO RONCATTI","codigo_membro":6055,"matricula":"F0123167","lider":true,"pendente":false}
2026-10-15 14:12:49.505 |  [Pipeline] echo
2026-10-15 14:12:49.519 |  {"nome":"PATRICIA DA SILVA","codigo_membro":7151,"matricula":"F0113738","lider":true,"pendente":false}
2026-10-15 14:12:49.584 |  [Pipeline] echo
2026-10-15 14:12:49.607 |  {"nome":"PAULO GIGANTE CORSI","codigo_membro":5390,"matricula":"F0135516","lider":true,"pendente":false}
2026-10-15 14:12:49.675 |  [Pipeline] echo
2026-10-15 14:12:49.686 |  {"nome":"PERKINS ALVES FERREIRA","codigo_membro":3495,"matricula":"F0100990","lider":true,"pendente":false}
2026-10-15 14:12:49.763 |  [Pipeline] echo
2026-10-15 14:12:49.795 |  {"nome":"RAFAEL ALVES DE LIMA","codigo_membro":2269,"matricula":"F0130565","lider":true,"pendente":false}
2026-10-15 14:12:49.862 |  [Pipeline] echo
2026-10-15 14:12:49.919 |  {"nome":"RANGEL VICTOR SANTOS","codigo_membro":9171,"matricula":"F0135188","lider":true,"pendente":false}
2026-10-15 14:12:50.007 |  [Pipeline] echo
2026-10-15 14:12:50.025 |  {"nome":"RICARDO APARECIDO DA SILVA P SANTOS","codigo_membro":6401,"matricula":"F0113753","lider":true,"pendente":false}
2026-10-15 14:12:50.172 |  [Pipeline] echo
2026-10-15 14:12:50.201 |  {"nome":"SAMUEL DO NASCIMENTO MACHADO DE OLIVEIRA","codigo_membro":4166,"matricula":"F0133201","lider":true,"pendente":false}
2026-10-15 14:12:50.288 |  [Pipeline] echo
2026-10-15 14:12:50.310 |  {"nome":"SERGIO RICARDO LOURENCO FILHO","codigo_membro":3498,"matricula":"F0130977","lider":true,"pendente":false}
2026-10-15 14:12:50.371 |  [Pipeline] echo
2026-10-15 14:12:50.392 |  {"nome":"TATIANE DE CASSIA BRANDANI","codigo_membro":3496,"matricula":"F0131708","lider":true,"pendente":false}
2026-10-15 14:12:50.425 |  [Pipeline] echo
2026-10-15 14:12:50.447 |  {"nome":"TIAGO BARBANO VENTURA","codigo_membro":9930,"matricula":"F0113800","lider":true,"pendente":false}
2026-10-15 14:12:50.551 |  [Pipeline] echo
2026-10-15 14:12:50.577 |  {"nome":"TIAGO RICARDO ALMEIDA DA SILVA","codigo_membro":7118,"matricula":"F0122569","lider":true,"pendente":false}
2026-10-15 14:12:50.665 |  [Pipeline] echo
2026-10-15 14:12:50.684 |  {"nome":"TIAGO RODRIGUES CORA","codigo_membro":5248,"matricula":"P0655232","lider":true,"pendente":false}
2026-10-15 14:12:50.761 |  [Pipeline] echo
2026-10-15 14:12:50.777 |  {"nome":"VANDEIR DE PAULA BARREIRO","codigo_membro":3726,"matricula":"F0130888","lider":true,"pendente":false}
2026-10-15 14:12:50.824 |  [Pipeline] echo
2026-10-15 14:12:50.843 |  {"nome":"VICTOR RIOS DE SOUZA","codigo_membro":9974,"matricula":"F0133840","lider":true,"pendente":false}
2026-10-15 14:12:50.891 |  [Pipeline] echo
2026-10-15 14:12:50.926 |  {"nome":"VITOR AUGUSTO ALVES","codigo_membro":4262,"matricula":"F0133202","lider":true,"pendente":false}
2026-10-15 14:12:50.993 |  [Pipeline] echo
2026-10-15 14:12:51.000 |  {"nome":"WAGNER FERREIRA DA CRUZ","codigo_membro":5710,"matricula":"F0131509","lider":true,"pendente":false}
2026-10-15 14:12:51.057 |  [Pipeline] echo
2026-10-15 14:12:51.071 |  {"nome":"WENDER CRIS DE SOUZA FIRMINO","codigo_membro":8517,"matricula":"F0134631","lider":true,"pendente":false}
2026-10-15 14:12:51.134 |  [Pipeline] echo
2026-10-15 14:12:51.168 |  {"nome":"WESLEY SOARES DE OLIVEIRA","codigo_membro":9101,"matricula":"F0135164","lider":true,"pendente":false}
2026-10-15 14:12:51.484 |  [Pipeline] libraryResource
2026-10-15 14:12:51.581 |  [Pipeline] libraryResource
2026-10-15 14:12:51.643 |  [Pipeline] readJSON
2026-10-15 14:12:51.785 |  [Pipeline] writeFile
2026-10-15 14:12:51.987 |  [Pipeline] writeJSON
2026-10-15 14:12:52.279 |  [Pipeline] sh
2026-10-15 14:12:53.160 |  + chmod 777 ./ecr_cria_regra_permissoes.sh
2026-10-15 14:12:53.248 |  [Pipeline] sh
2026-10-15 14:12:54.009 |  + chmod 777 ./template_ecr_permission.json
2026-10-15 14:12:54.134 |  [Pipeline] }
2026-10-15 14:12:54.269 |  [Pipeline] // script
2026-10-15 14:12:54.296 |  [Pipeline] }
2026-10-15 14:12:54.378 |  [Pipeline] // stage
2026-10-15 14:12:54.463 |  [Pipeline] stage
2026-10-15 14:12:54.479 |  [Pipeline] { (Seleção do ambiente)
2026-10-15 14:12:54.563 |  [Pipeline] script
2026-10-15 14:12:54.578 |  [Pipeline] {
2026-10-15 14:12:54.667 |  [Pipeline] echo
2026-10-15 14:12:54.684 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:54.684 |  | Stage Seleção do ambiente
2026-10-15 14:12:54.684 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:54.799 |  [Pipeline] echo
2026-10-15 14:12:54.811 |  Enviado mensagem via google chat...
2026-10-15 14:12:54.859 |  [Pipeline] echo
2026-10-15 14:12:54.875 |  URL de Envio: https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8&threadKey=sboot-auto-apol-geracao-documento-bff:build-122052CD
2026-10-15 14:12:54.904 |  [Pipeline] echo
2026-10-15 14:12:54.915 |  Enviando Request...
2026-10-15 14:12:54.966 |  [Pipeline] httpRequest
2026-10-15 14:12:55.722 |  [Pipeline] echo
2026-10-15 14:12:55.744 |  Enviando mensagem para o backstage - componente: sboot-auto-apol-geracao-documento-bff - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:12:55.823 |  [Pipeline] echo
2026-10-15 14:12:55.854 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:55.854 |  | Seleção automática de ambiente
2026-10-15 14:12:55.854 |  | dev
2026-10-15 14:12:55.854 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:56.087 |  [Pipeline] withCredentials
2026-10-15 14:12:56.105 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:12:56.164 |  [Pipeline] {
2026-10-15 14:12:56.219 |  [Pipeline] echo
2026-10-15 14:12:56.236 |  aws ecr list-images  --region ca-central-1 --repository-name auto/apol/sboot-auto-apol-geracao-documento-bff | jq -c '.imageIds[]|select(.imageTag != null)|select(([.imageTag|test("-gf-")]|any) or ([.imageTag|test("-gf.release-")]|any)).imageTag' -r | sort
2026-10-15 14:12:56.276 |  [Pipeline] sh
2026-10-15 14:12:57.174 |  + aws ecr list-images --region ca-central-1 --repository-name auto/apol/sboot-auto-apol-geracao-documento-bff
2026-10-15 14:12:57.174 |  + jq -c '.imageIds[]|select(.imageTag != null)|select(([.imageTag|test("-gf-")]|any) or ([.imageTag|test("-gf.release-")]|any)).imageTag' -r
2026-10-15 14:12:57.174 |  + sort
2026-10-15 14:12:58.053 |  [Pipeline] }
2026-10-15 14:12:58.156 |  [Pipeline] // withCredentials
2026-10-15 14:12:58.220 |  [Pipeline] echo
2026-10-15 14:12:58.230 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.230 |  | VERSOES
2026-10-15 14:12:58.230 |  | 1.0-snapshot-gf-developer-hsmanual-10165
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-102358
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-107558
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-31788
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-8166
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-8277
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94235
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94283
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94369
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94370
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94371
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94564
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-94780
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-95180
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-95469
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-95594
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-95595
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-95978
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-96559
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-96614
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-97368
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-developer-hsmanual-98834
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureajustespom-hsmanual-94770
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor310253-hsmanual-102344
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor31817-hsmanual-95587
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor31829-hsmanual-95699
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor31832-hsmanual-95782
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor328659-hsmanual-29282
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor328659-hsmanual-29546
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor328659-hsmanual-30653
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor328659-hsmanual-31178
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor330575-hsmanual-35965
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor39413-hsmanual-98639
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-featureautor39413-hsmanual-98829
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-master-hsmanual-100870
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-master-hsmanual-13352
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-master-hsmanual-8169
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-master-hsmanual-8280
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-staging-hsmanual-10168
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-staging-hsmanual-8167
2026-10-15 14:12:58.230 |  1.0-snapshot-gf-staging-hsmanual-8279
2026-10-15 14:12:58.230 |  
2026-10-15 14:12:58.230 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.284 |  [Pipeline] echo
2026-10-15 14:12:58.304 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.304 |  | Seleção automática de Versão
2026-10-15 14:12:58.304 |  | 1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:12:58.304 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.522 |  [Pipeline] echo
2026-10-15 14:12:58.540 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.540 |  | Seleção automática do cluster
2026-10-15 14:12:58.540 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:12:58.645 |  [Pipeline] echo
2026-10-15 14:12:58.660 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:12:58.705 |  [Pipeline] echo
2026-10-15 14:12:58.723 |  Lista: [[codigo_propriedade:515, chave:credenciais_jenkins, valor:svc-jenkins-cicd.auto-emissao-dev, obrigatorio:1], [codigo_propriedade:517, chave:host, valor:apps.auto-emissao.dev.awsporto, obrigatorio:1], [codigo_propriedade:516, chave:id_conta, valor:490861488992, obrigatorio:1], [codigo_propriedade:5646, chave:ingress_migrado, valor:true, obrigatorio:1], [codigo_propriedade:514, chave:nome_cluster, valor:eks-auto-ecor-dev, obrigatorio:1], [codigo_propriedade:518, chave:regiao_cluster, valor:ca-central-1, obrigatorio:1]]
2026-10-15 14:12:58.791 |  [Pipeline] echo
2026-10-15 14:12:58.806 |  Chave Input: regiao_cluster
2026-10-15 14:12:58.880 |  [Pipeline] echo
2026-10-15 14:12:58.888 |  Chave: regiao_cluster
2026-10-15 14:12:58.929 |  [Pipeline] echo
2026-10-15 14:12:58.946 |  Valor:ca-central-1
2026-10-15 14:12:59.003 |  [Pipeline] echo
2026-10-15 14:12:59.018 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:12:59.060 |  [Pipeline] echo
2026-10-15 14:12:59.086 |  Lista: [[codigo_propriedade:515, chave:credenciais_jenkins, valor:svc-jenkins-cicd.auto-emissao-dev, obrigatorio:1], [codigo_propriedade:517, chave:host, valor:apps.auto-emissao.dev.awsporto, obrigatorio:1], [codigo_propriedade:516, chave:id_conta, valor:490861488992, obrigatorio:1], [codigo_propriedade:5646, chave:ingress_migrado, valor:true, obrigatorio:1], [codigo_propriedade:514, chave:nome_cluster, valor:eks-auto-ecor-dev, obrigatorio:1], [codigo_propriedade:518, chave:regiao_cluster, valor:ca-central-1, obrigatorio:1]]
2026-10-15 14:12:59.146 |  [Pipeline] echo
2026-10-15 14:12:59.169 |  Chave Input: nome_cluster
2026-10-15 14:12:59.235 |  [Pipeline] echo
2026-10-15 14:12:59.262 |  Chave: nome_cluster
2026-10-15 14:12:59.348 |  [Pipeline] echo
2026-10-15 14:12:59.358 |  Valor:eks-auto-ecor-dev
2026-10-15 14:12:59.417 |  [Pipeline] echo
2026-10-15 14:12:59.426 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:12:59.465 |  [Pipeline] echo
2026-10-15 14:12:59.505 |  Lista: [[codigo_propriedade:515, chave:credenciais_jenkins, valor:svc-jenkins-cicd.auto-emissao-dev, obrigatorio:1], [codigo_propriedade:517, chave:host, valor:apps.auto-emissao.dev.awsporto, obrigatorio:1], [codigo_propriedade:516, chave:id_conta, valor:490861488992, obrigatorio:1], [codigo_propriedade:5646, chave:ingress_migrado, valor:true, obrigatorio:1], [codigo_propriedade:514, chave:nome_cluster, valor:eks-auto-ecor-dev, obrigatorio:1], [codigo_propriedade:518, chave:regiao_cluster, valor:ca-central-1, obrigatorio:1]]
2026-10-15 14:12:59.557 |  [Pipeline] echo
2026-10-15 14:12:59.578 |  Chave Input: id_conta
2026-10-15 14:12:59.672 |  [Pipeline] echo
2026-10-15 14:12:59.687 |  Chave: id_conta
2026-10-15 14:12:59.728 |  [Pipeline] echo
2026-10-15 14:12:59.748 |  Valor:490861488992
2026-10-15 14:12:59.912 |  [Pipeline] echo
2026-10-15 14:12:59.927 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:12:59.989 |  [Pipeline] echo
2026-10-15 14:13:00.002 |  Lista: [[codigo_propriedade:515, chave:credenciais_jenkins, valor:svc-jenkins-cicd.auto-emissao-dev, obrigatorio:1], [codigo_propriedade:517, chave:host, valor:apps.auto-emissao.dev.awsporto, obrigatorio:1], [codigo_propriedade:516, chave:id_conta, valor:490861488992, obrigatorio:1], [codigo_propriedade:5646, chave:ingress_migrado, valor:true, obrigatorio:1], [codigo_propriedade:514, chave:nome_cluster, valor:eks-auto-ecor-dev, obrigatorio:1], [codigo_propriedade:518, chave:regiao_cluster, valor:ca-central-1, obrigatorio:1]]
2026-10-15 14:13:00.050 |  [Pipeline] echo
2026-10-15 14:13:00.069 |  Chave Input: credenciais_jenkins
2026-10-15 14:13:00.141 |  [Pipeline] echo
2026-10-15 14:13:00.156 |  Chave: credenciais_jenkins
2026-10-15 14:13:00.190 |  [Pipeline] echo
2026-10-15 14:13:00.215 |  Valor:svc-jenkins-cicd.auto-emissao-dev
2026-10-15 14:13:00.291 |  [Pipeline] echo
2026-10-15 14:13:00.320 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:13:00.359 |  [Pipeline] echo
2026-10-15 14:13:00.375 |  Lista: [[codigo_propriedade:515, chave:credenciais_jenkins, valor:svc-jenkins-cicd.auto-emissao-dev, obrigatorio:1], [codigo_propriedade:517, chave:host, valor:apps.auto-emissao.dev.awsporto, obrigatorio:1], [codigo_propriedade:516, chave:id_conta, valor:490861488992, obrigatorio:1], [codigo_propriedade:5646, chave:ingress_migrado, valor:true, obrigatorio:1], [codigo_propriedade:514, chave:nome_cluster, valor:eks-auto-ecor-dev, obrigatorio:1], [codigo_propriedade:518, chave:regiao_cluster, valor:ca-central-1, obrigatorio:1]]
2026-10-15 14:13:00.411 |  [Pipeline] echo
2026-10-15 14:13:00.453 |  Chave Input: host
2026-10-15 14:13:00.512 |  [Pipeline] echo
2026-10-15 14:13:00.536 |  Chave: host
2026-10-15 14:13:00.553 |  [Pipeline] echo
2026-10-15 14:13:00.561 |  Valor:apps.auto-emissao.dev.awsporto
2026-10-15 14:13:00.618 |  [Pipeline] withCredentials
2026-10-15 14:13:00.673 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:13:00.691 |  [Pipeline] {
2026-10-15 14:13:00.776 |  [Pipeline] sh
2026-10-15 14:13:01.690 |  + aws --region ca-central-1 eks describe-cluster --name eks-auto-ecor-dev
2026-10-15 14:13:01.690 |  + jq . -r
2026-10-15 14:13:02.601 |  [Pipeline] readJSON
2026-10-15 14:13:02.714 |  [Pipeline] }
2026-10-15 14:13:02.821 |  [Pipeline] // withCredentials
2026-10-15 14:13:03.062 |  [Pipeline] }
2026-10-15 14:13:03.182 |  [Pipeline] // script
2026-10-15 14:13:03.298 |  [Pipeline] }
2026-10-15 14:13:03.417 |  [Pipeline] // stage
2026-10-15 14:13:03.490 |  [Pipeline] stage
2026-10-15 14:13:03.507 |  [Pipeline] { (Parametros de Abertura RDM)
2026-10-15 14:13:03.591 |  Stage "Parametros de Abertura RDM" skipped due to when conditional
2026-10-15 14:13:03.620 |  [Pipeline] }
2026-10-15 14:13:03.743 |  [Pipeline] // stage
2026-10-15 14:13:03.848 |  [Pipeline] stage
2026-10-15 14:13:03.874 |  [Pipeline] { (Criar RDM)
2026-10-15 14:13:03.951 |  Stage "Criar RDM" skipped due to when conditional
2026-10-15 14:13:03.985 |  [Pipeline] }
2026-10-15 14:13:04.081 |  [Pipeline] // stage
2026-10-15 14:13:04.174 |  [Pipeline] stage
2026-10-15 14:13:04.211 |  [Pipeline] { (Aguardando Aprovação)
2026-10-15 14:13:04.307 |  Stage "Aguardando Aprovação" skipped due to when conditional
2026-10-15 14:13:04.356 |  [Pipeline] }
2026-10-15 14:13:04.466 |  [Pipeline] // stage
2026-10-15 14:13:04.515 |  [Pipeline] stage
2026-10-15 14:13:04.534 |  [Pipeline] { (Aguardando Horário Agendado)
2026-10-15 14:13:04.603 |  Stage "Aguardando Horário Agendado" skipped due to when conditional
2026-10-15 14:13:04.638 |  [Pipeline] }
2026-10-15 14:13:04.701 |  [Pipeline] // stage
2026-10-15 14:13:04.769 |  [Pipeline] stage
2026-10-15 14:13:04.789 |  [Pipeline] { (Configuração de ambiente e Publicação)
2026-10-15 14:13:05.025 |  [Pipeline] script
2026-10-15 14:13:05.039 |  [Pipeline] {
2026-10-15 14:13:05.129 |  [Pipeline] echo
2026-10-15 14:13:05.146 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:13:05.146 |  | Stage Configuração de ambiente e Publicação
2026-10-15 14:13:05.146 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:13:05.227 |  [Pipeline] echo
2026-10-15 14:13:05.247 |  Enviado mensagem via google chat...
2026-10-15 14:13:05.321 |  [Pipeline] echo
2026-10-15 14:13:05.332 |  URL de Envio: https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8&threadKey=sboot-auto-apol-geracao-documento-bff:build-122052CD
2026-10-15 14:13:05.378 |  [Pipeline] echo
2026-10-15 14:13:05.407 |  Enviando Request...
2026-10-15 14:13:05.438 |  [Pipeline] httpRequest
2026-10-15 14:13:06.314 |  [Pipeline] echo
2026-10-15 14:13:06.336 |  Enviando mensagem para o backstage - componente: sboot-auto-apol-geracao-documento-bff - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:13:06.652 |  [Pipeline] echo
2026-10-15 14:13:06.675 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:13:06.726 |  [Pipeline] echo
2026-10-15 14:13:06.739 |  Lista: [[chave:helm_tool, valor:helm-v3.8.2-linux-amd64], [chave:dast, valor:backend]]
2026-10-15 14:13:06.773 |  [Pipeline] echo
2026-10-15 14:13:06.798 |  Chave Input: helm_tool
2026-10-15 14:13:06.866 |  [Pipeline] echo
2026-10-15 14:13:06.882 |  Chave: helm_tool
2026-10-15 14:13:06.913 |  [Pipeline] echo
2026-10-15 14:13:06.931 |  Valor:helm-v3.8.2-linux-amd64
2026-10-15 14:13:06.998 |  [Pipeline] fileExists
2026-10-15 14:13:07.194 |  [Pipeline] withCredentials
2026-10-15 14:13:07.207 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:13:07.260 |  [Pipeline] {
2026-10-15 14:13:07.367 |  [Pipeline] writeJSON
2026-10-15 14:13:07.709 |  [Pipeline] sh
2026-10-15 14:13:08.588 |  + ./ecr_cria_regra_permissoes.sh auto/apol/sboot-auto-apol-geracao-documento-bff apol auto ./template_ecr_permission.json ./ci-cd.json backstage ca-central-1
2026-10-15 14:13:08.588 |  +-----------------------------------------
2026-10-15 14:13:08.588 |  |ecr_cria_regra_permissoes.sh
2026-10-15 14:13:08.588 |  +-----------------------------------------
2026-10-15 14:13:08.589 |  |REPO_NAME                 : auto/apol/sboot-auto-apol-geracao-documento-bff
2026-10-15 14:13:08.589 |  |VERTICAL_NEGOCIO          : apol
2026-10-15 14:13:08.589 |  |VERTICAL_NEGOCIO_SISTEMA  : auto
2026-10-15 14:13:08.589 |  |PATH_TEMPLATE_ECR         : ./template_ecr_permission.json
2026-10-15 14:13:08.589 |  |PATH_CICD_JSON            : ./ci-cd.json
2026-10-15 14:13:08.589 |  |ORIGEM_BACKSTAGE          : backstage
2026-10-15 14:13:08.589 |  |REGIAO                    : ca-central-1
2026-10-15 14:13:08.589 |  +-----------------------------------------
2026-10-15 14:13:09.290 |  | montando arquivo de permissoes.
2026-10-15 14:13:09.290 |  | Verificando conteudo ACCOUNTS vazio.
2026-10-15 14:13:09.290 |  | Verificando conteudo ACCOUNTS existente.
2026-10-15 14:13:09.290 |  +-----------------------------------------
2026-10-15 14:13:09.290 |  |ecr_cria_regra_permissoes.sh
2026-10-15 14:13:09.290 |  +-----------------------------------------
2026-10-15 14:13:09.290 |  |ACCOUNTS              : ["arn:aws:iam::490861488992:root","arn:aws:iam::851725163918:root"]
2026-10-15 14:13:09.290 |  |PERMISSION_TO_APPLY   : {
2026-10-15 14:13:09.290 |    "Version": "2012-10-17",
2026-10-15 14:13:09.290 |    "Statement": [
2026-10-15 14:13:09.290 |      {
2026-10-15 14:13:09.290 |        "Sid": "new statement",
2026-10-15 14:13:09.290 |        "Effect": "Allow",
2026-10-15 14:13:09.290 |        "Principal": {
2026-10-15 14:13:09.290 |          "AWS": [
2026-10-15 14:13:09.290 |            "arn:aws:iam::490861488992:root",
2026-10-15 14:13:09.290 |            "arn:aws:iam::851725163918:root"
2026-10-15 14:13:09.290 |          ]
2026-10-15 14:13:09.290 |        },
2026-10-15 14:13:09.290 |        "Action": [
2026-10-15 14:13:09.290 |          "ecr:BatchCheckLayerAvailability",
2026-10-15 14:13:09.290 |          "ecr:BatchGetImage",
2026-10-15 14:13:09.290 |          "ecr:DescribeImageScanFindings",
2026-10-15 14:13:09.290 |          "ecr:DescribeImages",
2026-10-15 14:13:09.290 |          "ecr:DescribeRepositories",
2026-10-15 14:13:09.290 |          "ecr:GetAuthorizationToken",
2026-10-15 14:13:09.290 |          "ecr:GetDownloadUrlForLayer",
2026-10-15 14:13:09.290 |          "ecr:GetLifecyclePolicy",
2026-10-15 14:13:09.290 |          "ecr:GetLifecyclePolicyPreview",
2026-10-15 14:13:09.290 |          "ecr:GetRepositoryPolicy",
2026-10-15 14:13:09.290 |          "ecr:ListImages",
2026-10-15 14:13:09.290 |          "ecr:ListTagsForResource"
2026-10-15 14:13:09.290 |        ]
2026-10-15 14:13:09.290 |      }
2026-10-15 14:13:09.290 |    ]
2026-10-15 14:13:09.290 |  }
2026-10-15 14:13:09.290 |  +-----------------------------------------
2026-10-15 14:13:09.290 |  | aplicando permissoes
2026-10-15 14:13:10.091 |  {
2026-10-15 14:13:10.091 |      "registryId": "722846928525",
2026-10-15 14:13:10.091 |      "repositoryName": "auto/apol/sboot-auto-apol-geracao-documento-bff",
2026-10-15 14:13:10.091 |      "policyText": "{\n  \"Version\" : \"2012-10-17\",\n  \"Statement\" : [ {\n    \"Sid\" : \"new statement\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n      \"AWS\" : [ \"arn:aws:iam::851725163918:root\", \"arn:aws:iam::490861488992:root\" ]\n    },\n    \"Action\" : [ \"ecr:BatchCheckLayerAvailability\", \"ecr:BatchGetImage\", \"ecr:DescribeImageScanFindings\", \"ecr:DescribeImages\", \"ecr:DescribeRepositories\", \"ecr:GetAuthorizationToken\", \"ecr:GetDownloadUrlForLayer\", \"ecr:GetLifecyclePolicy\", \"ecr:GetLifecyclePolicyPreview\", \"ecr:GetRepositoryPolicy\", \"ecr:ListImages\", \"ecr:ListTagsForResource\" ]\n  } ]\n}"
2026-10-15 14:13:10.091 |  }
2026-10-15 14:13:10.192 |  +-----------------------------------------
2026-10-15 14:13:10.192 |  |ecr_cria_regra_permissoes.sh
2026-10-15 14:13:10.192 |  +-----------------------------------------
2026-10-15 14:13:10.192 |  |Permissoes aplicacadas!
2026-10-15 14:13:10.192 |  |PERMISSION_TO_APPLY   : {
2026-10-15 14:13:10.192 |    "Version": "2012-10-17",
2026-10-15 14:13:10.192 |    "Statement": [
2026-10-15 14:13:10.192 |      {
2026-10-15 14:13:10.192 |        "Sid": "new statement",
2026-10-15 14:13:10.192 |        "Effect": "Allow",
2026-10-15 14:13:10.192 |        "Principal": {
2026-10-15 14:13:10.192 |          "AWS": [
2026-10-15 14:13:10.192 |            "arn:aws:iam::490861488992:root",
2026-10-15 14:13:10.192 |            "arn:aws:iam::851725163918:root"
2026-10-15 14:13:10.192 |          ]
2026-10-15 14:13:10.192 |        },
2026-10-15 14:13:10.192 |        "Action": [
2026-10-15 14:13:10.192 |          "ecr:BatchCheckLayerAvailability",
2026-10-15 14:13:10.192 |          "ecr:BatchGetImage",
2026-10-15 14:13:10.192 |          "ecr:DescribeImageScanFindings",
2026-10-15 14:13:10.192 |          "ecr:DescribeImages",
2026-10-15 14:13:10.192 |          "ecr:DescribeRepositories",
2026-10-15 14:13:10.192 |          "ecr:GetAuthorizationToken",
2026-10-15 14:13:10.192 |          "ecr:GetDownloadUrlForLayer",
2026-10-15 14:13:10.192 |          "ecr:GetLifecyclePolicy",
2026-10-15 14:13:10.192 |          "ecr:GetLifecyclePolicyPreview",
2026-10-15 14:13:10.192 |          "ecr:GetRepositoryPolicy",
2026-10-15 14:13:10.192 |          "ecr:ListImages",
2026-10-15 14:13:10.192 |          "ecr:ListTagsForResource"
2026-10-15 14:13:10.192 |        ]
2026-10-15 14:13:10.192 |      }
2026-10-15 14:13:10.192 |    ]
2026-10-15 14:13:10.192 |  }
2026-10-15 14:13:10.192 |  +-----------------------------------------
2026-10-15 14:13:10.320 |  [Pipeline] }
2026-10-15 14:13:10.463 |  [Pipeline] // withCredentials
2026-10-15 14:13:10.538 |  [Pipeline] readJSON
2026-10-15 14:13:10.635 |  [Pipeline] readYaml
2026-10-15 14:13:11.116 |  [Pipeline] echo
2026-10-15 14:13:11.140 |  Inicio Execução Lib RemoteGetValorChave
2026-10-15 14:13:11.184 |  [Pipeline] echo
2026-10-15 14:13:11.197 |  Lista: [[chave:customCommands, valor:-Dspring.profiles.active=testepipeline], [chave:customJDK, valor:jdk21-aws], [chave:tecnologia, valor:java], [chave:imagemBaseArquitetura, valor:continuous_delivery/corp/arqt/image-corp-arqt-java21:1.21.0-release], [chave:versao_docker_file, valor:v1], [chave:customMaven, valor:maven-3.8.6]]
2026-10-15 14:13:11.288 |  [Pipeline] echo
2026-10-15 14:13:11.316 |  Chave Input: tecnologia
2026-10-15 14:13:11.362 |  [Pipeline] echo
2026-10-15 14:13:11.378 |  Chave: tecnologia
2026-10-15 14:13:11.410 |  [Pipeline] echo
2026-10-15 14:13:11.426 |  Valor:java
2026-10-15 14:13:11.458 |  [Pipeline] echo
2026-10-15 14:13:11.482 |  env.HOST_URL não será alterado, conteudo atual: apps.auto-emissao.dev.awsporto
2026-10-15 14:13:11.568 |  [Pipeline] echo
2026-10-15 14:13:11.580 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:13:11.580 |  | REALIZANDO PUBLICACAO
2026-10-15 14:13:11.580 |  | nomeAplicacao                 : sboot-auto-apol-geracao-documento-bff
2026-10-15 14:13:11.580 |  | nomeCluster                   : eks-auto-ecor-dev
2026-10-15 14:13:11.580 |  | idConta                       : 490861488992
2026-10-15 14:13:11.580 |  | regiaoCluster                 : ca-central-1
2026-10-15 14:13:11.580 |  | repoEcr                       : 722846928525.dkr.ecr.ca-central-1.amazonaws.com/auto/apol/sboot-auto-apol-geracao-documento-bff
2026-10-15 14:13:11.580 |  | imageTag                      : 1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:13:11.580 |  | nameSpace                     : auto-apol
2026-10-15 14:13:11.580 |  | valuesFile                    : /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/config/values_dev.yaml
2026-10-15 14:13:11.580 |  | acao                          : create
2026-10-15 14:13:11.580 |  | ingressHost                   : apps.auto-emissao.dev.awsporto
2026-10-15 14:13:11.580 |  | appFramework                  : java
2026-10-15 14:13:11.580 |  | ambienteDeploy                : PRD
2026-10-15 14:13:11.580 |  | grupoExecucao                 : dev
2026-10-15 14:13:11.580 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:13:11.671 |  [Pipeline] readJSON
2026-10-15 14:13:11.820 |  [Pipeline] withCredentials
2026-10-15 14:13:11.842 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:13:11.915 |  [Pipeline] {
2026-10-15 14:13:11.997 |  [Pipeline] sh
2026-10-15 14:13:12.894 |  ++ aws organizations describe-account --account-id 490861488992 --query Account.Name --output text
2026-10-15 14:13:13.595 |  + ACCOUNT_NAME=auto-emissao-dev
2026-10-15 14:13:13.595 |  + echo auto-emissao-dev
2026-10-15 14:13:13.777 |  [Pipeline] echo
2026-10-15 14:13:13.798 |  Account Name: auto-emissao-dev
2026-10-15 14:13:13.822 |  [Pipeline] }
2026-10-15 14:13:13.968 |  [Pipeline] // withCredentials
2026-10-15 14:13:14.059 |  [Pipeline] withCredentials
2026-10-15 14:13:14.086 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:13:14.156 |  [Pipeline] {
2026-10-15 14:13:14.252 |  [Pipeline] withCredentials
2026-10-15 14:13:14.277 |  Masking supported pattern matches of $AWS_SECRET_ACCESS_KEY_CPE or $AWS_ACCESS_KEY_ID_CPE
2026-10-15 14:13:14.339 |  [Pipeline] {
2026-10-15 14:13:14.410 |  [Pipeline] withCredentials
2026-10-15 14:13:14.770 |   > git --version # timeout=10
2026-10-15 14:13:14.785 |   > git --version # 'git version 2.33.0'
2026-10-15 14:13:15.123 |  Masking supported pattern matches of $GIT_USERNAME or $GIT_PASSWORD or $GIT_ASKPASS
2026-10-15 14:13:15.154 |  [Pipeline] {
2026-10-15 14:13:15.216 |  [Pipeline] withCredentials
2026-10-15 14:13:15.229 |  Masking supported pattern matches of $jwt
2026-10-15 14:13:15.287 |  [Pipeline] {
2026-10-15 14:13:15.362 |  [Pipeline] sh
2026-10-15 14:13:15.399 |  Warning: A secret was passed to "sh" using Groovy String interpolation, which is insecure.
2026-10-15 14:13:15.399 |  		 Affected argument(s) used the following variable(s): [AWS_SECRET_ACCESS_KEY_CPE, jwt, AWS_ACCESS_KEY_ID_CPE]
2026-10-15 14:13:15.399 |  		 See https://jenkins.io/redirect/groovy-string-interpolation for details.
2026-10-15 14:13:16.380 |  + echo false
2026-10-15 14:13:16.380 |  false
2026-10-15 14:13:16.380 |  + echo dev
2026-10-15 14:13:16.380 |  dev
2026-10-15 14:13:16.380 |  + cd /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage
2026-10-15 14:13:16.380 |  + rm -rf eks-helm
2026-10-15 14:13:16.380 |  + git clone -b master-alb https://gitportoprd.portoseguro.brasil/cpe/containers-serverless/continuous_deployment/eks-helm.git
2026-10-15 14:13:16.380 |  Cloning into 'eks-helm'...
2026-10-15 14:13:43.723 |  + cd eks-helm
2026-10-15 14:13:43.723 |  + export KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig
2026-10-15 14:13:43.723 |  + KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig
2026-10-15 14:13:43.723 |  + aws eks update-kubeconfig --name eks-auto-ecor-dev --region ca-central-1
2026-10-15 14:13:44.524 |  Added new context arn:aws:eks:ca-central-1:490861488992:cluster/eks-auto-ecor-dev to /jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig
2026-10-15 14:13:44.625 |  + export ANSIBLE_FORCE_COLOR=true
2026-10-15 14:13:44.625 |  + ANSIBLE_FORCE_COLOR=true
2026-10-15 14:13:44.625 |  + pip3 install pip --upgrade --user
2026-10-15 14:13:45.026 |  Requirement already satisfied: pip in /home/ec2-user/.local/lib/python3.12/site-packages (26.2.1)
2026-10-15 14:13:45.226 |  + pip3 install -r requirements.txt --user --upgrade
2026-10-15 14:13:45.627 |  Requirement already satisfied: openshift in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 1)) (0.13.2)
2026-10-15 14:13:45.627 |  Requirement already satisfied: PyYAML in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 2)) (6.0.3)
2026-10-15 14:13:45.728 |  Requirement already satisfied: ansible in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 3)) (14.5.0)
2026-10-15 14:13:45.728 |  Requirement already satisfied: botocore in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 4)) (1.43.114)
2026-10-15 14:13:46.029 |  Requirement already satisfied: boto3 in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 5)) (1.43.114)
2026-10-15 14:13:46.329 |  Requirement already satisfied: yq in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 6)) (4.4.5)
2026-10-15 14:13:46.329 |  Requirement already satisfied: requests in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 7)) (2.34.2)
2026-10-15 14:13:46.329 |  Requirement already satisfied: msal in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 8)) (1.39.0)
2026-10-15 14:13:46.330 |  Requirement already satisfied: kubernetes==31.0.0 in /home/ec2-user/.local/lib/python3.12/site-packages (from -r requirements.txt (line 9)) (31.0.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: certifi>=14.05.14 in /home/ec2-user/.local/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (2026.7.22)
2026-10-15 14:13:46.430 |  Requirement already satisfied: six>=1.9.0 in /usr/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (1.16.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: python-dateutil>=2.5.3 in /usr/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (2.9.0.post0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: google-auth>=1.0.1 in /home/ec2-user/.local/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (2.57.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: websocket-client!=0.40.0,!=0.41.*,!=0.42.*,>=0.32.0 in /home/ec2-user/.local/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (1.9.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: requests-oauthlib in /home/ec2-user/.local/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (2.0.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: oauthlib>=3.2.2 in /usr/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (3.2.2)
2026-10-15 14:13:46.430 |  Requirement already satisfied: urllib3>=1.24.2 in /usr/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (1.26.19)
2026-10-15 14:13:46.430 |  Requirement already satisfied: durationpy>=0.7 in /home/ec2-user/.local/lib/python3.12/site-packages (from kubernetes==31.0.0->-r requirements.txt (line 9)) (0.10)
2026-10-15 14:13:46.430 |  Requirement already satisfied: python-string-utils in /home/ec2-user/.local/lib/python3.12/site-packages (from openshift->-r requirements.txt (line 1)) (1.0.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: ansible-core~=2.21.5 in /home/ec2-user/.local/lib/python3.12/site-packages (from ansible->-r requirements.txt (line 3)) (2.21.5)
2026-10-15 14:13:46.430 |  Requirement already satisfied: jinja2>=3.1.0 in /usr/lib/python3.12/site-packages (from ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (3.1.6)
2026-10-15 14:13:46.430 |  Requirement already satisfied: cryptography in /usr/lib64/python3.12/site-packages (from ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (43.0.0)
2026-10-15 14:13:46.430 |  Requirement already satisfied: packaging in /usr/lib/python3.12/site-packages (from ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (24.2)
2026-10-15 14:13:46.430 |  Requirement already satisfied: resolvelib<2.0.0,>=0.8.0 in /usr/lib/python3.12/site-packages (from ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (1.0.1)
2026-10-15 14:13:46.430 |  Requirement already satisfied: jmespath<2.0.0,>=0.7.1 in /home/ec2-user/.local/lib/python3.12/site-packages (from botocore->-r requirements.txt (line 4)) (1.1.0)
2026-10-15 14:13:46.431 |  Requirement already satisfied: s3transfer<0.20.0,>=0.19.0 in /home/ec2-user/.local/lib/python3.12/site-packages (from boto3->-r requirements.txt (line 5)) (0.19.2)
2026-10-15 14:13:46.431 |  Requirement already satisfied: argcomplete>=1.8.1 in /home/ec2-user/.local/lib/python3.12/site-packages (from yq->-r requirements.txt (line 6)) (3.7.2)
2026-10-15 14:13:46.431 |  Requirement already satisfied: tomlkit>=0.11.6 in /home/ec2-user/.local/lib/python3.12/site-packages (from yq->-r requirements.txt (line 6)) (0.15.1)
2026-10-15 14:13:46.431 |  Requirement already satisfied: xmltodict>=0.11.0 in /home/ec2-user/.local/lib/python3.12/site-packages (from yq->-r requirements.txt (line 6)) (1.0.4)
2026-10-15 14:13:46.431 |  Requirement already satisfied: charset_normalizer<4,>=2 in /usr/lib/python3.12/site-packages (from requests->-r requirements.txt (line 7)) (3.3.2)
2026-10-15 14:13:46.431 |  Requirement already satisfied: idna<4,>=2.5 in /usr/lib/python3.12/site-packages (from requests->-r requirements.txt (line 7)) (3.7)
2026-10-15 14:13:46.531 |  Requirement already satisfied: PyJWT<3,>=1.0.0 in /home/ec2-user/.local/lib/python3.12/site-packages (from PyJWT[crypto]<3,>=1.0.0->msal->-r requirements.txt (line 8)) (2.13.0)
2026-10-15 14:13:46.531 |  Requirement already satisfied: cffi>=1.12 in /usr/lib64/python3.12/site-packages (from cryptography->ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (1.16.0)
2026-10-15 14:13:46.531 |  Requirement already satisfied: pycparser in /usr/lib/python3.12/site-packages (from cffi>=1.12->cryptography->ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (2.20)
2026-10-15 14:13:46.531 |  Requirement already satisfied: pyasn1-modules>=0.2.1 in /home/ec2-user/.local/lib/python3.12/site-packages (from google-auth>=1.0.1->kubernetes==31.0.0->-r requirements.txt (line 9)) (0.4.2)
2026-10-15 14:13:46.531 |  Requirement already satisfied: MarkupSafe>=2.0 in /usr/lib64/python3.12/site-packages (from jinja2>=3.1.0->ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (2.1.3)
2026-10-15 14:13:46.531 |  Requirement already satisfied: pyasn1<0.7.0,>=0.6.1 in /home/ec2-user/.local/lib/python3.12/site-packages (from pyasn1-modules>=0.2.1->google-auth>=1.0.1->kubernetes==31.0.0->-r requirements.txt (line 9)) (0.6.4)
2026-10-15 14:13:46.531 |  Requirement already satisfied: ply==3.11 in /usr/lib/python3.12/site-packages (from pycparser->cffi>=1.12->cryptography->ansible-core~=2.21.5->ansible->-r requirements.txt (line 3)) (3.11)
2026-10-15 14:13:46.732 |  + rm -rf '/home/ec2-user/.ansible/collections/ansible_collections/*'
2026-10-15 14:13:46.732 |  + ansible-playbook -i hosts.ini main.yaml -e acao=create -e aws_account_id=490861488992 -e aws_region=ca-central-1 -e aws_cluster_name=eks-auto-ecor-dev -e eks_namespace=auto-apol -e nome_aplicacao=sboot-auto-apol-geracao-documento-bff -e image_tag=1.0-snapshot-gf-developer-hsmanual-36610 -e repo_ecr=722846928525.dkr.ecr.ca-central-1.amazonaws.com/auto/apol/sboot-auto-apol-geracao-documento-bff -e values_file=/home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/config/values_dev.yaml -e helm_dir=/home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage -e version=122052 -e ingress_host=apps.auto-emissao.dev.awsporto -e appFramework=java -e jwt=**** -e cofre_api=https://apps.techstore.prd.awsporto -e grupo_execucao=dev -e AWS_ACCESS_KEY_ID_CPE=**** -e AWS_SECRET_ACCESS_KEY_CPE=**** -e ambiente=dev -e aws_account_name=auto-emissao-dev -e ingress_public=false -e legado=null -e ingress_migrado=true
2026-10-15 14:13:47.333 |  
2026-10-15 14:13:47.333 |  PLAY [all] *********************************************************************
2026-10-15 14:13:47.333 |  
2026-10-15 14:13:47.333 |  TASK [facts : Get AWS Secrets] *************************************************
2026-10-15 14:13:48.835 |  changed: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:48.836 |  changed: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:48.836 |  
2026-10-15 14:13:48.836 |  TASK [facts : Set Facts AWS Secrets] *******************************************
2026-10-15 14:13:48.836 |  ok: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:48.836 |  ok: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:48.836 |  
2026-10-15 14:13:48.836 |  TASK [facts : Verificar e definir nome conforme ambiente] **********************
2026-10-15 14:13:48.836 |  ok: [localhost]
2026-10-15 14:13:48.836 |  
2026-10-15 14:13:48.836 |  TASK [facts : Set grupo_azuread_replace fact] **********************************
2026-10-15 14:13:48.936 |  ok: [localhost]
2026-10-15 14:13:48.936 |  
2026-10-15 14:13:48.936 |  TASK [facts : Set grupo_azuread_developer fact] ********************************
2026-10-15 14:13:48.936 |  ok: [localhost]
2026-10-15 14:13:48.936 |  
2026-10-15 14:13:48.936 |  TASK [facts : Get AzureAD Group ID] ********************************************
2026-10-15 14:13:49.737 |  ok: [localhost]
2026-10-15 14:13:49.737 |  
2026-10-15 14:13:49.737 |  TASK [facts : Set group ID fact] ***********************************************
2026-10-15 14:13:49.737 |  ok: [localhost]
2026-10-15 14:13:49.737 |  
2026-10-15 14:13:49.737 |  TASK [facts : Solicitar detalhes do cluster] ***********************************
2026-10-15 14:13:51.540 |  ok: [localhost]
2026-10-15 14:13:51.540 |  
2026-10-15 14:13:51.540 |  TASK [facts : Extrair ID do cluster] *******************************************
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.242 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.243 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.244 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  ok: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.245 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.846 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  skipping: [localhost] => (item=(censored due to no_log))
2026-10-15 14:13:53.847 |  
2026-10-15 14:13:53.847 |  TASK [facts : Definir nome da VPC] *********************************************
2026-10-15 14:13:53.847 |  ok: [localhost]
2026-10-15 14:13:53.847 |  
2026-10-15 14:13:53.847 |  TASK [facts_member : Run Python script to get public subnets] ******************
2026-10-15 14:13:53.847 |  skipping: [localhost]
2026-10-15 14:13:53.847 |  
2026-10-15 14:13:53.847 |  TASK [facts_member : Definir subnets publicas] *********************************
2026-10-15 14:13:53.948 |  skipping: [localhost]
2026-10-15 14:13:53.948 |  
2026-10-15 14:13:53.948 |  TASK [facts_member : Get Service Account] **************************************
2026-10-15 14:13:54.248 |  changed: [localhost]
2026-10-15 14:13:54.248 |  
2026-10-15 14:13:54.248 |  TASK [facts_member : Set Fact] *************************************************
2026-10-15 14:13:54.349 |  ok: [localhost]
2026-10-15 14:13:54.349 |  
2026-10-15 14:13:54.349 |  TASK [kontrol_project : Consultar projeto no Rancher] **************************
2026-10-15 14:13:54.849 |  ok: [localhost]
2026-10-15 14:13:54.849 |  
2026-10-15 14:13:54.849 |  TASK [kontrol_project : Verificar se o projeto já existe] **********************
2026-10-15 14:13:54.850 |  ok: [localhost]
2026-10-15 14:13:54.850 |  
2026-10-15 14:13:54.850 |  TASK [kontrol_project : Criar projeto no Rancher se não existir] ***************
2026-10-15 14:13:54.850 |  skipping: [localhost]
2026-10-15 14:13:54.850 |  
2026-10-15 14:13:54.850 |  TASK [kontrol_project : Consultar projeto no Rancher] **************************
2026-10-15 14:13:55.350 |  ok: [localhost]
2026-10-15 14:13:55.350 |  
2026-10-15 14:13:55.350 |  TASK [kontrol_project : Verificar se o projeto já existe] **********************
2026-10-15 14:13:55.350 |  ok: [localhost]
2026-10-15 14:13:55.350 |  
2026-10-15 14:13:55.351 |  TASK [kontrol_project : ID do Projeto] *****************************************
2026-10-15 14:13:55.451 |  ok: [localhost]
2026-10-15 14:13:55.451 |  
2026-10-15 14:13:55.451 |  TASK [kontrol_project : Verificar se o grupo já está adicionado ao projeto] ****
2026-10-15 14:14:18.586 |  ok: [localhost]
2026-10-15 14:14:18.586 |  
2026-10-15 14:14:18.586 |  TASK [kontrol_project : Verificar se o grupo já existe no projeto] *************
2026-10-15 14:14:18.686 |  ok: [localhost]
2026-10-15 14:14:18.686 |  
2026-10-15 14:14:18.686 |  TASK [kontrol_project : Adicionar grupo ao Projeto] ****************************
2026-10-15 14:14:19.087 |  ok: [localhost]
2026-10-15 14:14:19.087 |  
2026-10-15 14:14:19.087 |  TASK [aws_role : Get OIDC] *****************************************************
2026-10-15 14:14:20.389 |  changed: [localhost]
2026-10-15 14:14:20.389 |  
2026-10-15 14:14:20.389 |  TASK [aws_role : Deploy] *******************************************************
2026-10-15 14:14:20.389 |  included: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/aws_role/tasks/deploy.yaml for localhost
2026-10-15 14:14:20.389 |  
2026-10-15 14:14:20.389 |  TASK [aws_role : Read Policies ARN] ********************************************
2026-10-15 14:14:20.389 |  [WARNING]: Found variable using reserved name 'namespace'.
2026-10-15 14:14:20.389 |  Origin: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/config/values_dev.yaml:7:1
2026-10-15 14:14:20.389 |  
2026-10-15 14:14:20.389 |  5   host: ""
2026-10-15 14:14:20.389 |  6
2026-10-15 14:14:20.389 |  7 namespace: auto-apol
2026-10-15 14:14:20.389 |    ^ column 1
2026-10-15 14:14:20.389 |  
2026-10-15 14:14:20.389 |  ok: [localhost]
2026-10-15 14:14:20.389 |  
2026-10-15 14:14:20.389 |  TASK [aws_role : Validate Policy ARNs] *****************************************
2026-10-15 14:14:20.490 |  ok: [localhost]
2026-10-15 14:14:20.490 |  
2026-10-15 14:14:20.490 |  TASK [aws_role : Ensure valid_policies is defined] *****************************
2026-10-15 14:14:20.490 |  skipping: [localhost]
2026-10-15 14:14:20.490 |  
2026-10-15 14:14:20.490 |  TASK [aws_role : Apply Role with Valid Policies] *******************************
2026-10-15 14:14:20.490 |  skipping: [localhost]
2026-10-15 14:14:20.490 |  
2026-10-15 14:14:20.490 |  TASK [aws_role : Apply Role without Policies] **********************************
2026-10-15 14:14:21.591 |  ok: [localhost]
2026-10-15 14:14:21.591 |  
2026-10-15 14:14:21.591 |  TASK [aws_role : Set Fact] *****************************************************
2026-10-15 14:14:21.591 |  ok: [localhost]
2026-10-15 14:14:21.591 |  
2026-10-15 14:14:21.591 |  TASK [aws_role : Destroy] ******************************************************
2026-10-15 14:14:21.591 |  skipping: [localhost]
2026-10-15 14:14:21.591 |  
2026-10-15 14:14:21.591 |  TASK [k8s_sa : Deploy] *********************************************************
2026-10-15 14:14:21.591 |  included: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/k8s_sa/tasks/deploy.yaml for localhost
2026-10-15 14:14:21.591 |  
2026-10-15 14:14:21.591 |  TASK [k8s_sa : Update KubeConfig] **********************************************
2026-10-15 14:14:22.893 |  changed: [localhost]
2026-10-15 14:14:22.893 |  
2026-10-15 14:14:22.893 |  TASK [k8s_sa : Create Namespace] ***********************************************
2026-10-15 14:14:24.595 |  ok: [localhost]
2026-10-15 14:14:24.595 |  
2026-10-15 14:14:24.595 |  TASK [k8s_sa : Check Helm Version Installed] ***********************************
2026-10-15 14:14:26.398 |  ok: [localhost]
2026-10-15 14:14:26.398 |  
2026-10-15 14:14:26.398 |  TASK [k8s_sa : Check Service Account] ******************************************
2026-10-15 14:14:26.699 |  changed: [localhost]
2026-10-15 14:14:26.699 |  
2026-10-15 14:14:26.699 |  TASK [k8s_sa : Get Role SA] ****************************************************
2026-10-15 14:14:27.100 |  changed: [localhost]
2026-10-15 14:14:27.100 |  
2026-10-15 14:14:27.100 |  TASK [k8s_sa : Create SA] ******************************************************
2026-10-15 14:14:28.702 |  ok: [localhost]
2026-10-15 14:14:28.702 |  
2026-10-15 14:14:28.702 |  TASK [k8s_sa : Destroy] ********************************************************
2026-10-15 14:14:28.702 |  skipping: [localhost]
2026-10-15 14:14:28.702 |  
2026-10-15 14:14:28.702 |  TASK [helm : Deploy] ***********************************************************
2026-10-15 14:14:28.802 |  included: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/helm/tasks/deploy.yaml for localhost
2026-10-15 14:14:28.802 |  
2026-10-15 14:14:28.802 |  TASK [helm : Update KubeConfig] ************************************************
2026-10-15 14:14:30.004 |  changed: [localhost]
2026-10-15 14:14:30.004 |  
2026-10-15 14:14:30.004 |  TASK [helm : Create Namespace] *************************************************
2026-10-15 14:14:30.104 |  included: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/helm/tasks/namespace.yaml for localhost
2026-10-15 14:14:30.104 |  
2026-10-15 14:14:30.104 |  TASK [helm : Criar namespace com anotação] *************************************
2026-10-15 14:14:31.607 |  ok: [localhost]
2026-10-15 14:14:31.607 |  
2026-10-15 14:14:31.607 |  TASK [helm : Criar namespace] **************************************************
2026-10-15 14:14:31.707 |  skipping: [localhost]
2026-10-15 14:14:31.707 |  
2026-10-15 14:14:31.707 |  TASK [helm : Remover diretório do plugin helm-diff manualmente] ****************
2026-10-15 14:14:32.108 |  ok: [localhost]
2026-10-15 14:14:32.108 |  
2026-10-15 14:14:32.108 |  TASK [helm : Check Secrets] ****************************************************
2026-10-15 14:14:32.609 |  ok: [localhost]
2026-10-15 14:14:32.609 |  
2026-10-15 14:14:32.609 |  TASK [helm : Create Python Script] *********************************************
2026-10-15 14:14:32.609 |  skipping: [localhost]
2026-10-15 14:14:32.609 |  
2026-10-15 14:14:32.609 |  TASK [helm : Apply secrets] ****************************************************
2026-10-15 14:14:32.709 |  skipping: [localhost]
2026-10-15 14:14:32.709 |  
2026-10-15 14:14:32.709 |  TASK [helm : Get Service Account] **********************************************
2026-10-15 14:14:33.010 |  changed: [localhost]
2026-10-15 14:14:33.010 |  
2026-10-15 14:14:33.010 |  TASK [helm : Get cluster ingress default class] ********************************
2026-10-15 14:14:34.311 |  ok: [localhost]
2026-10-15 14:14:34.311 |  
2026-10-15 14:14:34.311 |  TASK [helm : Validate cluster ingress default class] ***************************
2026-10-15 14:14:34.412 |  ok: [localhost] =>
2026-10-15 14:14:34.412 |      changed: false
2026-10-15 14:14:34.412 |      msg: 'ingressClass resolvido: ''alb'''
2026-10-15 14:14:34.412 |  
2026-10-15 14:14:34.412 |  TASK [helm : Pull Helm Repo] ***************************************************
2026-10-15 14:14:38.117 |  changed: [localhost]
2026-10-15 14:14:38.117 |  
2026-10-15 14:14:38.117 |  TASK [helm : Change Chart Name] ************************************************
2026-10-15 14:14:38.518 |  changed: [localhost]
2026-10-15 14:14:38.518 |  
2026-10-15 14:14:38.518 |  TASK [helm : Change Chart Version] *********************************************
2026-10-15 14:14:38.818 |  changed: [localhost]
2026-10-15 14:14:38.818 |  
2026-10-15 14:14:38.818 |  TASK [helm : Create Values] ****************************************************
2026-10-15 14:14:39.620 |  changed: [localhost]
2026-10-15 14:14:39.620 |  
2026-10-15 14:14:39.620 |  TASK [helm : Deploy App] *******************************************************
2026-10-15 14:14:59.651 |  [WARNING]: The default idempotency check can fail to report changes in certain cases. Install helm diff >= 3.4.1 for better results.
2026-10-15 14:14:59.651 |  [ERROR]: Task failed: Module failed: Failure when executing Helm command. Exited 1.
2026-10-15 14:14:59.651 |  stdout:
2026-10-15 14:14:59.651 |  stderr: E1015 17:14:43.637664 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.651 |  E1015 17:14:43.655210 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.651 |  E1015 17:14:43.732377 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.651 |  E1015 17:14:43.754040 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.256937 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.289605 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.358861 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.376600 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.466837 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.486946 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.555198 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.572992 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.674205 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.683035 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.746728 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.764483 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.840025 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.853509 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.929139 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:44.948787 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.010059 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.039057 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.115275 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.133107 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.201093 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.215491 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.293219 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.311474 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.652 |  E1015 17:14:45.411136 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.417345 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.501045 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.518770 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.575371 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.591333 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.664914 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.682641 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.753221 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.757288 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.834979 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.853016 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.929138 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:45.937992 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.010407 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.028288 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.086688 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.107981 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.173221 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.190927 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.252195 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.271764 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.340696 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.358476 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.421278 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.435015 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.514212 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.653 |  E1015 17:14:46.534337 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.592707 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.618197 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.684412 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.702617 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.950390 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:46.957595 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.182331 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.231321 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.338887 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.476363 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.582172 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.604392 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.797443 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.654 |  E1015 17:14:47.800742 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:47.868598 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:47.888768 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.021977 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.028962 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.131593 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.159698 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.283379 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.283431 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.395283 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.413413 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.534538 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.544588 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.607921 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.626905 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.757213 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.655 |  E1015 17:14:48.757910 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |  E1015 17:14:48.831035 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |  E1015 17:14:48.848926 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |  Error: UPGRADE FAILED: cannot patch "sboot-auto-apol-geracao-documento-bff" with kind Ingress: Internal error occurred: failed calling webhook "vingress.elbv2.k8s.aws": failed to call webhook: Post "https://aws-load-balancer-webhook-service.addons.svc:443/validate-networking-v1-ingress?timeout=10s": context deadline exceeded
2026-10-15 14:14:59.656 |  
2026-10-15 14:14:59.656 |  Origin: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/helm/tasks/deploy.yaml:160:7
2026-10-15 14:14:59.656 |  
2026-10-15 14:14:59.656 |  158         mode: u=rw
2026-10-15 14:14:59.656 |  159
2026-10-15 14:14:59.656 |  160     - name: Deploy App
2026-10-15 14:14:59.656 |            ^ column 7
2026-10-15 14:14:59.656 |  
2026-10-15 14:14:59.656 |  fatal: [localhost]: FAILED! =>
2026-10-15 14:14:59.656 |      changed: false
2026-10-15 14:14:59.656 |      command: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/helm
2026-10-15 14:14:59.656 |          upgrade -i --reset-values --wait --timeout 17m --values=/home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/config/values_dev.yaml
2026-10-15 14:14:59.656 |          --values=/home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/values.yaml
2026-10-15 14:14:59.656 |          -f=/tmp/tmpoggeefux.yml sboot-auto-apol-geracao-documento-bff '/home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/helm_chart_template'
2026-10-15 14:14:59.656 |      msg: |-
2026-10-15 14:14:59.656 |          Failure when executing Helm command. Exited 1.
2026-10-15 14:14:59.656 |          stdout:
2026-10-15 14:14:59.656 |          stderr: E1015 17:14:43.637664 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:43.655210 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:43.732377 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:43.754040 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.256937 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.289605 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.358861 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.376600 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.466837 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.486946 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.555198 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.572992 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.674205 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.656 |          E1015 17:14:44.683035 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.746728 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.764483 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.840025 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.853509 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.929139 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:44.948787 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.010059 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.039057 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.115275 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.133107 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.201093 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.215491 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.293219 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.311474 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.411136 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.417345 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.501045 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.518770 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.575371 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.591333 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.664914 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.682641 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.753221 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.757288 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.657 |          E1015 17:14:45.834979 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:45.853016 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:45.929138 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:45.937992 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.010407 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.028288 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.086688 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.107981 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.173221 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.190927 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.252195 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.271764 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.340696 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.358476 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.421278 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.435015 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.514212 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.534337 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.592707 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.618197 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.684412 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.702617 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.950390 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:46.957595 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.658 |          E1015 17:14:47.182331 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.231321 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.338887 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.476363 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.582172 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.604392 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.797443 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.800742 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.868598 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:47.888768 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.021977 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.028962 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.131593 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.159698 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.283379 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.283431 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.659 |          E1015 17:14:48.395283 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.413413 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.534538 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.544588 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.607921 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.626905 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.757213 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.757910 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.831035 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:48.848926 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          Error: UPGRADE FAILED: cannot patch "sboot-auto-apol-geracao-documento-bff" with kind Ingress: Internal error occurred: failed calling webhook "vingress.elbv2.k8s.aws": failed to call webhook: Post "https://aws-load-balancer-webhook-service.addons.svc:443/validate-networking-v1-ingress?timeout=10s": context deadline exceeded
2026-10-15 14:14:59.660 |      stderr: |-
2026-10-15 14:14:59.660 |          E1015 17:14:43.637664 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:43.655210 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.660 |          E1015 17:14:43.732377 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:43.754040 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.256937 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.289605 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.358861 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.376600 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.466837 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.486946 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.555198 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.572992 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.674205 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.683035 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.746728 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.764483 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.840025 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.853509 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.929139 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:44.948787 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.010059 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.039057 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.115275 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.133107 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.201093 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.215491 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.293219 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.311474 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.661 |          E1015 17:14:45.411136 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.417345 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.501045 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.518770 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.575371 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.591333 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.664914 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.682641 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.753221 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.757288 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.834979 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.853016 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.929138 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:45.937992 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.010407 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.028288 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.086688 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.107981 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.173221 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.190927 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.252195 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.271764 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.340696 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.358476 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.421278 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.662 |          E1015 17:14:46.435015 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.514212 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.534337 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.592707 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.618197 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.684412 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.702617 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.950390 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:46.957595 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.182331 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.231321 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.338887 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.476363 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.582172 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.604392 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.797443 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.800742 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.868598 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:47.888768 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:48.021977 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.663 |          E1015 17:14:48.028962 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.131593 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.159698 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.283379 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.283431 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.395283 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.413413 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.664 |          E1015 17:14:48.534538 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.544588 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.607921 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.626905 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.757213 1125923 memcache.go:287] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.757910 1125923 memcache.go:287] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.831035 1125923 memcache.go:121] couldn't get resource list for metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          E1015 17:14:48.848926 1125923 memcache.go:121] couldn't get resource list for external.metrics.k8s.io/v1beta1: the server is currently unable to handle the request
2026-10-15 14:14:59.665 |          Error: UPGRADE FAILED: cannot patch "sboot-auto-apol-geracao-documento-bff" with kind Ingress: Internal error occurred: failed calling webhook "vingress.elbv2.k8s.aws": failed to call webhook: Post "https://aws-load-balancer-webhook-service.addons.svc:443/validate-networking-v1-ingress?timeout=10s": context deadline exceeded
2026-10-15 14:14:59.665 |      stderr_lines: <omitted>
2026-10-15 14:14:59.665 |      stdout: ''
2026-10-15 14:14:59.665 |      stdout_lines: <omitted>
2026-10-15 14:14:59.665 |  
2026-10-15 14:14:59.665 |  TASK [helm : Update KubeConfig] ************************************************
2026-10-15 14:15:00.967 |  changed: [localhost]
2026-10-15 14:15:00.967 |  
2026-10-15 14:15:00.967 |  TASK [helm : Get Container Logs] ***********************************************
2026-10-15 14:15:03.672 |  [ERROR]: Task failed: Module failed: The command exited with a non-zero return code.
2026-10-15 14:15:03.672 |  Origin: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/helm/tasks/deploy.yaml:188:7
2026-10-15 14:15:03.672 |  
2026-10-15 14:15:03.672 |  186         aws eks update-kubeconfig --name {{ aws_cluster_name }} --region {{ aws_region }}
2026-10-15 14:15:03.672 |  187
2026-10-15 14:15:03.672 |  188     - name: Get Container Logs
2026-10-15 14:15:03.672 |            ^ column 7
2026-10-15 14:15:03.672 |  
2026-10-15 14:15:03.672 |  fatal: [localhost]: FAILED! =>
2026-10-15 14:15:03.672 |      changed: true
2026-10-15 14:15:03.672 |      cmd: |-
2026-10-15 14:15:03.672 |          kubectl logs -n auto-apol -l app.kubernetes.io/version=1.0.122052,app.kubernetes.io/name=sboot-auto-apol-geracao-documento-bff
2026-10-15 14:15:03.672 |          kubectl logs --previous -n auto-apol -l app.kubernetes.io/version=1.0.122052,app.kubernetes.io/name=sboot-auto-apol-geracao-documento-bff
2026-10-15 14:15:03.672 |      delta: '0:00:02.435732'
2026-10-15 14:15:03.672 |      end: '2026-10-15 17:15:03.583195'
2026-10-15 14:15:03.672 |      msg: The command exited with a non-zero return code.
2026-10-15 14:15:03.672 |      rc: 1
2026-10-15 14:15:03.672 |      start: '2026-10-15 17:15:01.147463'
2026-10-15 14:15:03.672 |      stderr: |-
2026-10-15 14:15:03.672 |          Error from server (BadRequest): container "sboot-auto-apol-geracao-documento-bff" in pod "sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr" is waiting to start: ContainerCreating
2026-10-15 14:15:03.672 |          Error from server (BadRequest): previous terminated container "sboot-auto-apol-geracao-documento-bff" in pod "sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr" not found
2026-10-15 14:15:03.672 |      stderr_lines: <omitted>
2026-10-15 14:15:03.672 |      stdout: ''
2026-10-15 14:15:03.672 |      stdout_lines: <omitted>
2026-10-15 14:15:03.672 |  ...ignoring
2026-10-15 14:15:03.672 |  
2026-10-15 14:15:03.672 |  TASK [helm : Get Events logs] **************************************************
2026-10-15 14:15:05.074 |  changed: [localhost]
2026-10-15 14:15:05.074 |  
2026-10-15 14:15:05.074 |  TASK [helm : Get Pods] *********************************************************
2026-10-15 14:15:06.376 |  changed: [localhost]
2026-10-15 14:15:06.376 |  
2026-10-15 14:15:06.376 |  TASK [helm : Print Container Logs] *********************************************
2026-10-15 14:15:06.477 |  ok: [localhost] =>
2026-10-15 14:15:06.477 |      msg: ''
2026-10-15 14:15:06.477 |  
2026-10-15 14:15:06.477 |  TASK [helm : Print Events Logs] ************************************************
2026-10-15 14:15:06.477 |  ok: [localhost] =>
2026-10-15 14:15:06.477 |      msg: |-
2026-10-15 14:15:06.477 |          5s          Normal    Scheduled                      pod/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr        Successfully assigned auto-apol/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr to ip-10-34-242-111.ca-central-1.compute.internal
2026-10-15 14:15:06.477 |          17m         Normal    SuccessfullyReconciled         ingress/sboot-auto-apol-geracao-documento-bff                     Successfully reconciled
2026-10-15 14:15:06.477 |          111s        Warning   FailedGetResourceMetric        horizontalpodautoscaler/sboot-auto-apol-geracao-documento-bff     failed to get memory utilization: unable to get metrics for resource memory: unable to fetch metrics from resource metrics API: the server is currently unable to handle the request (get pods.metrics.k8s.io)
2026-10-15 14:15:06.477 |          111s        Warning   FailedComputeMetricsReplicas   horizontalpodautoscaler/sboot-auto-apol-geracao-documento-bff     invalid metrics (1 invalid out of 1), first error is: failed to get memory resource metric value: failed to get memory utilization: unable to get metrics for resource memory: unable to fetch metrics from resource metrics API: the server is currently unable to handle the request (get pods.metrics.k8s.io)
2026-10-15 14:15:06.477 |          15s         Normal    ScalingReplicaSet              deployment/sboot-auto-apol-geracao-documento-bff                  Scaled up replica set sboot-auto-apol-geracao-documento-bff-56b94675c8 from 0 to 1
2026-10-15 14:15:06.477 |          5s          Normal    Pulling                        pod/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr        Pulling image "722846928525.dkr.ecr.ca-central-1.amazonaws.com/auto/apol/sboot-auto-apol-geracao-documento-bff:1.0-snapshot-gf-developer-hsmanual-36610"
2026-10-15 14:15:06.477 |          5s          Normal    SuccessfulCreate               replicaset/sboot-auto-apol-geracao-documento-bff-56b94675c8       Created pod: sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr
2026-10-15 14:15:06.477 |          3s          Normal    Created                        pod/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr        Container created
2026-10-15 14:15:06.477 |          3s          Normal    Pulled                         pod/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr        Successfully pulled image "722846928525.dkr.ecr.ca-central-1.amazonaws.com/auto/apol/sboot-auto-apol-geracao-documento-bff:1.0-snapshot-gf-developer-hsmanual-36610" in 2.041s (2.041s including waiting). Image size: 316730919 bytes.
2026-10-15 14:15:06.478 |          2s          Normal    Started                        pod/sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr        Container started
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.478 |  TASK [helm : Print Pods] *******************************************************
2026-10-15 14:15:06.478 |  ok: [localhost] =>
2026-10-15 14:15:06.478 |      msg: |-
2026-10-15 14:15:06.478 |          NAME                                                     READY   STATUS    RESTARTS   AGE
2026-10-15 14:15:06.478 |          sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr   0/1     Running   0          7s
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.478 |  TASK [helm : Falha no deploy] **************************************************
2026-10-15 14:15:06.478 |  [ERROR]: Task failed: Action failed: Verifique as logs acima ou no Grafana Corporativo
2026-10-15 14:15:06.478 |  Origin: /home/ec2-user/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/eks-helm/roles/helm/tasks/deploy.yaml:222:7
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.478 |  220       ignore_errors: true
2026-10-15 14:15:06.478 |  221
2026-10-15 14:15:06.478 |  222     - name: Falha no deploy
2026-10-15 14:15:06.478 |            ^ column 7
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.478 |  fatal: [localhost]: FAILED! =>
2026-10-15 14:15:06.478 |      changed: false
2026-10-15 14:15:06.478 |      msg: Verifique as logs acima ou no Grafana Corporativo
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.478 |  PLAY RECAP *********************************************************************
2026-10-15 14:15:06.478 |  localhost                  : ok=53   changed=16   unreachable=0    failed=1    skipped=10   rescued=1    ignored=1   
2026-10-15 14:15:06.478 |  
2026-10-15 14:15:06.901 |  [Pipeline] tool
2026-10-15 14:15:07.108 |  [kubectl-1.17.0] $ sh -e /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/hudson17556645872943318255.sh
2026-10-15 14:15:07.111 |  kubectl-1.17.0 ja estava instalado
2026-10-15 14:15:07.769 |  [Pipeline] fileExists
2026-10-15 14:15:07.954 |  [Pipeline] sh
2026-10-15 14:15:08.841 |  + timeout 10 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl cluster-info --request-timeout=10s >/dev/null 2>&1'
2026-10-15 14:15:09.726 |  [Pipeline] sh
2026-10-15 14:15:10.647 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl get namespace auto-apol >/dev/null 2>&1'
2026-10-15 14:15:11.567 |  [Pipeline] sh
2026-10-15 14:15:12.476 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl get pods -n auto-apol --no-headers | grep "sboot-auto-apol-geracao-documento-bff" || true'
2026-10-15 14:15:13.501 |  [Pipeline] sh
2026-10-15 14:15:14.276 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl get pod sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr -n auto-apol -o jsonpath="{.spec.containers[*].image}" 2>/dev/null || echo "IMAGE_ERROR"'
2026-10-15 14:15:15.257 |  [Pipeline] sh
2026-10-15 14:15:16.034 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl get pod sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr -n auto-apol -o jsonpath="{.spec.containers[*].name}" 2>/dev/null || echo "CONTAINER_ERROR"'
2026-10-15 14:15:16.969 |  [Pipeline] sh
2026-10-15 14:15:17.790 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl logs sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr -c sboot-auto-apol-geracao-documento-bff -n auto-apol --tail=300 2>/dev/null || echo "CONTAINER_LOG_ERROR"'
2026-10-15 14:15:18.663 |  [Pipeline] sh
2026-10-15 14:15:19.418 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl logs sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr -c sboot-auto-apol-geracao-documento-bff -n auto-apol --previous --tail=5 2>/dev/null || echo "NO_PREVIOUS_LOGS"'
2026-10-15 14:15:20.311 |  [Pipeline] sh
2026-10-15 14:15:21.093 |  + timeout 30 sh -c 'KUBECONFIG=/jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig /home/ec2-user/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/kubectl-1.17.0/kubectl-1.17.0/kubectl get pod sboot-auto-apol-geracao-documento-bff-ff48ffcbb-bvc2m -n auto-apol -o jsonpath="{.spec.containers[*].image}" 2>/dev/null || echo "IMAGE_ERROR"'
2026-10-15 14:15:21.976 |  [Pipeline] error
2026-10-15 14:15:22.081 |  [Pipeline] echo
2026-10-15 14:15:22.088 |  ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
2026-10-15 14:15:22.089 |  🔍 VERIFICAÇÃO DE PODS KUBERNETES
2026-10-15 14:15:22.089 |  📅 Data/Hora: Thu Oct 15 14:15:07 BRT 2026
2026-10-15 14:15:22.089 |  🏠 Namespace: auto-apol
2026-10-15 14:15:22.089 |  🔑 Palavra-chave: sboot-auto-apol-geracao-documento-bff
2026-10-15 14:15:22.089 |  ⚙️ Kubectl Tool: kubectl-1.17.0
2026-10-15 14:15:22.089 |  📄 Kubeconfig: /jenkins/workspace/continuous_delivery/Java_Container_AWS_CD_backstage/122052.kubeconfig
2026-10-15 14:15:22.089 |  ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
2026-10-15 14:15:22.089 |  ✅ Validações iniciais concluídas com sucesso
2026-10-15 14:15:22.089 |  🔄 Tentativa 1/3 - Buscando pods...
2026-10-15 14:15:22.089 |  📋 Pods encontrados com 'sboot-auto-apol-geracao-documento-bff':
2026-10-15 14:15:22.089 |  ************************************************************************************************************************
2026-10-15 14:15:22.089 |  STATUS DOS PODS NO AMBIENTE
2026-10-15 14:15:22.089 |  🟡 NÃO PRONTO - sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr | Ready: 0/1 | 📦 sboot-auto-apol-geracao-documento-bff:1.0-snapshot-gf-developer-hsmanual-36610
2026-10-15 14:15:22.089 |  ✅ SAUDÁVEL   - sboot-auto-apol-geracao-documento-bff-ff48ffcbb-bvc2m | Ready: 1/1 | 📦 sboot-auto-apol-geracao-documento-bff:1.0-snapshot-gf-developer-hsmanual-31788
2026-10-15 14:15:22.089 |  ************************************************************************************************************************
2026-10-15 14:15:22.089 |  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
2026-10-15 14:15:22.089 |  LOGS DE PODS COM STATUS: NÃO PRONTO
2026-10-15 14:15:22.089 |  POD: sboot-auto-apol-geracao-documento-bff-56b94675c8-s9gcr
2026-10-15 14:15:22.089 |  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
2026-10-15 14:15:22.089 |  === LOGS DO CONTAINER: sboot-auto-apol-geracao-documento-bff ===
2026-10-15 14:15:22.089 |  [32m
2026-10-15 14:15:22.089 |  -------------------------------------------------------------------------------
2026-10-15 14:15:22.089 |  Arquitetura de Tecnologia - 23/09/2024
2026-10-15 14:15:22.089 |  ---------------------------------------------------------------------------------------
2026-10-15 14:15:22.089 |  PID:
2026-10-15 14:15:22.089 |  --------------PARAMETROS DE INICIALIZACAO-------------------------------
2026-10-15 14:15:22.089 |  openjdk version "21.0.12.1" 2026-08-18 LTS
2026-10-15 14:15:22.089 |  OpenJDK Runtime Environment Corretto-21.0.12.9.1 (build 21.0.12.1+9-LTS)
2026-10-15 14:15:22.089 |  OpenJDK 64-Bit Server VM Corretto-21.0.12.9.1 (build 21.0.12.1+9-LTS, mixed mode, sharing)
2026-10-15 14:15:22.089 |  Could not find any processes matching : 'VM.flags'
2026-10-15 14:15:22.089 |  
2026-10-15 14:15:22.089 |  Inicializando a aplicacao
2026-10-15 14:15:22.089 |  ------------------------------------------------------------------------------
2026-10-15 14:15:22.089 |  OpenJDK 64-Bit Server VM warning: Sharing is only supported for boot loader classes because bootstrap classpath has been appended
2026-10-15 14:15:22.089 |  [otel.javaagent 2026-10-15 17:15:02:647 +0000] [main] INFO io.opentelemetry.javaagent.tooling.VersionLogger - opentelemetry-javaagent - version: 2.29.0
2026-10-15 14:15:22.089 |  17:15:06.481 [main] INFO com.porto.apol.geracao.documento.bff.App -- Iniciando Aplicação.
2026-10-15 14:15:22.089 |  17:15:06.514 [main] INFO com.porto.apol.geracao.documento.bff.App -- Charset atual do sistema: UTF-8.
2026-10-15 14:15:22.089 |  17:15:06.517 [main] INFO com.porto.apol.geracao.documento.bff.App -- Configurando padrões de data e locale.
2026-10-15 14:15:22.089 |  17:15:06.532 [main] INFO com.porto.apol.geracao.documento.bff.App -- Locale atual do sistema: português (Brasil).
2026-10-15 14:15:22.090 |  17:15:06.545 [main] INFO com.porto.apol.geracao.documento.bff.App -- TimeZone atual do sistema: Horário Padrão de Brasília.
2026-10-15 14:15:22.090 |  
2026-10-15 14:15:22.090 |  14:15:08.323 [INFO ] c.p.apol.geracao.documento.bff.App - Starting App v1.0-SNAPSHOT using Java 21.0.12.1 with PID 33 (/deployments/application.jar started by ? in /deployments)  
2026-10-15 14:15:22.090 |  14:15:08.332 [INFO ] c.p.apol.geracao.documento.bff.App - No active profile set, falling back to 1 default profile: "default"  
2026-10-15 14:15:22.090 |  14:15:08.730 [INFO ] o.h.validator.internal.util.Version - HV000001: Hibernate Validator 9.1.3.Final  
2026-10-15 14:15:22.090 |  14:15:11.112 [INFO ] o.s.cloud.context.scope.GenericScope - BeanFactory id=a2275d5c-ab8c-3f04-bda2-cc51fbf89ddb  
2026-10-15 14:15:22.090 |  14:15:11.970 [INFO ] o.s.boot.tomcat.TomcatWebServer - Tomcat initialized with port 8080 (http)  
2026-10-15 14:15:22.090 |  14:15:12.018 [INFO ] o.a.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-8080"]  
2026-10-15 14:15:22.090 |  14:15:12.033 [INFO ] o.a.catalina.core.StandardService - Starting service [Tomcat]  
2026-10-15 14:15:22.090 |  14:15:12.034 [INFO ] o.a.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/11.0.25]  
2026-10-15 14:15:22.090 |  14:15:12.094 [INFO ] o.s.b.w.c.s.WebApplicationContextInitializer - Root WebApplicationContext: initialization completed in 3633 ms  
2026-10-15 14:15:22.090 |  14:15:14.171 [INFO ] c.p.a.g.d.b.c.w.e.ApiExceptionHandler - ApiExceptionHandler inicializado.  
2026-10-15 14:15:22.090 |  14:15:14.867 [INFO ] c.p.arqt.util.filter.SecurityConfig - Configurando CORS para a aplicação  
2026-10-15 14:15:22.090 |  14:15:14.871 [WARN ] c.p.arqt.util.filter.SecurityConfig - CORS: Nenhuma origem especifica configurada. Permitindo todas as origens (*)  
2026-10-15 14:15:22.090 |  14:15:14.872 [INFO ] c.p.arqt.util.filter.SecurityConfig - Configuracao CORS concluida com sucesso  
2026-10-15 14:15:22.090 |  14:15:14.873 [INFO ] c.p.arqt.util.filter.SecurityConfig - Foram liberadas 11 rotas  
2026-10-15 14:15:22.090 |  14:15:14.906 [INFO ] c.p.arqt.util.filter.SecurityConfig - Claim de autorizacao roles  
2026-10-15 14:15:22.090 |  14:15:17.945 [INFO ] o.s.b.a.e.web.EndpointLinksResolver - Exposing 3 endpoints beneath base path '/actuator'  
2026-10-15 14:15:22.090 |  14:15:18.055 [INFO ] o.a.coyote.http11.Http11NioProtocol - Starting ProtocolHandler ["http-nio-8080"]  
2026-10-15 14:15:22.090 |  14:15:18.111 [INFO ] o.s.boot.tomcat.TomcatWebServer - Tomcat started on port 8080 (http) with context path '/sboot-auto-apol-geracao-documento-bff'  
2026-10-15 14:15:22.090 |  14:15:18.128 [INFO ] c.p.apol.geracao.documento.bff.App - Started App in 11.042 seconds (process running for 15.814)
2026-10-15 14:15:22.090 |  === FIM LOGS CONTAINER: sboot-auto-apol-geracao-documento-bff ===
2026-10-15 14:15:22.090 |  
2026-10-15 14:15:22.090 |  ❌ Erro inesperado: ❌ Pipeline falhou devido a problemas na aplicação.
2026-10-15 14:15:22.090 |  |1 - Verifique os logs da sua aplicação no grafana (https://grafana.portoseguro.brasil/)
2026-10-15 14:15:22.090 |  |1.1 - Se você não tem acesso ao grafana, consulte: https://portoseguro.atlassian.net/wiki/spaces/SDIEO/pages/1639710724/Grafana+-+Como+solicitar+acesso
2026-10-15 14:15:22.090 |  |2 - Verifique se suas variaveis de ambiente ou secrets estão preechidas de acordo com os ambientes
2026-10-15 14:15:22.090 |  |3 - Verifique os logs acima, para facilitar o diagnostico do problema.
2026-10-15 14:15:22.090 |              
2026-10-15 14:15:22.090 |  ⏱️ Tempo de execução: 15255ms
2026-10-15 14:15:22.098 |  [Pipeline] }
2026-10-15 14:15:22.186 |  [Pipeline] // withCredentials
2026-10-15 14:15:22.219 |  [Pipeline] }
2026-10-15 14:15:22.374 |  [Pipeline] // withCredentials
2026-10-15 14:15:22.426 |  [Pipeline] }
2026-10-15 14:15:22.499 |  [Pipeline] // withCredentials
2026-10-15 14:15:22.545 |  [Pipeline] }
2026-10-15 14:15:22.652 |  [Pipeline] // withCredentials
2026-10-15 14:15:22.737 |  [Pipeline] }
2026-10-15 14:15:22.862 |  [Pipeline] // script
2026-10-15 14:15:22.934 |  Post stage
2026-10-15 14:15:22.982 |  [Pipeline] script
2026-10-15 14:15:23.005 |  [Pipeline] {
2026-10-15 14:15:23.155 |  [Pipeline] echo
2026-10-15 14:15:23.165 |  Enviado mensagem via google chat...
2026-10-15 14:15:23.218 |  [Pipeline] echo
2026-10-15 14:15:23.250 |  URL de Envio: https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8&threadKey=sboot-auto-apol-geracao-documento-bff:build-122052CD
2026-10-15 14:15:23.263 |  [Pipeline] echo
2026-10-15 14:15:23.282 |  Enviando Request...
2026-10-15 14:15:23.423 |  [Pipeline] httpRequest
2026-10-15 14:15:24.317 |  [Pipeline] echo
2026-10-15 14:15:24.337 |  Enviando mensagem para o backstage - componente: sboot-auto-apol-geracao-documento-bff - step: null - status: null - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:15:24.362 |  [Pipeline] }
2026-10-15 14:15:24.470 |  [Pipeline] // script
2026-10-15 14:15:24.500 |  [Pipeline] }
2026-10-15 14:15:24.611 |  [Pipeline] // stage
2026-10-15 14:15:24.681 |  [Pipeline] stage
2026-10-15 14:15:24.701 |  [Pipeline] { (DAST)
2026-10-15 14:15:24.753 |  Stage "DAST" skipped due to earlier failure(s)
2026-10-15 14:15:24.765 |  [Pipeline] }
2026-10-15 14:15:24.874 |  [Pipeline] // stage
2026-10-15 14:15:25.029 |  [Pipeline] stage
2026-10-15 14:15:25.042 |  [Pipeline] { (Ação Manual - Realizar Rollback?)
2026-10-15 14:15:25.137 |  Stage "Ação Manual - Realizar Rollback?" skipped due to earlier failure(s)
2026-10-15 14:15:25.164 |  [Pipeline] }
2026-10-15 14:15:25.272 |  [Pipeline] // stage
2026-10-15 14:15:25.396 |  [Pipeline] stage
2026-10-15 14:15:25.419 |  [Pipeline] { (Rollback)
2026-10-15 14:15:25.508 |  Stage "Rollback" skipped due to earlier failure(s)
2026-10-15 14:15:25.542 |  [Pipeline] }
2026-10-15 14:15:25.686 |  [Pipeline] // stage
2026-10-15 14:15:25.788 |  [Pipeline] stage
2026-10-15 14:15:25.807 |  [Pipeline] { (Promoção de Artefato)
2026-10-15 14:15:25.897 |  Stage "Promoção de Artefato" skipped due to earlier failure(s)
2026-10-15 14:15:25.948 |  [Pipeline] }
2026-10-15 14:15:26.113 |  [Pipeline] // stage
2026-10-15 14:15:26.216 |  [Pipeline] stage
2026-10-15 14:15:26.230 |  [Pipeline] { (Declarative: Post Actions)
2026-10-15 14:15:26.342 |  [Pipeline] script
2026-10-15 14:15:26.367 |  [Pipeline] {
2026-10-15 14:15:26.537 |  [Pipeline] timeout
2026-10-15 14:15:26.538 |  Timeout set to expire in 1 min 0 sec
2026-10-15 14:15:26.551 |  [Pipeline] {
2026-10-15 14:15:26.701 |  [Pipeline] cleanWs
2026-10-15 14:15:26.965 |  [WS-CLEANUP] Deleting project workspace...
2026-10-15 14:15:26.965 |  [WS-CLEANUP] Deferred wipeout is used...
2026-10-15 14:15:27.221 |  [WS-CLEANUP] done
2026-10-15 14:15:27.230 |  [Pipeline] }
2026-10-15 14:15:27.408 |  [Pipeline] // timeout
2026-10-15 14:15:27.452 |  [Pipeline] }
2026-10-15 14:15:27.563 |  [Pipeline] // script
2026-10-15 14:15:27.642 |  [Pipeline] script
2026-10-15 14:15:27.651 |  [Pipeline] {
2026-10-15 14:15:27.743 |  [Pipeline] echo
2026-10-15 14:15:27.759 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:15:27.759 |  | Stage Declarative: Post Actions
2026-10-15 14:15:27.759 |  +-----------------------------------------------------------------------------------------------------+
2026-10-15 14:15:27.849 |  [Pipeline] echo
2026-10-15 14:15:27.856 |  Enviado mensagem via google chat...
2026-10-15 14:15:27.927 |  [Pipeline] echo
2026-10-15 14:15:27.942 |  URL de Envio: https://chat.googleapis.com/v1/spaces/AAAA09H8ZIA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9aiBnK-4o54QGANEIwQ3Lmf0lw37PnkKY2lrFAqw1J8&threadKey=sboot-auto-apol-geracao-documento-bff:build-122052CD
2026-10-15 14:15:27.971 |  [Pipeline] echo
2026-10-15 14:15:27.990 |  Enviando Request...
2026-10-15 14:15:28.047 |  [Pipeline] httpRequest
2026-10-15 14:15:28.871 |  [Pipeline] echo
2026-10-15 14:15:28.884 |  Enviando mensagem para o backstage - componente: sboot-auto-apol-geracao-documento-bff - step: FIM - status: F - job: https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:15:28.969 |  [Pipeline] withCredentials
2026-10-15 14:15:28.989 |  Masking supported pattern matches of $AWS_ACCESS_KEY_ID or $AWS_SECRET_ACCESS_KEY
2026-10-15 14:15:29.043 |  [Pipeline] {
2026-10-15 14:15:29.109 |  [Pipeline] echo
2026-10-15 14:15:29.132 |  Mensagem a ser enviada para o backstage: key:STEPCD;componente:sboot-auto-apol-geracao-documento-bff;step:FIM;status:F;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/
2026-10-15 14:15:29.191 |  [Pipeline] sh
2026-10-15 14:15:30.203 |  + aws --region ca-central-1 sqs send-message --queue-url https://sqs.ca-central-1.amazonaws.com/960921613977/fila_backstage --message-body 'key:STEPCD;componente:sboot-auto-apol-geracao-documento-bff;step:FIM;status:F;job:https://jenkinsportoprd.portoseguro.brasil/job/continuous_delivery/job/Java_Container_AWS_CD_backstage/122052/'
2026-10-15 14:15:30.704 |  {
2026-10-15 14:15:30.704 |      "MD5OfMessageBody": "7be51f057135e2e8f8695427c9a9406b",
2026-10-15 14:15:30.704 |      "MessageId": "e3ff795d-39dc-40b8-87e9-22c0daca0261"
2026-10-15 14:15:30.704 |  }
2026-10-15 14:15:30.978 |  [Pipeline] }
2026-10-15 14:15:31.082 |  [Pipeline] // withCredentials
2026-10-15 14:15:31.109 |  [Pipeline] }
2026-10-15 14:15:31.196 |  [Pipeline] // script
2026-10-15 14:15:31.237 |  [Pipeline] }
2026-10-15 14:15:31.304 |  [Pipeline] // stage
2026-10-15 14:15:31.354 |  [Pipeline] }
2026-10-15 14:15:31.461 |  [Pipeline] // withEnv
2026-10-15 14:15:31.544 |  [Pipeline] }
2026-10-15 14:15:31.728 |  [Pipeline] // node
2026-10-15 14:15:31.814 |  [Pipeline] End of Pipeline
2026-10-15 14:15:31.868 |  ERROR: ❌ Pipeline falhou devido a problemas na aplicação.
2026-10-15 14:15:31.868 |  |1 - Verifique os logs da sua aplicação no grafana (https://grafana.portoseguro.brasil/)
2026-10-15 14:15:31.868 |  |1.1 - Se você não tem acesso ao grafana, consulte: https://portoseguro.atlassian.net/wiki/spaces/SDIEO/pages/1639710724/Grafana+-+Como+solicitar+acesso
2026-10-15 14:15:31.868 |  |2 - Verifique se suas variaveis de ambiente ou secrets estão preechidas de acordo com os ambientes
2026-10-15 14:15:31.868 |  |3 - Verifique os logs acima, para facilitar o diagnostico do problema.
2026-10-15 14:15:31.868 |              
2026-10-15 14:15:31.905 |  Finished: FAILURE