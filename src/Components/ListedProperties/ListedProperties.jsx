import ListedPropertiesContainer from "./ListedPropertiesContainer/ListedPropertiesContainer";
import ListedPropertiesHero from "./ListedPropertiesHero/ListedPropertiesHero";

const ListedProperties = () => {
  return (
    <div>
      <section>
        <ListedPropertiesHero />
      </section>
      <section>
        <ListedPropertiesContainer />;
      </section>
    </div>
  );
};

export default ListedProperties;
