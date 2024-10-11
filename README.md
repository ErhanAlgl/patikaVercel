# Notlar

- Componentler, React'ta arayüzün parçalarını oluşturan fonksiyonlardır. JSX kullanarak görsel yapıyı tanımlarlar. Props ise bu componentlere veri göndermek için kullanılır ve dinamik içerikler oluşturmayı sağlar.
- Funcitional Componentler: Tekrar kullanacağımız, benzer özellik taşıyan özellikleri içeren fonksiyonlara denir.
- Props dışarıdan gelir, parent componentten. State ise içeriden gelir ,içeriden gelir veya aşağıdaki bir componentten değiştirilmesi tetiklenebilir.
- State componentin ekrana konulduktan sonra durumunun değişmesi ve bazı durumların kontrol edilmesi.
### State Nedir?
- State, bir componentin iç durumunu (state) tutan ve bu durumun güncellenmesini sağlayan özel bir JavaScript nesnesidir. State componentin dinamik içeriğini yönetmek ve kullanıcı etkileşimlerine yanıt olarak componenti güncellemek için kullanılır.

### State Kullanımının Özellikleri
- Class componentlerde constructor metodu içinde, functional componentlerde ise useState Hook'u ile başlatılır.
- setState Fonksiyonu: State'i güncellemek için class componentlerde this.setState fonksiyonu, functional componentlerde ise Hook'lar aracılığıyla sağlanan ilgili set fonksiyonu (setCount gibi) kullanılır.
- Asenkron Yapı: setState veya set fonksiyonları asenkron olarak çalışır. React, birden fazla setState çağrısını tek bir güncelleme işlemine gruplayabilir.
- State Yönetimi: State, componentin yerel (local) durumunu yönetmek için kullanılır ve componentin yeniden render edilmesini sağlar.
- Özetle: State, React uygulamalarında dinamik içerik oluşturmak, kullanıcı etkileşimlerine yanıt vermek ve componentler arasında veri iletmek için önemli bir kavramdır. 