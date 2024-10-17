# Notlar

### Component Nedir?
- **Componentler**, React'ta kullanıcı arayüzünün parçalarını oluşturan, genellikle bir fonksiyon ya da sınıf olarak yazılan yapı taşlarıdır.
- **Props** kullanarak, componentlere dışarıdan veri gönderebilir ve bu verilerle dinamik içerik oluşturabiliriz.

### Functional Componentler
- **Functional componentler**, yalnızca veri alıp (props) ekrana gösterim yapan fonksiyonlardır. Örnek bir component:
```jsx
function Welcome() {
  return <h1>Hoş Geldiniz!</h1>;
}
```

### Props Nedir?
- **Props**: Parent (ebeveyn) componentten child (çocuk) componentlere veri aktarımı sağlar. Veri statiktir ve yalnızca parent tarafından değiştirilir. 
```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}

// Kullanımı:
<Welcome name="Ali" />
```

### State Nedir?
- **State**: State, componentin içindeki dinamik veri yapısıdır. Componentin durumunu tutar ve bu durum değiştiğinde component yeniden render edilir.
- **State Kullanım Örneği**:
Functional componentlerde useState Hook'u ile state oluşturulur:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayac: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}
```

### State Kullanımının Özellikleri
- **Başlatma**: Class componentlerde `constructor` metodu içinde, functional componentlerde ise `useState` Hook'u ile başlatılır.
- **State Güncelleme**: 
  - Class componentlerde: `this.setState()` fonksiyonu kullanılır.
  - Functional componentlerde: `useState` Hook'undan dönen `set` fonksiyonu ile güncellenir (örn. `setCount`).
  - **Asenkron Çalışma**: `setState` fonksiyonu hemen çalışmaz. React, performansı artırmak için bu güncellemeleri daha sonra topluca yapabilir.
  - **State Yönetimi**: State, componentin yerel durumunu yönetmek ve componentin yeniden render edilmesini sağlamak için kullanılır.

### Özetle
- **State**, React uygulamalarında dinamik içerik oluşturmak, kullanıcı etkileşimlerine yanıt vermek ve componentler arasında veri iletmek için önemli bir kavramdır.

## Event Handling (Olay Yönetimi) Nedir?
- **Event handling**: React uygulamalarında event handling (olay yönetimi), kullanıcı etkileşimlerine (örneğin, butona tıklama, klavyeye basma) yanıt vermek için kullanılır. 

### Önemli Noktalar:
1. **Inline Event Handler**: JSX içinde doğrudan fonksiyon kullanılarak yazılır.
2. **Component Metotları**: Daha karmaşık işlemler için event handler'lar component metotları içinde tanımlanabilir.
3. **Synthetic Events**: React, tarayıcılar arası uyumluluk sağlamak için olayları kendi "synthetic event" sistemi ile yönetir.
4. **Fonksiyon Referansları**: `onClick={handleClick}` gibi fonksiyon referansı geçerken, parantezsiz kullanılması önemlidir.

### Örnek:
```jsx
function handleClick() {
  console.log("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### React Hook

**React Hook**'lar, fonksiyonel bileşenlerin içinde durum yönetimi ve yaşam döngüsü gibi özellikleri kullanmanıza olanak tanıyan özelliklerdir. **En yaygın kullanılan Hook**'lar `useState`, `useEffect` ve `useContext`'dir. `useState` ile durum yönetimi, `useEffect` ile yaşam döngüsü olayları (componentin mount, update ve unmount), `useContext` ile ise context API'sini kullanarak veri paylaşımı yapabilirsiniz. Bu Hook'lar, kodunuzu daha temiz ve okunabilir hale getirir ve sınıf bileşenleri kullanmadan bu özellikleri kullanmanızı sağlar.

